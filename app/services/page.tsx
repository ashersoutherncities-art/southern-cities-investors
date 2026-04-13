import Link from 'next/link';
import AddToCartButton from '@/components/AddToCartButton';
import { digitalOffers, membershipOffers, starterOffers, tierSummaries } from '@/lib/service-data';

export default function Services() {
  return (
    <>
      <section className="bg-navy text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Service Models</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Start at the right price point, then move into the right operating tier.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl">
              Southern Cities Investors is now structured as a real product ladder: downloadable tools for colder traffic,
              educational media and membership for warming buyers, focused audits for live decisions, and monthly tiers for serious execution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-navy/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy/5 rounded-2xl p-8 text-center border border-navy/10">
            <h2 className="text-2xl font-bold text-navy mb-4">Built to convert different buyer temperatures, not force everyone into one offer.</h2>
            <p className="text-navy/65 leading-relaxed max-w-3xl mx-auto">
              Cold traffic needs a useful first purchase. Warm traffic needs a credibility-building product. Hot traffic needs direct operator help.
              This page gives each buyer a clean next move.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy/5 border-b border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Downloadables and educational media</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Lower-ticket products that create trust before a call.</h2>
            <p className="mt-4 text-lg text-navy/60">
              These products are built to turn colder visitors into buyers by solving one focused problem fast, while naturally pointing them toward the next paid step.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {digitalOffers.map((offer) => (
              <div key={offer.key} className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm flex flex-col">
                <p className="text-sm font-semibold uppercase tracking-wide text-orange">{offer.badge}</p>
                <h3 className="text-2xl font-bold text-navy mt-3">{offer.name}</h3>
                <p className="text-orange font-semibold text-lg mt-2">{offer.price}</p>
                <p className="text-sm text-navy/50 mt-2">{offer.turnaround}</p>
                <p className="text-navy/60 mt-4">{offer.positioning}</p>

                <div className="mt-6 space-y-3 text-sm text-navy/70">
                  {offer.deliverables.map((item) => (
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
        </div>
      </section>

      <section className="py-20 bg-white border-b border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
            <div>
              <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Entry-level recurring revenue</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy">Membership bridges education into higher-ticket services.</h2>
              <p className="mt-4 text-lg text-navy/60 max-w-3xl">
                Instead of relying only on one-time consults, this gives Southern Cities a lower-ticket recurring offer that keeps leads warm with templates,
                ElevenLabs educational breakdowns, and operator-guided next steps.
              </p>
            </div>

            {membershipOffers.map((offer) => (
              <div key={offer.key} className="rounded-2xl border border-orange/20 bg-orange/5 p-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-orange">{offer.badge}</p>
                <h3 className="mt-3 text-2xl font-bold text-navy">{offer.name}</h3>
                <p className="text-orange font-semibold text-lg mt-2">{offer.price}</p>
                <p className="text-sm text-navy/50 mt-2">{offer.turnaround}</p>
                <p className="text-navy/65 mt-4">{offer.positioning}</p>
                <div className="mt-6 space-y-3 text-sm text-navy/70">
                  {offer.deliverables.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="text-orange font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link href={`/services/${offer.slug}`} className="inline-flex items-center justify-center px-6 py-3 border border-navy/15 text-navy hover:border-orange/50 hover:text-orange font-semibold rounded-lg transition-colors">
                    View membership
                  </Link>
                  <AddToCartButton
                    itemKey={offer.key}
                    label="Start membership"
                    className="inline-flex items-center justify-center px-6 py-3 bg-navy hover:bg-navy/90 text-white font-semibold rounded-lg transition-colors"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy/5 border-b border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Starter offers</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Use a focused operator offer when the decision is real and time-sensitive.</h2>
            <p className="mt-4 text-lg text-navy/60">
              These are the next layer up from templates and media. Each one solves a more urgent buying problem and points to the right long-term tier.
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
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-navy/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">Ready to see which path fits your goals?</h2>
          <p className="text-lg text-navy/60 mb-10 max-w-2xl mx-auto">
            Start with a downloadable or membership if you need a lower-friction entry point, choose a starter offer if a decision is already on your desk,
            or apply for investor intake if you are ready for a serious operating relationship.
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
