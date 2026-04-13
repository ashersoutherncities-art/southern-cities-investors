create table if not exists public.email_captures (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  name text,
  phone text,
  source text,
  tags text[] default '{}',
  interested_in text[] default '{}',
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists email_captures_source_idx on public.email_captures(source);
create index if not exists email_captures_tags_idx on public.email_captures using gin(tags);
create index if not exists email_captures_interested_in_idx on public.email_captures using gin(interested_in);

create table if not exists public.customer_fulfillments (
  id uuid primary key default gen_random_uuid(),
  token text not null unique,
  item_key text not null,
  customer_email text not null,
  customer_name text,
  stripe_session_id text,
  stripe_customer_id text,
  status text not null default 'active',
  metadata jsonb default '{}'::jsonb,
  delivered_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists customer_fulfillments_session_item_idx on public.customer_fulfillments(stripe_session_id, item_key);
create index if not exists customer_fulfillments_customer_email_idx on public.customer_fulfillments(customer_email);
create index if not exists customer_fulfillments_item_key_idx on public.customer_fulfillments(item_key);

create table if not exists public.email_delivery_events (
  id uuid primary key default gen_random_uuid(),
  customer_email text,
  item_key text,
  stripe_session_id text,
  delivery_type text not null default 'fulfillment',
  status text not null default 'queued',
  provider text,
  provider_message_id text,
  payload jsonb default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists email_delivery_events_customer_email_idx on public.email_delivery_events(customer_email);
create index if not exists email_delivery_events_status_idx on public.email_delivery_events(status);
create index if not exists email_delivery_events_item_key_idx on public.email_delivery_events(item_key);
