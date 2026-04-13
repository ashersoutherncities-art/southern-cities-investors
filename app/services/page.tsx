import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";

const starterOffers = [
  {
    key: "operator-call",
    name: "Operator Strategy Call",
    price: "$97",
    description: "A quick decision-making call for investors who want clarity before entering a larger engagement.",
  },
  {
    key: "buy-box-review",
    name: "Buy Box Review",
    price: "$147",
    description: "A fast review of your market, criteria, and acquisition filters so you stop chasing weak deals.",
  },
  {
    key: "deal-audit",
    name: "Deal Audit",
    price: "$297",
    description: "A focused underwriting review for a live opportunity before you put capital at risk.",
  },
];

export default function Services() {
  return (
    <>
      <section className="bg-navy text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">
              Service Models
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Choose the level of execution support that matches your ambition.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl">
              Whether you want passive real estate exposure, guided growth, or a true
              operating partner to help you scale, Southern Cities Investors is built
              to help serious investors and operators move faster with better sourcing,
              stronger execution, and clearer accountability.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-navy/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy/5 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-navy mb-4">
              This is built for serious investors, not casual browsers.
            </h2>
            <p className="text-navy/65 leading-relaxed max-w-3xl mx-auto">
              Our offers are designed for people who want real off-market deal flow,
              disciplined underwriting, and an operating team that understands sourcing,
              construction, and exit execution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy/5 border-b border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Lower-ticket offers</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Start smaller if you are not ready for a monthly engagement.</h2>
            <p className="mt-4 text-lg text-navy/60">These are built for colder traffic, newer investors, or prospects who need a lower-friction first step before committing to a larger relationship.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {starterOffers.map((offer) => (
              <div key={offer.key} className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wide text-orange">Starter offer</p>
                <h3 className="text-2xl font-bold text-navy mt-3">{offer.name}</h3>
                <p className="text-orange font-semibold text-lg mt-2">{offer.price} one time</p>
                <p className="text-navy/60 mt-4 mb-8">{offer.description}</p>
                <AddToCartButton
                  itemKey={offer.key}
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-navy hover:bg-navy/90 text-white font-semibold rounded-lg transition-colors"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Three ways to work with us
            </h2>
            <p className="mt-4 text-lg text-navy/60">
              Each model is built for a different stage of investor growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-navy/10 rounded-lg p-8 hover:border-orange/50 transition-colors">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-navy mb-2">Tier 1: Hands-Off Capital</h3>
                <p className="text-orange font-semibold text-lg">$1,699/month</p>
              </div>
              <p className="text-navy/60 mb-6">
                Best for investors who want quality deal flow and strong execution without becoming the operator themselves.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3"><span className="text-orange font-bold mt-0.5">✓</span><span className="text-navy">Off-market sourcing and disciplined screening</span></li>
                <li className="flex items-start gap-3"><span className="text-orange font-bold mt-0.5">✓</span><span className="text-navy">Operator-led coordination and oversight</span></li>
                <li className="flex items-start gap-3"><span className="text-orange font-bold mt-0.5">✓</span><span className="text-navy">Execution and exit alignment</span></li>
                <li className="flex items-start gap-3"><span className="text-orange font-bold mt-0.5">✓</span><span className="text-navy">Built for passive but serious capital partners</span></li>
              </ul>
              <Link href="/services/tier-1" className="inline-flex items-center justify-center w-full px-6 py-3 bg-navy hover:bg-navy/90 text-white font-semibold rounded-lg transition-colors">
                See Tier 1 Details
              </Link>
            </div>

            <div className="bg-white border-2 border-orange rounded-lg p-8 shadow-lg transform scale-105">
              <div className="mb-6">
                <div className="inline-block bg-orange text-white px-3 py-1 rounded text-sm font-semibold mb-3">
                  Best Fit for Growth
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">Tier 2: Learning Operator</h3>
                <p className="text-orange font-semibold text-lg">$1,500/month</p>
              </div>
              <p className="text-navy/60 mb-6">
                Best for investors who want to learn the business inside real deals while still having guidance, structure, and execution support.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3"><span className="text-orange font-bold mt-0.5">✓</span><span className="text-navy">Deal flow paired with operator guidance</span></li>
                <li className="flex items-start gap-3"><span className="text-orange font-bold mt-0.5">✓</span><span className="text-navy">Full underwriting and ROI modeling</span></li>
                <li className="flex items-start gap-3"><span className="text-orange font-bold mt-0.5">✓</span><span className="text-navy">Execution recommendations and coaching</span></li>
                <li className="flex items-start gap-3"><span className="text-orange font-bold mt-0.5">✓</span><span className="text-navy">Aligned backend participation</span></li>
              </ul>
              <Link href="/services/tier-2" className="inline-flex items-center justify-center w-full px-6 py-3 bg-orange hover:bg-orange/90 text-white font-semibold rounded-lg transition-colors">
                See Tier 2 Details
              </Link>
            </div>

            <div className="bg-white border-2 border-navy/10 rounded-lg p-8 hover:border-orange/50 transition-colors">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-navy mb-2">Tier 3: Scaling Partner</h3>
                <p className="text-orange font-semibold text-lg">$3,000/month</p>
              </div>
              <p className="text-navy/60 mb-6">
                Best for active operators who already understand the business but need stronger systems, infrastructure, and operating leverage to scale.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3"><span className="text-orange font-bold mt-0.5">✓</span><span className="text-navy">High-touch execution support</span></li>
                <li className="flex items-start gap-3"><span className="text-orange font-bold mt-0.5">✓</span><span className="text-navy">Construction oversight and full-cycle coordination</span></li>
                <li className="flex items-start gap-3"><span className="text-orange font-bold mt-0.5">✓</span><span className="text-navy">Operating leverage for scale</span></li>
                <li className="flex items-start gap-3"><span className="text-orange font-bold mt-0.5">✓</span><span className="text-navy">Premium aligned backend economics</span></li>
              </ul>
              <Link href="/services/tier-3" className="inline-flex items-center justify-center w-full px-6 py-3 bg-navy hover:bg-navy/90 text-white font-semibold rounded-lg transition-colors">
                See Tier 3 Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Why serious investors choose Southern Cities
            </h2>
            <p className="mt-4 text-lg text-navy/60">
              You are not buying vague advice. You are buying sourcing discipline and execution infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold text-navy mb-4">Better Deal Flow</h3>
              <p className="text-navy/60">We pursue off-market opportunities through direct channels and disciplined criteria instead of waiting for leftovers.</p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold text-navy mb-4">Real Execution</h3>
              <p className="text-navy/60">Acquisition without execution is theory. We understand sourcing, construction, project management, and exits.</p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold text-navy mb-4">Aligned Economics</h3>
              <p className="text-navy/60">Our structure is designed so we benefit when the deal is strong, the execution is disciplined, and the exit is profitable.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold text-navy mb-4">GC Services</h3>
              <p className="text-navy/60 mb-4">Construction oversight, budget discipline, and project management through the broader Southern Cities platform.</p>
              <p className="text-orange font-semibold">Execution matters</p>
            </div>

            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold text-navy mb-4">Exit Support</h3>
              <p className="text-navy/60 mb-4">We think through the exit from the start, not at the end, so the business plan stays grounded in reality.</p>
              <p className="text-orange font-semibold">Profit is made in the plan</p>
            </div>

            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold text-navy mb-4">Investor Alignment</h3>
              <p className="text-navy/60 mb-4">Backend economics keep incentives aligned. We care about strong acquisitions, disciplined execution, and profitable exits.</p>
              <p className="text-orange font-semibold">Shared upside</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
            Ready to see which model fits your goals?
          </h2>
          <p className="text-lg text-navy/60 mb-10 max-w-2xl mx-auto">
            Apply for investor intake and we will point you toward the service model that best matches your capital, experience, and growth goals.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-orange hover:bg-orange/90 text-white font-semibold rounded-lg transition-colors text-lg">
            Apply for Investor Intake
          </Link>
        </div>
      </section>
    </>
  );
}
