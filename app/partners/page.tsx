import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partners | Southern Cities Investors",
  description:
    "Learn how Southern Cities Investors works with private lenders, capital partners, wholesalers, and other serious deal relationships.",
};

export default function PartnersPage() {
  return (
    <>
      <section className="bg-navy text-white py-20 sm:py-24">
        <div className="site-shell">
          <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Partners</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Built for serious capital and deal relationships.</h1>
          <p className="mt-6 text-lg text-white/70 max-w-3xl">
            Southern Cities Investors works with lenders, capital partners, wholesalers, and other deal relationships that value clear underwriting, disciplined execution, and serious follow-through.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="site-shell space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-navy">Private Lenders</h2>
              <p className="mt-2 text-orange font-semibold text-sm uppercase tracking-wider">Debt Capital Partners</p>
            </div>
            <div className="lg:col-span-3 space-y-4 text-navy/70 leading-relaxed">
              <p>
                We work with lenders who can move quickly, understand real project risk, and want a repeat relationship around acquisition and renovation financing.
              </p>
              <h3 className="text-lg font-bold text-navy pt-2">What usually matters most</h3>
              <ul className="space-y-3">
                {[
                  "Competitive short-term bridge or project financing terms",
                  "Ability to move on acquisition timelines that are actually time-sensitive",
                  "Clarity around draw schedules, scope, and project realities",
                  "Interest in repeat business rather than one isolated transaction",
                  "Comfort with value-add and execution-driven opportunities",
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

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-navy">Capital Partners</h2>
              <p className="mt-2 text-orange font-semibold text-sm uppercase tracking-wider">Selective Partnership Conversations</p>
            </div>
            <div className="lg:col-span-3 space-y-4 text-navy/70 leading-relaxed">
              <p>
                We discuss deeper partnership opportunities selectively. Those conversations depend on fit, alignment, structure, and whether the opportunity justifies a more involved working relationship.
              </p>
              <h3 className="text-lg font-bold text-navy pt-2">What usually matters most</h3>
              <ul className="space-y-3">
                {[
                  "Aligned expectations around time horizon, structure, and decision-making",
                  "Ability to move when the right opportunity appears",
                  "Comfort with disciplined review instead of forced deployment",
                  "Interest in longer-term relationship quality, not just one transaction",
                  "Clear communication and serious follow-through",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-navy/55 leading-relaxed">
                Any discussion of partnership, backend participation, or joint execution is private, subject to diligence, and not a public offering or blanket invitation.
              </p>
            </div>
          </div>

          <hr className="border-navy/10" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-navy">Wholesalers and Deal Sources</h2>
              <p className="mt-2 text-orange font-semibold text-sm uppercase tracking-wider">Deal Submission Relationships</p>
            </div>
            <div className="lg:col-span-3 space-y-4 text-navy/70 leading-relaxed">
              <p>
                We value deal sources who bring clear information, realistic expectations, and opportunities that can stand up to honest review.
              </p>
              <h3 className="text-lg font-bold text-navy pt-2">What usually matters most</h3>
              <ul className="space-y-3">
                {[
                  "Accurate property information and realistic comps",
                  "A believable basis relative to scope and exit",
                  "Clean communication and a clear path on title, access, or known issues",
                  "Professional follow-through when the opportunity is real",
                  "A preference for repeat credibility over one-off noise",
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

      <section className="py-20 sm:py-24 bg-navy text-white">
        <div className="site-shell text-center">
          <h2 className="text-3xl font-bold">Start the right conversation.</h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            If you want to discuss capital, deal flow, or a more selective working relationship, start with a direct inquiry and we will route it correctly.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center mt-8 px-8 py-3.5 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-colors">
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
