# Southern Cities Investors launch checklist

## Runtime env verification

Required runtime variables:

- `NEXT_PUBLIC_BASE_URL`
- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

Verification strategy:

1. In local `.env.local`, confirm all five values exist.
2. In Vercel production envs, confirm the same five values are present and redeploy.
3. Keep Stripe mode aligned:
   - test publishable key + test secret key together
   - live publishable key + live secret key together
4. Keep `NEXT_PUBLIC_BASE_URL` set to the canonical deployed domain.
5. After deploy, verify both server endpoints return the expected behavior:
   - `POST /api/checkout` with a valid cart payload returns a Stripe Checkout URL
   - `POST /api/deal-submissions` with a sample payload returns `{ success: true, id }`

Example local checkout payload:

```json
{
  "name": "Test Buyer",
  "email": "test@example.com",
  "phone": "555-555-5555",
  "items": ["operator-call"]
}
```

Example local deal submission payload:

```json
{
  "submitterName": "Test Wholesaler",
  "submitterEmail": "test@example.com",
  "propertyAddress": "123 Main St",
  "city": "Charlotte",
  "state": "NC",
  "assetType": "Single-Family",
  "askingPrice": "$120,000"
}
```

## Supabase `deal_submissions` table

1. Open Supabase SQL editor.
2. Run `supabase/deal_submissions.sql`.
3. Submit a test deal from the site.
4. Confirm a new row appears in `public.deal_submissions`.
5. Confirm indexes exist and `status` defaults to `new`.

## Stripe live checkout verification plan

Before switching live keys:

1. Complete one successful test checkout for a starter offer (`operator-call` or `deal-audit`).
2. Complete one successful test checkout for a recurring product (`tier-1`, `tier-2`, or `tier-3`).
3. Confirm the Checkout Session metadata includes `cart_items` and `checkout_mode`.
4. Confirm the customer record is created or reused by email.
5. Confirm success and cancel redirects land on the correct public domain.

Go-live sequence:

1. Replace test Stripe keys with live keys in production.
2. Redeploy.
3. Run a low-dollar real purchase first, ideally `operator-call`.
4. Verify payment appears in Stripe live mode.
5. Verify the success page loads correctly.
6. Then test one recurring purchase for a monthly engagement.

## UX and conversion checks

- Services page shows both starter offers and core engagements.
- Cart accepts mixed items and shows due-today summary.
- Checkout button clearly says secure Stripe checkout.
- Submit-a-deal form validates core required fields and surfaces API errors.
- Mobile nav still exposes cart count and checkout path.
