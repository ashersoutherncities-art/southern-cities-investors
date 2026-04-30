import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Representative Deal Logic | Southern Cities Investors",
  description:
    "Representative examples showing how Southern Cities Investors thinks about basis, scope, exit pressure, and opportunity fit.",
};

const examples = [
  {
    title: "Example 01: Distressed single-family acquisition",
    setup: "A dated or distressed house where the opportunity only makes sense if basis, rehab scope, and resale assumptions stay disciplined.",
    numbers: [
      { label: "Illustrative repaired value", value: "$230K" },
      { label: "Illustrative rehab range", value: "$45K-$60K" },
      { label: "Illustrative gross margin target", value: "Protected after hold, fees, and friction" },
    ],
    lessons: [
      "If the spread disappears when rehab and resale get treated honestly, it is not a strong deal.",
      "The point is not just buying under list. It is buying at a basis that can survive reality.",
    ],
  },
  {
    title: "Example 02: Small multifamily repositioning",
    setup: "A smaller multifamily opportunity where the story sounds good, but the real question is whether lease-up, turnover, and renovation timing still leave room.",
    numbers: [
      { label: "Illustrative unit count", value: "8-20 units" },
      { label: "Key pressure points", value: "Turnover, capex, rent lift, timeline" },
      { label: "Main underwriting test", value: "Can the deal survive slower execution?" },
    ],
    lessons: [
      "Deals that only work on perfect rent growth are usually thinner than they look.",
      "Execution drag matters just as much as entry price in this category.",
    ],
  },
  {
    title: "Example 03: Land or transitional site",
    setup: "A site with upside on paper where entitlement, timeline, buyer depth, or repositioning complexity can change the answer completely.",
    numbers: [
      { label: "Illustrative upside question", value: "What is the believable exit, not the best-case exit?" },
      { label: "Main risk lens", value: "Timeline, capital, and entitlement friction" },
      { label: "Decision threshold", value: "Does the path justify the complexity?" },
    ],
    lessons: [
      "Land value is easy to overstate when execution burden gets ignored.",
      "The right path may be pass, structure differently, or improve before sale instead of buying immediately.",
    ],
  },
];

const proofNotes = [
  "These are representative examples meant to show the decision lens, not promise identical outcomes.",
  "Actual decisions depend on title, scope, financing, market conditions, timing, and execution capacity.",
  "Nothing on this page is investment advice, a securities offering, or a guarantee of results.",
];

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-navy text-white py-20 sm:py-24">
        <div className="site-shell">
          <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Representative Examples</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight max-w-4xl">
            Tangible examples of how opportunities are judged before time and capital move.
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-3xl">
            This page is here to make the platform more concrete. The point is not hype. The point is to show what gets pressure tested, what assumptions matter, and how opportunity fit is judged.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white border-b border-navy/10">
        <div className="site-shell max-w-4xl">
          <h2 className="text-3xl font-bold text-navy">Representative examples and underwriting logic</h2>
          <p className="mt-4 text-lg text-navy/60 leading-relaxed">
            Good proof is not a generic gallery. It is showing the logic behind the decision. These examples show how basis, scope, margin, timeline, and execution burden shape the answer.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-navy/5 border-b border-navy/10">
        <div className="site-shell space-y-8">
          {examples.map((example) => (
            <div key={example.title} className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
              <div className="grid lg:grid-cols-[1fr_0.95fr] gap-8 items-start">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-orange">Representative example</p>
                  <h3 className="mt-3 text-3xl font-bold text-navy">{example.title}</h3>
                  <p className="mt-4 text-navy/65 leading-relaxed">{example.setup}</p>
                  <div className="mt-6 space-y-4 text-sm text-navy/70 leading-relaxed">
                    {example.lessons.map((lesson) => (
                      <div key={lesson} className="flex gap-3">
                        <span className="text-orange font-bold">✓</span>
                        <span>{lesson}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-orange/20 bg-orange/5 p-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-orange">What the review is checking</p>
                  <div className="mt-5 space-y-4">
                    {example.numbers.map((item) => (
                      <div key={item.label} className="border-b border-orange/20 pb-4 last:border-b-0 last:pb-0">
                        <p className="text-xs font-semibold uppercase tracking-wide text-navy/45">{item.label}</p>
                        <p className="mt-1 text-sm font-medium text-navy">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="site-shell grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Compliance note</p>
            <div className="mt-5 space-y-4 text-sm text-navy/70 leading-relaxed">
              {proofNotes.map((note) => (
                <div key={note} className="flex gap-3">
                  <span className="text-orange font-bold">•</span>
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-navy/10 bg-navy text-white p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Route the conversation correctly</p>
            <h2 className="mt-3 text-3xl font-bold">Choose the path that fits the opportunity.</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Property owners should start with property review. Deal sources should submit the opportunity. Investors and operators who need deeper review, support, or structure should apply for investor support.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/property-owners" className="inline-flex items-center justify-center px-6 py-3 bg-orange hover:bg-orange/90 text-white font-semibold rounded-lg transition-colors">
                Start Property Review
              </Link>
              <Link href="/submit-deal" className="inline-flex items-center justify-center px-6 py-3 border border-white/15 text-white hover:border-white/30 font-semibold rounded-lg transition-colors">
                Submit a Deal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
