import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Southern Cities Investors",
  description:
    "Learn about Southern Cities Investors, a North Carolina-based real estate acquisition, evaluation, partnership, and investor support platform.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy text-white py-20 sm:py-24">
        <div className="site-shell">
          <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">About Us</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Built for serious real estate decisions in North Carolina and Southern markets.</h1>
          <p className="mt-6 text-lg text-white/70 max-w-3xl">
            Southern Cities Investors is a real estate acquisition, evaluation, partnership, and investor support platform focused on helping owners, landowners, investors, wholesalers, agents, and operators determine the right path for a property or opportunity.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="site-shell">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Darius Walton</h2>
              <p className="text-sm font-semibold text-orange uppercase tracking-wider mb-6">Principal / Managing Director</p>
              <div className="space-y-4 text-navy/70 leading-relaxed">
                <p>
                  Darius Walton holds a Master&apos;s degree in Real Estate Finance and Development from North Carolina State University. His academic foundation in real estate finance, combined with hands-on operating experience, shapes a disciplined approach to property review, underwriting, and execution.
                </p>
                <p>
                  Based in Charlotte, North Carolina, Darius operates across North Carolina and Southern markets with a focus on practical deal judgment, execution reality, and opportunities that need more than a one-size-fits-all answer.
                </p>
                <p>
                  Southern Cities Investors is built around a simple principle: not every property should be sold the same way. Some opportunities make sense as direct purchases. Some should be partnered on. Some may justify improvement, repositioning, or a different structure before any final decision is made.
                </p>
              </div>
            </div>

            <div className="bg-navy/[0.03] rounded-xl p-8 space-y-6">
              <h3 className="text-xl font-bold text-navy">At a Glance</h3>
              {[
                {
                  label: "Education",
                  value: "M.S. Real Estate Finance and Development, NC State University",
                },
                { label: "Headquarters", value: "Charlotte, North Carolina" },
                { label: "Market Focus", value: "North Carolina and Southern markets" },
                {
                  label: "Platform Focus",
                  value: "Property review, acquisition, partnerships, deal evaluation, and investor support",
                },
                {
                  label: "Parent Company",
                  value: "Southern Cities Enterprises",
                },
              ].map((item) => (
                <div key={item.label} className="border-b border-navy/10 pb-4 last:border-0 last:pb-0">
                  <p className="text-sm font-semibold text-navy/40 uppercase tracking-wider">{item.label}</p>
                  <p className="mt-1 text-navy font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-navy/[0.03]">
        <div className="site-shell">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">How we think</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Start with fit",
                description:
                  "We do not force every property or opportunity into the same outcome. The right answer depends on basis, timing, risk, complexity, and what can actually be executed.",
              },
              {
                title: "Underwrite honestly",
                description:
                  "We care about what still works once repair scope, financing, timeline, title, and exit pressure are treated realistically.",
              },
              {
                title: "Keep the path clear",
                description:
                  "Owners, deal sources, and investors should not be funneled through the same message. Clear routing creates better decisions and better trust.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-8 border border-navy/10">
                <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-navy/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="site-shell text-center">
          <h2 className="text-3xl font-bold text-navy">Start with the right conversation.</h2>
          <p className="mt-4 text-lg text-navy/60 max-w-2xl mx-auto">
            Whether you are deciding what to do with property, submitting an opportunity, or looking for deeper investor support, the goal is to route you into the right path first.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
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
