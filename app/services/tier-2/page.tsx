"use client";

import Link from "next/link";
import { setCartItemsCookie } from "@/lib/cart-client";

export default function Tier2Page() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">
              Tier 2
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Learning Operator
            </h1>
            <p className="mt-6 text-xl text-white/70 max-w-2xl">
              For investors and emerging operators who want to learn the business while deals are being sourced, underwritten, and executed with real support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-navy/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-navy mb-4">This is for you if...</h2>
            <div className="grid md:grid-cols-2 gap-4 text-navy/70">
              <p>• You want to stop learning only from YouTube and start learning inside real deals</p>
              <p>• You want guidance without having to build every system from scratch</p>
              <p>• You are serious about doing 3-5 quality deals per year</p>
              <p>• You want coaching, execution support, and deal flow in one relationship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="bg-navy/5 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-navy mb-8">Investment Structure</h2>
              
              <div className="space-y-6">
                <div className="border-b border-navy/20 pb-6 last:border-0">
                  <h3 className="text-xl font-bold text-navy mb-2">Monthly Retainer</h3>
                  <p className="text-3xl font-bold text-orange mb-2">$1,500/month</p>
                  <p className="text-navy/60">Covers sourcing, analysis, coaching, and deal management.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Profit Share on Backend</h3>
                  <p className="text-2xl font-bold text-orange mb-2">30% of Net Profit</p>
                  <p className="text-navy/60">We execute, you learn. We split profits at sale.</p>
                </div>
              </div>
            </div>

            {/* Deal Example */}
            <div className="bg-white border-2 border-navy/10 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-navy mb-8">Sample Deal Breakdown (3 Deals/Year)</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-navy">
                  <span>Average Purchase Price</span>
                  <span className="font-bold">$120,000</span>
                </div>
                <div className="flex justify-between text-navy">
                  <span>Average Rehab</span>
                  <span className="font-bold">$65,000</span>
                </div>
                <div className="flex justify-between text-navy">
                  <span>Holding Costs</span>
                  <span className="font-bold">$8,000</span>
                </div>
                <div className="flex justify-between text-navy">
                  <span>Broker and closing costs</span>
                  <span className="font-bold">$22,500</span>
                </div>
                <div className="flex justify-between text-navy font-bold border-t border-navy/20 pt-4">
                  <span>Total Basis and Fees</span>
                  <span>$215,500</span>
                </div>
              </div>

              <div className="bg-navy/5 rounded p-6 mb-8">
                <p className="text-navy/60 text-sm mb-4">Per deal projection with tighter margins and fee stack included</p>
                <div className="flex justify-between text-navy mb-2">
                  <span>Sale Price (ARV)</span>
                  <span className="font-bold">$290,000</span>
                </div>
                <div className="flex justify-between text-navy font-bold text-orange">
                  <span>Net Profit</span>
                  <span>$74,500</span>
                </div>
              </div>

              <div className="space-y-3 bg-orange/5 rounded p-6 mb-8">
                <h3 className="font-bold text-navy mb-4">Your Revenue (Per Deal)</h3>
                <div className="flex justify-between text-navy">
                  <span>Monthly Retainer (4 months)</span>
                  <span className="font-bold">$6,000</span>
                </div>
                <div className="flex justify-between text-navy">
                  <span>Profit Share (30%)</span>
                  <span className="font-bold">$22,350</span>
                </div>
                <div className="flex justify-between text-navy font-bold text-orange border-t border-orange/20 pt-3 mt-3">
                  <span>Total Per Deal</span>
                  <span>$28,350</span>
                </div>
                <div className="flex justify-between text-navy font-bold text-orange pt-3 mt-3 text-lg">
                  <span>Annual (3 Deals)</span>
                  <span>$18,000 + $67,050 = $85,050</span>
                </div>
              </div>

              <div className="bg-navy/5 rounded p-6 text-sm text-navy/60">
                <p>You provide capital. We source, analyze, and coach through execution, but these example economics are intentionally tighter and include a more realistic fee stack.</p>
              </div>
            </div>

            {/* What We Handle */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-8">What We Provide (90%)</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <span className="text-orange font-bold text-xl">✓</span>
                  <div>
                    <h3 className="font-bold text-navy">Deal Sourcing</h3>
                    <p className="text-navy/60 text-sm">Off-market deals matching your criteria</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange font-bold text-xl">✓</span>
                  <div>
                    <h3 className="font-bold text-navy">Full Analysis</h3>
                    <p className="text-navy/60 text-sm">ARV, rehab scope, financing, ROI modeling</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange font-bold text-xl">✓</span>
                  <div>
                    <h3 className="font-bold text-navy">Weekly Coaching</h3>
                    <p className="text-navy/60 text-sm">Learning our underwriting and deal process</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange font-bold text-xl">✓</span>
                  <div>
                    <h3 className="font-bold text-navy">Offer Negotiation</h3>
                    <p className="text-navy/60 text-sm">Creative structures and favorable terms</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange font-bold text-xl">✓</span>
                  <div>
                    <h3 className="font-bold text-navy">Closing Management</h3>
                    <p className="text-navy/60 text-sm">Paperwork, inspections, financing</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange font-bold text-xl">✓</span>
                  <div>
                    <h3 className="font-bold text-navy">Construction Oversight</h3>
                    <p className="text-navy/60 text-sm">GC management and quality control</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange font-bold text-xl">✓</span>
                  <div>
                    <h3 className="font-bold text-navy">Exit Strategy</h3>
                    <p className="text-navy/60 text-sm">Buyer sourcing and final sale</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange font-bold text-xl">✓</span>
                  <div>
                    <h3 className="font-bold text-navy">Playbook Access</h3>
                    <p className="text-navy/60 text-sm">Our systems, templates, and processes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What They Do */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-8">Your Role (10%)</h2>
              <div className="bg-navy/5 rounded-lg p-8">
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-orange font-bold">•</span>
                    <span className="text-navy">Deploy capital for purchases and rehab</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange font-bold">•</span>
                    <span className="text-navy">Make final deal decisions (yes/no on opportunities)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange font-bold">•</span>
                    <span className="text-navy">Attend weekly coaching calls (30 mins)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange font-bold">•</span>
                    <span className="text-navy">Learn our process for future scaling</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Perfect For */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-8">Ideal For</h2>
              <div className="bg-white border-2 border-navy/10 rounded-lg p-8 space-y-4">
                <p className="text-navy">Real estate agents or small investors who:</p>
                <ul className="space-y-2 text-navy/60">
                  <li>Have capital to deploy ($100-200k available)</li>
                  <li>Want to scale from 1-2 deals to 3-5 per year</li>
                  <li>Prefer learning while doing (not classroom education)</li>
                  <li>Value execution over DIY sourcing</li>
                  <li>Want a proven system vs trial-and-error</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/cart?cart=tier-2"
                onClick={() => setCartItemsCookie(['tier-2'])}
                className="inline-flex items-center justify-center px-8 py-4 bg-orange hover:bg-orange/90 text-white font-semibold rounded-lg transition-colors"
              >
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
