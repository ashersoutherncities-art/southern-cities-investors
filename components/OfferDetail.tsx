import Link from 'next/link';
import AddToCartButton from '@/components/AddToCartButton';
import type { ProductOffer, StarterOffer } from '@/lib/service-data';

export default function OfferDetail({ offer }: { offer: ProductOffer | StarterOffer }) {
  const badge = 'badge' in offer ? offer.badge : 'Starter offer';

  return (
    <>
      <section className="bg-navy text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">{badge}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">{offer.name}</h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl">{offer.positioning}</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">{offer.price}</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">{offer.turnaround}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-navy/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-navy/5 p-8 border border-navy/10">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Who this is for</p>
            <p className="mt-3 text-lg text-navy/75 leading-relaxed">{offer.whoItsFor}</p>
            <p className="mt-4 text-base text-navy/65 leading-relaxed">{offer.description}</p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">What you get</h2>
            <div className="mt-8 grid gap-4">
              {offer.deliverables.map((item) => (
                <div key={item} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
                  <div className="flex gap-4">
                    <span className="text-orange font-bold text-xl">✓</span>
                    <p className="text-navy/75 leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-orange/20 bg-orange/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Expected outcome</p>
            <h2 className="mt-3 text-2xl font-bold text-navy">Buy clearer, faster, and with less guesswork.</h2>
            <div className="mt-6 space-y-4">
              {offer.outcomes.map((item) => (
                <div key={item} className="flex gap-3 text-navy/70">
                  <span className="text-orange font-bold">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-navy/10 bg-white p-5">
              <p className="text-sm font-semibold text-navy">{offer.upsell.label}</p>
              <p className="mt-2 text-sm text-navy/65 leading-relaxed">{offer.upsell.description}</p>
              <Link href={offer.upsell.href} className="mt-4 inline-flex text-sm font-semibold text-orange hover:text-orange/80 transition-colors">
                Explore the next step
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-navy/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange">Low-friction next move</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-navy">Start with one clear win, then graduate into the right tier.</h2>
          <p className="mt-5 text-lg text-navy/65 max-w-2xl mx-auto">This offer is meant to create traction fast. If you need ongoing sourcing, execution, or operator support after this, we will point you to the cleanest Tier 1, Tier 2, or Tier 3 path.</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <AddToCartButton
              itemKey={offer.key}
              label={`Add ${offer.name} to cart`}
              className="inline-flex items-center justify-center px-8 py-4 bg-orange hover:bg-orange/90 text-white font-semibold rounded-lg transition-colors"
            />
            <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 border border-navy/15 text-navy hover:border-orange/50 hover:text-orange font-semibold rounded-lg transition-colors">
              Compare all services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
