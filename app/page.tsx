import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">
              Southern Cities Investors
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Real estate profit without building the acquisitions machine yourself.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl">
              We help investors and operators source off-market properties, execute
              renovations and development, and drive profitable exits through one
              integrated platform. You bring the capital and the ambition. We bring
              the sourcing, underwriting, construction oversight, and execution.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-colors"
              >
                Apply to Partner
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-colors"
              >
                See If You Qualify
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Why It Matters */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Most investors do not need more information. They need execution.
            </h2>
            <p className="mt-4 text-lg text-navy/60">
              The bottleneck is rarely desire. It is finding the right deals,
              underwriting them correctly, managing rehab risk, and exiting
              profitably without wasting time or capital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Idle Capital",
                description:
                  "You want your money working in real estate, but not at the cost of becoming a full-time operator.",
              },
              {
                title: "Execution Risk",
                description:
                  "Finding a deal is one challenge. Managing underwriting, contractors, budgets, and timelines is another.",
              },
              {
                title: "Lack of Systems",
                description:
                  "Most investors stay stuck because they do not have a repeatable machine for sourcing, buying, executing, and exiting deals.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-navy/10 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
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

      {/* Investment Thesis */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Why Our Model Works
            </h2>
            <p className="mt-4 text-lg text-navy/60">
              We do not rely on luck, MLS scraps, or vague optimism. We rely on disciplined sourcing, strict buy criteria, and full-cycle execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Off-Market Sourcing",
                description:
                  "We acquire properties through direct-to-seller channels, wholesaler networks, and proprietary deal flow -- bypassing retail competition entirely.",
              },
              {
                title: "Deep Discount Criteria",
                description:
                  "Every acquisition meets strict buy criteria: 30-50% of ARV for rehabs, 20% or less of as-built value for land. No exceptions.",
              },
              {
                title: "Creative Finance",
                description:
                  "We structure deals using seller financing, subject-to, lease options, and other creative instruments to maximize returns and minimize capital deployment.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-navy/10 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
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

      {/* About / Services Synopsis */}
      <section className="py-20 sm:py-24 bg-navy/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">
                About Southern Cities Investors
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
                We do more than source deals. We execute the full investment cycle.
              </h2>
              <p className="mt-6 text-lg text-navy/70 leading-relaxed">
                Southern Cities Investors is the acquisitions and investment arm of
                Southern Cities Enterprises. We identify off-market opportunities,
                underwrite them with strict buy criteria, structure the acquisition,
                oversee renovation or development execution, and position assets for
                profitable resale, rental, or long-term hold.
              </p>
              <p className="mt-4 text-lg text-navy/70 leading-relaxed">
                That means our partners are not relying on a company that only finds
                deals. They are working with an operator that understands sourcing,
                construction, project management, and exit strategy under one roof.
              </p>
            </div>

            <div className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-navy mb-6">
                What We Provide
              </h3>
              <div className="space-y-5">
                {[
                  {
                    title: "Deal Sourcing",
                    description:
                      "Direct-to-seller outreach, wholesaler relationships, and proprietary lead flow to uncover off-market opportunities.",
                  },
                  {
                    title: "Underwriting & Structuring",
                    description:
                      "Disciplined acquisition analysis and creative finance structures designed to protect capital and improve returns.",
                  },
                  {
                    title: "Project Execution",
                    description:
                      "Renovation, development, and construction oversight through the broader Southern Cities platform.",
                  },
                  {
                    title: "Disposition & Exit Planning",
                    description:
                      "Clear business plans for resale, rental stabilization, or long-term value creation based on the asset and market.",
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

      {/* Asset Classes */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              What We Acquire
            </h2>
            <p className="mt-4 text-lg text-navy/60">
              Diversified across asset classes and geographies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Single-Family",
                description: "Distressed SFR for renovation and resale or rental stabilization.",
              },
              {
                title: "Multifamily",
                description: "Small to mid-size multifamily with value-add potential.",
              },
              {
                title: "Land",
                description: "Raw and entitled land at deep discounts to as-built value.",
              },
              {
                title: "Commercial",
                description: "Retail and office properties with repositioning upside.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-navy/10 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-navy/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof / Trust */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Built for serious investors and operators
            </h2>
            <p className="mt-4 text-lg text-navy/60">
              Southern Cities Investors is backed by a broader operating platform with real acquisition standards, construction execution, and exit discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Strict Buy Criteria",
                description:
                  "We target rehabs at roughly 30-50% of ARV and land at deep discounts to as-built value.",
              },
              {
                title: "Operator-Led Execution",
                description:
                  "We do not just source deals. We manage the path from acquisition through rehab, development, and exit.",
              },
              {
                title: "Aligned Incentives",
                description:
                  "Our structure is built so we win by helping partners acquire better deals and execute them profitably.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-navy/10 rounded-xl p-8">
                <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-navy/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            If you have capital, conviction, and want real execution, let’s talk.
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            We work best with serious operators, investors, and partners who want disciplined acquisitions and a real operating team behind the deal.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-colors"
            >
              Apply to Partner
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-colors"
            >
              Compare Service Models
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
