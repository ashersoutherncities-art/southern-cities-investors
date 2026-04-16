import Link from 'next/link';
import AddToCartButton from '@/components/AddToCartButton';
import { digitalOffers, membershipOffers, starterOffers } from '@/lib/service-data';

const buyerPaths = [
  {
    title: 'Need a product first',
    description: 'Start with a tool, template, or narrated breakdown if you want a lower-cost first step you can use immediately.',
    cta: 'Browse products',
    href: '/services',
  },
  {
    title: 'Need a service for a real deal',
    description: 'Use a strategy call, buy box review, or deal audit when a live decision needs experienced eyes, not more guessing.',
    cta: 'See services',
    href: '/services',
  },
  {
    title: 'Need ongoing support',
    description: 'Apply for deeper recurring support when you want more than a one-time product or review.',
    cta: 'Apply for investor intake',
    href: '/contact',
  },
];

const trustSignals = [
  {
    title: 'Built for active buyers',
    description: 'The site is organized for investors making real buy, pass, renegotiate, and structuring decisions, not generic real estate curiosity.',
  },
  {
    title: 'Decision support before commitment',
    description: 'Products and services are designed to help buyers tighten criteria, pressure test deals, and avoid thin opportunities before more capital gets committed.',
  },
  {
    title: 'Clear next-step ladder',
    description: 'Lower-cost products lead into focused reviews, then into recurring support only when deal flow and complexity actually justify it.',
  },
];

const processSteps = [
  'Start with the format that matches your problem: product, service, or ongoing support.',
  'Use a defined review or intake process so the opportunity, criteria, and goals are clear before moving deeper.',
  'Move into higher-touch support only when the live deal flow or operating complexity warrants it.',
];

const credibilityPoints = [
  'Built around acquisition discipline, underwriting judgment, and operator-focused decision support.',
  'Structured to help buyers pressure test criteria, deal quality, and next steps before overcommitting capital.',
  'Connected to Southern Cities Enterprises, with a broader operating context beyond a one-page marketing shell.',
];

const buyerFit = [
  'Investors who want clearer buy, pass, and renegotiate decisions',
  'Operators who need sharper criteria, review support, and cleaner next steps',
  'Buyers who value disciplined execution over hype and random deal chasing',
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
                Better criteria. Better deals. Better decisions.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl">
                Tools, reviews, and investor support for buyers who want to move with more clarity and less wasted motion.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-colors"
                >
                  View offers
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
              <div className="mt-6 space-y-4 text-white/80">
                {[
                  'Use digital tools when you want a lower-cost starting point.',
                  'Choose a review offer when a real deal needs a second look.',
                  'Move into deeper support when you want ongoing help.',
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="text-orange font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="site-shell">
          <div className="max-w-3xl mb-12">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">How the site is structured</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Choose between products, services, or ongoing support.
            </h2>
            <p className="mt-4 text-lg text-navy/60">
              The cleanest next move depends on whether you need a self-serve product, a real-deal service, or a longer working relationship.
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

          <div className="mt-14 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
            <div className="rounded-2xl border border-navy/10 bg-navy/5 p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-orange">Why buyers work with this model</p>
              <div className="mt-6 space-y-5">
                {trustSignals.map((signal) => (
                  <div key={signal.title} className="rounded-xl border border-white/70 bg-white p-5">
                    <h3 className="text-lg font-bold text-navy">{signal.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy/65">{signal.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-orange/20 bg-orange/5 p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-orange">What to expect</p>
              <div className="mt-6 space-y-4 text-sm text-navy/75 leading-relaxed">
                {processSteps.map((step, index) => (
                  <div key={step} className="flex gap-4">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-white text-xs font-semibold">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/portfolio"
                className="inline-flex mt-8 text-sm font-semibold text-orange hover:text-orange/80 transition-colors"
              >
                Review portfolio and process notes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-navy/5">
        <div className="site-shell">
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-8 items-start mb-12">
            <div className="max-w-3xl">
              <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Products</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy">Practical investor products you can buy and use right away.</h2>
              <p className="mt-4 text-lg text-navy/60">
                These are self-serve digital products built to help you tighten criteria, underwrite faster, and learn from real examples before you step into a higher-touch service.
              </p>
            </div>

            <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-orange">Why this platform feels different</p>
              <div className="mt-5 space-y-4 text-sm text-navy/70 leading-relaxed">
                {credibilityPoints.map((point) => (
                  <div key={point} className="flex gap-3">
                    <span className="text-orange font-bold">✓</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
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
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Membership product</p>
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

                <div className="mt-8 rounded-xl border border-navy/10 bg-white p-5">
                  <p className="text-sm font-semibold uppercase tracking-wide text-orange">Best for</p>
                  <p className="mt-2 text-sm text-navy/70 leading-relaxed">
                    Investors who want steady deal-thinking reps between live opportunities, without jumping straight into higher-ticket support.
                  </p>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-navy/10 bg-white p-5">
                    <p className="text-sm font-semibold text-navy">What you get</p>
                    <p className="mt-2 text-sm text-navy/65 leading-relaxed">
                      A monthly resource drop, narrated breakdown, and practical prompts that keep your criteria tighter and your judgment sharper.
                    </p>
                  </div>
                  <div className="rounded-xl border border-navy/10 bg-white p-5">
                    <p className="text-sm font-semibold text-navy">Why it works</p>
                    <p className="mt-2 text-sm text-navy/65 leading-relaxed">
                      It gives newer and growing investors a lower-friction way to stay engaged, improve pattern recognition, and be more prepared when a real deal shows up.
                    </p>
                  </div>
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
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Services</p>
            <h2 className="mt-3 text-3xl font-bold text-navy">Get focused help when the decision is real.</h2>
            <div className="mt-6 space-y-5 text-navy/65 leading-relaxed">
              <p>
                These services are for live decisions, active deals, and investors who want experienced judgment layered onto the numbers.
              </p>
              <p>
                Start with one defined need, solve it well, and move deeper only when the deal flow justifies it.
              </p>
            </div>

            <div className="mt-8 grid gap-4">
              {starterOffers.map((offer) => (
                <div key={offer.key} className="rounded-xl border border-navy/10 p-5">
                  <h3 className="text-lg font-bold text-navy">{offer.name}</h3>
                  <p className="text-orange font-semibold mt-1">{offer.price} one time</p>
                  <p className="text-sm text-navy/60 mt-2 leading-relaxed">{offer.positioning}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white border-t border-navy/10">
        <div className="site-shell grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          <div className="rounded-2xl border border-orange/20 bg-orange/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Who tends to fit best</p>
            <h2 className="mt-3 text-3xl font-bold text-navy">This is built for buyers who want disciplined help, not noise.</h2>
            <div className="mt-6 space-y-4 text-sm text-navy/75 leading-relaxed">
              {buyerFit.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="text-orange font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-navy/10 bg-navy text-white p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Next step</p>
            <h2 className="mt-3 text-3xl font-bold">
              Start with the right format for the problem in front of you.
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl">
              Buy a product if you want a self-serve first step, choose a service if you need help on a real decision, or apply if you want a deeper relationship.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
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
        </div>
      </section>
    </>
  );
}
