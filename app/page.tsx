import Link from 'next/link';
import AddToCartButton from '@/components/AddToCartButton';
import { digitalOffers, membershipOffers, starterOffers } from '@/lib/service-data';

const ownerPaths = [
  {
    title: 'Sell directly',
    description:
      'If you want speed, certainty, and a straightforward sale, we can review the property and make a direct offer.',
    details: [
      'Best when you want to sell as-is',
      'Useful when time matters more than squeezing every dollar out of the property',
    ],
    cta: 'Start a property conversation',
    href: '/contact',
  },
  {
    title: 'Improve and reposition',
    description:
      'If the property has more value with capital, construction, or development work, we can evaluate what that path looks like before you make a decision.',
    details: [
      'Useful for land, outdated buildings, or underused assets',
      'Backed by construction and development capability inside the platform',
    ],
    cta: 'See how we work',
    href: '/portfolio',
  },
  {
    title: 'Partner instead of selling',
    description:
      'Not every property should be sold immediately. Some deals make more sense as a structured partnership, redevelopment, or staged plan.',
    details: [
      'Useful when the property has upside but needs execution',
      'Structured around the asset, timeline, and business objective',
    ],
    cta: 'Apply for a strategy conversation',
    href: '/contact',
  },
];

const operatingAdvantages = [
  {
    title: 'We are not limited to one exit path',
    description:
      'We can buy, improve, develop, or structure around the asset. That matters because the best answer is not always an off-market cash offer.',
  },
  {
    title: 'Construction and execution sit inside the platform',
    description:
      'This is not just lead generation and contract assignment. Southern Cities has licensed construction capability and a broader operating platform behind the conversation.',
  },
  {
    title: 'We look at the property like operators',
    description:
      'We review what the site is, what it could become, what it would take to get there, and whether the path actually makes sense before pushing a recommendation.',
  },
];

const processSteps = [
  {
    step: '1',
    title: 'We review the property and the situation',
    description:
      'We start with the asset, ownership goals, timing, and obvious constraints. That includes location, condition, access, title or operational issues, and what outcome you are actually trying to get.',
  },
  {
    step: '2',
    title: 'We look at more than one path',
    description:
      'Depending on the asset, that could mean a direct purchase, a partnership structure, a redevelopment path, or a hold-and-improve decision. The point is to compare real options before anyone commits.',
  },
  {
    step: '3',
    title: 'We move into the path that fits',
    description:
      'If a direct offer makes sense, we move there. If the property needs execution to unlock value, we frame the next steps clearly. If the best move is to wait or hold, we say that too.',
  },
];

const proofBlocks = [
  {
    title: 'What owners usually need help deciding',
    points: [
      'Whether it makes more sense to sell now or hold for a different plan.',
      'Whether the property should be cleaned up, improved, or repositioned before any sale decision gets made.',
      'Whether the best next move is a direct sale, a partnership, or a longer execution path.',
    ],
  },
  {
    title: 'What Southern Cities can do on the other side of that decision',
    points: [
      'Buy directly when a clean sale is the right answer.',
      'Evaluate redevelopment or repositioning when the asset has more value than a fast sale captures.',
      'Use construction and operating capability to frame a real plan around the property.',
    ],
  },
  {
    title: 'Why owners call us when the property is not simple',
    points: [
      'Because not every asset fits into a basic cash-offer box.',
      'Because land, mixed-condition property, and transitional assets often need a more thoughtful answer.',
      'Because the right recommendation depends on what can actually be executed after the conversation.',
    ],
  },
];
const buyerFit = [
  'Property owners deciding whether to sell, hold, improve, or partner',
  'Landowners with underused or mispositioned sites',
  'Investors looking for an execution partner with real operating capability',
];

