import Link from 'next/link';
import AddToCartButton from '@/components/AddToCartButton';
import { digitalOffers, membershipOffers, starterOffers, tierSummaries } from '@/lib/service-data';

const buyerPaths = [
  {
    title: 'Getting started',
    description: 'Start with a template, tool, or narrated breakdown that sharpens your criteria before you need one-on-one help.',
    cta: 'Browse digital products',
    href: '/services',
  },
  {
    title: 'Active buyer',
    description: 'Use a strategy call, buy box review, or deal audit when you need a confident second set of eyes on a real decision.',
    cta: 'See starter offers',
    href: '/services',
  },
  {
    title: 'Ready for a deeper relationship',
    description: 'Move from Deal Flow Access into Deal Analysis, Deal Desk, Operator support, or Inner Circle as your pace and needs increase.',
    cta: 'Apply for investor intake',
    href: '/contact',
  },
];

const trustSignals = [
  {
    quote: 'I need a faster way to know whether a deal deserves more attention before I waste time underwriting the wrong thing.',
    label: 'Real acquisition pressure',
  },
  {
    quote: 'Better support means sharper criteria, faster feedback, and clearer decisions when money is actually at risk.',
    label: 'What separates useful help from noise',
  },
  {
    quote: 'The strongest investor relationships usually start with one clear win, then compound from there.',
    label: 'How momentum gets built',
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-navy text-white py-24 sm:py-32">
        <div className="site-shell">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            <div className="max-w-4xl">
              <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">
                Southern Cities Investors
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Start investing with clearer criteria, stronger deals, and real execution support.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl">
                Southern Cities Investors helps real estate investors get closer to better opportunities, make stronger deal decisions, and step into the right level of support as they grow. Start with the clearest next move for where you are now.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-colors"
                >
                  Get started with investing
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-colors"
                >
                  Apply for investor intake
                </Link>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-orange">Start here</p>
              <div className="mt-6 space-y-4">
                {[
                  'Who we are: Southern Cities Investors, the acquisitions and investor-support arm of Southern Cities Enterprises',
                  'What we do: help investors access opportunities, review deals, and move into deeper support with more confidence',
                  'How to start: choose a toolkit, call, or review based on where you are today',
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-white/80">
                    <span className="text-orange font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-xl bg-white/5 border border-white/10 p-5">
                <p className="text-sm font-semibold text-white">Start with the clearest next move</p>
                <p className="mt-2 text-sm text-white/65">If you are just getting started, begin with a toolkit, buy box review, or strategy call and build from there.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="site-shell">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div>
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-navy">
                  A better first move depends on where you are now.
                </h2>
                <p className="mt-4 text-lg text-navy/60">
                  Whether you are tightening your criteria, reviewing a live opportunity, or stepping into ongoing support, the right first move is different.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {buyerPaths.map((path) => (
                  <div key={path.title} className="bg-white border border-navy/10 rounded-xl p-8 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-navy mb-3">{path.title}</h3>
                    <p className="text-navy/60 leading-relaxed">{path.description}</p>
                    <Link href={path.href} className="inline-flex mt-6 text-sm font-semibold text-orange hover:text-orange/80 transition-colors">
                      {path.cta}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-navy/10 bg-navy/5 p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-orange">Closer to the deal</p>
              <h3 className="mt-3 text-2xl font-bold text-navy">Built around the decisions that matter when a real opportunity is on the table.</h3>
              <div className="mt-6 space-y-4">
                {trustSignals.map((item) => (
                  <div key={item.quote} className="rounded-xl border border-navy/10 bg-white p-5">
                    <p className="text-base leading-relaxed text-navy/75">“{item.quote}”</p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-orange">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-navy/5">
        <div className="site-shell">
          <div className="max-w-3xl mb-12">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Digital tools and education</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Downloadables, tools, and narrated training you can use right away.</h2>
            <p className="mt-4 text-lg text-navy/60">
              These offers help you sharpen criteria, pressure test assumptions, and learn faster before you commit to a higher-touch engagement.
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

      <section className="py-20 sm:py-24 bg-white">
        <div className="site-shell grid lg:grid-cols-[1fr_1fr] gap-8 items-start">
          <div className="rounded-2xl border border-orange/20 bg-orange/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Membership</p>
            {membershipOffers.map((offer) => (
              <div key={offer.key}>
                <h2 className="mt-3 text-3xl font-bold text-navy">{offer.name}</h2>
                <p className="text-orange font-semibold text-lg mt-2">{offer.price}</p>
                <p className="mt-4 text-navy/65">{offer.positioning}</p>
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

          <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Why investors choose this path</p>
            <h2 className="mt-3 text-3xl font-bold text-navy">A clearer buying path leads to stronger decisions.</h2>
            <div className="mt-6 space-y-5 text-navy/65 leading-relaxed">
              <p>
                Southern Cities offers practical value at every stage, from self-serve tools to recurring subscription packages and private higher-touch relationships.
              </p>
              <p>
                You can start small, solve a specific problem, and step into deeper support only when it makes sense for your goals and timeline.
              </p>
              <p>
                The result is a more direct, more useful experience for investors who want better guidance without the noise of a generic consulting pitch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-navy/[0.03]">
        <div className="site-shell">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">
                About Southern Cities Investors
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
                We help investors move from education to action with more confidence.
              </h2>
              <p className="mt-6 text-lg text-navy/70 leading-relaxed">
                Southern Cities Investors is the acquisitions and investment arm of Southern Cities Enterprises. We identify off-market opportunities,
                underwrite them with strict buy criteria, structure the acquisition, oversee renovation or development execution, and position assets for profitable resale, rental, or long-term hold.
              </p>
              <p className="mt-4 text-lg text-navy/70 leading-relaxed">
                Our offers are built to meet you where you are, from practical digital resources to high-touch support on acquisitions, execution, and growth.
              </p>
            </div>

            <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-navy mb-6">
                What you can access here
              </h3>
              <div className="space-y-5">
                {[
                  {
                    title: 'Templates and tools',
                    description: 'Downloadable assets that help investors tighten criteria and underwrite with more discipline before committing to live support.',
                  },
                  {
                    title: 'Educational media',
                    description: 'Short-form narrated breakdowns that make real deal analysis easier to understand and apply.',
                  },
                  {
                    title: 'Focused strategic reviews',
                    description: 'Calls, buy box work, and live deal audits that help you make better decisions under pressure.',
                  },
                  {
                    title: 'Subscription packages',
                    description: 'Progress from deal flow access and analysis into deal-desk support, operator guidance, and deeper private relationships.',
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <h4 className="text-base font-semibold text-navy">{item.title}</h4>
                    <p className="mt-1 text-sm text-navy/65 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="site-shell">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Focused help when the stakes get higher</h2>
            <p className="mt-4 text-lg text-navy/60">Starter offers give you direct help when a live decision needs experienced input.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {starterOffers.map((offer) => (
              <div key={offer.key} className="bg-white border border-navy/10 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-navy mb-3">{offer.name}</h3>
                <p className="text-orange font-semibold mb-3">{offer.price} one time</p>
                <p className="text-navy/60 leading-relaxed">{offer.positioning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="site-shell">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Built for serious investors at every stage</h2>
            <p className="mt-4 text-lg text-navy/60">
              When you are ready for more than education or one-off advice, the recurring tiers provide deeper support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-8">
            {tierSummaries.map((tier) => (
              <div key={tier.key} className="bg-white border border-navy/10 rounded-xl p-8">
                <h3 className="text-xl font-bold text-navy mb-3">{tier.name}</h3>
                <p className="text-orange font-semibold mb-3">{tier.price}</p>
                <p className="text-navy/60 leading-relaxed">{tier.whoItsFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-navy text-white">
        <div className="site-shell text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Start where you need help now, then grow into the right long-term relationship.
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-3xl mx-auto">
            If you want a low-friction starting point, begin with a toolkit, calculator, vault, membership, or Tier 1. If you already have a live opportunity or want deeper support, choose a starter offer, subscription package, or apply for investor intake.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-colors"
            >
              View all offers
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-colors"
            >
              Apply to partner
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
