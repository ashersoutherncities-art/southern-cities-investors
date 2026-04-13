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
  category: 'core' | 'starter';
  checkoutDescription: string;
};

export const CART_PRODUCTS: Record<string, CartProduct> = {
  'tier-1': {
    key: 'tier-1',
    name: 'Hands-Off Capital',
    shortName: 'Tier 1',
    price: 169900,
    priceLabel: '$1,699/month',
    billingMode: 'subscription',
    interval: 'month',
    category: 'core',
    description: 'For investors who want execution without becoming the operator.',
    checkoutDescription: 'Southern Cities Investors Tier 1 monthly subscription.',
  },
  'tier-2': {
    key: 'tier-2',
    name: 'Learning Operator',
    shortName: 'Tier 2',
    price: 150000,
    priceLabel: '$1,500/month',
    billingMode: 'subscription',
    interval: 'month',
    category: 'core',
    description: 'For investors who want deal flow, execution support, and real-world coaching.',
    checkoutDescription: 'Southern Cities Investors Tier 2 monthly subscription.',
  },
  'tier-3': {
    key: 'tier-3',
    name: 'Scaling Partner',
    shortName: 'Tier 3',
    price: 300000,
    priceLabel: '$3,000/month',
    billingMode: 'subscription',
    interval: 'month',
    category: 'core',
    description: 'For active operators who need stronger infrastructure and leverage to scale.',
    checkoutDescription: 'Southern Cities Investors Tier 3 monthly subscription.',
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
  'operator-call': {
    key: 'operator-call',
    name: 'Operator Strategy Call',
    shortName: 'Strategy Call',
    price: 9700,
    priceLabel: '$97 one time',
    billingMode: 'payment',
    category: 'starter',
    description: 'A focused call for investors who want clarity before stepping into a larger engagement.',
    checkoutDescription: 'One-time operator strategy call.',
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
  const starters: string[] = [];

  for (const item of items) {
    const product = CART_PRODUCTS[item];
    if (!product) continue;
    if (product.billingMode === 'subscription') {
      subscriptions.add(item);
    } else {
      starters.push(item);
    }
  }

  return [...Array.from(subscriptions), ...starters];
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
