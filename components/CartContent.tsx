"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import PaymentForm from "@/components/PaymentForm";
import { CART_QUERY_KEY, CART_TIERS, parseCartParam, buildCartHref } from "@/lib/cart";
import { getCartItemsFromCookie, setCartItemsCookie, clearCartCookie } from "@/lib/cart-client";

export default function CartContent() {
  const searchParams = useSearchParams();
  const queryCartItems = useMemo(() => parseCartParam(searchParams.get(CART_QUERY_KEY)), [searchParams]);
  const [cookieCartItems, setCookieCartItems] = useState<string[]>([]);

  useEffect(() => {
    const fromCookie = getCartItemsFromCookie();
    if (queryCartItems.length) {
      setCartItemsCookie(queryCartItems);
      setCookieCartItems(queryCartItems);
    } else {
      setCookieCartItems(fromCookie);
    }
  }, [queryCartItems]);

  const cartItems = queryCartItems.length ? queryCartItems : cookieCartItems;
  const selectedTierKey = cartItems[0] || searchParams.get("tier") || "";
  const selectedTier = useMemo(() => CART_TIERS[selectedTierKey], [selectedTierKey]);

  if (!selectedTier) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">Your cart is empty</h1>
          <p className="text-lg text-navy/60 mb-8">
            Choose a service tier first, then continue to checkout.
          </p>
          <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 bg-orange hover:bg-orange/90 text-white font-semibold rounded-lg transition-colors">
            View Services
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Cart and Checkout</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-navy leading-tight">Review your selected service and complete checkout.</h1>
          <p className="mt-4 text-lg text-navy/60">This gives prospects a clean review step before they enter payment details.</p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div className="bg-navy/5 rounded-2xl p-8 border border-navy/10">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-sm font-semibold text-orange uppercase tracking-wide">Selected plan</p>
                <h2 className="text-2xl font-bold text-navy mt-2">{selectedTier.name}</h2>
              </div>
              <span className="text-2xl font-bold text-orange">{selectedTier.priceLabel}</span>
            </div>

            <p className="text-navy/65 mb-8">{selectedTier.description}</p>

            <div className="space-y-4 text-sm text-navy/70 border-t border-navy/10 pt-6">
              <div className="flex justify-between gap-6">
                <span>Subscription</span>
                <span className="font-semibold text-navy">{selectedTier.priceLabel}</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>Billing cadence</span>
                <span className="font-semibold text-navy">Monthly</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>Checkout provider</span>
                <span className="font-semibold text-navy">Stripe</span>
              </div>
              <div className="flex justify-between gap-6 border-t border-navy/10 pt-4 text-base">
                <span className="font-semibold text-navy">Due today</span>
                <span className="font-bold text-orange">Handled securely at checkout</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-navy/10 flex items-center justify-between gap-4">
              <Link href="/services" className="text-sm font-medium text-navy hover:text-orange transition-colors">
                Back to services
              </Link>
              <Link href={buildCartHref([])} onClick={() => clearCartCookie()} className="text-sm font-medium text-navy/60 hover:text-orange transition-colors">
                Clear cart
              </Link>
            </div>
          </div>

          <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-6">Checkout</h2>
            <PaymentForm />
          </div>
        </div>
      </div>
    </section>
  );
}
