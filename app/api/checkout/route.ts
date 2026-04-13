import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { CART_PRODUCTS, CartProduct, parseCartParam, sanitizeCartItems } from '@/lib/cart';

function getBaseUrl() {
  return process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
}

export async function POST(request: NextRequest) {
  try {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

    if (!stripeSecretKey) {
      return NextResponse.json({ error: 'Stripe is not configured' }, { status: 500 });
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2026-03-25.dahlia',
    });

    const body = await request.json();
    const { email, name, phone } = body;
    const requestedItems = Array.isArray(body.items)
      ? body.items
      : parseCartParam(body.tier ? String(body.tier) : '');

    const items: CartProduct[] = sanitizeCartItems(requestedItems)
      .map((item: string) => CART_PRODUCTS[item])
      .filter((item: CartProduct | undefined): item is CartProduct => Boolean(item));

    if (!items.length) {
      return NextResponse.json({ error: 'No valid cart items were provided' }, { status: 400 });
    }

    const mode = items.some((item) => item.billingMode === 'subscription') ? 'subscription' : 'payment';

    const customers = email
      ? await stripe.customers.list({ email, limit: 1 })
      : { data: [] };

    let customerId = customers.data[0]?.id;
    if (!customerId) {
      const customer = await stripe.customers.create({
        email,
        name,
        phone,
        metadata: {
          cart_items: items.map((item) => item.key).join(','),
        },
      });
      customerId = customer.id;
    }

    const baseUrl = getBaseUrl();
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode,
      payment_method_types: ['card'],
      line_items: items.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            description: item.checkoutDescription,
          },
          unit_amount: item.price,
          ...(item.billingMode === 'subscription'
            ? {
                recurring: {
                  interval: item.interval || 'month',
                  interval_count: 1,
                },
              }
            : {}),
        },
        quantity: 1,
      })),
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancelled`,
      metadata: {
        cart_items: items.map((item) => item.key).join(','),
        customer_email: email || '',
        customer_name: name || '',
        checkout_mode: mode,
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url, mode });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}
