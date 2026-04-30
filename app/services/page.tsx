import Link from 'next/link';
import AddToCartButton from '@/components/AddToCartButton';
import { addOnOffers, entryPaths, oneTimeOffers, recurringPlans, selfServeOffers } from '@/lib/service-data';

export default function Services() {
  return (
    <>
      <section className="bg-navy text-white py-24 sm:py-32">
        <div className="site-shell">
          <div className="max-w-5xl">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Services and Offers</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              A clearer support ladder for owners, investors, and operators.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl">
              Southern Cities Investors separates property-owner, deal-submission, and investor-support paths clearly. This page is focused on investor support offers and the cleanest next step for each type of need.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="#entry" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-orange text-white font-semibold hover:bg-orange/90 transition-colors">
                Start Here
              </Link>
              <Link href="#self-serve" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/15 text-white/90 hover:border-white/30 hover:text-white transition-colors">
                Self-Serve Products
              </Link>
              <Link href="#one-time" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/15 text-white/90 hover:border-white/30 hover:text-white transition-colors">
                One-Time Services
              </Link>
              <Link href="#recurring" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/15 text-white/90 hover:border-white/30 hover:text-white transition-colors">
                Recurring Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="entry" className="py-16 bg-white border-b border-navy/10">
        <div className="site-shell">
          <div className="max-w-3xl mb-10">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Free and entry paths</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Start in the right lane first.</h2>
            <p className="mt-4 text-lg text-navy/60">
              Not every visitor should start with a paid offer. Owners, deal sources, and investors should be routed into the right path before anything else.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {entryPaths.map((item) => (
              <div key={item.key} className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-navy">{item.name}</h3>
                <p className="mt-4 text-navy/65 leading-relaxed">{item.description}</p>
                <Link href={item.href} className="inline-flex mt-8 items-center justify-center px-6 py-3 bg-navy hover:bg-navy/90 text-white font-semibold rounded-lg transition-colors">
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="self-serve" className="py-20 bg-navy/5 border-b border-navy/10">
        <div className="site-shell">
          <div className="max-w-3xl mb-12">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Self-Serve Products</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">For investors who want a stronger framework before live support.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {selfServeOffers.map((offer) => (
              <div key={offer.key} className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm flex flex-col">
                <p className="text-sm font-semibold uppercase tracking-wide text-orange">{offer.badge}</p>
                <h3 className="text-2xl font-bold text-navy mt-3">{offer.name}</h3>
                <p className="text-orange font-semibold text-lg mt-2">{offer.price}</p>
                <p className="text-sm text-navy/50 mt-2">{offer.turnaround}</p>
                <p className="text-navy/60 mt-4">{offer.positioning}</p>
                <div className="mt-6 space-y-4 text-sm text-navy/70">
                  <div>
                    <p className="font-semibold text-navy">Who it is for</p>
                    <p className="mt-1">{offer.whoItsFor}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">What is included</p>
                    <ul className="mt-2 space-y-2">
                      {offer.included.map((item) => <li key={item} className="flex gap-3"><span className="text-orange font-bold">✓</span><span>{item}</span></li>)}
                    </ul>
                  </div>
                  <div><p className="font-semibold text-navy">What it helps avoid</p><p className="mt-1">{offer.avoids}</p></div>
                  <div><p className="font-semibold text-navy">Outcome</p><p className="mt-1">{offer.outcome}</p></div>
                </div>
                <div className="mt-8 pt-6 border-t border-navy/10 space-y-3 mt-auto">
                  <Link href={`/services/${offer.slug}`} className="inline-flex items-center justify-center w-full px-6 py-3 border border-navy/15 text-navy hover:border-orange/50 hover:text-orange font-semibold rounded-lg transition-colors">
                    View Details
                  </Link>
                  <AddToCartButton itemKey={offer.key} label={offer.cta} className="inline-flex items-center justify-center w-full px-6 py-3 bg-navy hover:bg-navy/90 text-white font-semibold rounded-lg transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="one-time" className="py-20 bg-white border-b border-navy/10">
        <div className="site-shell">
          <div className="max-w-3xl mb-12">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">One-Time Deal Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">For live decisions that need serious review now.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {oneTimeOffers.map((offer) => (
              <div key={offer.key} className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm flex flex-col">
                <p className="text-sm font-semibold uppercase tracking-wide text-orange">One-time service</p>
                <h3 className="text-2xl font-bold text-navy mt-3">{offer.name}</h3>
                <p className="text-orange font-semibold text-lg mt-2">{offer.price}</p>
                <p className="text-sm text-navy/50 mt-2">{offer.turnaround}</p>
                <p className="text-navy/60 mt-4">{offer.positioning}</p>
                <div className="mt-6 space-y-4 text-sm text-navy/70">
                  <div><p className="font-semibold text-navy">Who it is for</p><p className="mt-1">{offer.whoItsFor}</p></div>
                  <div><p className="font-semibold text-navy">What is included</p><ul className="mt-2 space-y-2">{offer.included.map((item) => <li key={item} className="flex gap-3"><span className="text-orange font-bold">✓</span><span>{item}</span></li>)}</ul></div>
                  <div><p className="font-semibold text-navy">What it helps avoid</p><p className="mt-1">{offer.avoids}</p></div>
                  <div><p className="font-semibold text-navy">Outcome</p><p className="mt-1">{offer.outcome}</p></div>
                </div>
                <div className="mt-8 pt-6 border-t border-navy/10 space-y-3 mt-auto">
                  <Link href={`/services/${offer.slug}`} className="inline-flex items-center justify-center w-full px-6 py-3 border border-navy/15 text-navy hover:border-orange/50 hover:text-orange font-semibold rounded-lg transition-colors">
                    View Details
                  </Link>
                  <AddToCartButton itemKey={offer.key} label={offer.cta} className="inline-flex items-center justify-center w-full px-6 py-3 bg-navy hover:bg-navy/90 text-white font-semibold rounded-lg transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="recurring" className="py-20 sm:py-24 bg-navy/5 border-b border-navy/10">
        <div className="site-shell">
          <div className="max-w-3xl mb-12">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Recurring Support Plans</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">A cleaner ladder for investors and operators who need support over time.</h2>
            <p className="mt-4 text-lg text-navy/60">
              Every reference to reviews here should be understood as defined deal reviews, buy box or underwriting reviews, or active project check-ins, depending on the level of support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
            {recurringPlans.map((plan) => (
              <div key={plan.key} className="bg-white rounded-2xl p-6 border border-navy/10 shadow-sm flex flex-col">
                <p className="text-sm font-semibold uppercase tracking-wide text-orange">{plan.tag}</p>
                <h3 className="text-xl font-bold text-navy mt-3">{plan.name}</h3>
                <p className="text-orange font-semibold text-base mt-2">{plan.price}</p>
                <div className="mt-5 space-y-4 text-sm text-navy/70 flex-1">
                  <div><p className="font-semibold text-navy">Who it is for</p><p className="mt-1">{plan.whoItsFor}</p></div>
                  <div><p className="font-semibold text-navy">What is included</p><ul className="mt-2 space-y-2">{plan.included.map((item) => <li key={item} className="flex gap-3"><span className="text-orange font-bold">✓</span><span>{item}</span></li>)}</ul></div>
                  <div><p className="font-semibold text-navy">What it helps avoid</p><p className="mt-1">{plan.avoids}</p></div>
                  <div><p className="font-semibold text-navy">Outcome</p><p className="mt-1">{plan.outcome}</p></div>
                </div>
                <Link href={plan.href} className="mt-6 inline-flex items-center justify-center w-full px-5 py-3 bg-navy hover:bg-navy/90 text-white font-semibold rounded-lg transition-colors">
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="addons" className="py-20 bg-white border-b border-navy/10">
        <div className="site-shell">
          <div className="max-w-3xl mb-12">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Add-On Execution Support</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Extra support when the deal needs more than analysis alone.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {addOnOffers.map((offer) => (
              <div key={offer.key} className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm flex flex-col">
                <h3 className="text-2xl font-bold text-navy">{offer.name}</h3>
                <p className="mt-2 text-orange font-semibold">{offer.price}</p>
                <div className="mt-6 space-y-4 text-sm text-navy/70 flex-1">
                  <div><p className="font-semibold text-navy">Who it is for</p><p className="mt-1">{offer.whoItsFor}</p></div>
                  <div><p className="font-semibold text-navy">What is included</p><ul className="mt-2 space-y-2">{offer.included.map((item) => <li key={item} className="flex gap-3"><span className="text-orange font-bold">✓</span><span>{item}</span></li>)}</ul></div>
                  <div><p className="font-semibold text-navy">What it helps avoid</p><p className="mt-1">{offer.avoids}</p></div>
                  <div><p className="font-semibold text-navy">Outcome</p><p className="mt-1">{offer.outcome}</p></div>
                </div>
                <Link href={offer.href} className="mt-6 inline-flex items-center justify-center w-full px-6 py-3 bg-navy hover:bg-navy/90 text-white font-semibold rounded-lg transition-colors">
                  {offer.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-navy text-white">
        <div className="site-shell text-center max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Choose the path that matches the kind of help you need.</h2>
          <p className="mt-4 text-lg text-white/70 max-w-3xl mx-auto">
            Property owners should start with property review. Deal sources should submit a deal. Investors and operators who need deeper support should apply for investor support.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/property-owners" className="inline-flex items-center justify-center px-8 py-3.5 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-colors">
              Start Property Review
            </Link>
            <Link href="/submit-deal" className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-colors">
              Submit a Deal
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-colors">
              Apply for Investor Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
