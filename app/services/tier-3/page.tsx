"use client";

import Link from "next/link";
import { setCartItemsCookie } from "@/lib/cart-client";

export default function Tier3Page() {
  return (
    <>
      <section className="bg-navy text-white py-24 sm:py-32">
        <div className="site-shell">
          <div className="max-w-4xl">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Tier 3</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Deal Desk</h1>
            <p className="mt-6 text-xl text-white/70 max-w-3xl">
              For investors and operators who need faster access, more reviews, and sharper deal support as volume and complexity start to rise.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-navy/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy/5 rounded-2xl p-8 border border-navy/10">
            <h2 className="text-2xl font-bold text-navy mb-4">This is for you if...</h2>
            <div className="grid md:grid-cols-2 gap-4 text-navy/70">
              <p>• You are looking at enough opportunities that one-off reviews are no longer efficient</p>
              <p>• You need quicker answers when timing matters</p>
              <p>• You want structuring guidance, not just basic underwriting feedback</p>
              <p>• You need clearer lender and buyer direction as you move more deals</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="site-shell grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-8">What Tier 3 includes</h2>
            <div className="grid gap-4">
              {[
                "Unlimited deal reviews as opportunities come in",
                "Structuring guidance to help you make cleaner, stronger decisions",
                "Quick access when deals become time-sensitive",
                "Lender and buyer direction to support real movement, not just analysis",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-navy/10 p-6 bg-white shadow-sm flex gap-4">
                  <span className="text-orange font-bold text-xl">✓</span>
                  <p className="text-navy/75 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-navy/10 bg-navy/5 p-8">
              <h3 className="text-2xl font-bold text-navy">Why this tier matters</h3>
              <p className="mt-4 text-navy/65 leading-relaxed">
                Once your pace increases, the bottleneck is usually not lead volume, it is decision quality and response speed. Tier 3 is built to tighten that middle layer so strong opportunities move faster and weak ones get eliminated sooner.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-orange/20 bg-orange/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Pricing</p>
            <h2 className="mt-3 text-3xl font-bold text-navy">$1,500-$3,000/month</h2>
            <p className="mt-4 text-navy/65 leading-relaxed">
              Final pricing depends on pace, review volume, access expectations, and how much active structuring support is needed.
            </p>

            <div className="mt-8 space-y-4 text-sm text-navy/70">
              <div className="flex gap-3"><span className="text-orange font-bold">•</span><span>Best for operators who need a stronger deal decision engine</span></div>
              <div className="flex gap-3"><span className="text-orange font-bold">•</span><span>Designed for higher volume and tighter response windows</span></div>
              <div className="flex gap-3"><span className="text-orange font-bold">•</span><span>Natural bridge into Tier 4 Operator support</span></div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/cart?cart=tier-3"
                onClick={() => setCartItemsCookie(["tier-3"])}
                className="inline-flex items-center justify-center px-6 py-4 bg-orange hover:bg-orange/90 text-white font-semibold rounded-lg transition-colors"
              >
                Add Tier 3 to cart
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
