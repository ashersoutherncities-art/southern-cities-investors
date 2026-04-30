"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

const assetTypes = [
  "Single-Family",
  "Duplex / Triplex / Fourplex",
  "Small Multifamily (5-20 units)",
  "Land (Raw or Entitled)",
  "Commercial / Retail",
  "Other",
];

const submitterRoles = [
  "Wholesaler",
  "Agent / Broker",
  "Direct-to-Seller Operator",
  "Bird Dog / Referral Partner",
  "Owner",
  "Other",
];

const occupancyOptions = ["Vacant", "Owner-Occupied", "Tenant-Occupied", "Unknown"];

const dealStructures = [
  "Assignment",
  "Double Close",
  "Direct Purchase",
  "Subject-To",
  "Seller Finance",
  "Other / Flexible",
];

const reviewPoints = [
  "Property type, location, and realistic market fit",
  "Asking price, estimated rehab, and margin pressure",
  "Seller situation, deal structure, and timeline friction",
  "Whether the opportunity looks like a direct buy, a pass, or needs more work before it is real",
];

const fitGuidelines = [
  "Single-family, small multifamily, land, and select commercial opportunities",
  "Deals where the basis, rehab scope, and exit logic can still hold up under conservative review",
  "Situations with a credible path to title clarity, access, and execution",
  "Submissions with enough information to evaluate whether the opportunity is actually actionable",
];

const nonFitGuidelines = [
  "Deals that only work on inflated ARV or unrealistic rent assumptions",
  "Opportunities with unresolved title, legal, environmental, or access issues and no path to resolution",
  "Situations where the spread disappears once scope, holding costs, or market friction are treated honestly",
  "Incomplete submissions with no meaningful numbers, context, or path forward",
];

