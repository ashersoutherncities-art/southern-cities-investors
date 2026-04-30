import Link from 'next/link';

const options = [
  {
    path: 'Sell Directly',
    bestWhen: 'You want a straightforward path, value speed or certainty, or do not want to take on more execution risk.',
    whatHappens: 'We review the property, the ownership situation, and whether a direct sale is the cleanest fit.',
    outcome: 'Clarity on whether a direct sale is the right move now and what the next step should be.',
  },
  {
    path: 'Partner on the Property',
    bestWhen: 'The asset has upside, but unlocking it may require structure, capital, operating support, or a more strategic path than an immediate sale.',
    whatHappens: 'We evaluate whether a partnership structure makes more sense than selling outright.',
    outcome: 'A clearer view of whether the property should be structured around shared execution instead of a one-time exit.',
  },
  {
    path: 'Improve or Reposition Before Sale',
    bestWhen: 'The current condition, presentation, or use of the property may be suppressing value.',
    whatHappens: 'We review whether improving, cleaning up, repositioning, or staging the asset could create a stronger outcome before sale.',
    outcome: 'A more informed decision about whether added execution could justify a different path or timing.',
  },
];

const decisionFactors = [
  'The property itself: condition, location, complexity, and upside',
  'Your goals: speed, certainty, upside, control, and risk tolerance',
  'Capital needs and willingness to fund improvements or wait through execution',
  'Timeline, ownership situation, market conditions, and how much complexity the property can realistically support',
];

export default function PropertyOwnersPage() {
  return (
    <>
      <section className="bg-navy text-white py-24 sm:py-32">
        <div className="site-shell">
          <div className="max-w-4xl">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Property Owners and Landowners</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              If the property is underused, distressed, inherited, vacant, or nonperforming, the right answer depends on more than a quick offer.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/72 leading-relaxed max-w-3xl">
              Southern Cities Investors helps owners and landowners review whether the property should be sold directly, partnered on, or improved and repositioned before any sale decision gets locked in.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-colors">
                Start Property Review
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="site-shell">
          <div className="max-w-4xl mb-12">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Three options</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Sell, partner, or improve first. The right path depends on the property and the owner.</h2>
            <p className="mt-4 text-lg text-navy/60">
              Some properties call for a clean sale. Others may justify more structure, more patience, or more execution before value is captured.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-navy/10 bg-white shadow-sm">
            <table className="min-w-full text-left">
              <thead className="bg-navy/5 border-b border-navy/10">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-navy">Path</th>
                  <th className="px-6 py-4 text-sm font-semibold text-navy">Best When</th>
                  <th className="px-6 py-4 text-sm font-semibold text-navy">What Happens</th>
                  <th className="px-6 py-4 text-sm font-semibold text-navy">Outcome</th>
                </tr>
              </thead>
              <tbody>
                {options.map((option) => (
                  <tr key={option.path} className="border-b border-navy/10 align-top last:border-b-0">
                    <td className="px-6 py-5 text-sm font-semibold text-navy">{option.path}</td>
                    <td className="px-6 py-5 text-sm text-navy/70 leading-relaxed">{option.bestWhen}</td>
                    <td className="px-6 py-5 text-sm text-navy/70 leading-relaxed">{option.whatHappens}</td>
                    <td className="px-6 py-5 text-sm text-navy/70 leading-relaxed">{option.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-navy/5 border-y border-navy/10">
        <div className="site-shell grid lg:grid-cols-[1fr_1fr] gap-8 items-start">
          <div>
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">What determines the best path</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">The answer depends on the property, the owner, and the execution burden.</h2>
            <p className="mt-4 text-lg text-navy/60 leading-relaxed">
              We do not assume every owner should sell fast or every property should be pushed into a partnership story. The right move depends on what the asset can support and what outcome you actually want.
            </p>
          </div>

          <div className="rounded-2xl border border-orange/20 bg-orange/5 p-8">
            <div className="space-y-4 text-sm text-navy/75 leading-relaxed">
              {decisionFactors.map((item) => (
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
        <div className="site-shell max-w-4xl text-center">
          <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Start here</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">Get a property review before committing to the wrong path.</h2>
          <p className="mt-4 text-lg text-navy/60 max-w-3xl mx-auto">
            The first conversation is about fit, goals, timing, and the property itself. It is not a promise of purchase, partnership, financing, or securities offering.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-colors">
              Start Property Review
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
