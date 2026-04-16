"use client";

import Link from "next/link";
import { setCartItemsCookie } from "@/lib/cart-client";

export default function Tier2Page() {
  return (
    <>
      <section className="bg-navy text-white py-24 sm:py-32">
        <div className="site-shell">
          <div className="max-w-4xl">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Tier 2</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Deal Analysis</h1>
            <p className="mt-6 text-xl text-white/70 max-w-3xl">
              For active buyers who have deals coming in and want experienced review before they commit money, time, or attention to the wrong opportunity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-navy/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy/5 rounded-2xl p-8 border border-navy/10">
            <h2 className="text-2xl font-bold text-navy mb-4">This is for you if...</h2>
            <div className="grid md:grid-cols-2 gap-4 text-navy/70">
              <p>• You are already seeing deals and need a faster way to separate workable opportunities from distractions</p>
              <p>• You want a second set of experienced eyes before you lock up a property or deploy capital</p>
              <p>• You need help pressure-testing ARV, rehab assumptions, or execution reality</p>
              <p>• You want clear go, no-go, or renegotiate guidance on live opportunities</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="site-shell grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-8">What Tier 2 includes</h2>
            <div className="grid gap-4">
              {[
                "Deal submissions reviewed with practical investor logic",
                "ARV validation and rehab checks to catch weak assumptions earlier",
                "Go, no-go, or renegotiate guidance for live deals",
                "A cleaner decision process that reduces wasted time and bad commitments",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-navy/10 p-6 bg-white shadow-sm flex gap-4">
                  <span className="text-orange font-bold text-xl">✓</span>
                  <p className="text-navy/75 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-navy/10 bg-navy/5 p-8">
              <h3 className="text-2xl font-bold text-navy">Where this fits in ongoing support</h3>
              <p className="mt-4 text-navy/65 leading-relaxed">
                This is where ongoing support starts to become active deal support. Instead of reacting to every opportunity with uncertainty, you get a stronger filter around what deserves serious attention. That means cleaner decisions, fewer thin deals, and more confidence when something worth pursuing actually shows up.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-orange/20 bg-orange/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Pricing</p>
            <h2 className="mt-3 text-3xl font-bold text-navy">$500-$1,000/month</h2>
            <p className="mt-4 text-navy/65 leading-relaxed">
              Pricing depends on review volume, responsiveness, and how hands-on the analysis relationship needs to be.
            </p>

            <div className="mt-8 space-y-4 text-sm text-navy/70">
              <div className="flex gap-3"><span className="text-orange font-bold">•</span><span>Best for active investors making real buy decisions</span></div>
              <div className="flex gap-3"><span className="text-orange font-bold">•</span><span>Ideal when bad assumptions are more expensive than monthly support</span></div>
              <div className="flex gap-3"><span className="text-orange font-bold">•</span><span>Strong next step before moving into Tier 3 Deal Desk</span></div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/cart?cart=tier-2"
                onClick={() => setCartItemsCookie(["tier-2"])}
                className="inline-flex items-center justify-center px-6 py-4 bg-orange hover:bg-orange/90 text-white font-semibold rounded-lg transition-colors"
              >
                Add Tier 2 to cart
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center px-6 py-4 border border-navy/15 text-navy hover:border-orange/50 hover:text-orange font-semibold rounded-lg transition-colors">
                Compare all packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
