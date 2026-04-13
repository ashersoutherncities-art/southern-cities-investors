import { NextRequest, NextResponse } from 'next/server';

const REQUIRED_FIELDS = ['name', 'email', 'inquiry'];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    for (const field of REQUIRED_FIELDS) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
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
      { error: error instanceof Error ? error.message : 'Failed to process investor intake' },
      { status: 500 }
    );
  }
}
