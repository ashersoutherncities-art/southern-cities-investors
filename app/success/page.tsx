import Link from 'next/link';
import { fulfillCheckoutSession, FULFILLMENT_PRODUCTS } from '@/lib/fulfillment';

export default async function SuccessPage({ searchParams }: { searchParams: { session_id?: string } }) {
  const { session_id } = searchParams;
  const result = session_id ? await fulfillCheckoutSession(session_id).catch(() => null) : null;
  const fulfilled = result?.fulfilled || [];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-5xl space-y-8">
        <section className="rounded-3xl bg-white p-10 text-center shadow-sm">
          <div className="mb-4">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-navy">Payment successful</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy/60">
            Your order is confirmed. If your purchase included a digital product or membership, access has been provisioned below and a fulfillment email has been queued or sent.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/services" className="inline-flex items-center justify-center rounded-lg bg-navy px-6 py-3 font-semibold text-white">View all offers</Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-lg border border-navy/15 px-6 py-3 font-semibold text-navy">Need help with your order?</Link>
          </div>
        </section>

        {fulfilled.length ? (
          <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {fulfilled.map((record) => {
              const product = FULFILLMENT_PRODUCTS[record.item_key];
              return (
                <div key={record.id} className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-wide text-orange">Access ready</p>
                  <h2 className="mt-3 text-2xl font-bold text-navy">{product.title}</h2>
                  <p className="mt-3 text-navy/65">{product.accessNote}</p>
                  <div className="mt-6 space-y-3 text-sm text-navy/70">
                    {product.bullets.slice(0, 3).map((bullet) => (
                      <div key={bullet} className="flex gap-3">
                        <span className="font-bold text-orange">✓</span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={`/access/${record.token}`} className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-orange px-5 py-3 font-semibold text-white">
                    {product.ctaLabel}
                  </Link>
                </div>
              );
            })}
          </section>
        ) : null}

        {!fulfilled.length ? (
          <section className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Next step</p>
            <h2 className="mt-3 text-2xl font-bold text-navy">We have your order.</h2>
            <p className="mt-4 text-navy/65">
              If this was a higher-touch service purchase, we will follow up directly. If this was a digital or membership order and no access box appeared here, the purchase likely did not include an instant-access item or the checkout session could not be verified from the URL.
            </p>
          </section>
        ) : null}
      </div>
    </div>
  );
}
