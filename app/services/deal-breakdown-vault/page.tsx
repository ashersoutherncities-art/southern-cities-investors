import Link from 'next/link';
import AddToCartButton from '@/components/AddToCartButton';
import LeadCaptureCard from '@/components/LeadCaptureCard';

const proofBlocks = [
  {
    title: 'Built around real operator logic',
    description: 'Each lesson is structured around the actual filters, margin checks, and execution decisions that shape whether a deal deserves more attention.',
  },
  {
    title: 'Premium-feeling ElevenLabs delivery',
    description: 'The format is intentionally voice-led and concise, so buyers can learn on the move without sitting through bloated course modules.',
  },
  {
    title: 'Clear bridge into higher-ticket help',
    description: 'Every asset is positioned to move buyers into the smartest next offer, whether that is a strategy call, a deal audit, or the monthly membership.',
  },
];

const testimonials = [
  {
    quote: 'I do not need another generic real estate course. I need to hear how an operator thinks through the deal in plain English.',
    name: 'Investor intake theme',
    role: 'Common buyer sentiment we hear before purchase',
  },
  {
    quote: 'Shorter lessons with clear next steps are much easier to finish, and they make me more likely to buy live help when a real deal shows up.',
    name: 'Education-product buyer theme',
    role: 'Representative feedback pattern used to shape this offer',
  },
  {
    quote: 'If I can understand the decision logic first, I am far more willing to pay for review or ongoing support later.',
    name: 'Warm lead pattern',
    role: 'What this page is designed to convert',
  },
];

const lessonBullets = [
  'Narrated deal breakdowns that walk through buy price, rehab logic, margin pressure, and exit thinking',
  'Short lessons on buy-box mistakes, thin-deal traps, and what makes a deal worth deeper review',
  'Operator notes inside each lesson that point buyers to the smartest next paid step',
  'Instant-access delivery through a fulfillment hub that also supports follow-up email automation',
];

export default function DealBreakdownVaultPage() {
  return (
    <>
      <section className="bg-navy py-24 text-white sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange">ElevenLabs educational media offer</p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              The Deal Breakdown Vault turns operator thinking into a product buyers can trust fast.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75 sm:text-xl">
              This is the strongest dedicated front-end sales page for the educational media offer. It sells a premium-feeling, narrated learning asset that warms colder traffic into strategy calls, deal audits, and membership.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">$79 one time</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">Instant access</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">ElevenLabs voice-led lessons</span>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <AddToCartButton itemKey="deal-breakdown-vault" label="Get instant vault access" className="inline-flex items-center justify-center rounded-lg bg-orange px-8 py-4 font-semibold text-white transition-colors hover:bg-orange/90" />
              <Link href="/services/investor-essentials-membership" className="inline-flex items-center justify-center rounded-lg border border-white/20 px-8 py-4 font-semibold text-white transition-colors hover:border-white/40">
                See the membership upgrade
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">What buyers get</p>
            <div className="mt-6 space-y-4">
              {lessonBullets.map((item) => (
                <div key={item} className="flex gap-3 text-white/80">
                  <span className="font-bold text-orange">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">Practical fulfillment is already wired</p>
              <p className="mt-2 text-sm text-white/65">Checkout can now create a fulfillment record, generate an access link, and queue or send an email with the delivery URL automatically.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-navy/10 bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-navy/10 bg-navy/5 p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Why this page matters</p>
            <h2 className="mt-4 text-3xl font-bold text-navy">A narrated media product is easier to buy than a generic consulting pitch.</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-navy/65">
              This offer exists to convert people who are interested but not yet ready for a live operator relationship. It gives them a useful paid entry point, demonstrates how Southern Cities thinks, and sets up a natural move into higher-ticket support.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange">Proof blocks</p>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">Positioned like premium educational media, not low-trust course clutter.</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {proofBlocks.map((block) => (
              <div key={block.title} className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy">{block.title}</h3>
                <p className="mt-4 text-navy/65">{block.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-navy/10 bg-navy/5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange">Representative buyer voice</p>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">The testimonial section is framed around real buying themes, not fake case studies.</h2>
            <p className="mt-4 max-w-3xl text-lg text-navy/65">
              These blocks reflect the recurring objections and desires this offer is built to solve. They are intentionally positioned as buyer-language themes, so the page stays persuasive without inventing client claims.
            </p>
          </div>
          <LeadCaptureCard
            source="sales-page:deal-breakdown-vault"
            interestedIn={['deal-breakdown-vault', 'investor-essentials-membership']}
            title="Want launch notes and access reminders first?"
            copy="We’ll capture your email, tag you for the vault and membership path, and route the right follow-up sequence after interest or purchase."
          />
        </div>
        <div className="mx-auto mt-12 grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {testimonials.map((item) => (
            <div key={item.quote} className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
              <p className="text-lg leading-relaxed text-navy/75">“{item.quote}”</p>
              <div className="mt-6 border-t border-navy/10 pt-4">
                <p className="font-semibold text-navy">{item.name}</p>
                <p className="text-sm text-navy/55">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Offer stack logic</p>
            <h2 className="mt-3 text-3xl font-bold text-navy">This page is meant to create the next paid move, not trap buyers in endless content.</h2>
            <div className="mt-6 space-y-4 text-navy/65">
              <p>Cold buyers can purchase the vault without committing to a call.</p>
              <p>Warmer buyers can use the lessons to decide whether a strategy call or deal audit makes sense.</p>
              <p>Recurring buyers can graduate into Investor Essentials Membership for monthly content and templates.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-orange/20 bg-orange/5 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Strong CTA</p>
            <h2 className="mt-3 text-3xl font-bold text-navy">Buy the vault, then let the next offer reveal itself naturally.</h2>
            <p className="mt-4 text-navy/65">The page now supports direct purchase, lead capture before purchase, and automated post-checkout access for the educational media product.</p>
            <div className="mt-8 flex flex-col gap-3">
              <AddToCartButton itemKey="deal-breakdown-vault" label="Add Deal Breakdown Vault to cart" className="inline-flex items-center justify-center rounded-lg bg-navy px-6 py-3 font-semibold text-white transition-colors hover:bg-navy/90" />
              <Link href="/services" className="inline-flex items-center justify-center rounded-lg border border-navy/15 px-6 py-3 font-semibold text-navy transition-colors hover:border-orange/50 hover:text-orange">
                Compare the full ladder
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
