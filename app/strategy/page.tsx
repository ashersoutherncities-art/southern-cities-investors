import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Opportunities Are Evaluated | Southern Cities Investors",
  description:
    "See how Southern Cities Investors evaluates property, deal, and partnership opportunities across direct sale, submission, repositioning, and investor support paths.",
};

const evaluationBlocks = [
  {
    title: "Basis and margin discipline",
    description:
      "We start with basis, scope, exit pressure, and whether the margin story still holds when assumptions become more conservative.",
  },
  {
    title: "Execution reality",
    description:
      "The right answer depends on what can actually be executed, not just what sounds attractive in a summary or pitch deck.",
  },
  {
    title: "Path fit",
    description:
      "Some opportunities are best for direct sale, some for structured partnership, some for improvement or repositioning, and some should simply be passed on.",
  },
];

const opportunityTypes = [
  "Single-family and small multifamily where basis, scope, and exit can be tested clearly",
  "Land or transitional assets where timing, entitlement, and buyer depth matter more than headline upside",
  "Wholesaler, agent, or operator submissions that have enough information to judge fit honestly",
  "Situations where owner goals, timeline, and complexity materially affect whether the right path is sell, hold, partner, or improve",
];

const disciplineNotes = [
  "Published ranges are directional, not blanket promises or auto-approval thresholds.",
  "Rehab opportunities generally need meaningful room after rehab, carrying costs, fees, and exit friction are treated conservatively.",
  "Land and redevelopment opportunities are judged even more carefully because timeline, entitlement, capital, and execution risk can distort apparent upside.",
  "If an opportunity only works under optimistic assumptions, it is usually not as strong as it first appears.",
];

export default function StrategyPage() {
  return (
    <>
      <section className="bg-navy text-white py-20 sm:py-24">
        <div className="site-shell">
          <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">How We Evaluate Opportunities</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Serious review starts with fit, basis, and execution reality.</h1>
          <p className="mt-6 text-lg text-white/70 max-w-3xl">
            Southern Cities Investors is built to evaluate whether a property or deal should move toward direct sale, partnership, repositioning, submission, or deeper investor support. The point is disciplined review, not forcing every opportunity into the same lane.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="site-shell">
          <div className="max-w-4xl mb-12">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Core evaluation lens</p>
            <h2 className="text-3xl font-bold text-navy">Three questions drive the first serious review.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {evaluationBlocks.map((item) => (
              <div key={item.title} className="border border-navy/10 rounded-xl p-8 bg-white shadow-sm">
                <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-navy/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-navy/[0.03] border-y border-navy/10">
        <div className="site-shell grid lg:grid-cols-[1fr_1fr] gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold text-navy">What usually fits the platform</h2>
            <div className="mt-6 space-y-4 text-navy/70 leading-relaxed">
              {opportunityTypes.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="text-orange font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-orange/20 bg-orange/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Important discipline note</p>
            <div className="mt-6 space-y-4 text-sm text-navy/75 leading-relaxed">
              {disciplineNotes.map((item) => (
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
          <h2 className="text-3xl font-bold text-navy">If the opportunity is real, route it to the right next step.</h2>
          <p className="mt-4 text-lg text-navy/60 max-w-3xl mx-auto">
            Owners should start with property review. Deal sources should submit the opportunity. Investors and operators who need deeper help should apply for investor support.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/property-owners" className="inline-flex items-center justify-center px-8 py-3.5 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-colors">
              Start Property Review
            </Link>
            <Link href="/submit-deal" className="inline-flex items-center justify-center px-8 py-3.5 border border-navy/15 text-navy hover:border-orange/50 hover:text-orange font-semibold rounded-lg transition-colors">
              Submit a Deal
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 border border-navy/15 text-navy hover:border-orange/50 hover:text-orange font-semibold rounded-lg transition-colors">
              Apply for Investor Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
