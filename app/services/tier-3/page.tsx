"use client";

import Link from "next/link";
import { setCartItemsCookie } from "@/lib/cart-client";

export default function Tier3Page() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">
              Tier 3
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Scaling Partner
            </h1>
            <p className="mt-6 text-xl text-white/70 max-w-2xl">
              For active investors and operators who already know the business, but need stronger infrastructure, execution capacity, and operating leverage to scale.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-navy/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-navy mb-4">This is for you if...</h2>
            <div className="grid md:grid-cols-2 gap-4 text-navy/70">
              <p>• You already do deals but know your current operation is too thin to scale</p>
              <p>• You need sourcing, construction, and execution support under one platform</p>
              <p>• You want to move from opportunistic deals to repeatable volume</p>
              <p>• You are looking for a serious operating partner, not another consultant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="bg-navy/5 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-navy mb-8">Two Service Models</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border-r border-navy/20 pr-8 last:border-0">
                  <h3 className="text-2xl font-bold text-navy mb-6">Service Model</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-navy/60 mb-1">Monthly Retainer</p>
                      <p className="text-2xl font-bold text-orange">$3,000/month</p>
                    </div>
                    <div>
                      <p className="text-sm text-navy/60 mb-1">GC Markup</p>
                      <p className="text-xl font-bold text-navy">15% of rehab</p>
                    </div>
                    <div>
                      <p className="text-sm text-navy/60 mb-1">Buyer Commission</p>
                      <p className="text-xl font-bold text-navy">3% of sale</p>
                    </div>
                    <div>
                      <p className="text-sm text-navy/60 mb-1">Profit Share</p>
                      <p className="text-xl font-bold text-orange">20% of net</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-navy mb-6">JV Model</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-navy/60 mb-1">Monthly Retainer</p>
                      <p className="text-2xl font-bold text-navy">$0</p>
                    </div>
                    <div>
                      <p className="text-sm text-navy/60 mb-1">Profit Split</p>
                      <p className="text-xl font-bold text-orange">50/50 per deal</p>
                    </div>
                    <div>
                      <p className="text-sm text-navy/60 mb-1">Capital</p>
                      <p className="text-xl font-bold text-navy">Co-invest or they source</p>
                    </div>
                    <div>
                      <p className="text-sm text-navy/60 mb-1">Risk/Reward</p>
                      <p className="text-sm text-navy">You share risk, higher upside</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Deal Example */}
            <div className="bg-white border-2 border-navy/10 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-navy mb-8">Sample Deal (Service Model)</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-navy">
                  <span>Purchase Price</span>
                  <span className="font-bold">$180,000</span>
                </div>
                <div className="flex justify-between text-navy">
                  <span>Rehab Budget</span>
                  <span className="font-bold">$75,000</span>
                </div>
                <div className="flex justify-between text-navy">
                  <span>Holding Costs</span>
                  <span className="font-bold">$10,000</span>
                </div>
                <div className="flex justify-between text-navy font-bold border-t border-navy/20 pt-4">
                  <span>Total Investment</span>
                  <span>$265,000</span>
                </div>
              </div>

              <div className="bg-navy/5 rounded p-6 mb-8">
                <p className="text-navy/60 text-sm mb-4">5-month project, 25% ARV appreciation</p>
                <div className="flex justify-between text-navy mb-2">
                  <span>Sale Price (ARV)</span>
                  <span className="font-bold">$400,000</span>
                </div>
                <div className="flex justify-between text-navy font-bold text-orange">
                  <span>Net Profit</span>
                  <span>$135,000</span>
                </div>
              </div>

              <div className="space-y-3 bg-orange/5 rounded p-6">
                <h3 className="font-bold text-navy mb-4">Your Revenue Per Deal</h3>
                <div className="flex justify-between text-navy">
                  <span>Monthly Retainer (5 months)</span>
                  <span className="font-bold">$15,000</span>
                </div>
                <div className="flex justify-between text-navy">
                  <span>GC Markup (15% x $75k)</span>
                  <span className="font-bold">$11,250</span>
                </div>
                <div className="flex justify-between text-navy">
                  <span>Buyer Commission (3% x $400k)</span>
                  <span className="font-bold">$12,000</span>
                </div>
                <div className="flex justify-between text-navy">
                  <span>Profit Share (20% x $135k)</span>
                  <span className="font-bold">$27,000</span>
                </div>
                <div className="flex justify-between text-navy font-bold text-orange border-t border-orange/20 pt-3 mt-3 text-lg">
                  <span>Total Per Deal</span>
                  <span>$65,250</span>
                </div>
              </div>

              <div className="bg-navy/5 rounded p-6 mt-6 text-sm text-navy/60">
                <p className="mb-3">At 12 deals per year: $15,000 x 12 + deal fees = $180,000 + $600,000+ = $780,000+ annually</p>
                <p>They keep $70,000+ per deal. You handle everything. Both win.</p>
              </div>
            </div>

            {/* What We Handle */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-8">What We Provide (100%)</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <span className="text-orange font-bold text-xl">✓</span>
                  <div>
                    <h3 className="font-bold text-navy">Deal Sourcing</h3>
                    <p className="text-navy/60 text-sm">Continuous pipeline of off-market deals</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange font-bold text-xl">✓</span>
                  <div>
                    <h3 className="font-bold text-navy">Analysis & Underwriting</h3>
                    <p className="text-navy/60 text-sm">ARV, rehab, financing, ROI models</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange font-bold text-xl">✓</span>
                  <div>
                    <h3 className="font-bold text-navy">Offer Negotiation</h3>
                    <p className="text-navy/60 text-sm">Creative deal structures</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange font-bold text-xl">✓</span>
                  <div>
                    <h3 className="font-bold text-navy">Closing Management</h3>
                    <p className="text-navy/60 text-sm">Full transaction coordination</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange font-bold text-xl">✓</span>
                  <div>
                    <h3 className="font-bold text-navy">Construction Oversight</h3>
                    <p className="text-navy/60 text-sm">GC hiring, budgeting, quality</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange font-bold text-xl">✓</span>
                  <div>
                    <h3 className="font-bold text-navy">Exit Strategy</h3>
                    <p className="text-navy/60 text-sm">Buyer sourcing and sale</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What They Do */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-8">Your Role</h2>
              <div className="bg-navy/5 rounded-lg p-8">
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-orange font-bold">•</span>
                    <span className="text-navy">Provide capital or co-invest</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange font-bold">•</span>
                    <span className="text-navy">Review deal summaries and approve</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange font-bold">•</span>
                    <span className="text-navy">Monthly updates on active deals</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange font-bold">•</span>
                    <span className="text-navy">Quarterly performance reviews</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Perfect For */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-8">Ideal For</h2>
              <div className="bg-white border-2 border-navy/10 rounded-lg p-8 space-y-4">
                <p className="text-navy">Established operators who:</p>
                <ul className="space-y-2 text-navy/60">
                  <li>Are already doing 5-15 deals per year</li>
                  <li>Want to scale to 15-25+ without burning out</li>
                  <li>Have proven capital access or ability to raise</li>
                  <li>Trust proven systems over DIY approach</li>
                  <li>Want to focus on capital/strategy vs operations</li>
                </ul>
              </div>
            </div>

            {/* Model Comparison */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-8">Service vs JV</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border-2 border-navy/10 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-navy mb-4">Service Model</h3>
                  <ul className="space-y-2 text-navy/60 text-sm">
                    <li className="flex gap-2">
                      <span className="text-orange">•</span>
                      <span>Recurring monthly revenue</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange">•</span>
                      <span>You manage their capital</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange">•</span>
                      <span>Lower risk for them</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange">•</span>
                      <span>Predictable income for you</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-orange/30 rounded-lg p-8">
                  <h3 className="text-xl font-bold text-orange mb-4">JV Model</h3>
                  <ul className="space-y-2 text-navy/60 text-sm">
                    <li className="flex gap-2">
                      <span className="text-orange">•</span>
                      <span>50/50 profit split</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange">•</span>
                      <span>Shared capital/co-investment</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange">•</span>
                      <span>Higher upside for you</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange">•</span>
                      <span>Shared risk/reward</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/cart?cart=tier-3"
                onClick={() => setCartItemsCookie(['tier-3'])}
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
