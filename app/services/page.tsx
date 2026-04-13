import Link from 'next/link';
import AddToCartButton from '@/components/AddToCartButton';
import { starterOffers, tierSummaries, upcomingVideoOffer } from '@/lib/service-data';

export default function Services() {
  return (
    <>
      <section className="bg-navy text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Service Models</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Pick the right starting point, then move into the right operating tier.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl">
              Southern Cities Investors is built for people who want real deal flow, clearer underwriting,
              and stronger execution. Start with a lower-friction audit or strategy offer, or move straight
              into the monthly tier that matches your ambition.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-navy/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy/5 rounded-2xl p-8 text-center border border-navy/10">
            <h2 className="text-2xl font-bold text-navy mb-4">This is built for serious investors, not casual browsers.</h2>
            <p className="text-navy/65 leading-relaxed max-w-3xl mx-auto">
              Our offers are structured to answer one question fast: do you need clarity on one decision,
              tighter acquisition criteria, or a real operator behind your next season of growth?
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy/5 border-b border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Starter offers</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Use a lower-ticket offer to get traction before a bigger engagement.</h2>
            <p className="mt-4 text-lg text-navy/60">
              These are designed as real conversion assets, not placeholder products. Each one solves a specific buying problem and naturally points to the right Tier 1, 2, or 3 upgrade path.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {starterOffers.map((offer) => (
              <div key={offer.key} className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm flex flex-col">
                <p className="text-sm font-semibold uppercase tracking-wide text-orange">Starter offer</p>
                <h3 className="text-2xl font-bold text-navy mt-3">{offer.name}</h3>
                <p className="text-orange font-semibold text-lg mt-2">{offer.price} one time</p>
                <p className="text-sm text-navy/50 mt-2">{offer.turnaround}</p>
                <p className="text-navy/60 mt-4">{offer.positioning}</p>

                <div className="mt-6 rounded-xl bg-navy/5 p-5 border border-navy/10">
                  <p className="text-xs font-semibold uppercase tracking-wide text-orange">Best for</p>
                  <p className="text-sm text-navy/70 mt-2">{offer.whoItsFor}</p>
                </div>

                <div className="mt-6 space-y-3 text-sm text-navy/70">
                  {offer.deliverables.slice(0, 3).map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="text-orange font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-navy/10 space-y-3 mt-auto">
                  <Link href={`/services/${offer.slug}`} className="inline-flex items-center justify-center w-full px-6 py-3 border border-navy/15 text-navy hover:border-orange/50 hover:text-orange font-semibold rounded-lg transition-colors">
                    View details
                  </Link>
                  <AddToCartButton
                    itemKey={offer.key}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-navy hover:bg-navy/90 text-white font-semibold rounded-lg transition-colors"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-orange/20 bg-white p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="max-w-3xl">
                <div className="inline-flex items-center rounded-full bg-orange/10 px-4 py-2 text-sm font-semibold text-orange">
                  {upcomingVideoOffer.status}
                </div>
                <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-navy">{upcomingVideoOffer.name}</h3>
                <p className="mt-4 text-navy/65 leading-relaxed">{upcomingVideoOffer.description}</p>
              </div>
              <div className="rounded-xl bg-navy/5 p-5 border border-navy/10 max-w-sm">
                <p className="text-sm font-semibold text-navy">Planned role in the funnel</p>
                <p className="mt-2 text-sm text-navy/65">Use short video education to warm colder traffic, then direct the right buyers into Operator Strategy Call, Buy Box Review, or Deal Audit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tiers" className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Tier 1, 2, and 3, matched to where you are now</h2>
            <p className="mt-4 text-lg text-navy/60">
              Choose the operating relationship that fits your capital, experience level, and appetite for involvement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tierSummaries.map((tier, index) => (
              <div
                key={tier.key}
                className={`bg-white rounded-lg p-8 border-2 transition-colors ${
                  index === 1 ? 'border-orange shadow-lg md:scale-105' : 'border-navy/10 hover:border-orange/50'
                }`}
              >
                {index === 1 ? (
                  <div className="inline-block bg-orange text-white px-3 py-1 rounded text-sm font-semibold mb-3">
                    Recommended upgrade path
                  </div>
                ) : null}
                <p className="text-sm font-semibold uppercase tracking-wide text-orange">{tier.tag}</p>
                <h3 className="text-2xl font-bold text-navy mt-3">{tier.name}</h3>
                <p className="text-orange font-semibold text-lg mt-2">{tier.price}</p>
                <p className="text-navy/60 mt-4 mb-6">{tier.whoItsFor}</p>
                <div className="space-y-3 mb-8">
                  {tier.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-orange font-bold mt-0.5">✓</span>
                      <span className="text-navy">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href={tier.href} className={`inline-flex items-center justify-center w-full px-6 py-3 font-semibold rounded-lg transition-colors ${index === 1 ? 'bg-orange hover:bg-orange/90 text-white' : 'bg-navy hover:bg-navy/90 text-white'}`}>
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-navy/10 bg-navy/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-orange">Tier 1</p>
              <h3 className="mt-2 text-xl font-bold text-navy">Passive capital with real operator support</h3>
              <p className="mt-3 text-navy/65">Best for investors who want deal access and execution without becoming the operator.</p>
            </div>
            <div className="rounded-2xl border border-orange/20 bg-orange/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-orange">Tier 2</p>
              <h3 className="mt-2 text-xl font-bold text-navy">The bridge from education to repeatable action</h3>
              <p className="mt-3 text-navy/65">Best when the right next move is learning inside live deals instead of consuming more content alone.</p>
            </div>
            <div className="rounded-2xl border border-navy/10 bg-navy/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-orange">Tier 3</p>
              <h3 className="mt-2 text-xl font-bold text-navy">More leverage for proven operators</h3>
              <p className="mt-3 text-navy/65">Best for people who already do deals and now need systems, throughput, and execution capacity.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Why serious investors choose Southern Cities</h2>
            <p className="mt-4 text-lg text-navy/60">You are not buying vague advice. You are buying sourcing discipline and execution infrastructure.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold text-navy mb-4">Better deal flow</h3>
              <p className="text-navy/60">We pursue off-market opportunities through direct channels and disciplined criteria instead of waiting for leftovers.</p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold text-navy mb-4">Real execution</h3>
              <p className="text-navy/60">Acquisition without execution is theory. We understand sourcing, construction, project management, and exits.</p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold text-navy mb-4">Aligned economics</h3>
              <p className="text-navy/60">Our structure is designed so we benefit when the deal is strong, the execution is disciplined, and the exit is profitable.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold text-navy mb-4">Operator lens</h3>
              <p className="text-navy/60 mb-4">We are not just giving advice from the sidelines. We think like people who have to buy, build, and exit the asset.</p>
              <p className="text-orange font-semibold">Execution matters</p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold text-navy mb-4">Clear upgrade path</h3>
              <p className="text-navy/60 mb-4">Starter offers lead naturally into the right monthly tier, so buyers are not forced into an oversized commitment on day one.</p>
              <p className="text-orange font-semibold">Better conversion, better fit</p>
            </div>
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-bold text-navy mb-4">Investor alignment</h3>
              <p className="text-navy/60 mb-4">Backend economics keep incentives aligned. We care about strong acquisitions, disciplined execution, and profitable exits.</p>
              <p className="text-orange font-semibold">Shared upside</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">Ready to see which path fits your goals?</h2>
          <p className="text-lg text-navy/60 mb-10 max-w-2xl mx-auto">
            Start with a lower-ticket offer if you need clarity first, or apply for investor intake and we will point you toward the tier that best matches your capital, experience, and growth goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-orange hover:bg-orange/90 text-white font-semibold rounded-lg transition-colors text-lg">
              Apply for investor intake
            </Link>
            <Link href="/cart" className="inline-flex items-center justify-center px-10 py-4 border border-navy/15 text-navy hover:border-orange/50 hover:text-orange font-semibold rounded-lg transition-colors text-lg">
              Go to cart
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
