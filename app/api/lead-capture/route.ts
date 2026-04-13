import { NextRequest, NextResponse } from 'next/server';
import { captureLead } from '@/lib/fulfillment';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    await captureLead({
      email: body.email,
      name: body.name,
      phone: body.phone,
      source: body.source || 'site_form',
      tags: Array.isArray(body.tags) ? body.tags : [],
      interestedIn: Array.isArray(body.interestedIn) ? body.interestedIn : [],
      metadata: typeof body.metadata === 'object' && body.metadata ? body.metadata : {},
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to capture lead' },
      { status: 500 }
    );
  }
}
