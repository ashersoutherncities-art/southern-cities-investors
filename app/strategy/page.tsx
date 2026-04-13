import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Strategy | Southern Cities Investors",
  description:
    "Our acquisition strategy: 30-50% of ARV for rehabs, 20% or less of as-built value for land. SFR, multifamily, land, and commercial.",
};

export default function StrategyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">
            Acquisition Strategy
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Disciplined Buy Criteria. No Exceptions.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            Every acquisition must meet strict discount thresholds. We source
            off-market, underwrite conservatively, and close with certainty.
          </p>
        </div>
      </section>

      {/* Buy Criteria */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-12">Buy Criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-navy/10 rounded-xl p-8">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl font-bold text-orange">30-50%</span>
                <span className="text-navy/60 font-medium">of ARV</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Rehab Acquisitions
              </h3>
              <p className="text-navy/60 leading-relaxed">
                For properties requiring renovation, we target acquisition costs
                at 30-50% of the After Repair Value. This margin provides
                sufficient room for renovation costs, carrying costs, and
                acceptable returns even in adverse market conditions.
              </p>
            </div>

            <div className="border border-navy/10 rounded-xl p-8">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl font-bold text-orange">
                  &le;20%
                </span>
                <span className="text-navy/60 font-medium">
                  of as-built value
                </span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Land Acquisitions
              </h3>
              <p className="text-navy/60 leading-relaxed">
                For raw or entitled land, we acquire at 20% or less of the
                projected as-built value. This accounts for entitlement risk,
                development timeline, and ensures meaningful upside on exit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deal Types */}
      <section className="py-20 sm:py-24 bg-navy/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-12">
            Asset Classes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "Single-Family Residential",
                points: [
                  "Distressed and value-add SFR properties",
                  "Renovation and resale (fix-and-flip)",
                  "Rental stabilization and portfolio hold",
                  "Markets with strong rent-to-price ratios",
                ],
              },
              {
                title: "Multifamily",
                points: [
                  "Small to mid-size multifamily (2-50 units)",
                  "Value-add repositioning opportunities",
                  "Below-market rents with upside potential",
                  "Deferred maintenance creating acquisition discounts",
                ],
              },
              {
                title: "Land",
                points: [
                  "Raw land in path-of-growth corridors",
                  "Entitled lots at deep discounts",
                  "Infill parcels in established neighborhoods",
                  "Land banking for future development",
                ],
              },
              {
                title: "Commercial Retail & Office",
                points: [
                  "Distressed retail and office assets",
                  "Repositioning and re-tenanting opportunities",
                  "Below-replacement-cost acquisitions",
                  "Value creation through active management",
                ],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-navy/10 rounded-xl p-8"
              >
                <h3 className="text-xl font-bold text-navy mb-4">
                  {item.title}
                </h3>
                <ul className="space-y-3">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-navy/60"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange flex-shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-12">
            Off-Market Sourcing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Direct-to-Seller",
                description:
                  "Targeted outreach to motivated sellers including pre-foreclosure, probate, tax delinquent, and absentee owners. We negotiate directly to eliminate middleman costs.",
              },
              {
                title: "Wholesaler Network",
                description:
                  "Established relationships with wholesalers across 30+ markets who bring us first-look deal flow. We are a reliable, repeat buyer who closes on time.",
              },
              {
                title: "Creative Structuring",
                description:
                  "Seller financing, subject-to existing financing, lease options, and other creative instruments that allow us to acquire at favorable terms beyond just price.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-navy/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Have a Deal That Fits?</h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            If you have a property or portfolio that meets our criteria, we want
            to hear from you. We can provide an indication of interest within 24
            hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center mt-8 px-8 py-3.5 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-colors"
          >
            Submit a Deal
          </Link>
        </div>
      </section>
    </>
  );
}