export default function SubmitDealPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    submitterName: "",
    submitterEmail: "",
    submitterPhone: "",
    submitterRole: "",
    propertyAddress: "",
    city: "",
    county: "",
    state: "",
    assetType: "",
    sqft: "",
    beds: "",
    baths: "",
    lotSize: "",
    yearBuilt: "",
    askingPrice: "",
    estimatedRehab: "",
    estimatedARV: "",
    occupancy: "",
    sellerSituation: "",
    dealStructure: "",
    timeline: "",
    notes: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch('/api/deal-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit deal');
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Failed to submit deal');
    } finally {
      setSubmitting(false);
    }
  }

  function handleChange(e: any) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const inputClass = "w-full px-4 py-3 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition-colors bg-white";
  const labelClass = "block text-sm font-medium text-navy mb-2";

  return (
    <>
      <section className="bg-navy text-white py-20 sm:py-24">
        <div className="site-shell">
          <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">Deal Submission</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Submit a deal for review.</h1>
          <p className="mt-6 text-lg text-white/70 max-w-3xl">
            This path is for wholesalers, agents, operators, referral partners, and owners who want Southern Cities Investors to review whether an opportunity looks actionable, mispriced, thin, or worth a deeper conversation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="#deal-form" className="inline-flex items-center justify-center px-8 py-3.5 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-colors">
              Submit a Deal
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-colors">
              Apply for Investor Support
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-navy/10">
        <div className="site-shell grid lg:grid-cols-[1fr_1fr] gap-8 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">What happens after you submit</h2>
            <div className="mt-6 space-y-4 text-sm text-navy/70 leading-relaxed">
              {reviewPoints.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="text-orange font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-orange/20 bg-orange/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">Important note on criteria</p>
            <p className="mt-4 text-sm text-navy/75 leading-relaxed">
              We do not use one public formula to approve or reject every deal. The real review depends on basis, rehab scope, timeline, liquidity, exit path, and execution risk. If a submission looks interesting but incomplete, the next step may be clarification, not a yes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy/5 border-b border-navy/10">
        <div className="site-shell grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-navy">Usually a better fit</h3>
            <div className="mt-6 space-y-4 text-sm text-navy/70 leading-relaxed">
              {fitGuidelines.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="text-orange font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-navy">Usually not enough on its own</h3>
            <div className="mt-6 space-y-4 text-sm text-navy/70 leading-relaxed">
              {nonFitGuidelines.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="text-orange font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="deal-form" className="py-20 sm:py-24">
        <div className="site-shell">
          <div className="max-w-4xl mx-auto">
            {submitted ? (
              <div className="bg-navy/[0.03] rounded-xl p-12 text-center">
                <h2 className="text-2xl font-bold text-navy mb-4">Deal received</h2>
                <p className="text-navy/60 leading-relaxed mb-6">
                  Your submission is in review. If it looks aligned, we will follow up with the next step or request whatever is missing.
                </p>
                <Link href="/" className="text-orange font-semibold hover:underline">Back to home</Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div>
                  <h3 className="text-xl font-bold text-navy mb-6 pb-3 border-b border-navy/10">Your information</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="submitterName" className={labelClass}>Full Name</label>
                      <input type="text" id="submitterName" name="submitterName" value={formData.submitterName} onChange={handleChange} required className={inputClass} placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="submitterRole" className={labelClass}>Your Role</label>
                      <select id="submitterRole" name="submitterRole" value={formData.submitterRole} onChange={handleChange} required className={inputClass}>
                        <option value="">Select your role</option>
                        {submitterRoles.map((role) => (<option key={role} value={role}>{role}</option>))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="submitterEmail" className={labelClass}>Email</label>
                      <input type="email" id="submitterEmail" name="submitterEmail" value={formData.submitterEmail} onChange={handleChange} required className={inputClass} placeholder="you@example.com" />
                    </div>
                    <div>
                      <label htmlFor="submitterPhone" className={labelClass}>Phone</label>
                      <input type="tel" id="submitterPhone" name="submitterPhone" value={formData.submitterPhone} onChange={handleChange} className={inputClass} placeholder="(555) 000-0000" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy mb-6 pb-3 border-b border-navy/10">Property details</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="sm:col-span-2">
                      <label htmlFor="propertyAddress" className={labelClass}>Property Address</label>
                      <input type="text" id="propertyAddress" name="propertyAddress" value={formData.propertyAddress} onChange={handleChange} required className={inputClass} placeholder="123 Main St" />
                    </div>
                    <div>
                      <label htmlFor="city" className={labelClass}>City</label>
                      <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required className={inputClass} placeholder="Charlotte" />
                    </div>
                    <div>
                      <label htmlFor="county" className={labelClass}>County</label>
                      <input type="text" id="county" name="county" value={formData.county} onChange={handleChange} className={inputClass} placeholder="Mecklenburg" />
                    </div>
                    <div>
                      <label htmlFor="state" className={labelClass}>State</label>
                      <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} required className={inputClass} placeholder="NC" />
                    </div>
                    <div>
                      <label htmlFor="assetType" className={labelClass}>Asset Type</label>
                      <select id="assetType" name="assetType" value={formData.assetType} onChange={handleChange} required className={inputClass}>
                        <option value="">Select type</option>
                        {assetTypes.map((type) => (<option key={type} value={type}>{type}</option>))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="sqft" className={labelClass}>Square Feet</label>
                      <input type="text" id="sqft" name="sqft" value={formData.sqft} onChange={handleChange} className={inputClass} placeholder="1,400" />
                    </div>
                    <div>
                      <label htmlFor="beds" className={labelClass}>Beds</label>
                      <input type="text" id="beds" name="beds" value={formData.beds} onChange={handleChange} className={inputClass} placeholder="3" />
                    </div>
                    <div>
                      <label htmlFor="baths" className={labelClass}>Baths</label>
                      <input type="text" id="baths" name="baths" value={formData.baths} onChange={handleChange} className={inputClass} placeholder="2" />
                    </div>
                    <div>
                      <label htmlFor="lotSize" className={labelClass}>Lot Size</label>
                      <input type="text" id="lotSize" name="lotSize" value={formData.lotSize} onChange={handleChange} className={inputClass} placeholder="0.25 acres" />
                    </div>
                    <div>
                      <label htmlFor="yearBuilt" className={labelClass}>Year Built</label>
                      <input type="text" id="yearBuilt" name="yearBuilt" value={formData.yearBuilt} onChange={handleChange} className={inputClass} placeholder="1985" />
                    </div>
                    <div>
                      <label htmlFor="occupancy" className={labelClass}>Occupancy</label>
                      <select id="occupancy" name="occupancy" value={formData.occupancy} onChange={handleChange} className={inputClass}>
                        <option value="">Select</option>
                        {occupancyOptions.map((option) => (<option key={option} value={option}>{option}</option>))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy mb-6 pb-3 border-b border-navy/10">Deal numbers</h3>
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="askingPrice" className={labelClass}>Asking Price</label>
                      <input type="text" id="askingPrice" name="askingPrice" value={formData.askingPrice} onChange={handleChange} required className={inputClass} placeholder="$120,000" />
                    </div>
                    <div>
                      <label htmlFor="estimatedRehab" className={labelClass}>Estimated Rehab</label>
                      <input type="text" id="estimatedRehab" name="estimatedRehab" value={formData.estimatedRehab} onChange={handleChange} className={inputClass} placeholder="$45,000" />
                    </div>
                    <div>
                      <label htmlFor="estimatedARV" className={labelClass}>Estimated ARV</label>
                      <input type="text" id="estimatedARV" name="estimatedARV" value={formData.estimatedARV} onChange={handleChange} className={inputClass} placeholder="$225,000" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy mb-6 pb-3 border-b border-navy/10">Deal structure and context</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="dealStructure" className={labelClass}>Deal Structure</label>
                      <select id="dealStructure" name="dealStructure" value={formData.dealStructure} onChange={handleChange} className={inputClass}>
                        <option value="">Select</option>
                        {dealStructures.map((structure) => (<option key={structure} value={structure}>{structure}</option>))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className={labelClass}>Timeline / Urgency</label>
                      <input type="text" id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} className={inputClass} placeholder="Under contract, need to close in 14 days, etc." />
                    </div>
                    <div>
                      <label htmlFor="sellerSituation" className={labelClass}>Seller Situation</label>
                      <input type="text" id="sellerSituation" name="sellerSituation" value={formData.sellerSituation} onChange={handleChange} className={inputClass} placeholder="Probate, inherited, pre-foreclosure, vacancy, etc." />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="notes" className={labelClass}>Additional Notes</label>
                      <textarea id="notes" name="notes" value={formData.notes} onChange={handleChange} rows={4} className={`${inputClass} resize-vertical`} placeholder="Comps, condition, access, photos, known issues, or anything else that affects review." />
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-orange/20 bg-orange/5 p-6 text-sm text-navy/75 leading-relaxed">
                  Submission review is not an offer to purchase, a lending commitment, investment advice, or a securities offering. Partnership, backend participation, and deeper working structures are reviewed privately and only if the opportunity and fit justify it.
                </div>

                {error && <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm">{error}</div>}

                <button type="submit" disabled={submitting} className="w-full sm:w-auto px-10 py-4 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-colors text-lg disabled:opacity-50">
                  {submitting ? 'Submitting...' : 'Submit a Deal'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
