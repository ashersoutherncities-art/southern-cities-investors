"use client";

import Link from "next/link";

export default function Tier5Page() {
  return (
    <>
      <section className="bg-navy text-white py-24 sm:py-32">
        <div className="site-shell">
          <div className="max-w-4xl">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Tier 5</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Inner Circle</h1>
            <p className="mt-6 text-xl text-white/70 max-w-3xl">
              A private higher-touch relationship built around deal partnership, selective JV opportunities, and backend-aligned conversations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-navy/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy/5 rounded-2xl p-8 border border-navy/10">
            <h2 className="text-2xl font-bold text-navy mb-4">This is for you if...</h2>
            <div className="grid md:grid-cols-2 gap-4 text-navy/70">
              <p>• You want a deeper working relationship than a normal monthly support package</p>
              <p>• You are interested in partnership and selective joint-venture opportunities</p>
              <p>• You value access, alignment, and private deal conversations</p>
              <p>• You are looking for backend participation tied to a more strategic relationship</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="site-shell grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-8">What Tier 5 includes</h2>
            <div className="rounded-2xl border border-navy/10 bg-navy/5 p-8 mb-8">
              <h3 className="text-2xl font-bold text-navy">Where this fits in ongoing support</h3>
              <p className="mt-4 text-navy/65 leading-relaxed">
                This is the highest-touch ongoing support relationship on the site. It is designed for people who want more than monthly guidance and are looking for selective access, private deal conversations, and deeper backend-aligned partnership.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                "Private deal partnership conversations",
                "Selective JV opportunities when fit is strong",
                "Backend-aligned structure built around the relationship",
                "A more confidential, selective path for serious operators and capital partners",
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
            <h2 className="mt-3 text-3xl font-bold text-navy">$5,000-$10,000/month + backend</h2>
            <p className="mt-4 text-navy/65 leading-relaxed">
              Final structure depends on fit, relationship depth, opportunity profile, and the backend alignment being discussed.
            </p>
            <div className="mt-8 rounded-xl border border-navy/10 bg-white p-5">
              <p className="text-sm font-semibold text-navy">Private review process</p>
              <p className="mt-2 text-sm text-navy/65 leading-relaxed">
                Inner Circle is selective by design. We start with a private intake so fit, relationship goals, and backend alignment can be reviewed before moving forward.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-4 bg-orange hover:bg-orange/90 text-white font-semibold rounded-lg transition-colors">
                Apply for Inner Circle
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
