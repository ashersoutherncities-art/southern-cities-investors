"use client";

import { useState } from 'react';

export default function LeadCaptureCard({
  title = 'Want the next drop or fulfillment updates?',
  copy = 'Leave your email and we will route product updates, launch notes, and the right next-step offer.',
  source,
  interestedIn,
}: {
  title?: string;
  copy?: string;
  source: string;
  interestedIn: string[];
}) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'saving' | 'done' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('saving');

    try {
      const response = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          source,
          tags: ['lead-capture'],
          interestedIn,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed');
      }

      setStatus('done');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wide text-orange">Lead capture</p>
      <h3 className="mt-3 text-2xl font-bold text-navy">{title}</h3>
      <p className="mt-3 text-navy/65">{copy}</p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="First name"
          className="w-full rounded-lg border border-navy/15 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange/40"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="w-full rounded-lg border border-navy/15 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange/40"
        />
        <button
          type="submit"
          disabled={status === 'saving'}
          className="inline-flex items-center justify-center w-full rounded-lg bg-navy px-5 py-3 font-semibold text-white transition-colors hover:bg-navy/90 disabled:opacity-50"
        >
          {status === 'saving' ? 'Saving...' : 'Get updates'}
        </button>
        {status === 'done' ? <p className="text-sm text-green-700">You’re in. We’ll route updates to your inbox.</p> : null}
        {status === 'error' ? <p className="text-sm text-red-700">Something went wrong. Please try again.</p> : null}
      </form>
    </div>
  );
}
