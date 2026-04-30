import Link from 'next/link';

const primaryPaths = [
  {
    title: 'Sell Directly',
    description:
      'For owners who want a clean review of whether a direct sale makes sense now based on property condition, timeline, complexity, and goals.',
    points: [
      'Best for owners who want clarity, speed, and a straightforward path',
      'Focused on as-is situations, inherited property, vacancy, distress, and nonperforming assets',
    ],
  },
  {
    title: 'Partner on the Property',
    description:
      'For owners and landholders who see upside in the asset but do not want to carry the entire execution burden alone.',
    points: [
      'Useful when the property has real upside but needs structure, capital, or operating support',
      'Can fit land, transitional property, redevelopment scenarios, or more complex ownership goals',
    ],
  },
  {
    title: 'Improve or Reposition Before Sale',
    description:
      'For assets where cleaning up the scope, improving the property, or repositioning the opportunity may create a better outcome than selling immediately.',
    points: [
      'Useful when the current presentation or condition is suppressing value',
      'Best when the right move depends on capital needs, market timing, and execution complexity',
    ],
  },
];

const audiences = [
  'Property owners with inherited, vacant, distressed, or underused property',
  'Landowners deciding whether to sell, partner, hold, or reposition',
  'Investors who need a sharper read on opportunities, structure, or next steps',
  'Wholesalers and agents who want to submit opportunities for review',
  'Operators who need investor support around underwriting, packaging, or execution planning',
];

const evaluationFactors = [
  'Property type, location, current condition, and execution complexity',
  'Owner or operator goals, timeline, liquidity needs, and risk tolerance',
  'The difference between a clean direct sale, a partnership path, and an improvement path',
  'Whether the opportunity actually works after basis, scope, margin, and exit pressure are tested',
];

const differentiators = [
  {
    title: 'We do not start with one default answer',
    description:
      'Most real estate sites push every visitor toward the same outcome. Southern Cities starts with the property and works backward into the right path.',
  },
  {
    title: 'This is an evaluation and execution platform, not just a lead form',
    description:
      'We review whether a property should be sold, partnered on, improved, repositioned, submitted, or supported as an investment opportunity.',
  },
  {
    title: 'We are serious about fit, not just volume',
    description:
      'The goal is not to force every opportunity into a product or acquisition lane. The goal is to determine the path that actually makes sense.',
  },
];

const logicExamples = [
  {
    title: 'Distressed or inherited house',
    summary:
      'If the owner wants certainty and the property does not justify a longer execution path, direct sale may be the cleanest outcome.',
  },
  {
    title: 'Land or underused site',
    summary:
      'If the asset has more value through entitlement, repositioning, or structured execution, the right answer may be partnership or staged improvement instead of an immediate sale.',
  },
  {
    title: 'Investor-submitted opportunity',
    summary:
      'If the numbers are thin, scope is weak, or the exit only works on optimistic assumptions, the right answer may be pass, rework, or a tighter structure before capital moves.',
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-navy text-white py-24 sm:py-32">
        <div className="site-shell">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            <div className="max-w-4xl">
              <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Southern Cities Investors</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Not every property should be sold the same way.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-white/72 leading-relaxed max-w-3xl">
                Southern Cities Investors helps owners, landowners, investors, wholesalers, agents, and operators determine whether a property should be sold directly, partnered on, improved before sale, submitted as a deal, or reviewed as an investment opportunity.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-4">
                <Link href="/property-owners" className="inline-flex items-center justify-center px-8 py-3.5 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-colors">
                  Start Property Review
                </Link>
                <Link href="/submit-deal" className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-colors">
                  Submit a Deal
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-colors">
                  Apply for Investor Support
                </Link>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-orange">Primary paths</p>
              <div className="mt-6 space-y-4 text-white/80">
                {[
                  'Sell directly when speed, certainty, and simplicity matter most.',
                  'Partner when the asset has upside but needs structure, capital, or execution support.',
                  'Improve or reposition when a better outcome may come from changing the asset before sale.',
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
          <div className="max-w-4xl mb-12">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Choose the right path</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Three front-end paths, one serious evaluation process.</h2>
            <p className="mt-4 text-lg text-navy/60">
              The site is built to separate visitors cleanly, so owners, landowners, deal sources, and investors do not all get pushed through the same message.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {primaryPaths.map((path) => (
              <div key={path.title} className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-navy mb-3">{path.title}</h3>
                <p className="text-navy/65 leading-relaxed">{path.description}</p>
                <div className="mt-6 space-y-3 text-sm text-navy/70 leading-relaxed">
                  {path.points.map((point) => (
                    <div key={point} className="flex gap-3">
                      <span className="text-orange font-bold">✓</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-navy/5 border-y border-navy/10">
        <div className="site-shell grid lg:grid-cols-[1fr_1fr] gap-8 items-start">
          <div>
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Who we help</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Built for owners, deal sources, and operators who need a real answer.</h2>
            <div className="mt-6 space-y-4 text-navy/70 leading-relaxed">
              {audiences.map((audience) => (
                <div key={audience} className="flex gap-3">
                  <span className="text-orange font-bold">✓</span>
                  <span>{audience}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-orange/20 bg-orange/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">How we evaluate opportunities</p>
            <div className="mt-6 space-y-4 text-sm text-navy/75 leading-relaxed">
              {evaluationFactors.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="text-orange font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="site-shell">
          <div className="max-w-4xl mb-12">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Why Southern Cities is different</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">A more serious platform than a generic investor site or product store.</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {differentiators.map((item) => (
              <div key={item.title} className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-navy/65">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white border-t border-navy/10">
        <div className="site-shell">
          <div className="max-w-4xl mb-12">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Representative decision logic</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">What the first pass usually needs to answer.</h2>
            <p className="mt-4 text-lg text-navy/60">
              This is not investment advice or a public offering. It is a practical review framework used to determine fit, direction, and next steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {logicExamples.map((example) => (
              <div key={example.title} className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wide text-orange">Example</p>
                <h3 className="text-2xl font-bold text-navy mt-3">{example.title}</h3>
                <p className="mt-4 text-sm text-navy/65 leading-relaxed">{example.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-navy text-white">
        <div className="site-shell text-center max-w-4xl">
          <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Next step</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Start with the path that fits the property or opportunity best.</h2>
          <p className="mt-4 text-lg text-white/70 max-w-3xl mx-auto">
            Use property review if you own the asset, deal submission if you are bringing an opportunity, or investor support if you need help evaluating or structuring what comes next.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center">
            <Link href="/property-owners" className="inline-flex items-center justify-center px-8 py-3.5 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-colors">
              Start Property Review
            </Link>
            <Link href="/submit-deal" className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-colors">
              Submit a Deal
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-colors">
              Apply for Investor Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
