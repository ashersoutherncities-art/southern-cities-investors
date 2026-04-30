export type EntryPath = {
  key: string;
  name: string;
  description: string;
  href: string;
  cta: string;
};

export type ProductOffer = {
  key: string;
  slug: string;
  name: string;
  price: string;
  turnaround: string;
  badge: string;
  whoItsFor: string;
  description: string;
  deliverables: string[];
  included: string[];
  avoids: string;
  outcome: string;
  outcomes: string[];
  cta: string;
  positioning: string;
  upsell: { label: string; description: string; href: string; };
};

export type StarterOffer = OneTimeOffer;

export type OneTimeOffer = {
  key: string;
  slug: string;
  name: string;
  price: string;
  turnaround: string;
  whoItsFor: string;
  description: string;
  deliverables: string[];
  included: string[];
  avoids: string;
  outcome: string;
  outcomes: string[];
  cta: string;
  positioning: string;
  upsell: { label: string; description: string; href: string; };
};

export type RecurringPlan = {
  key: string;
  slug: string;
  name: string;
  price: string;
  tag: string;
  whoItsFor: string;
  description: string;
  deliverables: string[];
  included: string[];
  avoids: string;
  outcome: string;
  outcomes: string[];
  cta: string;
  href: string;
};

export type AddOnOffer = {
  key: string;
  name: string;
  price: string;
  whoItsFor: string;
  description: string;
  deliverables: string[];
  included: string[];
  avoids: string;
  outcome: string;
  outcomes: string[];
  cta: string;
  href: string;
};

export const entryPaths: EntryPath[] = [
  {
    key: 'submit-deal',
    name: 'Submit a Deal',
    description: 'For wholesalers, agents, referral partners, and deal sources who want an opportunity reviewed.',
    href: '/submit-deal',
    cta: 'Submit a Deal',
  },
  {
    key: 'property-review',
    name: 'Start Property Review',
    description: 'For owners and landowners deciding whether to sell, partner, or improve before sale.',
    href: '/property-owners',
    cta: 'Start Property Review',
  },
  {
    key: 'investor-intake',
    name: 'Investor Intake',
    description: 'For investors and operators who need help evaluating, structuring, packaging, or executing deals.',
    href: '/contact',
    cta: 'Apply for Investor Support',
  },
];

