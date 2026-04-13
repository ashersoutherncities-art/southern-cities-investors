"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import PaymentForm from "@/components/PaymentForm";
import { CART_QUERY_KEY, parseCartParam, buildCartHref, getCartProducts, formatPrice } from "@/lib/cart";
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
  const products = useMemo(() => getCartProducts(cartItems), [cartItems]);
  const recurringProducts = products.filter((product) => product.billingMode === "subscription");
  const oneTimeProducts = products.filter((product) => product.billingMode === "payment");
  const dueToday = products.reduce((sum, product) => sum + product.price, 0);

  if (!products.length) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">Your cart is empty</h1>
          <p className="text-lg text-navy/60 mb-8">
            Choose a service or starter offer first, then continue to checkout.
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
        <div className="max-w-3xl mb-12">
          <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Cart and Checkout</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-navy leading-tight">Review your selected services and complete checkout.</h1>
          <p className="mt-4 text-lg text-navy/60">Use lower-ticket offers as a starting point, or move straight into a full monthly engagement.</p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div className="bg-navy/5 rounded-2xl p-8 border border-navy/10">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-sm font-semibold text-orange uppercase tracking-wide">Selected items</p>
                <h2 className="text-2xl font-bold text-navy mt-2">{products.length} item{products.length === 1 ? "" : "s"} in your cart</h2>
              </div>
              <span className="text-2xl font-bold text-orange">{formatPrice(dueToday)}</span>
            </div>

            <div className="space-y-4">
              {products.map((product) => (
                <div key={product.key} className="rounded-xl border border-navy/10 bg-white p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-orange">{product.category === 'core' ? 'Core engagement' : 'Starter offer'}</p>
                      <h3 className="text-lg font-bold text-navy mt-1">{product.name}</h3>
                      <p className="text-sm text-navy/60 mt-2">{product.description}</p>
                    </div>
                    <span className="text-sm font-bold text-navy whitespace-nowrap">{product.priceLabel}</span>
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
                <span className="font-semibold text-navy">{oneTimeProducts.length}</span>
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
                  ? 'You are checking out a recurring engagement. After payment, follow up with a short intake call to confirm market, capital, and timelines.'
                  : 'You are starting with a one-time offer. This is a good low-friction path for colder traffic before moving into a monthly relationship.'}
              </p>
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
            <h2 className="text-2xl font-bold text-navy mb-3">Checkout</h2>
            <p className="text-sm text-navy/60 mb-6">We will route your cart to the correct Stripe checkout flow automatically.</p>
            <PaymentForm items={cartItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
