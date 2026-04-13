export const CART_QUERY_KEY = 'cart';

export const CART_TIERS: Record<string, { name: string; priceLabel: string; description: string }> = {
  'tier-1': {
    name: 'Hands-Off Capital',
    priceLabel: '$1,699/month',
    description: 'For investors who want execution without becoming the operator.',
  },
  'tier-2': {
    name: 'Learning Operator',
    priceLabel: '$1,500/month',
    description: 'For investors who want deal flow, execution support, and real-world coaching.',
  },
  'tier-3': {
    name: 'Scaling Partner',
    priceLabel: '$3,000/month',
    description: 'For active operators who need stronger infrastructure and leverage to scale.',
  },
};

export function parseCartParam(value: string | null | undefined): string[] {
  if (!value) return [];
  return value.split(',').map((v) => v.trim()).filter((v) => !!CART_TIERS[v]);
}

export function buildCartHref(tiers: string[]): string {
  const valid = tiers.filter((tier) => !!CART_TIERS[tier]);
  if (!valid.length) return '/cart';
  return `/cart?${CART_QUERY_KEY}=${encodeURIComponent(valid.join(','))}`;
}