export const selfServeOffers: ProductOffer[] = [
  {
    key: 'buy-box-toolkit',
    slug: 'buy-box-toolkit',
    name: 'Buy Box Toolkit',
    price: '$29',
    turnaround: 'Instant digital delivery',
    badge: 'Self-serve product',
    whoItsFor: 'Investors who need a sharper acquisition filter before paying for live review.',
    description: 'A practical first step for investors who want more discipline before they spend more time or money.',
    deliverables:
      [
        'Buy box worksheet for market, property type, and budget guardrails',
        'Lead screening checklist for faster first-pass decisions',
        'Acquisition scorecard to compare opportunities consistently',
      ],
    included: [
      'Buy box worksheet for market, property type, and budget guardrails',
      'Lead screening checklist for faster first-pass decisions',
      'Acquisition scorecard to compare opportunities consistently',
    ],
    avoids: 'Chasing random deals that do not fit your real capacity or market.',
    outcome: 'A cleaner acquisition filter and better screening discipline.',
    outcomes: ['Create faster no-go decisions on weak leads', 'Clarify the market and deal type you should focus on', 'Prepare for deeper review with stronger filters already in place'],
    cta: 'Get the Toolkit',
    positioning: 'A practical first step for investors who want more discipline before they spend more time or money.',
    upsell: { label: 'Best next step: Buy Box Review', description: 'If your filters still need pressure-testing, move into a direct review.', href: '/services/buy-box-review' },
  },
  {
    key: 'rehab-calculator',
    slug: 'rehab-calculator',
    name: 'Rehab Scope and Margin Calculator',
    price: '$49',
    turnaround: 'Instant digital delivery',
    badge: 'Self-serve product',
    whoItsFor: 'Investors underwriting rehab opportunities who need a cleaner way to test scope and margin.',
    description: 'A straightforward tool for investors who want tighter numbers and fewer underwriting blind spots.',
    deliverables:
      [
        'Rehab line-item calculator with margin summary',
        'Holding and closing cost stress-test tabs',
        'Decision prompts for proceed, renegotiate, or walk away',
      ],
    included: [
      'Rehab line-item calculator with margin summary',
      'Holding and closing cost stress-test tabs',
      'Decision prompts for proceed, renegotiate, or walk away',
    ],
    avoids: 'Underestimating scope, overpaying for speed, or forcing thin deals to work.',
    outcome: 'Faster, more grounded underwriting before a live review is needed.',
    outcomes: ['Catch thin-deal assumptions earlier', 'Underwrite with a repeatable structure', 'Move into live review with stronger numbers already tested'],
    cta: 'Access the Calculator',
    positioning: 'A straightforward tool for investors who want tighter numbers and fewer underwriting blind spots.',
    upsell: { label: 'Best next step: Deal Audit', description: 'When the deal is real, add a live underwriting review on top of the calculator.', href: '/services/deal-audit' },
  },
  {
    key: 'deal-breakdown-vault',
    slug: 'deal-breakdown-vault',
    name: 'Deal Breakdown Vault',
    price: '$79',
    turnaround: 'Instant access',
    badge: 'Self-serve product',
    whoItsFor: 'Investors who learn best from examples and want better judgment before moving into live support.',
    description: 'A serious example-based learning tool, not a hype-driven course funnel.',
    deliverables:
      [
        'Narrated deal breakdown examples',
        'Lessons on buy box mistakes, margin traps, and execution logic',
        'Notes that help point to the right next support level',
      ],
    included: [
      'Narrated deal breakdown examples',
      'Lessons on buy box mistakes, margin traps, and execution logic',
      'Notes that help point to the right next support level',
    ],
    avoids: 'Repeating common judgment mistakes or relying on vague internet advice.',
    outcome: 'Stronger pattern recognition and more confident decision-making.',
    outcomes: ['Learn from examples instead of vague theory', 'Build judgment before a live deal appears', 'Create a better bridge into higher-touch support'],
    cta: 'Access the Vault',
    positioning: 'A serious example-based learning tool, not a hype-driven course funnel.',
    upsell: { label: 'Best next step: Operator Strategy Call', description: 'Move from examples into a focused conversation about your own next move.', href: '/services/operator-strategy-call' },
  },
];

