"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

const inquiryTypes = [
  "I want to sell a property",
  "I want to partner on a property",
  "I want to improve or reposition before selling",
  "I want to submit a deal",
  "I want help analyzing deals",
  "I have a live deal I want reviewed",
  "I want operator or project support",
  "I want to discuss a partnership",
  "I am not sure yet",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "",
    capital: "",
    timeline: "",
    experience: "",
    message: "",
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch('/api/investor-intake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit application');
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Failed to submit application');
    } finally {
      setSubmitting(false);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <>
      <section className="bg-navy text-white py-20 sm:py-24">
        <div className="site-shell">
          <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">
            Apply / Contact
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            What kind of help are you looking for?
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-3xl">
            We use this intake to route owners, deal sources, investors, and operators into the right conversation. Not every opportunity belongs in the same path.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4 max-w-4xl">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-orange">Clear routing</p>
              <p className="mt-2 text-sm text-white/75">This intake helps separate property owners, deal submitters, and investor-support requests cleanly.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-orange">Serious review</p>
              <p className="mt-2 text-sm text-white/75">Every inquiry is reviewed against fit, timing, complexity, and the kind of support actually needed.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-orange">No forced lane</p>
              <p className="mt-2 text-sm text-white/75">If you are not sure where you fit yet, we can still route you correctly from here.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="site-shell">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-navy/[0.03] rounded-xl p-12 text-center">
                  <h2 className="text-2xl font-bold text-navy mb-4">Inquiry received</h2>
                  <p className="text-navy/60 leading-relaxed">
                    We will review your request and route it into the right next step. If it looks aligned, we will follow up directly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="rounded-2xl border border-orange/20 bg-orange/5 p-6">
                    <p className="text-sm font-semibold uppercase tracking-wide text-orange">Start the conversation</p>
                    <p className="mt-2 text-sm text-navy/70 leading-relaxed">
                      Use this form if you want to sell, partner, improve before sale, submit a deal, get support analyzing a live opportunity, or discuss a more involved working relationship.
                    </p>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">Full Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-colors" placeholder="Your full name" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">Email Address</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-colors" placeholder="you@example.com" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-colors" placeholder="(555) 000-0000" />
                  </div>

                  <div>
                    <label htmlFor="inquiry" className="block text-sm font-medium text-navy mb-2">What kind of help are you looking for?</label>
                    <select id="inquiry" name="inquiry" value={formData.inquiry} onChange={handleChange} required className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-colors bg-white">
                      <option value="">Select the closest fit</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="capital" className="block text-sm font-medium text-navy mb-2">Capital, budget, or structure</label>
                    <input type="text" id="capital" name="capital" value={formData.capital} onChange={handleChange} className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-colors" placeholder="Example: sale target, budget range, capital ready, or JV structure" />
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-navy mb-2">Timeline</label>
                    <input type="text" id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-colors" placeholder="How soon are you looking to move?" />
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-navy mb-2">Relevant context or experience</label>
                    <textarea id="experience" name="experience" value={formData.experience} onChange={handleChange} rows={4} className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-colors resize-vertical" placeholder="Tell us about your property, investing background, operating experience, or current situation." />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">What are you trying to accomplish?</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-colors resize-vertical" placeholder="Tell us what you are looking at, what decision you are trying to make, and what kind of help you think you need." />
                  </div>

                  <div className="rounded-2xl border border-navy/10 bg-white p-5 text-sm text-navy/70 leading-relaxed">
                    Submission of this form does not create a partnership, acquisition commitment, advisory engagement, lending relationship, or securities offering. We review inquiries privately and determine fit before any next-step discussion.
                  </div>

                  {error && <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm">{error}</div>}

                  <button type="submit" disabled={submitting} className="w-full sm:w-auto px-8 py-3.5 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-colors disabled:opacity-50">
                    {submitting ? 'Submitting...' : 'Start the Conversation'}
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white border border-navy/10 rounded-xl p-6 space-y-4">
                <h3 className="text-xl font-bold text-navy">Who this is for</h3>
                <p className="text-navy/60 leading-relaxed">
                  Owners deciding what to do with property, deal sources bringing opportunities, and investors or operators who need sharper review, structure, or execution support.
                </p>
              </div>

              <div className="bg-navy/[0.03] rounded-xl p-6 space-y-4">
                <h4 className="font-bold text-navy">What happens next</h4>
                <div className="space-y-3 text-sm text-navy/65">
                  <p>1. We review your inquiry and route it into the right path.</p>
                  <p>2. If aligned, we follow up for the next conversation or request missing information.</p>
                  <p>3. We point you toward property review, deal submission, investor support, or a more specific next step.</p>
                </div>
              </div>

              <div className="bg-white border border-navy/10 rounded-xl p-6 space-y-4">
                <h4 className="font-bold text-navy">You may want one of these direct paths instead</h4>
                <div className="space-y-3 text-sm">
                  <Link href="/property-owners" className="block text-orange font-semibold hover:underline">Start Property Review</Link>
                  <Link href="/submit-deal" className="block text-orange font-semibold hover:underline">Submit a Deal</Link>
                  <Link href="/services" className="block text-orange font-semibold hover:underline">Compare Investor Support Options</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
