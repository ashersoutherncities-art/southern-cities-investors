"use client";

import { useState, FormEvent } from "react";

const inquiryTypes = [
  "Tier 1 - Hands-Off Capital",
  "Tier 2 - Learning Operator",
  "Tier 3 - Scaling Partner",
  "JV Partnership",
  "General Inquiry",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
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

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Investor intake submission:", formData);
    setSubmitted(true);
  }

  function handleChange(e: any) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <>
      <section className="bg-navy text-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">
            Investor Intake
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Apply to work with Southern Cities Investors
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-3xl">
            This intake is for serious investors, operators, and partners who want
            disciplined deal flow, real execution support, and a team that understands
            acquisitions, construction, and exits.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-navy/[0.03] rounded-xl p-12 text-center">
                  <h2 className="text-2xl font-bold text-navy mb-4">Application Received</h2>
                  <p className="text-navy/60 leading-relaxed">
                    We review every intake for fit. If it looks aligned, we will reach out
                    to continue the conversation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-colors"
                      placeholder="(555) 000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiry" className="block text-sm font-medium text-navy mb-2">
                      Best Fit Service Model
                    </label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-colors bg-white"
                    >
                      <option value="">Select a service model</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="capital" className="block text-sm font-medium text-navy mb-2">
                      Available Capital
                    </label>
                    <input
                      type="text"
                      id="capital"
                      name="capital"
                      value={formData.capital}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-colors"
                      placeholder="Example: $250k, $500k+, or looking for JV structure"
                    />
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-navy mb-2">
                      Timeline
                    </label>
                    <input
                      type="text"
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-colors"
                      placeholder="How soon are you looking to start?"
                    />
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-navy mb-2">
                      Real Estate Experience
                    </label>
                    <textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-colors resize-vertical"
                      placeholder="Tell us about your current investing or operating experience."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                      What are you trying to achieve?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-colors resize-vertical"
                      placeholder="Tell us your goals, what type of opportunities you want, and what kind of support you need."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-colors"
                  >
                    Submit Investor Intake
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-navy mb-4">Who this is for</h3>
                <p className="text-navy/60 leading-relaxed">
                  Investors and operators who want disciplined acquisitions, strong execution,
                  and a serious team behind the deal.
                </p>
              </div>

              <div className="bg-navy/[0.03] rounded-xl p-6 space-y-4">
                <h4 className="font-bold text-navy">What happens next</h4>
                <div className="space-y-3 text-sm text-navy/65">
                  <p>1. We review your intake for fit and seriousness.</p>
                  <p>2. If aligned, we reach out to schedule a conversation.</p>
                  <p>3. We point you toward the right service model or partnership structure.</p>
                </div>
              </div>

              <div className="bg-white border border-navy/10 rounded-xl p-6 space-y-4">
                <h4 className="font-bold text-navy">Best fit candidates usually have:</h4>
                <div className="space-y-3 text-sm text-navy/65">
                  <p>• Capital ready to deploy or a clear JV structure in mind</p>
                  <p>• Interest in off-market acquisitions and value-add opportunities</p>
                  <p>• A desire for speed, systems, and serious execution</p>
                  <p>• Long-term interest in building wealth through real estate, not chasing random deals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