export const oneTimeOffers: OneTimeOffer[] = [
  {
    key: 'operator-call',
    slug: 'operator-strategy-call',
    name: 'Operator Strategy Call',
    price: '$97',
    turnaround: '45-minute call plus recap',
    whoItsFor: 'Investors or operators who need a direct conversation to pressure-test the next move.',
    description: 'A focused first step when the issue is judgment, not just information.',
    deliverables:
      [
        'Focused strategy call around your current bottleneck or decision',
        'Direct recommendation on market, approach, or next step',
        'Simple follow-up recap you can act on immediately',
      ],
    included: [
      'Focused strategy call around your current bottleneck or decision',
      'Direct recommendation on market, approach, or next step',
      'Simple follow-up recap you can act on immediately',
    ],
    avoids: 'Losing momentum while circling the same question without a decision framework.',
    outcome: 'Clearer next steps and a better sense of whether deeper support is needed.',
    outcomes: ['Stop circling the same decision', 'Get a direct recommendation on the next move', 'Know whether deeper review is actually necessary'],
    cta: 'Book Strategy Call',
    positioning: 'A focused first step when the issue is judgment, not just information.',
    upsell: { label: 'Common next step: Buy Box Review', description: 'If the real issue is strategy and acquisition criteria, refine the box next.', href: '/services/buy-box-review' },
  },
  {
    key: 'buy-box-review',
    slug: 'buy-box-review',
    name: 'Buy Box Review',
    price: '$147',
    turnaround: 'Review within 3 business days',
    whoItsFor: 'Investors whose criteria are too broad, too reactive, or not aligned with their actual capacity.',
    description: 'For investors who want to stop being busy and start being more selective.',
    deliverables:
      [
        'Review of your target market, price band, and strategy fit',
        'Refined acquisition criteria with clearer guardrails',
        'Notes on what to avoid, what to tighten, and what to track',
      ],
    included: [
      'Review of your target market, price band, and strategy fit',
      'Refined acquisition criteria with clearer guardrails',
      'Notes on what to avoid, what to tighten, and what to track',
    ],
    avoids: 'Wasting time on deals that were never a real fit in the first place.',
    outcome: 'A sharper buy box and cleaner deal flow.',
    outcomes: ['Tighter filters and fewer wasted conversations', 'Better alignment between criteria and actual capacity', 'A stronger setup before live deal review'],
    cta: 'Request Buy Box Review',
    positioning: 'For investors who want to stop being busy and start being more selective.',
    upsell: { label: 'Best upgrade: Deal Analysis Support', description: 'Once the buy box is clearer, recurring review support becomes more useful.', href: '/contact' },
  },
  {
    key: 'deal-audit',
    slug: 'deal-audit',
    name: 'Deal Audit',
    price: '$297',
    turnaround: 'Review within 48 hours',
    whoItsFor: 'Investors with a live opportunity who want an experienced second set of eyes before committing.',
    description: 'A fast, serious underwriting review for investors making real decisions.',
    deliverables:
      [
        'Review of assumptions, margin, and major pressure points',
        'Notes on rehab, execution, financing, or exit risk',
        'A direct recommendation to proceed, renegotiate, or walk away',
      ],
    included: [
      'Review of assumptions, margin, and major pressure points',
      'Notes on rehab, execution, financing, or exit risk',
      'A direct recommendation to proceed, renegotiate, or walk away',
    ],
    avoids: 'Mistaking a live deal for a good deal just because it is in front of you now.',
    outcome: 'Better go, no-go, or renegotiation judgment on active opportunities.',
    outcomes: ['Avoid thin deals disguised as opportunities', 'See the pressure points more clearly', 'Make a cleaner decision on whether to move, renegotiate, or walk'],
    cta: 'Request Deal Audit',
    positioning: 'A fast, serious underwriting review for investors making real decisions.',
    upsell: { label: 'Natural next step: Deal Desk', description: 'If you need recurring help instead of one-off review, move into a stronger ongoing support layer.', href: '/contact' },
  },
];

