"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import PaymentForm from "@/components/PaymentForm";

const TIERS: Record<string, { name: string; priceLabel: string; description: string }> = {
  "tier-1": {
    name: "Hands-Off Capital",
    priceLabel: "$1,699/month",
    description: "For investors who want execution without becoming the operator.",
  },
  "tier-2": {
    name: "Learning Operator",
    priceLabel: "$1,500/month",
    description: "For investors who want deal flow, execution support, and real-world coaching.",
  },
  "tier-3": {
    name: "Scaling Partner",
    priceLabel: "$3,000/month",
    description: "For active operators who need stronger infrastructure and leverage to scale.",
  },
};

export default function CartContent() {
  const searchParams = useSearchParams();
  const tier = searchParams.get("tier") || "";

  const selectedTier = useMemo(() => TIERS[tier], [tier]);

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

            <div className="mt-8 pt-6 border-t border-navy/10">
              <Link href="/services" className="text-sm font-medium text-navy hover:text-orange transition-colors">
                Back to services
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
