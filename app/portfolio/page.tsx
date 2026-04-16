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
    dealType: "SFR",
    motif: "Linear scope",
    accent: "from-orange/30 via-orange/10 to-transparent",
    summary:
      "Representative profile for a cosmetic-to-moderate rehab acquisition where the deal only works if basis discipline, scope control, and resale assumptions stay realistic.",
    focus: [
      "Buy at a meaningful discount to repaired value",
      "Stress rehab, holding, and fee stack before greenlighting",
      "Avoid deals that only work on optimistic resale assumptions",
    ],
    lenses: ["Basis discipline", "Scope control", "Exit realism", "Margin durability"],
    marginNote: "Strong deals in this category are filtered through basis, scope, and resale discipline before they ever feel exciting.",
  },
  {
    title: "Small Multifamily Repositioning",
    market: "Neighborhood-scale multifamily",
    badge: "Representative case profile",
    dealType: "Multifamily",
    motif: "Layered unit economics",
    accent: "from-navy/30 via-orange/10 to-transparent",
    summary:
      "Representative profile for a smaller multifamily opportunity where the edge comes from stronger basis, tighter renovation sequencing, and cleaner operating assumptions, not excitement.",
    focus: [
      "Prioritize basis discipline over story-driven upside",
      "Look at rent lift, turnover friction, and execution drag honestly",
      "Use underwriting to separate workable deals from attractive distractions",
    ],
    lenses: ["Rent lift realism", "Turnover friction", "Renovation sequence", "Execution drag"],
    marginNote: "The right multifamily opportunity survives slower lease-up, real friction, and more conservative operating assumptions.",
  },
  {
    title: "Land or Transitional Asset Review",
    market: "Growth corridor / secondary market",
    badge: "Representative case profile",
    dealType: "Land",
    motif: "Exit path discipline",
    accent: "from-orange/25 via-navy/10 to-transparent",
    summary:
      "Representative profile for land or transitional opportunities where value gets created by saying no to weak entitlement stories and filtering hard for realistic exit paths.",
    focus: [
      "Pressure test entitlement and exit assumptions early",
      "Stay conservative on timeline and basis",
      "Focus on what a real buyer will pay, not theoretical upside",
    ],
    lenses: ["Timeline realism", "Entitlement risk", "Buyer depth", "Exit clarity"],
    marginNote: "The goal is not theoretical upside. It is a believable path from acquisition to exit with enough room for risk.",
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
              <div key={study.title} className="rounded-[2rem] border border-navy/10 bg-white shadow-sm overflow-hidden">
                <div className={`h-40 bg-gradient-to-br ${study.accent} border-b border-navy/10 relative`}>
                  <div className="absolute inset-0 opacity-70">
                    <div className="absolute top-6 left-8 h-20 w-20 rounded-3xl border border-navy/10 bg-white/40 backdrop-blur-sm" />
                    <div className="absolute top-10 left-16 h-20 w-28 rounded-[2rem] border border-white/40 bg-navy/10" />
                    <div className="absolute bottom-6 right-10 h-16 w-36 rounded-full border border-orange/30 bg-orange/10" />
                  </div>
                  <div className="relative z-10 h-full flex items-end justify-between gap-6 px-8 pb-7">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-navy/50">{study.badge}</p>
                      <h3 className="mt-3 text-3xl font-bold text-navy">{study.title}</h3>
                      <p className="mt-2 text-sm font-medium text-navy/55 uppercase tracking-wide">{study.market}</p>
                    </div>
                    <div className="shrink-0 rounded-2xl border border-white/60 bg-white/70 px-4 py-3 text-right backdrop-blur-sm">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-navy/45">Deal type</p>
                      <p className="mt-1 text-lg font-bold text-navy">{study.dealType}</p>
                      <p className="text-xs text-navy/55 mt-1">{study.motif}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid xl:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
                    <div>
                      <p className="text-sm text-navy/65 leading-relaxed">{study.summary}</p>

                      <div className="mt-6 space-y-3 text-sm text-navy/72">
                        {study.focus.map((item) => (
                          <div key={item} className="flex gap-3">
                            <span className="text-orange font-bold">✓</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-3xl border border-navy/10 bg-navy text-white p-6 shadow-inner">
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-sm font-semibold uppercase tracking-wide text-orange">Underwriting lens</p>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/55">
                          What matters most
                        </span>
                      </div>

                      <div className="mt-6 grid sm:grid-cols-2 gap-4">
                        {study.lenses.map((lens) => (
                          <div key={lens} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <p className="text-xs uppercase tracking-wide text-white/50">Key filter</p>
                            <p className="mt-2 text-xl font-bold">{lens}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 rounded-2xl border border-orange/20 bg-orange/10 p-5">
                        <p className="text-xs uppercase tracking-wide text-orange">Margin lens</p>
                        <p className="mt-2 text-sm text-white/82 leading-relaxed">{study.marginNote}</p>
                      </div>
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