export const recurringPlans: RecurringPlan[] = [
  {
    key: 'deal-flow-access',
    slug: 'tier-1',
    name: 'Deal Flow Access',
    price: '$99-$299/month',
    tag: 'Entry recurring support',
    whoItsFor: 'Investors who want better visibility into opportunities without starting with high-touch support.',
    description: 'A lower-friction recurring layer for buyers who want cleaner market awareness before deeper involvement.',
    deliverables:
      [
        'Curated opportunity visibility',
        'Basic deal summaries',
        'Market awareness that keeps you close to live activity',
      ],
    included: [
      'Curated opportunity visibility',
      'Basic deal summaries',
      'Market awareness that keeps you close to live activity',
    ],
    avoids: 'Operating in a vacuum or relying only on random inbound leads.',
    outcome: 'Better market awareness and a cleaner entry point into recurring support.',
    outcomes: ['Stay closer to live opportunities', 'See more of the market without a full high-touch relationship', 'Create a smoother ramp into deeper support when needed'],
    cta: 'Apply for Deal Flow Access',
    href: '/contact',
  },
  {
    key: 'deal-analysis-support',
    slug: 'tier-2',
    name: 'Deal Analysis Support',
    price: '$500-$1,000/month',
    tag: 'Recurring deal review',
    whoItsFor: 'Investors who have opportunities coming in and want structured monthly review support.',
    description: 'Monthly support for investors who want recurring deal judgment instead of one-off reactions.',
    deliverables:
      [
        'A defined number of deal reviews per month',
        'ARV, rehab, and margin pressure-testing on live opportunities',
        'Go, no-go, or renegotiation guidance',
      ],
    included: [
      'A defined number of deal reviews per month',
      'ARV, rehab, and margin pressure-testing on live opportunities',
      'Go, no-go, or renegotiation guidance',
    ],
    avoids: 'Making repeated underwriting mistakes on active deals.',
    outcome: 'Stronger recurring deal judgment and better underwriting discipline.',
    outcomes: ['Improve recurring underwriting decisions', 'Get defined deal reviews each month', 'Reduce repeated mistakes on live opportunities'],
    cta: 'Apply for Deal Analysis Support',
    href: '/contact',
  },
  {
    key: 'deal-desk',
    slug: 'tier-3',
    name: 'Deal Desk',
    price: '$1,500-$3,000/month',
    tag: 'More active support',
    whoItsFor: 'Active investors who need faster review, more deal handling, and stronger support around packaging and structure.',
    description: 'A more active support layer for investors who need recurring review plus faster decision support.',
    deliverables:
      [
        'More frequent deal reviews per month',
        'Buy box or underwriting reviews as needed',
        'Packaging and decision support when opportunities get time-sensitive',
      ],
    included: [
      'More frequent deal reviews per month',
      'Buy box or underwriting reviews as needed',
      'Packaging and decision support when opportunities get time-sensitive',
    ],
    avoids: 'Review bottlenecks and weak presentation when deal volume increases.',
    outcome: 'Faster, stronger deal handling with more operating support behind it.',
    outcomes: ['Handle more volume without weaker decisions', 'Get faster support when timing matters', 'Package and structure opportunities more clearly'],
    cta: 'Apply for Deal Desk',
    href: '/contact',
  },
  {
    key: 'operator-support',
    slug: 'tier-4',
    name: 'Operator Support',
    price: '$3,000-$7,500/month',
    tag: 'Hands-on operator layer',
    whoItsFor: 'Investors actively operating projects who need underwriting support, buy box refinement, and project-level check-ins.',
    description: 'Hands-on support for active operators who need more than deal review alone.',
    deliverables:
      [
        'Recurring deal reviews per month',
        'Buy box or underwriting reviews as strategy evolves',
        'Active project check-ins tied to live execution',
      ],
    included: [
      'Recurring deal reviews per month',
      'Buy box or underwriting reviews as strategy evolves',
      'Active project check-ins tied to live execution',
    ],
    avoids: 'Execution drift, weak decisions under pressure, and project-level blind spots.',
    outcome: 'Better operating consistency and better judgment during live execution.',
    outcomes: ['Improve decisions during active execution', 'Reduce drift on live projects', 'Keep strategy and project oversight closer together'],
    cta: 'Apply for Operator Support',
    href: '/contact',
  },
  {
    key: 'private-partner-circle',
    slug: 'tier-5',
    name: 'Private Partner Circle',
    price: '$5,000-$10,000/month plus backend as applicable',
    tag: 'Selective private relationship',
    whoItsFor: 'Serious operators and capital relationships looking for a deeper, more selective working structure.',
    description: 'A selective private relationship for serious operators and high-trust strategic discussions.',
    deliverables:
      [
        'Private strategic support conversations',
        'Selective discussion around partnership or shared opportunities',
        'Higher-trust collaboration where fit and alignment justify it',
      ],
    included: [
      'Private strategic support conversations',
      'Selective discussion around partnership or shared opportunities',
      'Higher-trust collaboration where fit and alignment justify it',
    ],
    avoids: 'High-stakes partnership conversations with weak fit or unclear alignment.',
    outcome: 'A more selective, private working relationship for the right opportunities.',
    outcomes: ['Create better fit before high-stakes collaboration', 'Keep strategic discussions private and selective', 'Build a stronger relationship where alignment is real'],
    cta: 'Apply for Private Partner Circle',
    href: '/contact',
  },
];

