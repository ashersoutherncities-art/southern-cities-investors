import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Southern Cities Investors",
  description:
    "Learn about Darius Walton and Southern Cities Investors -- Charlotte, NC-based real estate acquisitions firm focused on deep discount properties.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">
            About Us
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Built on Discipline, Driven by Data
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            Southern Cities Investors is a division of Southern Cities
            Enterprises, led by Darius Walton out of Charlotte, North Carolina.
          </p>
        </div>
      </section>

      {/* Principal */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Darius Walton
              </h2>
              <p className="text-sm font-semibold text-orange uppercase tracking-wider mb-6">
                Principal / Managing Director
              </p>
              <div className="space-y-4 text-navy/70 leading-relaxed">
                <p>
                  Darius Walton holds a Master&apos;s degree in Real Estate
                  Finance and Development from North Carolina State University.
                  His academic foundation in real estate finance, combined with
                  hands-on operational experience, drives a disciplined approach
                  to acquisitions and portfolio management.
                </p>
                <p>
                  Based in Charlotte, NC, Darius has built expertise across 30+
                  real estate markets, developing a deep understanding of
                  local market dynamics, pricing inefficiencies, and value
                  creation opportunities that institutional buyers and retail
                  investors consistently overlook.
                </p>
                <p>
                  Under his leadership, Southern Cities Investors focuses
                  exclusively on acquiring properties at significant discounts
                  to market value through off-market sourcing, direct seller
                  engagement, and creative deal structuring. The firm&apos;s buy
                  criteria are non-negotiable: every deal must meet strict
                  discount thresholds before capital is deployed.
                </p>
              </div>
            </div>

            <div className="bg-navy/[0.03] rounded-xl p-8 space-y-6">
              <h3 className="text-xl font-bold text-navy">At a Glance</h3>
              {[
                {
                  label: "Education",
                  value:
                    "M.S. Real Estate Finance & Development, NC State University",
                },
                { label: "Headquarters", value: "Charlotte, North Carolina" },
                { label: "Market Coverage", value: "30+ markets nationally" },
                {
                  label: "Focus",
                  value:
                    "Deep discount acquisitions via off-market sourcing",
                },
                {
                  label: "Parent Company",
                  value: "Southern Cities Enterprises",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-b border-navy/10 pb-4 last:border-0 last:pb-0"
                >
                  <p className="text-sm font-semibold text-navy/40 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="mt-1 text-navy font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 sm:py-24 bg-navy/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">
            Our Operating Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Buy Right",
                description:
                  "The return is made at acquisition. We never stretch on price or rationalize a thin deal. If it does not meet our criteria, we pass.",
              },
              {
                title: "Underwrite Conservatively",
                description:
                  "Every deal is stress-tested against downside scenarios. We underwrite to reality, not pro forma optimism.",
              },
              {
                title: "Execute with Speed",
                description:
                  "Off-market opportunities reward speed and certainty of close. We structure clean offers and close on schedule.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-8 border border-navy/10">
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
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy">
            Interested in Working Together?
          </h2>
          <p className="mt-4 text-lg text-navy/60 max-w-2xl mx-auto">
            We partner with lenders, JV equity partners, and wholesalers who
            share our commitment to disciplined investing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center mt-8 px-8 py-3.5 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-colors"
          >
            Connect With Us
          </Link>
        </div>
      </section>
    </>
  );
}