export default function Home() {
  return (
    <>
      <section className="bg-navy text-white py-24 sm:py-32">
        <div className="site-shell">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            <div className="max-w-4xl">
              <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">
                Southern Cities Investors
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Sell. Partner. Improve. Choose the path that actually fits the property.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl">
                We do more than make offers. We review the asset, show you what the real options are, and move into the path that makes the most sense, whether that is a direct purchase, a partnership, or a higher-value execution plan.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-colors"
                >
                  Start a property review
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-colors"
                >
                  See case studies and process
                </Link>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-orange">Where we help most</p>
              <div className="mt-6 space-y-4 text-white/80">
                {[
                  'When you are not sure whether to sell, improve, or structure something else.',
                  'When the property has more potential than a basic off-market offer reflects.',
                  'When the next step depends on real execution, not just a pitch.',
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="text-orange font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="site-shell">
          <div className="max-w-4xl mb-12">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Your options</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Not every property should be handled the same way.
            </h2>
            <p className="mt-4 text-lg text-navy/60">
              Some owners need a clean direct sale. Some assets need capital and construction to reach a better outcome. Some situations make more sense as a partnership. We are built to evaluate all three.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ownerPaths.map((path) => (
              <div key={path.title} className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-navy mb-3">{path.title}</h3>
                <p className="text-navy/65 leading-relaxed">{path.description}</p>
                <div className="mt-6 space-y-3 text-sm text-navy/70 leading-relaxed">
                  {path.details.map((detail) => (
                    <div key={detail} className="flex gap-3">
                      <span className="text-orange font-bold">✓</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
                <Link href={path.href} className="inline-flex mt-8 text-sm font-semibold text-orange hover:text-orange/80 transition-colors">
                  {path.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-navy/5 border-y border-navy/10">
        <div className="site-shell">
          <div className="max-w-4xl mb-12">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Why this is different</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Most buyers only know how to make one kind of offer. That limits the answer before the conversation starts.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {operatingAdvantages.map((item) => (
              <div key={item.title} className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-navy/65">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="site-shell grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">How the process works</p>
            <div className="mt-6 space-y-6">
              {processSteps.map((step) => (
                <div key={step.step} className="rounded-xl border border-navy/10 p-6">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-white text-sm font-semibold">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-navy">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-navy/65">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-orange/20 bg-orange/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">What you get from the conversation</p>
            <div className="mt-6 space-y-4 text-sm text-navy/75 leading-relaxed">
              <div className="flex gap-3">
                <span className="text-orange font-bold">✓</span>
                <span>A clearer view of the property and what the realistic paths are.</span>
              </div>
              <div className="flex gap-3">
                <span className="text-orange font-bold">✓</span>
                <span>A direct answer on whether we would buy, partner, improve, or pass.</span>
              </div>
              <div className="flex gap-3">
                <span className="text-orange font-bold">✓</span>
                <span>A next step tied to the asset, not a generic script.</span>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex mt-8 text-sm font-semibold text-orange hover:text-orange/80 transition-colors"
            >
              Start the conversation
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white border-t border-navy/10">
        <div className="site-shell">
          <div className="max-w-4xl mb-12">
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Decision clarity</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              The first real question is not price. It is which path makes the most sense for the property.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {proofBlocks.map((section) => (
              <div key={section.title} className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wide text-orange">{section.title}</p>
                <div className="mt-5 space-y-4 text-sm text-navy/70 leading-relaxed">
                  {section.points.map((point) => (
                    <div key={point} className="flex gap-3">
                      <span className="text-orange font-bold">✓</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-navy/5">
        <div className="site-shell">
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-8 items-start mb-12">
            <div className="max-w-3xl">
              <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Products</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy">Use a product when you need a tool, framework, or decision aid right now.</h2>
              <p className="mt-4 text-lg text-navy/60">
                These products are for buyers and operators who want something immediate and practical before stepping into a deeper conversation.
              </p>
            </div>

            <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-orange">Best use case</p>
              <div className="mt-5 space-y-4 text-sm text-navy/70 leading-relaxed">
                <div className="flex gap-3">
                  <span className="text-orange font-bold">✓</span>
                  <span>You want a lower-cost first step before paying for direct review.</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-orange font-bold">✓</span>
                  <span>You need a practical tool, not another round of generic education.</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-orange font-bold">✓</span>
                  <span>You want something you can use immediately on a live opportunity.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {digitalOffers.map((offer) => (
              <div key={offer.key} className="bg-white border border-navy/10 rounded-2xl p-8 shadow-sm flex flex-col">
                <p className="text-sm font-semibold uppercase tracking-wide text-orange">{offer.badge}</p>
                <h3 className="text-2xl font-bold text-navy mt-3">{offer.name}</h3>
                <p className="text-orange font-semibold text-lg mt-2">{offer.price}</p>
                <p className="text-sm text-navy/50 mt-2">{offer.turnaround}</p>
                <p className="text-navy/60 mt-4">{offer.positioning}</p>
                <div className="mt-8 pt-6 border-t border-navy/10 space-y-3 mt-auto">
                  <Link href={`/services/${offer.slug}`} className="inline-flex items-center justify-center w-full px-6 py-3 border border-navy/15 text-navy hover:border-orange/50 hover:text-orange font-semibold rounded-lg transition-colors">
                    View details
                  </Link>
                  <AddToCartButton
                    itemKey={offer.key}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-navy hover:bg-navy/90 text-white font-semibold rounded-lg transition-colors"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="site-shell grid lg:grid-cols-[1fr_1fr] gap-8 items-start">
          <div className="rounded-2xl border border-orange/20 bg-orange/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Membership product</p>
            {membershipOffers.map((offer) => (
              <div key={offer.key}>
                <h2 className="mt-3 text-3xl font-bold text-navy">{offer.name}</h2>
                <p className="text-orange font-semibold text-lg mt-2">{offer.price}</p>
                <p className="mt-4 text-navy/65">{offer.positioning}</p>
                <div className="mt-6 space-y-3 text-sm text-navy/70">
                  {offer.deliverables.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="text-orange font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-xl border border-navy/10 bg-white p-5">
                  <p className="text-sm font-semibold uppercase tracking-wide text-orange">Best for</p>
                  <p className="mt-2 text-sm text-navy/70 leading-relaxed">
                    Investors who want to sharpen pattern recognition, underwriting discipline, and deal judgment between live acquisitions.
                  </p>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-navy/10 bg-white p-5">
                    <p className="text-sm font-semibold text-navy">What you get</p>
                    <p className="mt-2 text-sm text-navy/65 leading-relaxed">
                      A monthly resource drop, narrated breakdown, and structured tools you can keep applying to live opportunities.
                    </p>
                  </div>
                  <div className="rounded-xl border border-navy/10 bg-white p-5">
                    <p className="text-sm font-semibold text-navy">Why it exists</p>
                    <p className="mt-2 text-sm text-navy/65 leading-relaxed">
                      Not everyone needs a direct advisory relationship on day one. This gives buyers a practical intermediate step.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link href={`/services/${offer.slug}`} className="inline-flex items-center justify-center px-6 py-3 border border-navy/15 text-navy hover:border-orange/50 hover:text-orange font-semibold rounded-lg transition-colors">
                    View membership
                  </Link>
                  <AddToCartButton
                    itemKey={offer.key}
                    label="Start membership"
                    className="inline-flex items-center justify-center px-6 py-3 bg-navy hover:bg-navy/90 text-white font-semibold rounded-lg transition-colors"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Services</p>
            <h2 className="mt-3 text-3xl font-bold text-navy">Use a service when the property or deal in front of you needs real judgment.</h2>
            <div className="mt-6 space-y-5 text-navy/65 leading-relaxed">
              <p>
                These are not generic consulting calls. They are built for live opportunities, active decisions, and situations where the right recommendation matters.
              </p>
              <p>
                Start with the most relevant service, solve the immediate problem well, then go deeper only if the deal flow or asset complexity calls for it.
              </p>
            </div>

            <div className="mt-8 grid gap-4">
              {starterOffers.map((offer) => (
                <div key={offer.key} className="rounded-xl border border-navy/10 p-5">
                  <h3 className="text-lg font-bold text-navy">{offer.name}</h3>
                  <p className="text-orange font-semibold mt-1">{offer.price} one time</p>
                  <p className="text-sm text-navy/60 mt-2 leading-relaxed">{offer.positioning}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white border-t border-navy/10">
        <div className="site-shell grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          <div className="rounded-2xl border border-orange/20 bg-orange/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Who this is built for</p>
            <h2 className="mt-3 text-3xl font-bold text-navy">This works best when there is a real asset, a real decision, and a real need for execution.</h2>
            <div className="mt-6 space-y-4 text-sm text-navy/75 leading-relaxed">
              {buyerFit.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="text-orange font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-navy/10 bg-navy text-white p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Next step</p>
            <h2 className="mt-3 text-3xl font-bold">
              Bring the property, the deal, or the situation. We will help frame the right path.
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl">
              If you need a direct sale, we can evaluate that. If the property has more value through improvement or development, we can evaluate that too. The first step is a real conversation about the asset.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-colors"
              >
                Start a property review
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-colors"
              >
                Review products and services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