export const addOnOffers: AddOnOffer[] = [
  {
    key: 'construction-oversight',
    name: 'Construction Oversight',
    price: '$1K-$3K/month',
    whoItsFor: 'Investors with active projects that need more eyes on scope, progress, budget, and contractor execution.',
    description: 'Execution support for investors who need tighter control over active project movement.',
    deliverables:
      [
        'Oversight support tied to live execution',
        'Scope and budget review',
        'Feedback on contractor and project drift',
      ],
    included: [
      'Oversight support tied to live execution',
      'Scope and budget review',
      'Feedback on contractor and project drift',
    ],
    avoids: 'Losing margin through weak scope control or unmanaged execution drift.',
    outcome: 'Better visibility and tighter control during active execution.',
    outcomes: ['Catch scope and execution drift earlier', 'Keep budget and progress under closer review', 'Bring more control into active project execution'],
    cta: 'Request Construction Oversight',
    href: '/contact',
  },
  {
    key: 'full-deal-packaging',
    name: 'Full Deal Packaging',
    price: '$2K-$5K per deal',
    whoItsFor: 'Investors who need a cleaner, more credible presentation for lenders, buyers, or partners.',
    description: 'Packaging support for opportunities that need stronger presentation before they move forward.',
    deliverables:
      [
        'Deal packaging support',
        'Clearer underwriting presentation',
        'Organized materials for next-step conversations',
      ],
    included: [
      'Deal packaging support',
      'Clearer underwriting presentation',
      'Organized materials for next-step conversations',
    ],
    avoids: 'Weak deal presentation that creates confusion or undermines credibility.',
    outcome: 'A stronger package for moving the opportunity forward.',
    outcomes: ['Present opportunities more clearly', 'Improve lender, buyer, or partner-facing materials', 'Move the deal forward with stronger credibility'],
    cta: 'Request Deal Packaging',
    href: '/contact',
  },
  {
    key: 'disposition-support',
    name: 'Disposition Support',
    price: 'Flat fee or percentage',
    whoItsFor: 'Investors or operators preparing to sell, assign, or position a deal for exit.',
    description: 'Support for preparing a cleaner, more credible exit process.',
    deliverables:
      [
        'Disposition planning support',
        'Positioning and packaging help',
        'Guidance around buyer-facing presentation',
      ],
    included: [
      'Disposition planning support',
      'Positioning and packaging help',
      'Guidance around buyer-facing presentation',
    ],
    avoids: 'A weak or rushed exit process that leaves value on the table.',
    outcome: 'Better exit positioning and a cleaner disposition process.',
    outcomes: ['Avoid a weak or rushed exit', 'Position the deal more credibly for buyers', 'Create a cleaner sale or assignment process'],
    cta: 'Request Disposition Support',
    href: '/contact',
  },
];

export function getSelfServeOfferBySlug(slug: string) {
  return selfServeOffers.find((offer) => offer.slug === slug);
}

export function getOneTimeOfferBySlug(slug: string) {
  return oneTimeOffers.find((offer) => offer.slug === slug);
}

export function getRecurringPlanBySlug(slug: string) {
  return recurringPlans.find((offer) => offer.slug === slug);
}


export const starterOffers = oneTimeOffers;
export const digitalOffers = selfServeOffers;
export const membershipOffers = [];
export const tierSummaries = recurringPlans.map((plan) => ({
  key: plan.key,
  name: plan.name,
  price: plan.price,
  tag: plan.tag,
  whoItsFor: plan.whoItsFor,
  deliverables: plan.included,
  cta: plan.cta,
  href: plan.href,
}));

export function getStarterOfferBySlug(slug: string) {
  return oneTimeOffers.find((offer) => offer.slug === slug);
}

export function getDigitalOfferBySlug(slug: string) {
  return selfServeOffers.find((offer) => offer.slug === slug);
}

export function getMembershipOfferBySlug(slug: string) {
  return undefined;
}
