"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import PaymentForm from "@/components/PaymentForm";
import { CART_QUERY_KEY, CART_PRODUCTS, buildCartHref, formatPrice, parseCartParam, sanitizeCartItems } from "@/lib/cart";
import { clearCartCookie, getCartItemsFromCookie, setCartItemsCookie, updateCartItemQuantity } from "@/lib/cart-client";

export default function CartContent() {
  const searchParams = useSearchParams();
  const queryCartItems = useMemo(() => parseCartParam(searchParams.get(CART_QUERY_KEY)), [searchParams]);
  const [cartItems, setCartItems] = useState<string[]>([]);

  useEffect(() => {
    const fromCookie = getCartItemsFromCookie();
    const next = sanitizeCartItems(queryCartItems.length ? queryCartItems : fromCookie);
    setCartItems(next);
    setCartItemsCookie(next);
  }, [queryCartItems]);

  const cartEntries = useMemo(() => {
    const counts = new Map<string, number>();
    for (const item of cartItems) {
      counts.set(item, (counts.get(item) || 0) + 1);
    }

    return Array.from(counts.entries()).map(([key, quantity]) => ({
      product: CART_PRODUCTS[key],
      quantity,
      lineTotal: CART_PRODUCTS[key].price * quantity,
    }));
  }, [cartItems]);

  const recurringProducts = cartEntries.filter(({ product }) => product.billingMode === "subscription");
  const oneTimeProducts = cartEntries.filter(({ product }) => product.billingMode === "payment");
  const dueToday = cartEntries.reduce((sum, entry) => sum + entry.lineTotal, 0);

  const updateQuantity = (itemKey: string, quantity: number) => {
    const next = sanitizeCartItems(updateCartItemQuantity(cartItems, itemKey, quantity));
    setCartItems(next);
    setCartItemsCookie(next);
  };

  if (!cartEntries.length) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">Your cart is empty</h1>
          <p className="text-lg text-navy/60 mb-8">
            Choose a service or starter offer first, then continue to checkout.
          </p>
          <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 bg-orange hover:bg-orange/90 text-white font-semibold rounded-lg transition-colors">
            View services
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Cart and checkout</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-navy leading-tight">Review your selected offers and complete checkout.</h1>
          <p className="mt-4 text-lg text-navy/60">Start with the level of support that fits your needs now, from digital resources to recurring engagement.</p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div className="bg-navy/5 rounded-2xl p-8 border border-navy/10">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-sm font-semibold text-orange uppercase tracking-wide">Selected items</p>
                <h2 className="text-2xl font-bold text-navy mt-2">{cartEntries.length} line item{cartEntries.length === 1 ? "" : "s"} in your cart</h2>
              </div>
              <span className="text-2xl font-bold text-orange">{formatPrice(dueToday)}</span>
            </div>

            <div className="space-y-4">
              {cartEntries.map(({ product, quantity, lineTotal }) => (
                <div key={product.key} className="rounded-xl border border-navy/10 bg-white p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-orange">{product.category === 'core' ? 'Core engagement' : product.category === 'membership' ? 'Membership' : product.category === 'digital' ? 'Digital product' : 'Starter offer'}</p>
                      <h3 className="text-lg font-bold text-navy mt-1">{product.name}</h3>
                      <p className="text-sm text-navy/60 mt-2">{product.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-navy whitespace-nowrap">{formatPrice(lineTotal)}</span>
                      <p className="text-xs text-navy/50 mt-1">{product.priceLabel}</p>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-navy/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="inline-flex items-center rounded-lg border border-navy/10 overflow-hidden">
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.key, quantity - 1)}
                        className="px-3 py-2 text-navy hover:bg-navy/5 transition-colors"
                        aria-label={`Decrease quantity of ${product.name}`}
                      >
                        −
                      </button>
                      <span className="px-4 py-2 text-sm font-semibold text-navy border-x border-navy/10">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.key, quantity + 1)}
                        disabled={product.billingMode === 'subscription'}
                        className="px-3 py-2 text-navy hover:bg-navy/5 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                        aria-label={`Increase quantity of ${product.name}`}
                      >
                        +
                      </button>
                    </div>

                    <div className="flex items-center gap-4 text-sm">
                      {product.billingMode === 'subscription' ? (
                        <span className="text-navy/50">Monthly engagements are limited to one per tier.</span>
                      ) : null}
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.key, 0)}
                        className="font-medium text-navy/60 hover:text-orange transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-sm text-navy/70 border-t border-navy/10 pt-6 mt-8">
              <div className="flex justify-between gap-6">
                <span>Recurring items</span>
                <span className="font-semibold text-navy">{recurringProducts.length}</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>One-time items</span>
                <span className="font-semibold text-navy">{oneTimeProducts.reduce((sum, entry) => sum + entry.quantity, 0)}</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>Checkout provider</span>
                <span className="font-semibold text-navy">Stripe</span>
              </div>
              <div className="flex justify-between gap-6 border-t border-navy/10 pt-4 text-base">
                <span className="font-semibold text-navy">Estimated due today</span>
                <span className="font-bold text-orange">{formatPrice(dueToday)}</span>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-orange/5 border border-orange/20 p-5">
              <p className="text-sm font-semibold text-navy">Best next step</p>
              <p className="text-sm text-navy/65 mt-2">
                {recurringProducts.length
                  ? 'You are checking out a recurring offer. After payment, we will route you into the right onboarding flow for your membership or tier.'
                  : 'You are starting with a one-time offer. This is a practical first step before adding a review, call, or ongoing support if needed.'}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-navy/10 flex items-center justify-between gap-4">
              <Link href="/services" className="text-sm font-medium text-navy hover:text-orange transition-colors">
                Back to services
              </Link>
              <Link href={buildCartHref([])} onClick={() => {
                setCartItems([]);
                clearCartCookie();
              }} className="text-sm font-medium text-navy/60 hover:text-orange transition-colors">
                Clear cart
              </Link>
            </div>
          </div>

          <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-3">Checkout</h2>
            <p className="text-sm text-navy/60 mb-6">We will send your cart to the correct Stripe checkout flow automatically.</p>
            <PaymentForm items={cartItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
