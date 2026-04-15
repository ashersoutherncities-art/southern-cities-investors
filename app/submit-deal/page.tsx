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

const dealSources = [
  "Wholesaler",
  "Direct-to-Seller",
  "Agent / Broker",
  "Auction / Foreclosure",
  "Bird Dog / Referral",
  "Other",
];

const occupancyOptions = [
  "Vacant",
  "Owner-Occupied",
  "Tenant-Occupied",
  "Unknown",
];

const dealStructures = [
  "Assignment",
  "Double Close",
  "Direct Purchase",
  "Subject-To",
  "Seller Finance",
  "Other / Flexible",
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
    dealSource: "",
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
          <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">
            Deal Submission Portal
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Submit a deal for review
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-3xl">
            Whether you are a wholesaler, agent, bird dog, or direct seller, submit your
            deal here. If it meets our buy box, we move fast.
          </p>
        </div>
      </section>

      {/* Buy Box */}
      <section className="py-16 bg-white border-b border-navy/10">
        <div className="site-shell">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-navy mb-8 text-center">Our Buy Box</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-navy/5 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-navy mb-4">What we buy</h3>
                <ul className="space-y-3 text-navy/70">
                  <li>Single-family, small multifamily, and land</li>
                  <li>3+ beds, 1+ baths preferred</li>
                  <li>1,000+ square feet</li>
                  <li>Cities with 15,000+ population</li>
                  <li>Typically at 65% of ARV or below</li>
                  <li>Markets with strong resale demand</li>
                  <li>Vacant or occupant-flexible</li>
                  <li>Any condition</li>
                </ul>
              </div>
              <div className="bg-navy/5 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-navy mb-4">What we do not buy</h3>
                <ul className="space-y-3 text-navy/70">
                  <li>Mobile homes on leased land</li>
                  <li>Properties with unresolvable title or environmental issues</li>
                  <li>Markets under 15,000 population</li>
                  <li>Deals that do not meet minimum spread requirements</li>
                  <li>Commercial zoning unless intentional</li>
                  <li>Flood zone without viable insurance economics</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-orange/5 border border-orange/20 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-navy mb-4">Acquisition pricing by asset value</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <p className="text-sm text-navy/50 mb-1">ARV under $150k</p>
                  <p className="text-2xl font-bold text-navy">50-55%</p>
                  <p className="text-xs text-navy/50 mt-1">of ARV</p>
                </div>
                <div>
                  <p className="text-sm text-navy/50 mb-1">ARV $150k-$225k</p>
                  <p className="text-2xl font-bold text-navy">55-60%</p>
                  <p className="text-xs text-navy/50 mt-1">of ARV</p>
                </div>
                <div>
                  <p className="text-sm text-navy/50 mb-1">ARV $225k-$325k</p>
                  <p className="text-2xl font-bold text-navy">60-65%</p>
                  <p className="text-xs text-navy/50 mt-1">of ARV</p>
                </div>
                <div>
                  <p className="text-sm text-navy/50 mb-1">ARV $325k+</p>
                  <p className="text-2xl font-bold text-navy">Up to 65%</p>
                  <p className="text-xs text-navy/50 mt-1">of ARV</p>
                </div>
              </div>
              <p className="text-xs text-navy/45 mt-6">
                Smaller square footage properties (under 1,100 sf) typically require deeper discounts.
                Final pricing depends on rehab scope, market velocity, and exit strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deal Submission Form */}
      <section className="py-20 sm:py-24">
        <div className="site-shell">
          <div className="max-w-4xl mx-auto">
            {submitted ? (
              <div className="bg-navy/[0.03] rounded-xl p-12 text-center">
                <h2 className="text-2xl font-bold text-navy mb-4">Deal Received</h2>
                <p className="text-navy/60 leading-relaxed mb-6">
                  We review every submission against our buy box. If it fits, expect a response within 24 hours.
                </p>
                <Link href="/" className="text-orange font-semibold hover:underline">
                  Back to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Submitter Info */}
                <div>
                  <h3 className="text-xl font-bold text-navy mb-6 pb-3 border-b border-navy/10">Your Information</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="submitterName" className={labelClass}>Full Name</label>
                      <input type="text" id="submitterName" name="submitterName" value={formData.submitterName} onChange={handleChange} required className={inputClass} placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="submitterRole" className={labelClass}>Your Role</label>
                      <select id="submitterRole" name="submitterRole" value={formData.submitterRole} onChange={handleChange} required className={inputClass}>
                        <option value="">Select your role</option>
                        {dealSources.map((s) => (<option key={s} value={s}>{s}</option>))}
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

                {/* Property Info */}
                <div>
                  <h3 className="text-xl font-bold text-navy mb-6 pb-3 border-b border-navy/10">Property Details</h3>
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
                        {assetTypes.map((t) => (<option key={t} value={t}>{t}</option>))}
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
                        {occupancyOptions.map((o) => (<option key={o} value={o}>{o}</option>))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Deal Numbers */}
                <div>
                  <h3 className="text-xl font-bold text-navy mb-6 pb-3 border-b border-navy/10">Deal Numbers</h3>
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

                {/* Deal Structure */}
                <div>
                  <h3 className="text-xl font-bold text-navy mb-6 pb-3 border-b border-navy/10">Deal Structure & Context</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="dealStructure" className={labelClass}>Deal Structure</label>
                      <select id="dealStructure" name="dealStructure" value={formData.dealStructure} onChange={handleChange} className={inputClass}>
                        <option value="">Select</option>
                        {dealStructures.map((d) => (<option key={d} value={d}>{d}</option>))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="dealSource" className={labelClass}>How did you source this?</label>
                      <select id="dealSource" name="dealSource" value={formData.dealSource} onChange={handleChange} className={inputClass}>
                        <option value="">Select</option>
                        {dealSources.map((s) => (<option key={s} value={s}>{s}</option>))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="sellerSituation" className={labelClass}>Seller Situation</label>
                      <input type="text" id="sellerSituation" name="sellerSituation" value={formData.sellerSituation} onChange={handleChange} className={inputClass} placeholder="Probate, pre-foreclosure, absentee, etc." />
                    </div>
                    <div>
                      <label htmlFor="timeline" className={labelClass}>Timeline / Urgency</label>
                      <input type="text" id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} className={inputClass} placeholder="Under contract, need to close in 14 days, etc." />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="notes" className={labelClass}>Additional Notes</label>
                      <textarea id="notes" name="notes" value={formData.notes} onChange={handleChange} rows={4} className={`${inputClass} resize-vertical`} placeholder="Anything else we should know about this deal -- comps, condition, access, photos, etc." />
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <button type="submit" disabled={submitting} className="w-full sm:w-auto px-10 py-4 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-colors text-lg disabled:opacity-50">
                  {submitting ? 'Submitting...' : 'Submit Deal for Review'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
