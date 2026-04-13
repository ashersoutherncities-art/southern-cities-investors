import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(request: NextRequest) {
  try {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

    if (!stripeSecretKey) {
      return NextResponse.json(
        { error: 'Stripe is not configured' },
        { status: 500 }
      );
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2026-03-25.dahlia',
    });
    const body = await request.json();
    const { tier, email, name } = body;

    // Define pricing and product details
    const tiers: { [key: string]: { price: number; name: string; interval: string } } = {
      'tier-1': {
        price: 169900, // $1,699 in cents
        name: 'Hands-Off Capital - Monthly',
        interval: 'month',
      },
      'tier-2': {
        price: 150000, // $1,500 in cents
        name: 'Learning Operator - Monthly',
        interval: 'month',
      },
      'tier-3': {
        price: 300000, // $3,000 in cents
        name: 'Scaling Partner - Monthly',
        interval: 'month',
      },
    };

    const tierData = tiers[tier];
    if (!tierData) {
      return NextResponse.json({ error: 'Invalid tier' }, { status: 400 });
    }

    // Create or get customer
    const customers = await stripe.customers.list({
      email: email,
      limit: 1,
    });

    let customerId = customers.data[0]?.id;
    if (!customerId) {
      const customer = await stripe.customers.create({
        email,
        name,
        metadata: { tier },
      });
      customerId = customer.id;
    }

    // Create subscription session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: tierData.name,
              description: `Southern Cities Investors ${tier.toUpperCase()} subscription`,
            },
            unit_amount: tierData.price,
            recurring: {
              interval: tierData.interval as 'month' | 'year',
              interval_count: 1,
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancelled`,
      metadata: {
        tier,
        email,
        name,
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
