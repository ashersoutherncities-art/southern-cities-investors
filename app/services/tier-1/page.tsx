"use client";

import Link from "next/link";

export default function Tier1Page() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">
              Tier 1
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hands-Off Capital
            </h1>
            <p className="mt-6 text-xl text-white/70 max-w-2xl">
              For investors who want real estate profits without building the acquisitions, rehab, and exit machine themselves.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-navy/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-navy mb-4">This is for you if...</h2>
            <div className="grid md:grid-cols-2 gap-4 text-navy/70">
              <p>• You have capital but do not want to become a full-time operator</p>
              <p>• You want vetted opportunities, not random deal flow</p>
              <p>• You value execution, speed, and clear accountability</p>
              <p>• You want a partner who can source, manage, and exit deals under one roof</p>
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
                  <h3 className="text-xl font-bold text-navy mb-2">Platform Subscription</h3>
                  <p className="text-3xl font-bold text-orange mb-2">$1,699/month</p>
                  <p className="text-navy/60">Access to 2-3 solid opportunities per month. Paid regardless of deal closure.</p>
                </div>

                <div className="border-b border-navy/20 pb-6 last:border-0">
                  <h3 className="text-xl font-bold text-navy mb-2">Acquisition Fee</h3>
                  <p className="text-2xl font-bold text-orange mb-2">2-3% of Purchase Price</p>
                  <p className="text-navy/60">Paid at closing. Covers sourcing and underwriting work.</p>
                </div>

                <div className="border-b border-navy/20 pb-6 last:border-0">
                  <h3 className="text-xl font-bold text-navy mb-2">Service Fees During Execution</h3>
                  <ul className="space-y-2 text-navy/60">
                    <li>GC Markup: 15% of rehab budget</li>
                    <li>Project Management: 5-10% of rehab budget</li>
                    <li>Buyer Agent Commission: 100% to us (paid at sale)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Equity on Backend</h3>
                  <p className="text-2xl font-bold text-orange mb-2">35% of Net Profit (Minimum)</p>
                  <p className="text-navy/60">Paid at sale. Example: $100k profit deal = $35-40k to us.</p>
                </div>
              </div>
            </div>

            {/* Deal Example */}
            <div className="bg-white border-2 border-navy/10 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-navy mb-8">Sample Deal Breakdown</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-navy">
                  <span>Purchase Price</span>
                  <span className="font-bold">$150,000</span>
                </div>
                <div className="flex justify-between text-navy">
                  <span>Rehab Budget</span>
                  <span className="font-bold">$65,000</span>
                </div>
                <div className="flex justify-between text-navy">
                  <span>Holding Costs</span>
                  <span className="font-bold">$8,000</span>
                </div>
                <div className="flex justify-between text-navy font-bold border-t border-navy/20 pt-4">
                  <span>Total Investment</span>
                  <span>$223,000</span>
                </div>
              </div>

              <div className="bg-navy/5 rounded p-6 mb-8">
                <p className="text-navy/60 text-sm mb-4">Assuming 4-month project, 20% ARV appreciation</p>
                <div className="flex justify-between text-navy mb-2">
                  <span>Sale Price (ARV)</span>
                  <span className="font-bold">$350,000</span>
                </div>
                <div className="flex justify-between text-navy font-bold text-orange">
                  <span>Gross Profit</span>
                  <span>$127,000</span>
                </div>
              </div>

              <div className="space-y-3 bg-orange/5 rounded p-6">
                <h3 className="font-bold text-navy mb-4">Your Revenue Per Deal</h3>
                <div className="flex justify-between text-navy">
                  <span>Platform Sub (4 months)</span>
                  <span className="font-bold">$6,796</span>
                </div>
                <div className="flex justify-between text-navy">
                  <span>Acq Fee (2.5%)</span>
                  <span className="font-bold">$3,750</span>
                </div>
                <div className="flex justify-between text-navy">
                  <span>GC Markup (15%)</span>
                  <span className="font-bold">$9,750</span>
                </div>
                <div className="flex justify-between text-navy">
                  <span>Project Mgmt (7.5%)</span>
                  <span className="font-bold">$4,875</span>
                </div>
                <div className="flex justify-between text-navy">
                  <span>Buyer Commission (3%)</span>
                  <span className="font-bold">$10,500</span>
                </div>
                <div className="flex justify-between text-navy">
                  <span>Profit Share (35%)</span>
                  <span className="font-bold">$44,450</span>
                </div>
                <div className="flex justify-between text-navy font-bold text-orange border-t border-orange/20 pt-3 mt-3">
                  <span>Total to You</span>
                  <span>$80,121</span>
                </div>
              </div>
            </div>

            {/* What We Handle */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-8">What We Handle (100%)</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <span className="text-orange font-bold text-xl">✓</span>
                  <div>
                    <h3 className="font-bold text-navy">Deal Sourcing</h3>
                    <p className="text-navy/60 text-sm">Finding off-market opportunities below market value</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange font-bold text-xl">✓</span>
                  <div>
                    <h3 className="font-bold text-navy">Analysis & Underwriting</h3>
                    <p className="text-navy/60 text-sm">Full ROI modeling, ARV estimates, rehab scoping</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange font-bold text-xl">✓</span>
                  <div>
                    <h3 className="font-bold text-navy">Offer Negotiation</h3>
                    <p className="text-navy/60 text-sm">Creative deal structures, favorable terms</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange font-bold text-xl">✓</span>
                  <div>
                    <h3 className="font-bold text-navy">Closing Management</h3>
                    <p className="text-navy/60 text-sm">All paperwork, inspections, financing coordination</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange font-bold text-xl">✓</span>
                  <div>
                    <h3 className="font-bold text-navy">Construction Oversight</h3>
                    <p className="text-navy/60 text-sm">GC management, budget control, quality assurance</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange font-bold text-xl">✓</span>
                  <div>
                    <h3 className="font-bold text-navy">Exit Strategy</h3>
                    <p className="text-navy/60 text-sm">Buyer sourcing, listing, sale negotiation</p>
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
                    <span className="text-navy">Deploy capital for deal purchases and rehab</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange font-bold">•</span>
                    <span className="text-navy">Review deal opportunities (no analysis needed)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange font-bold">•</span>
                    <span className="text-navy">Final approval on each deal (simple yes/no)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange font-bold">•</span>
                    <span className="text-navy">Receive monthly updates and profit distributions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-8">Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-navy mb-2">Are deals guaranteed?</h3>
                  <p className="text-navy/60">No. We promise solid opportunities based on your criteria, not guaranteed returns. Market conditions and execution matter.</p>
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-2">What if a deal falls through?</h3>
                  <p className="text-navy/60">You still pay the $1,699/month subscription. This covers our sourcing work and keeps the pipeline flowing with new opportunities.</p>
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-2">How many deals can I do simultaneously?</h3>
                  <p className="text-navy/60">Unlimited. The $1,699/month gives you access to 2-3 opportunities per month. You can pursue multiple deals at once.</p>
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-2">Minimum capital required?</h3>
                  <p className="text-navy/60">Typically $250k available (to cover purchase + rehab + holding on average deals). We can discuss custom arrangements.</p>
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-2">Can I do JV deals instead?</h3>
                  <p className="text-navy/60">Yes. If you prefer we co-invest, we can structure as 50/50 partnership instead of this model. Contact us to discuss.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/contact?tier=Tier%201%20-%20Hands-Off%20Capital"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange hover:bg-orange/90 text-white font-semibold rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
