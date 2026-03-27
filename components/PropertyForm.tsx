'use client'

import { useState, useRef, useEffect } from 'react'

export default function PropertyForm() {
  const [formData, setFormData] = useState({
    address: '',
    propertyType: '',
    condition: '',
    askingPrice: '',
    situation: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
    photo: null as File | null
  })

  const [submitted, setSubmitted] = useState(false)
  const addressInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Google Places Autocomplete
    if (typeof window !== 'undefined' && window.google && addressInputRef.current) {
      const autocomplete = new window.google.maps.places.Autocomplete(addressInputRef.current, {
        types: ['address'],
        componentRestrictions: { country: 'us' }
      })

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace()
        setFormData(prev => ({ ...prev, address: place.formatted_address || '' }))
      })
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would POST to an API
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        address: '',
        propertyType: '',
        condition: '',
        askingPrice: '',
        situation: '',
        timeline: '',
        name: '',
        email: '',
        phone: '',
        notes: '',
        photo: null
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, photo: e.target.files![0] }))
    }
  }

  if (submitted) {
    return (
      <section id="submit-property" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-3xl font-bold text-green-700 mb-4">Thank You!</h3>
            <p className="text-lg text-gray-700">We've received your property submission. Our team will review it and get back to you with an offer within 24-48 hours.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="submit-property" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Sell Your Property</h2>
            <p className="text-xl text-gray-600">Get a fair cash offer in 24-48 hours</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
            {/* Property Address */}
            <div className="mb-6">
              <label className="block font-semibold mb-2">Property Address *</label>
              <input
                ref={addressInputRef}
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                placeholder="123 Main St, Charlotte, NC"
              />
            </div>

            {/* Property Type */}
            <div className="mb-6">
              <label className="block font-semibold mb-2">Property Type *</label>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
              >
                <option value="">Select property type</option>
                <option value="SFR">Single Family Residence</option>
                <option value="Multi-Family">Multi-Family</option>
                <option value="Commercial">Commercial</option>
                <option value="Land">Vacant Land</option>
              </select>
            </div>

            {/* Condition */}
            <div className="mb-6">
              <label className="block font-semibold mb-2">Property Condition *</label>
              <select
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
              >
                <option value="">Select condition</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Poor">Poor</option>
                <option value="Needs Major Work">Needs Major Work</option>
              </select>
            </div>

            {/* Asking Price */}
            <div className="mb-6">
              <label className="block font-semibold mb-2">Asking Price</label>
              <input
                type="text"
                name="askingPrice"
                value={formData.askingPrice}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                placeholder="$250,000 or 'Make Me an Offer'"
              />
            </div>

            {/* Situation */}
            <div className="mb-6">
              <label className="block font-semibold mb-2">What's Your Situation? *</label>
              <select
                name="situation"
                value={formData.situation}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
              >
                <option value="">Select situation</option>
                <option value="Foreclosure">Foreclosure</option>
                <option value="Inherited">Inherited Property</option>
                <option value="Divorce">Divorce</option>
                <option value="Tax Liens">Tax Liens</option>
                <option value="Tired Landlord">Tired Landlord</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Timeline */}
            <div className="mb-6">
              <label className="block font-semibold mb-2">How Soon Do You Need to Sell? *</label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
              >
                <option value="">Select timeline</option>
                <option value="ASAP">ASAP (Less than 1 week)</option>
                <option value="1-2 weeks">1-2 Weeks</option>
                <option value="30 days">30 Days</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>

            <div className="border-t border-gray-200 my-8 pt-8">
              <h3 className="text-xl font-semibold mb-4">Your Contact Information</h3>
              
              {/* Name */}
              <div className="mb-6">
                <label className="block font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="John Smith"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label className="block font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div className="mb-6">
                <label className="block font-semibold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="(704) 555-1234"
                />
              </div>

              {/* Additional Notes */}
              <div className="mb-6">
                <label className="block font-semibold mb-2">Additional Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Tell us anything else we should know about your property or situation..."
                />
              </div>

              {/* Photo Upload */}
              <div className="mb-6">
                <label className="block font-semibold mb-2">Property Photo (Optional)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gold text-navy px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition shadow-lg"
            >
              Submit Property for Cash Offer
            </button>

            <p className="text-sm text-gray-600 text-center mt-4">
              No obligation. We'll review your property and get back to you within 24-48 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

// Extend window type for Google Maps
declare global {
  interface Window {
    google: any
  }
}
