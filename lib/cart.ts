export const CART_QUERY_KEY = 'cart';

export type BillingMode = 'subscription' | 'payment';

export type CartProduct = {
  key: string;
  name: string;
  shortName: string;
  price: number;
  priceLabel: string;
  billingMode: BillingMode;
  interval?: 'month' | 'year';
  description: string;
  category: 'core' | 'starter' | 'digital' | 'membership';
  checkoutDescription: string;
};

export const CART_PRODUCTS: Record<string, CartProduct> = {
  'tier-1': {
    key: 'tier-1',
    name: 'Deal Flow Access',
    shortName: 'Tier 1',
    price: 9900,
    priceLabel: 'Starting at $99/month',
    billingMode: 'subscription',
    interval: 'month',
    category: 'core',
    description: 'Access to off-market deals, basic deal summaries, and market insight.',
    checkoutDescription: 'Southern Cities Investors Tier 1 Deal Flow Access monthly subscription.',
  },
  'tier-2': {
    key: 'tier-2',
    name: 'Deal Analysis',
    shortName: 'Tier 2',
    price: 50000,
    priceLabel: 'Starting at $500/month',
    billingMode: 'subscription',
    interval: 'month',
    category: 'core',
    description: 'Deal review, ARV validation, rehab checks, and go or no-go guidance.',
    checkoutDescription: 'Southern Cities Investors Tier 2 Deal Analysis monthly subscription.',
  },
  'tier-3': {
    key: 'tier-3',
    name: 'Deal Desk',
    shortName: 'Tier 3',
    price: 150000,
    priceLabel: 'Starting at $1,500/month',
    billingMode: 'subscription',
    interval: 'month',
    category: 'core',
    description: 'Unlimited reviews, structuring guidance, and faster access as deal volume grows.',
    checkoutDescription: 'Southern Cities Investors Tier 3 Deal Desk monthly subscription.',
  },
  'operator-call': {
    key: 'operator-call',
    name: 'Operator Strategy Call',
    shortName: 'Strategy Call',
    price: 9700,
    priceLabel: '$97 one time',
    billingMode: 'payment',
    category: 'starter',
    description: 'A focused call for investors who want clarity before stepping into a larger engagement.',
    checkoutDescription: 'One-time strategy call.',
  },
  'buy-box-review': {
    key: 'buy-box-review',
    name: 'Buy Box Review',
    shortName: 'Buy Box Review',
    price: 14700,
    priceLabel: '$147 one time',
    billingMode: 'payment',
    category: 'starter',
    description: 'A quick strategy review to tighten your market, criteria, and acquisition filters.',
    checkoutDescription: 'One-time buy box and acquisition criteria review.',
  },
  'deal-audit': {
    key: 'deal-audit',
    name: 'Deal Audit',
    shortName: 'Deal Audit',
    price: 29700,
    priceLabel: '$297 one time',
    billingMode: 'payment',
    category: 'starter',
    description: 'Fast underwriting review for a live deal before you commit capital.',
    checkoutDescription: 'One-time deal audit and underwriting review.',
  },
  'buy-box-toolkit': {
    key: 'buy-box-toolkit',
    name: 'Buy Box Toolkit',
    shortName: 'Toolkit',
    price: 2900,
    priceLabel: '$29 one time',
    billingMode: 'payment',
    category: 'digital',
    description: 'Downloadable buy box, lead screening, and acquisition scoring templates.',
    checkoutDescription: 'Instant-access digital toolkit for acquisition criteria and lead screening.',
  },
  'rehab-calculator': {
    key: 'rehab-calculator',
    name: 'Rehab Scope and Margin Calculator',
    shortName: 'Rehab Calculator',
    price: 4900,
    priceLabel: '$49 one time',
    billingMode: 'payment',
    category: 'digital',
    description: 'Spreadsheet tool to stress rehab assumptions, holding costs, and margin.',
    checkoutDescription: 'Instant-access rehab scope and margin calculator.',
  },
  'deal-breakdown-vault': {
    key: 'deal-breakdown-vault',
    name: 'Deal Breakdown Vault',
    shortName: 'Video Vault',
    price: 7900,
    priceLabel: '$79 one time',
    billingMode: 'payment',
    category: 'digital',
    description: 'Narrated educational deal breakdowns and practical investing lessons.',
    checkoutDescription: 'Instant-access narrated deal breakdown vault.',
  },
  'investor-essentials-membership': {
    key: 'investor-essentials-membership',
    name: 'Investor Essentials Membership',
    shortName: 'Essentials Membership',
    price: 5900,
    priceLabel: '$59/month',
    billingMode: 'subscription',
    interval: 'month',
    category: 'membership',
    description: 'Entry-level membership with monthly templates, narrated lessons, and next-step guidance.',
    checkoutDescription: 'Southern Cities Investors entry-level monthly membership.',
  },
};

export const CART_TIERS = CART_PRODUCTS;

export function parseCartParam(value: string | null | undefined): string[] {
  if (!value) return [];
  return value
    .split(',')
    .map((v) => v.trim())
    .filter((v) => !!CART_PRODUCTS[v]);
}

export function sanitizeCartItems(items: string[]): string[] {
  const subscriptions = new Set<string>();
  const payments: string[] = [];

  for (const item of items) {
    const product = CART_PRODUCTS[item];
    if (!product) continue;
    if (product.billingMode === 'subscription') {
      subscriptions.add(item);
    } else {
      payments.push(item);
    }
  }

  return [...Array.from(subscriptions), ...payments];
}

export function buildCartHref(items: string[]): string {
  const valid = sanitizeCartItems(items);
  if (!valid.length) return '/cart';
  return `/cart?${CART_QUERY_KEY}=${encodeURIComponent(valid.join(','))}`;
}

export function getCartProducts(items: string[]): CartProduct[] {
  return sanitizeCartItems(items).map((item) => CART_PRODUCTS[item]).filter(Boolean);
}

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(cents / 100);
}
