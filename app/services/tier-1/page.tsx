"use client";

import Link from "next/link";
import { setCartItemsCookie } from "@/lib/cart-client";

export default function Tier1Page() {
  return (
    <>
      <section className="bg-navy text-white py-24 sm:py-32">
        <div className="site-shell">
          <div className="max-w-4xl">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Tier 1</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Deal Flow Access</h1>
            <p className="mt-6 text-xl text-white/70 max-w-3xl">
              A lower-friction way to stay close to real opportunities, see cleaner off-market deal flow, and get enough context to decide what deserves a closer look.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-navy/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy/5 rounded-2xl p-8 border border-navy/10">
            <h2 className="text-2xl font-bold text-navy mb-4">This is for you if...</h2>
            <div className="grid md:grid-cols-2 gap-4 text-navy/70">
              <p>• You want to see more off-market opportunities without paying for high-touch support yet</p>
              <p>• You need a cleaner stream of opportunities, not random noise</p>
              <p>• You want faster visibility into deals that may fit your criteria</p>
              <p>• You prefer to start with access and upgrade only when a deal becomes real</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="site-shell grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-8">What Tier 1 includes</h2>
            <div className="grid gap-4">
              {[
                "Access to off-market deals as they become available",
                "Basic deal summaries to help you assess fit quickly",
                "Market insight that helps you stay oriented to current opportunities",
                "A simple upgrade path into deeper analysis when something looks promising",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-navy/10 p-6 bg-white shadow-sm flex gap-4">
                  <span className="text-orange font-bold text-xl">✓</span>
                  <p className="text-navy/75 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-navy/10 bg-navy/5 p-8">
              <h3 className="text-2xl font-bold text-navy">Why people start here</h3>
              <p className="mt-4 text-navy/65 leading-relaxed">
                Tier 1 is built for buyers who want a more consistent look at workable opportunities before stepping into a deeper monthly relationship. It keeps the first step practical, low-pressure, and easy to expand when timing is right.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-orange/20 bg-orange/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Pricing</p>
            <h2 className="mt-3 text-3xl font-bold text-navy">$99-$299/month</h2>
            <p className="mt-4 text-navy/65 leading-relaxed">
              Final pricing depends on the level of access, market coverage, and volume you want to stay close to.
            </p>

            <div className="mt-8 space-y-4 text-sm text-navy/70">
              <div className="flex gap-3"><span className="text-orange font-bold">•</span><span>Best for investors who want access before deeper support</span></div>
              <div className="flex gap-3"><span className="text-orange font-bold">•</span><span>Keeps your pipeline closer to live opportunities</span></div>
              <div className="flex gap-3"><span className="text-orange font-bold">•</span><span>Easy upgrade into Tier 2 when you want deal review</span></div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/cart?cart=tier-1"
                onClick={() => setCartItemsCookie(["tier-1"])}
                className="inline-flex items-center justify-center px-6 py-4 bg-orange hover:bg-orange/90 text-white font-semibold rounded-lg transition-colors"
              >
                Add Tier 1 to cart
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
