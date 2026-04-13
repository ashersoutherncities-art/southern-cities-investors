import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

const REQUIRED_FIELDS = ['submitterName', 'submitterEmail', 'propertyAddress', 'city', 'state', 'assetType', 'askingPrice'];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    for (const field of REQUIRED_FIELDS) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    const supabase = getSupabaseAdmin();

    const payload = {
      submitter_name: body.submitterName || null,
      submitter_email: body.submitterEmail || null,
      submitter_phone: body.submitterPhone || null,
      submitter_role: body.submitterRole || null,
      property_address: body.propertyAddress || null,
      city: body.city || null,
      county: body.county || null,
      state: body.state || null,
      asset_type: body.assetType || null,
      sqft: body.sqft || null,
      beds: body.beds || null,
      baths: body.baths || null,
      lot_size: body.lotSize || null,
      year_built: body.yearBuilt || null,
      asking_price: body.askingPrice || null,
      estimated_rehab: body.estimatedRehab || null,
      estimated_arv: body.estimatedARV || null,
      occupancy: body.occupancy || null,
      seller_situation: body.sellerSituation || null,
      deal_structure: body.dealStructure || null,
      deal_source: body.dealSource || null,
      timeline: body.timeline || null,
      notes: body.notes || null,
      status: 'new',
      source: 'southerncitiesinvestors.com',
      submitted_at: new Date().toISOString(),
    };

    const { data, error } = await supabase.from('deal_submissions').insert(payload).select('id').single();

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json({ error: 'Failed to save submission', details: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data.id });
  } catch (error) {
    console.error('Deal submission error:', error);
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Failed to process submission' }, { status: 500 });
  }
}
