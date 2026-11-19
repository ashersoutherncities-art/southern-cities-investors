import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

const REQUIRED_FIELDS = ['name', 'email', 'inquiry'];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    for (const field of REQUIRED_FIELDS) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    // Intake must confirm persistence before telling the visitor it was received.
    // Keep the shared best-effort checkout/fulfillment helper unchanged.
    const { error } = await getSupabaseAdmin().from('email_captures').upsert({
      email: body.email,
      name: body.name || null,
      phone: body.phone || null,
      source: 'investor_intake',
      tags: ['investor-intake', 'contact'],
      interested_in: [body.inquiry].filter(Boolean),
      metadata: {
        capital: body.capital || null,
        timeline: body.timeline || null,
        experience: body.experience || null,
        message: body.message || null,
      },
      updated_at: new Date().toISOString(),
    }, { onConflict: 'email' });

    if (error) {
      return NextResponse.json(
        { error: 'We could not save your inquiry. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Investor intake received',
      submission: {
        name: body.name,
        email: body.email,
        inquiry: body.inquiry,
        capital: body.capital || null,
        timeline: body.timeline || null,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'We could not save your inquiry. Please try again.' },
      { status: 500 }
    );
  }
}
