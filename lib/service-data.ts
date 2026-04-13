export type StarterOffer = {
  key: string;
  slug: string;
  name: string;
  price: string;
  turnaround: string;
  whoItsFor: string;
  positioning: string;
  description: string;
  deliverables: string[];
  outcomes: string[];
  upsell: {
    label: string;
    description: string;
    href: string;
  };
};

export const starterOffers: StarterOffer[] = [
  {
    key: 'operator-call',
    slug: 'operator-strategy-call',
    name: 'Operator Strategy Call',
    price: '$97',
    turnaround: '45-minute call + next-step recap',
    whoItsFor: 'Best for newer investors, stuck buyers, and prospects who need fast clarity before paying for deeper help.',
    positioning: 'A low-friction first step to pressure test your next move before you waste months in the wrong market, strategy, or deal type.',
    description: 'Bring your current roadblock, market question, or deal plan. We will help you identify the cleanest next step and whether you should stay DIY, buy a deeper review, or move into an ongoing tier.',
    deliverables: [
      '45-minute operator call focused on your current bottleneck',
      'Clear recommendation on market, strategy, or next acquisition step',
      'Simple action recap you can use immediately after the call',
    ],
    outcomes: [
      'Stop second-guessing your next move',
      'Get a faster yes, no, or not yet decision',
      'Create the right bridge into Buy Box Review or Tier 2',
    ],
    upsell: {
      label: 'Most common next step: Buy Box Review',
      description: 'If the issue is strategy and criteria, we tighten the buy box next so you stop chasing the wrong deals.',
      href: '/services/buy-box-review',
    },
  },
  {
    key: 'buy-box-review',
    slug: 'buy-box-review',
    name: 'Buy Box Review',
    price: '$147',
    turnaround: 'Review + recommendations within 3 business days',
    whoItsFor: 'Best for investors who are active enough to look at deals, but still too broad, too reactive, or too inconsistent.',
    positioning: 'This sharpens your market, property criteria, budget range, and deal standards so your pipeline gets cleaner and your underwriting gets faster.',
    description: 'We review the market you are targeting, what you are actually equipped to buy, and where your current criteria are leaking time or capital.',
    deliverables: [
      'Review of your target market, price band, and strategy fit',
      'Refined acquisition criteria with clear guardrails',
      'Operator notes on what to avoid, what to double down on, and what to track',
    ],
    outcomes: [
      'Tighter filters and fewer wasted seller conversations',
      'Cleaner deal flow that matches your actual capacity',
      'A stronger setup before Deal Audit, Tier 1, or Tier 2',
    ],
    upsell: {
      label: 'Best upgrade: Tier 2 Learning Operator',
      description: 'Once the buy box is clear, Tier 2 helps you source and execute against it with real support.',
      href: '/services/tier-2',
    },
  },
  {
    key: 'deal-audit',
    slug: 'deal-audit',
    name: 'Deal Audit',
    price: '$297',
    turnaround: 'Underwriting review within 48 hours',
    whoItsFor: 'Best for investors with a live deal in front of them who want a second set of experienced operator eyes before committing capital.',
    positioning: 'A fast underwriting sanity check for real deals, not theory. Use it before earnest money, before hard money, or before a bad buy becomes an expensive lesson.',
    description: 'We look at your numbers, assumptions, rehab scope, and margin story to help you decide whether the opportunity is viable, risky, or worth renegotiating.',
    deliverables: [
      'Review of deal assumptions, margin, and likely pressure points',
      'Notes on rehab, execution, or exit risks that deserve attention',
      'Clear recommendation: proceed, renegotiate, or walk away',
    ],
    outcomes: [
      'Avoid thin deals disguised as opportunities',
      'Enter the deal with clearer numbers and better questions',
      'Create a natural bridge into Tier 1 or Tier 3 if execution help is needed',
    ],
    upsell: {
      label: 'Natural upgrade: Tier 1 or Tier 3',
      description: 'If you want ongoing sourcing and execution help, we move from one deal review into the right long-term operating relationship.',
      href: '/services#tiers',
    },
  },
];

export const tierSummaries = [
  {
    key: 'tier-1',
    name: 'Tier 1: Hands-Off Capital',
    price: '$1,699/month',
    tag: 'For passive but serious capital',
    whoItsFor: 'You want off-market opportunities and operator-led execution without becoming the day-to-day builder of the machine.',
    deliverables: [
      '2 to 3 screened opportunities per month',
      'Operator-led underwriting, coordination, and execution oversight',
      'A cleaner path from acquisition to exit without building the back office yourself',
    ],
    cta: 'See Tier 1 details',
    href: '/services/tier-1',
  },
  {
    key: 'tier-2',
    name: 'Tier 2: Learning Operator',
    price: '$1,500/month',
    tag: 'Best fit for growth-stage investors',
    whoItsFor: 'You want to learn in real deals while still having sourcing, underwriting, and operator guidance around you.',
    deliverables: [
      'Deal flow plus underwriting support',
      'Hands-on guidance around execution and decision-making',
      'A direct bridge from starter offers into a repeatable investing model',
    ],
    cta: 'See Tier 2 details',
    href: '/services/tier-2',
  },
  {
    key: 'tier-3',
    name: 'Tier 3: Scaling Partner',
    price: '$3,000/month',
    tag: 'For operators who need leverage',
    whoItsFor: 'You already know the game, but need stronger systems, execution capacity, and operating leverage to scale volume.',
    deliverables: [
      'Higher-touch coordination across sourcing, construction, and exits',
      'Operational leverage that helps move from opportunistic to repeatable',
      'A premium support model for active operators and portfolio builders',
    ],
    cta: 'See Tier 3 details',
    href: '/services/tier-3',
  },
];

export const upcomingVideoOffer = {
  name: 'Deal Clarity Video Breakdowns',
  status: 'Coming soon',
  description:
    'A lower-ticket educational offer built around short breakdowns of underwriting, buy-box mistakes, and operator decision-making. It is designed to warm colder traffic before a call, review, or monthly tier.',
};

export function getStarterOfferBySlug(slug: string) {
  return starterOffers.find((offer) => offer.slug === slug);
}
