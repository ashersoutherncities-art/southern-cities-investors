import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio and Deal Profile | Southern Cities Investors",
  description:
    "Representative acquisition profiles, operating criteria, and review standards for Southern Cities Investors.",
};

const caseStudies = [
  {
    title: "Single-Family Value-Add",
    market: "North Carolina infill market",
    badge: "Representative case profile",
    purchase: "$118,000",
    rehab: "$52,000",
    totalBasis: "$186,000",
    projectedExit: "$255,000",
    projectedMargin: "$69,000 before financing and selling friction",
    summary:
      "Representative profile for a cosmetic-to-moderate rehab acquisition where the deal only works if basis discipline, scope control, and resale assumptions stay realistic.",
    focus: [
      "Buy at a meaningful discount to repaired value",
      "Stress rehab, holding, and fee stack before greenlighting",
      "Avoid deals that only work on optimistic resale assumptions",
    ],
  },
  {
    title: "Small Multifamily Repositioning",
    market: "Neighborhood-scale multifamily",
    badge: "Representative case profile",
    purchase: "$410,000",
    rehab: "$95,000",
    totalBasis: "$538,000",
    projectedExit: "$690,000",
    projectedMargin: "$152,000 before financing drag and lease-up friction",
    summary:
      "Representative profile for a smaller multifamily opportunity where the edge comes from stronger basis, tighter renovation sequencing, and cleaner operating assumptions, not excitement.",
    focus: [
      "Prioritize basis discipline over story-driven upside",
      "Look at rent lift, turnover friction, and execution drag honestly",
      "Use underwriting to separate workable deals from attractive distractions",
    ],
  },
  {
    title: "Land or Transitional Asset Review",
    market: "Growth corridor / secondary market",
    badge: "Representative case profile",
    purchase: "$145,000",
    rehab: "$35,000 in pre-development, clearing, and hold costs",
    totalBasis: "$192,000",
    projectedExit: "$310,000",
    projectedMargin: "$118,000 before entitlement and timing risk",
    summary:
      "Representative profile for land or transitional opportunities where value gets created by saying no to weak entitlement stories and filtering hard for realistic exit paths.",
    focus: [
      "Pressure test entitlement and exit assumptions early",
      "Stay conservative on timeline and basis",
      "Focus on what a real buyer will pay, not theoretical upside",
    ],
  },
];

const operatingStandards = [
  "Clear acquisition criteria before live offers start going out.",
  "Review for basis, rehab pressure, holding drag, and margin durability.",
  "Use products for self-serve prep, services for live decisions, and recurring support only when deal flow justifies it.",
  "Keep positioning grounded in disciplined buying and execution, not inflated promises.",
];

const notes = [
  "These are representative case profiles built to show the underwriting lens and decision standard applied to opportunities that fit the model.",
  "They are included to make the site more concrete for serious buyers, not to imply every deal performs the same way.",
  "Actual outcomes always depend on basis, scope, financing, timeline, market conditions, and execution quality.",
];

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-navy text-white py-20 sm:py-24">
        <div className="site-shell">
          <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">
            Portfolio and deal profile
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight max-w-4xl">
            A clearer view of what Southern Cities Investors is built to evaluate and support.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-3xl">
            This page is designed to show how opportunities are framed, how decisions are pressure tested, and what kind of acquisition profiles fit the model best.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white border-b border-navy/10">
        <div className="site-shell grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-start">
          <div>
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">What this page is for</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">This is a representative proof page, not a vanity gallery.</h2>
            <p className="mt-4 text-lg text-navy/60 leading-relaxed">
              The strongest signal for the right buyer is not hype. It is seeing how opportunities are filtered, how margins are protected, and what standards get applied before time and capital are committed.
            </p>
          </div>

          <div className="rounded-2xl border border-orange/20 bg-orange/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Operating standards</p>
            <div className="mt-6 space-y-4 text-sm text-navy/75 leading-relaxed">
              {operatingStandards.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="text-orange font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-navy/5 border-b border-navy/10">
        <div className="site-shell">
          <div className="max-w-3xl mb-12">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Representative case studies</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Concrete deal snapshots that show how opportunities are judged.</h2>
            <p className="mt-4 text-lg text-navy/60">
              These representative cases are here to make the platform more tangible for serious buyers. The point is not hype. The point is deal logic, margin discipline, and fit.
            </p>
          </div>

          <div className="grid gap-8">
            {caseStudies.map((study) => (
              <div key={study.title} className="rounded-3xl border border-navy/10 bg-white p-8 shadow-sm">
                <div className="grid xl:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-orange">{study.badge}</p>
                    <h3 className="mt-3 text-3xl font-bold text-navy">{study.title}</h3>
                    <p className="mt-2 text-sm font-medium text-navy/50 uppercase tracking-wide">{study.market}</p>
                    <p className="mt-5 text-sm text-navy/65 leading-relaxed">{study.summary}</p>

                    <div className="mt-6 space-y-3 text-sm text-navy/70">
                      {study.focus.map((item) => (
                        <div key={item} className="flex gap-3">
                          <span className="text-orange font-bold">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-navy/10 bg-navy text-white p-6">
                    <p className="text-sm font-semibold uppercase tracking-wide text-orange">Representative numbers</p>
                    <div className="mt-6 grid sm:grid-cols-2 gap-4">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-wide text-white/50">Purchase</p>
                        <p className="mt-2 text-2xl font-bold">{study.purchase}</p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-wide text-white/50">Rehab / project costs</p>
                        <p className="mt-2 text-2xl font-bold">{study.rehab}</p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-wide text-white/50">Total basis</p>
                        <p className="mt-2 text-2xl font-bold">{study.totalBasis}</p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-wide text-white/50">Projected exit value</p>
                        <p className="mt-2 text-2xl font-bold">{study.projectedExit}</p>
                      </div>
                    </div>

                    <div className="mt-5 rounded-xl border border-orange/20 bg-orange/10 p-5">
                      <p className="text-xs uppercase tracking-wide text-orange">Margin lens</p>
                      <p className="mt-2 text-sm text-white/80 leading-relaxed">{study.projectedMargin}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="site-shell grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Notes on interpretation</p>
            <div className="mt-5 space-y-4 text-sm text-navy/70 leading-relaxed">
              {notes.map((note) => (
                <div key={note} className="flex gap-3">
                  <span className="text-orange font-bold">•</span>
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-navy/10 bg-navy text-white p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">For qualified conversations</p>
            <h2 className="mt-3 text-3xl font-bold">Need a more detailed conversation?</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Buyers, partners, and operators who want to discuss fit, deal profile, or working structure can use the investor intake to start the right conversation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-orange hover:bg-orange/90 text-white font-semibold rounded-lg transition-colors"
              >
                Apply for investor intake
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/15 text-white hover:border-white/30 font-semibold rounded-lg transition-colors"
              >
                Review products and services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
