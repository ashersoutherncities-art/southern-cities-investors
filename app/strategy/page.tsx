import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How We Evaluate Opportunities | Southern Cities Investors",
  description:
    "See how Southern Cities Investors evaluates direct purchase, partnership, improvement, land, development, and investor-support opportunities across North Carolina and Southern markets.",
};

const criteriaSections = [
  {
    title: "Direct purchase criteria",
    description:
      "Direct purchase only makes sense when basis, repair scope, timeline, carrying costs, and exit still hold up under conservative review.",
  },
  {
    title: "Partnership criteria",
    description:
      "Partnership only makes sense when the property has meaningful upside, the structure is sensible, and the execution burden justifies a more involved path than a straightforward sale.",
  },
  {
    title: "Improvement and repositioning criteria",
    description:
      "Improvement or repositioning makes sense when the current condition, presentation, or use of the property is suppressing value and a better outcome may be unlocked through execution.",
  },
  {
    title: "Land and development criteria",
    description:
      "Land and transitional sites are judged more carefully because entitlement, zoning, timeline, capital needs, and buyer depth can change the answer quickly.",
  },
  {
    title: "Investor support criteria",
    description:
      "Investor support is a fit when the real need is stronger deal judgment, better underwriting, cleaner structure, better packaging, or tighter execution help.",
  },
];

const riskFactors = [
  "ARV",
  "Repair scope",
  "Timeline",
  "Resale demand",
  "Rental demand",
  "Permitting",
  "Title issues",
  "Access",
  "Zoning",
  "Financing",
  "Contractor risk",
  "Exit strategy",
];

const reasonsWePass = [
  "The basis is too weak once repair scope and real costs are treated honestly.",
  "The exit depends on optimistic assumptions rather than believable demand.",
  "Title, access, zoning, or permitting risk is too high for the structure being proposed.",
  "The timeline or execution burden is too heavy relative to the margin available.",
  "The numbers look good only if best-case assumptions come true.",
];

export default function StrategyPage() {
  return (
    <>
      <section className="bg-navy text-white py-20 sm:py-24">
        <div className="site-shell">
          <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">How We Evaluate Opportunities</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Serious review starts with fit, risk, and what can actually be executed.</h1>
          <p className="mt-6 text-lg text-white/70 max-w-3xl">
            Southern Cities Investors evaluates whether an opportunity should move toward direct purchase, partnership, improvement or repositioning, land or development review, or investor support. The goal is disciplined decision-making, not forcing every property into the same lane.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="site-shell">
          <div className="max-w-4xl mb-12">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Evaluation paths</p>
            <h2 className="text-3xl font-bold text-navy">Different opportunities require different criteria.</h2>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
            {criteriaSections.map((item) => (
              <div key={item.title} className="border border-navy/10 rounded-xl p-6 bg-white shadow-sm">
                <h3 className="text-lg font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-sm text-navy/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-navy/[0.03] border-y border-navy/10">
        <div className="site-shell grid lg:grid-cols-[1fr_1fr] gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold text-navy">Risk factors we evaluate</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4 text-navy/70 leading-relaxed">
              {riskFactors.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="text-orange font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-orange/20 bg-orange/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">ARV guidance</p>
            <div className="mt-6 space-y-4 text-sm text-navy/75 leading-relaxed">
              <p>
                For high-risk, heavy rehab, rural, or slower resale deals, pricing may need to be closer to 30 to 50 percent of ARV.
              </p>
              <p>
                For cleaner, stronger-demand assets with more reliable exits, we may review opportunities up to roughly 60 to 65 percent of ARV before repair costs, financing, and risk adjustments.
              </p>
              <p>
                Those ranges are directional, not blanket approval thresholds. Final decisions still depend on scope, timeline, title, demand, financing, and execution risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="site-shell grid lg:grid-cols-[1fr_0.95fr] gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold text-navy">Reasons we pass</h2>
            <div className="mt-6 space-y-4 text-navy/70 leading-relaxed">
              {reasonsWePass.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="text-orange font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Important note</p>
            <p className="mt-4 text-sm text-navy/70 leading-relaxed">
              Nothing on this page is investment advice, a securities offering, a partnership commitment, or a promise to purchase. It is a framework for how opportunities are reviewed before time and capital move.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white border-t border-navy/10">
        <div className="site-shell max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-navy">Route the opportunity into the right next step.</h2>
          <p className="mt-4 text-lg text-navy/60 max-w-3xl mx-auto">
            Owners should start with property review. Deal sources should submit the opportunity. Investors and operators who need deeper support should apply for investor support.
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
