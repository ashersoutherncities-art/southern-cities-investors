import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partners | Southern Cities Investors",
  description:
    "We partner with private lenders, JV equity partners, and wholesalers. Learn what we look for in each partnership type.",
};

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">
            Partners
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Built for Serious Operators
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            We work with lenders, JV partners, and wholesalers who share our
            commitment to disciplined execution and reliable deal flow.
          </p>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Lenders */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-navy">Private Lenders</h2>
              <p className="mt-2 text-orange font-semibold text-sm uppercase tracking-wider">
                Debt Capital Partners
              </p>
            </div>
            <div className="lg:col-span-3 space-y-4 text-navy/70 leading-relaxed">
              <p>
                We partner with private lenders and hard money providers who can
                move quickly on acquisition and renovation financing. Our deal
                flow is consistent, our underwriting is conservative, and we
                close on schedule.
              </p>
              <h3 className="text-lg font-bold text-navy pt-2">
                What We Look For in Lending Partners
              </h3>
              <ul className="space-y-3">
                {[
                  "Competitive rates on short-term bridge and fix-and-flip loans",
                  "Ability to close in 7-14 days on acquisitions",
                  "Flexibility on draw schedules for renovation projects",
                  "Interest in building a repeat lending relationship, not one-off transactions",
                  "Experience with distressed and off-market assets",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="border-navy/10" />

          {/* JV Partners */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-navy">
                JV Equity Partners
              </h2>
              <p className="mt-2 text-orange font-semibold text-sm uppercase tracking-wider">
                Equity Capital Partners
              </p>
            </div>
            <div className="lg:col-span-3 space-y-4 text-navy/70 leading-relaxed">
              <p>
                We seek joint venture partners for larger acquisitions and
                portfolio-level investments. We bring the deal sourcing,
                underwriting, and operational execution; our JV partners bring
                equity capital and shared risk.
              </p>
              <h3 className="text-lg font-bold text-navy pt-2">
                What We Look For in JV Partners
              </h3>
              <ul className="space-y-3">
                {[
                  "Aligned investment horizon and return expectations",
                  "Ability to deploy capital quickly when opportunities arise",
                  "Comfort with value-add and distressed asset strategies",
                  "Interest in building a long-term partnership across multiple deals",
                  "Transparent communication and clear decision-making frameworks",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="border-navy/10" />

          {/* Wholesalers */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-navy">Wholesalers</h2>
              <p className="mt-2 text-orange font-semibold text-sm uppercase tracking-wider">
                Deal Flow Partners
              </p>
            </div>
            <div className="lg:col-span-3 space-y-4 text-navy/70 leading-relaxed">
              <p>
                We are active, reliable buyers on the wholesale market. If you
                bring deals that meet our criteria, we close. No re-trading, no
                last-minute renegotiation, no games. We are a serious end buyer.
              </p>
              <h3 className="text-lg font-bold text-navy pt-2">
                What We Look For in Wholesale Partners
              </h3>
              <ul className="space-y-3">
                {[
                  "Accurate property information and realistic ARV comps",
                  "Clean title or clear path to resolution",
                  "Deals that meet our buy criteria (30-50% of ARV for rehabs)",
                  "Professional communication and reliable contract execution",
                  "Consistent deal volume -- we want to build a pipeline, not chase one-offs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Let&apos;s Work Together</h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Tell us about yourself and how you would like to partner. We respond
            to every serious inquiry.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center mt-8 px-8 py-3.5 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
