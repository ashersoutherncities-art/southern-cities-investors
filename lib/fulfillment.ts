import crypto from 'crypto';
import Stripe from 'stripe';
import { getSupabaseAdmin } from '@/lib/supabase-admin';
import { CART_PRODUCTS } from '@/lib/cart';

export type FulfillmentProduct = {
  key: string;
  title: string;
  accessType: 'digital' | 'membership' | 'service';
  emailSubject: string;
  intro: string;
  accessNote: string;
  bullets: string[];
  ctaLabel: string;
};

export const FULFILLMENT_PRODUCTS: Record<string, FulfillmentProduct> = {
  'buy-box-toolkit': {
    key: 'buy-box-toolkit',
    title: 'Buy Box Toolkit',
    accessType: 'digital',
    emailSubject: 'Your Southern Cities Buy Box Toolkit is ready',
    intro: 'Your toolkit access is live. This is the fastest starting point for tightening criteria and screening opportunities with less guesswork.',
    accessNote: 'Use this page as the delivery hub for the worksheet set, screening checklist, and scoring flow.',
    bullets: [
      'Buy box worksheet with market, property, and price guardrails',
      'Lead screening checklist for faster yes or no decisions',
      'Acquisition scorecard structure for comparing opportunities',
    ],
    ctaLabel: 'Open toolkit access',
  },
  'deal-breakdown-vault': {
    key: 'deal-breakdown-vault',
    title: 'Deal Breakdown Vault',
    accessType: 'digital',
    emailSubject: 'Your Deal Breakdown Vault access is ready',
    intro: 'Your narrated deal breakdown library is now available. This hub gives you access to concise ElevenLabs-led lessons designed to sharpen how you evaluate real opportunities.',
    accessNote: 'Start with the featured lesson flow, then choose the next level of support when you want direct feedback on a real deal or decision.',
    bullets: [
      'Voice-led breakdown lessons with practical investing guidance',
      'Short notes on buy-box mistakes, margin traps, and execution logic',
      'Recommended upgrade path into Strategy Call, Deal Audit, or Membership',
    ],
    ctaLabel: 'Open vault access',
  },
  'investor-essentials-membership': {
    key: 'investor-essentials-membership',
    title: 'Investor Essentials Membership',
    accessType: 'membership',
    emailSubject: 'Your Investor Essentials Membership is active',
    intro: 'Your membership access is active. This hub is where you will receive monthly templates, narrated breakdowns, and practical implementation prompts.',
    accessNote: 'Bookmark this page. It functions as the recurring access point after checkout and can expand later into a fuller member portal.',
    bullets: [
      'Current month resource drop and implementation prompt',
      'Member-only narrated training and practical notes',
      'Clear path into Strategy Call, Deal Audit, or Tier 2 when needed',
    ],
    ctaLabel: 'Open membership hub',
  },
};

export type AccessRecord = {
  id: string;
  token: string;
  item_key: string;
  customer_email: string;
  customer_name: string | null;
  stripe_session_id: string | null;
  stripe_customer_id: string | null;
  status: string;
  metadata: Record<string, unknown> | null;
  delivered_at: string | null;
  created_at: string;
};

function getBaseUrl() {
  return process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
}

function generateToken() {
  return crypto.randomBytes(24).toString('hex');
}

async function sendResendEmail({ to, subject, html }: { to: string; subject: string; html: string }) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.FULFILLMENT_FROM_EMAIL || process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    return { sent: false as const, provider: 'queue_only', providerId: null as string | null };
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      html,
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data?.message || 'Failed to send email via Resend');
  }

  return {
    sent: true as const,
    provider: 'resend',
    providerId: typeof data?.id === 'string' ? data.id : null,
  };
}

function buildEmailHtml(product: FulfillmentProduct, accessUrl: string, customerName?: string | null) {
  const greeting = customerName ? `Hi ${customerName},` : 'Hi,';
  return `
    <div style="font-family: Inter, Arial, sans-serif; color: #1a2744; line-height: 1.6; max-width: 640px; margin: 0 auto; padding: 24px;">
      <p>${greeting}</p>
      <h1 style="font-size: 28px; margin-bottom: 12px;">${product.title}</h1>
      <p>${product.intro}</p>
      <p>${product.accessNote}</p>
      <ul>
        ${product.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}
      </ul>
      <p style="margin: 28px 0;">
        <a href="${accessUrl}" style="display: inline-block; background: #d4a843; color: #ffffff; text-decoration: none; padding: 14px 20px; border-radius: 10px; font-weight: 600;">${product.ctaLabel}</a>
      </p>
      <p>If you would rather reply and get routed into a live review, just respond to this email and include the deal or question you want help with.</p>
      <p>Southern Cities Investors</p>
    </div>
  `;
}

