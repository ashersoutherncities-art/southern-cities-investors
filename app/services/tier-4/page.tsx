"use client";

import Link from "next/link";

export default function Tier4Page() {
  return (
    <>
      <section className="bg-navy text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Tier 4</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Operator</h1>
            <p className="mt-6 text-xl text-white/70 max-w-3xl">
              Hands-on support for active operators who want weekly guidance, faster decisions, and a stronger execution rhythm around live deals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-navy/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy/5 rounded-2xl p-8 border border-navy/10">
            <h2 className="text-2xl font-bold text-navy mb-4">This is for you if...</h2>
            <div className="grid md:grid-cols-2 gap-4 text-navy/70">
              <p>• You are actively operating and want weekly strategic support around real execution</p>
              <p>• You need priority access when decisions affect money, speed, or credibility</p>
              <p>• You want hands-on guidance, not just occasional feedback</p>
              <p>• You are looking for a tighter operating relationship as deals and moving parts increase</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-8">What Tier 4 includes</h2>
            <div className="grid gap-4">
              {[
                "Weekly calls focused on live priorities and current bottlenecks",
                "Execution guidance designed to keep decisions cleaner and momentum stronger",
                "Priority access when timing matters",
                "Hands-on support that helps reduce drift, hesitation, and avoidable misses",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-navy/10 p-6 bg-white shadow-sm flex gap-4">
                  <span className="text-orange font-bold text-xl">✓</span>
                  <p className="text-navy/75 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-orange/20 bg-orange/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Pricing</p>
            <h2 className="mt-3 text-3xl font-bold text-navy">$3,000-$7,500/month</h2>
            <p className="mt-4 text-navy/65 leading-relaxed">
              Pricing depends on pace, operator involvement, support intensity, and how closely the working relationship needs to run.
            </p>
            <div className="mt-8 rounded-xl border border-navy/10 bg-white p-5">
              <p className="text-sm font-semibold text-navy">Application flow</p>
              <p className="mt-2 text-sm text-navy/65 leading-relaxed">
                Tier 4 starts with a private intake review so the support level, pace, and expectations are aligned before we move into a monthly relationship.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-4 bg-orange hover:bg-orange/90 text-white font-semibold rounded-lg transition-colors">
                Apply for Tier 4
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center px-6 py-4 border border-navy/15 text-navy hover:border-orange/50 hover:text-orange font-semibold rounded-lg transition-colors">
                Compare all packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
