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

export type ProductOffer = {
  key: string;
  slug: string;
  name: string;
  price: string;
  turnaround: string;
  badge: string;
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
    whoItsFor: 'Best for newer investors, stuck buyers, and anyone who needs fast clarity before committing more time or capital.',
    positioning: 'A focused first step to pressure test your next move before you lose momentum in the wrong market, strategy, or deal type.',
    description: 'Bring your current roadblock, market question, or deal plan. We will help you identify the cleanest next step and whether you need a deeper review or ongoing support.',
    deliverables: [
      '45-minute strategy call focused on your current bottleneck',
      'Clear recommendation on market, strategy, or next acquisition step',
      'Simple action recap you can use immediately after the call',
    ],
    outcomes: [
      'Stop second-guessing your next move',
      'Get a faster yes, no, or not yet decision',
      'Identify whether Buy Box Review or Tier 2 is the right next move',
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
      'Clear notes on what to avoid, what to double down on, and what to track',
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
    whoItsFor: 'Best for investors with a live deal in front of them who want an experienced second set of eyes before committing capital.',
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
      'See whether Tier 1 or Tier 3 makes sense if execution help is needed',
    ],
    upsell: {
      label: 'Natural upgrade: Tier 1 or Tier 3',
      description: 'If you want ongoing sourcing and execution help, we move from one deal review into the right long-term operating relationship.',
      href: '/services#tiers',
    },
  },
];

export const digitalOffers: ProductOffer[] = [
  {
    key: 'buy-box-toolkit',
    slug: 'buy-box-toolkit',
    name: 'Buy Box Toolkit',
    price: '$29',
    turnaround: 'Instant digital delivery',
    badge: 'Downloadable templates',
    whoItsFor: 'Best for early-stage investors and anyone who needs a clearer acquisition filter before paying for live help.',
    positioning: 'A lightweight digital starter pack that helps you stop chasing random deals and define a cleaner box for what you should actually buy.',
    description: 'This toolkit packages the core worksheets, prompts, and filters we use to help investors tighten criteria fast. It is a practical first step before a strategy call or buy box review.',
    deliverables: [
      'Buy box worksheet for market, property, and budget guardrails',
      'Lead screening checklist to qualify inbound opportunities faster',
      'Acquisition scorecard to compare deals side by side',
    ],
    outcomes: [
      'Create faster no-go decisions on weak leads',
      'Clarify the market and deal type you should focus on',
      'Prepare for Buy Box Review or Tier 2 with clearer criteria',
    ],
    upsell: {
      label: 'Best next step: Buy Box Review',
      description: 'Use the toolkit first, then let us pressure test and sharpen the criteria with direct feedback.',
      href: '/services/buy-box-review',
    },
  },
  {
    key: 'rehab-calculator',
    slug: 'rehab-calculator',
    name: 'Rehab Scope and Margin Calculator',
    price: '$49',
    turnaround: 'Instant digital delivery',
    badge: 'Template + underwriting tool',
    whoItsFor: 'Best for investors who can source leads, but need a cleaner way to budget scope, stress margins, and avoid skinny deals.',
    positioning: 'A practical spreadsheet-based tool for quickly testing rehab assumptions before you spend money, lose earnest money, or overpay for speed.',
    description: 'We turned the common underwriting checks into a usable calculator with room for rehab, holding costs, margin thresholds, and exit sensitivity.',
    deliverables: [
      'Rehab line-item calculator with margin summary',
      'Holding and closing cost stress test tabs',
      'Simple decision prompts for renegotiate, proceed, or walk',
    ],
    outcomes: [
      'Catch thin-deal assumptions earlier',
      'Underwrite faster with a repeatable structure',
      'Bridge naturally into Deal Audit when a live deal appears',
    ],
    upsell: {
      label: 'Best next step: Deal Audit',
      description: 'When the deal gets real, add an experienced human review on top of the calculator.',
      href: '/services/deal-audit',
    },
  },
  {
    key: 'deal-breakdown-vault',
    slug: 'deal-breakdown-vault',
    name: 'Deal Breakdown Vault',
    price: '$79',
    turnaround: 'Instant access to current library',
    badge: 'ElevenLabs educational videos',
    whoItsFor: 'Best for people who learn well from examples and want short, premium-feeling deal education before jumping into higher-touch support.',
    positioning: 'An entry-level educational product built around narrated deal breakdowns, buy-box mistakes, and decision-making using polished ElevenLabs voice-led training.',
    description: 'Instead of generic course fluff, this vault focuses on short lessons that help you think better about real estate decisions and move forward with more confidence.',
    deliverables: [
      'Short-form narrated deal breakdown videos',
      'Lessons on buy-box mistakes, margin traps, and execution logic',
      'Practical notes that point to the right next offer',
    ],
    outcomes: [
      'Build confidence before a call or review offer',
      'Understand how experienced investors think through deals and risk',
      'Create a natural path into Strategy Call, Deal Audit, or membership',
    ],
    upsell: {
      label: 'Best next step: Investor Essentials Membership',
      description: 'If you want fresh training and templates monthly, the membership is the clean upgrade.',
      href: '/services/investor-essentials-membership',
    },
  },
];