export async function captureLead(input: {
  email: string;
  name?: string;
  phone?: string;
  source: string;
  tags?: string[];
  interestedIn?: string[];
  metadata?: Record<string, unknown>;
}) {
  try {
    const supabase = getSupabaseAdmin();
    const payload = {
      email: input.email,
      name: input.name || null,
      phone: input.phone || null,
      source: input.source,
      tags: input.tags || [],
      interested_in: input.interestedIn || [],
      metadata: input.metadata || {},
      updated_at: new Date().toISOString(),
    };

    await supabase.from('email_captures').upsert(payload, { onConflict: 'email' });
  } catch (error) {
    console.error('Lead capture failed:', error);
  }
}

export async function fulfillCheckoutSession(sessionId: string) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) {
    throw new Error('Stripe is not configured');
  }

  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: '2026-03-25.dahlia',
  });

  const session = await stripe.checkout.sessions.retrieve(sessionId);

  if (!session || session.payment_status !== 'paid') {
    return { session, fulfilled: [] as AccessRecord[] };
  }

  const itemKeys = String(session.metadata?.cart_items || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
    .filter((key) => Boolean(FULFILLMENT_PRODUCTS[key]));

  if (!itemKeys.length) {
    return { session, fulfilled: [] as AccessRecord[] };
  }

  const supabase = getSupabaseAdmin();
  const baseUrl = getBaseUrl();
  const customerEmail = session.customer_details?.email || session.metadata?.customer_email || '';
  const customerName = session.customer_details?.name || session.metadata?.customer_name || null;

  if (customerEmail) {
    await captureLead({
      email: customerEmail,
      name: customerName || undefined,
      phone: session.customer_details?.phone || undefined,
      source: 'checkout_success',
      tags: ['buyer', 'checkout'],
      interestedIn: itemKeys,
      metadata: {
        stripe_session_id: session.id,
        stripe_customer_id: typeof session.customer === 'string' ? session.customer : null,
      },
    });
  }

  const { data: existingRowsRaw } = await supabase
    .from('customer_fulfillments')
    .select('*')
    .eq('stripe_session_id', session.id);

  const existingRows = (existingRowsRaw || []) as AccessRecord[];
  const existingByItem = new Map(existingRows.map((row) => [row.item_key, row]));
  const fulfilled: AccessRecord[] = [];

  for (const itemKey of itemKeys) {
    const existing = existingByItem.get(itemKey);
    let row = existing;

    if (!row) {
      const insertPayload = {
        token: generateToken(),
        item_key: itemKey,
        customer_email: customerEmail,
        customer_name: customerName,
        stripe_session_id: session.id,
        stripe_customer_id: typeof session.customer === 'string' ? session.customer : null,
        status: 'active',
        metadata: {
          cart_product: CART_PRODUCTS[itemKey]?.name || itemKey,
          checkout_mode: session.metadata?.checkout_mode || null,
        },
      };

      const { data, error } = await supabase
        .from('customer_fulfillments')
        .insert(insertPayload)
        .select('*')
        .single();

      if (error) throw error;
      row = data as AccessRecord;
    }

    if (row) {
      const product = FULFILLMENT_PRODUCTS[itemKey];
      const accessUrl = `${baseUrl}/access/${row.token}`;
      const html = buildEmailHtml(product, accessUrl, customerName);
      const alreadyDelivered = Boolean(row.delivered_at);

      let emailStatus = alreadyDelivered ? 'already_sent' : 'queued';
      let provider = alreadyDelivered ? 'existing' : 'queue_only';
      let providerId: string | null = null;

      if (!alreadyDelivered) {
        try {
          const result = customerEmail
            ? await sendResendEmail({ to: customerEmail, subject: product.emailSubject, html })
            : { sent: false as const, provider: 'skipped', providerId: null as string | null };
          emailStatus = result.sent ? 'sent' : 'queued';
          provider = result.provider;
          providerId = result.providerId;
        } catch (error) {
          emailStatus = 'failed';
          provider = 'resend';
          providerId = null;
          console.error('Fulfillment email failed:', error);
        }

        await supabase.from('email_delivery_events').insert({
          customer_email: customerEmail,
          item_key: itemKey,
          stripe_session_id: session.id,
          delivery_type: 'fulfillment',
          status: emailStatus,
          provider,
          provider_message_id: providerId,
          payload: {
            subject: product.emailSubject,
            access_url: accessUrl,
          },
        });
      }

      const updated = alreadyDelivered
        ? row
        : await supabase
            .from('customer_fulfillments')
            .update({ delivered_at: new Date().toISOString() })
            .eq('id', row.id)
            .select('*')
            .single()
            .then(({ data }) => data as AccessRecord | null);

      fulfilled.push((updated || row) as AccessRecord);
    }
  }

  return { session, fulfilled };
}

export async function getAccessRecordByToken(token: string) {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from('customer_fulfillments')
    .select('*')
    .eq('token', token)
    .maybeSingle();

  if (error) throw error;
  return (data || null) as AccessRecord | null;
}
