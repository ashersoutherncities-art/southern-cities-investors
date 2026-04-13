create table if not exists public.deal_submissions (
  id uuid primary key default gen_random_uuid(),
  submitter_name text,
  submitter_email text,
  submitter_phone text,
  submitter_role text,
  property_address text,
  city text,
  county text,
  state text,
  asset_type text,
  sqft text,
  beds text,
  baths text,
  lot_size text,
  year_built text,
  asking_price text,
  estimated_rehab text,
  estimated_arv text,
  occupancy text,
  seller_situation text,
  deal_structure text,
  deal_source text,
  timeline text,
  notes text,
  status text default 'new',
  source text,
  submitted_at timestamptz default now(),
  created_at timestamptz default now()
);

create index if not exists deal_submissions_status_idx on public.deal_submissions(status);
create index if not exists deal_submissions_submitted_at_idx on public.deal_submissions(submitted_at desc);
create index if not exists deal_submissions_city_idx on public.deal_submissions(city);
create index if not exists deal_submissions_submitter_email_idx on public.deal_submissions(submitter_email);
