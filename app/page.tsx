import Link from 'next/link';
import AddToCartButton from '@/components/AddToCartButton';
import { digitalOffers, membershipOffers, starterOffers, tierSummaries } from '@/lib/service-data';

const buyerPaths = [
  {
    title: 'Cold traffic',
    description: 'Start with a template, tool, or narrated educational product that builds trust before a live call.',
    cta: 'Browse digital products',
    href: '/services',
  },
  {
    title: 'Warm buyer',
    description: 'Use a strategy call, buy-box review, or deal audit when you need help with a real decision fast.',
    cta: 'See starter offers',
    href: '/services',
  },
  {
    title: 'Ready operator',
    description: 'Move into Tier 1, 2, or 3 when you want real sourcing, underwriting, and execution support.',
    cta: 'Apply for a fit call',
    href: '/contact',
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-navy text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            <div className="max-w-4xl">
              <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">
                Southern Cities Investors
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                From first paid touch to full operator support, built for real estate investors who want traction.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl">
                We help investors move from scattered interest to clearer criteria, better underwriting, and stronger execution.
                Start with templates, tools, or ElevenLabs educational products, then graduate into live strategy, deal review, and ongoing operator-backed tiers.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-colors"
                >
                  Explore the product ladder
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
              <p className="text-sm font-semibold uppercase tracking-wide text-orange">How the funnel now works</p>
              <div className="mt-6 space-y-4">
                {[
                  'Step 1: lower-ticket templates, tools, and narrated educational media',
                  'Step 2: focused starter offers for strategy, buy-box, and live-deal review',
                  'Step 3: Tier 1, 2, or 3 for recurring operator support and execution',
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-white/80">
                    <span className="text-orange font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-xl bg-white/5 border border-white/10 p-5">
                <p className="text-sm font-semibold text-white">Best next move for most new visitors</p>
                <p className="mt-2 text-sm text-white/65">Start with the Buy Box Toolkit or Deal Breakdown Vault, then move into a call or review when the decision becomes real.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Different buyer temperatures need different offers.
            </h2>
            <p className="mt-4 text-lg text-navy/60">
              This site is now positioned to convert colder, warmer, and ready-now investors instead of forcing every visitor into the same application CTA.
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
      </section>

      <section className="py-20 sm:py-24 bg-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Lower-ticket productization</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Downloadables, tools, and ElevenLabs-powered education.</h2>
            <p className="mt-4 text-lg text-navy/60">
              These are the strongest practical front-end offers for this stage: simple to understand, easy to buy, and naturally connected to the higher-ticket services behind them.
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_1fr] gap-8 items-start">
          <div className="rounded-2xl border border-orange/20 bg-orange/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Entry-level membership</p>
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
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Why this matters</p>
            <h2 className="mt-3 text-3xl font-bold text-navy">The positioning is tighter and the buying path is clearer.</h2>
            <div className="mt-6 space-y-5 text-navy/65 leading-relaxed">
              <p>
                Southern Cities is now framed less like a generic investor site and more like an operator-led ladder with specific offers for each stage of buyer readiness.
              </p>
              <p>
                Lower-ticket products build trust. Starter offers create momentum around live decisions. Monthly tiers capture the serious buyers who want execution, not more theory.
              </p>
              <p>
                That makes the site more useful to traffic now and gives Darius room to launch actual downloadable assets and ElevenLabs educational products without reworking the positioning again.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-navy/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">
                About Southern Cities Investors
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
                We do more than source deals. We build the bridge from education to execution.
              </h2>
              <p className="mt-6 text-lg text-navy/70 leading-relaxed">
                Southern Cities Investors is the acquisitions and investment arm of Southern Cities Enterprises. We identify off-market opportunities,
                underwrite them with strict buy criteria, structure the acquisition, oversee renovation or development execution, and position assets for profitable resale, rental, or long-term hold.
              </p>
              <p className="mt-4 text-lg text-navy/70 leading-relaxed">
                Now the public offer stack reflects that depth, from lightweight digital products and narrated learning assets all the way up to recurring operator support.
              </p>
            </div>

            <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-navy mb-6">
                What the platform now provides
              </h3>
              <div className="space-y-5">
                {[
                  {
                    title: 'Templates and tools',
                    description: 'Downloadable assets that help newer buyers tighten criteria and underwrite cleaner before committing to live support.',
                  },
                  {
                    title: 'Educational media',
                    description: 'Short-form ElevenLabs-led breakdowns that warm traffic through clear operator thinking, not generic info products.',
                  },
                  {
                    title: 'Focused operator reviews',
                    description: 'Calls, buy-box work, and live-deal audits that solve immediate problems and create the right upsell path.',
                  },
                  {
                    title: 'Full-cycle execution',
                    description: 'Monthly tiers for sourcing, underwriting, construction oversight, and exit planning under one roof.',
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Focused help when the stakes get higher</h2>
            <p className="mt-4 text-lg text-navy/60">Starter offers bridge cold education and full operator engagement.</p>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Built for serious investors and operators</h2>
            <p className="mt-4 text-lg text-navy/60">
              When buyers are ready for more than education, the recurring tiers carry the execution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Start with the right first purchase, then grow into the right long-term relationship.
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-3xl mx-auto">
            If you need a low-friction entry point, start with a toolkit, calculator, vault, or membership. If you already have a real decision on your desk, choose a starter offer or apply for investor intake.
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
