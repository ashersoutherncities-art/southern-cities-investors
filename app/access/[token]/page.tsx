import Link from 'next/link';
import { FULFILLMENT_PRODUCTS, getAccessRecordByToken } from '@/lib/fulfillment';

export default async function AccessPage({ params }: { params: { token: string } }) {
  const { token } = params;
  const record = await getAccessRecordByToken(token);

  if (!record) {
    return (
      <div className="min-h-screen bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-navy/10 bg-white p-10 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange">Access not found</p>
          <h1 className="mt-4 text-4xl font-bold text-navy">That access link is not active.</h1>
          <p className="mt-4 text-navy/65">If you just checked out, return to the success page or reply to the order email for help.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-lg bg-navy px-6 py-3 font-semibold text-white">Contact support</Link>
        </div>
      </div>
    );
  }

  const product = FULFILLMENT_PRODUCTS[record.item_key];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-5xl space-y-8">
        <section className="rounded-3xl bg-navy p-10 text-white shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange">Fulfillment center</p>
          <h1 className="mt-4 text-4xl font-bold">{product.title}</h1>
          <p className="mt-4 max-w-3xl text-lg text-white/75">{product.intro}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">Delivered to {record.customer_email}</span>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">Status: {record.status}</span>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">What’s inside</p>
            <div className="mt-6 space-y-4">
              {product.bullets.map((bullet) => (
                <div key={bullet} className="flex gap-3 text-navy/70">
                  <span className="font-bold text-orange">✓</span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-navy/5 p-6">
              <h2 className="text-xl font-bold text-navy">Practical delivery scaffold</h2>
              <p className="mt-3 text-navy/65">{product.accessNote}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-navy/10 bg-white p-4">
                  <p className="text-sm font-semibold text-navy">Resource hub</p>
                  <p className="mt-2 text-sm text-navy/65">This page is ready to hold files, embeds, or protected links without changing the post-checkout flow.</p>
                </div>
                <div className="rounded-xl border border-navy/10 bg-white p-4">
                  <p className="text-sm font-semibold text-navy">Email follow-up</p>
                  <p className="mt-2 text-sm text-navy/65">A fulfillment email event is queued or sent when checkout is confirmed, using this same access URL.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-orange/20 bg-orange/5 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-orange">Next best move</p>
              <h2 className="mt-3 text-2xl font-bold text-navy">Use this as your delivery hub, then step into live support when needed.</h2>
              <p className="mt-4 text-navy/65">The digital and membership products are positioned to warm buyers into a strategy call, buy-box review, deal audit, or a monthly operator tier.</p>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="/services" className="inline-flex justify-center rounded-lg bg-navy px-5 py-3 font-semibold text-white">Compare next offers</Link>
                <Link href="/contact" className="inline-flex justify-center rounded-lg border border-navy/15 px-5 py-3 font-semibold text-navy">Ask for a live review</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