export const membershipOffers: ProductOffer[] = [
  {
    key: 'investor-essentials-membership',
    slug: 'investor-essentials-membership',
    name: 'Investor Essentials Membership',
    price: '$59/month',
    turnaround: 'Monthly recurring access',
    badge: 'Entry-level membership',
    whoItsFor: 'Best for investors who are not ready for a full recurring tier yet, but want consistent templates, training, and next-step guidance.',
    positioning: 'A practical monthly membership for investors who want to stay sharp, build confidence, and keep momentum between deals.',
    description: 'This membership combines templates, narrated deal lessons, and monthly implementation prompts that prepare you for strategy calls, audits, and Tier 2.',
    deliverables: [
      'Monthly ElevenLabs-powered educational breakdown video',
      'Fresh template, scorecard, or worksheet drop each month',
      'Member-only notes that point to the smartest next move',
    ],
    outcomes: [
      'Stay engaged with a lower-friction paid relationship',
      'Build confidence before moving into deeper services',
      'Create a smoother path into Strategy Call, Deal Audit, and Tier 2',
    ],
    upsell: {
      label: 'Best next step: Tier 2 Learning Operator',
      description: 'Once you are ready for live deal help and execution support, Tier 2 is the natural graduation point.',
      href: '/services/tier-2',
    },
  },
];

export const tierSummaries = [
  {
    key: 'tier-1',
    name: 'Tier 1: Hands-Off Capital',
    price: '$1,699/month',
    tag: 'For passive but serious capital',
    whoItsFor: 'You want off-market opportunities and execution support without becoming the day-to-day builder of the machine.',
    deliverables: [
      '2 to 3 screened opportunities per month',
      'Underwriting, coordination, and execution oversight from an experienced team',
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
    whoItsFor: 'You want to learn in real deals while still having sourcing, underwriting, and experienced guidance around you.',
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
    tag: 'For experienced investors who need leverage',
    whoItsFor: 'You already know the game, but need stronger systems, execution capacity, and leverage to scale volume.',
    deliverables: [
      'Higher-touch coordination across sourcing, construction, and exits',
      'Operational leverage that helps move from opportunistic to repeatable',
      'A premium support model for active investors and portfolio builders',
    ],
    cta: 'See Tier 3 details',
    href: '/services/tier-3',
  },
];

export function getStarterOfferBySlug(slug: string) {
  return starterOffers.find((offer) => offer.slug === slug);
}

export function getDigitalOfferBySlug(slug: string) {
  return digitalOffers.find((offer) => offer.slug === slug);
}

export function getMembershipOfferBySlug(slug: string) {
  return membershipOffers.find((offer) => offer.slug === slug);
}
