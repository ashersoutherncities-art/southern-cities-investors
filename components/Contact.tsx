'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">We're here to answer your questions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📞</div>
                <div>
                  <div className="font-semibold text-lg">Phone</div>
                  <a href="tel:7042992742" className="text-gold hover:underline text-lg">(704) 299-2742</a>
                  <div className="text-sm text-gray-600 mt-1">Available 7 days a week</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">✉️</div>
                <div>
                  <div className="font-semibold text-lg">Email</div>
                  <a href="mailto:investors@developthesouth.com" className="text-gold hover:underline text-lg">
                    investors@developthesouth.com
                  </a>
                  <div className="text-sm text-gray-600 mt-1">We respond within 24 hours</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <div className="font-semibold text-lg">Location</div>
                  <div className="text-gray-700">Charlotte, NC</div>
                  <div className="text-sm text-gray-600 mt-1">Serving the greater Charlotte area</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-navy text-white rounded-lg">
              <h4 className="font-semibold text-xl mb-3">Business Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="text-gold">8:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-gold">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-gold">10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {submitted ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-green-700 mb-2">Message Sent!</h3>
                <p className="text-gray-700">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
                
                <div className="mb-4">
                  <label className="block font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div className="mb-4">
                  <label className="block font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="mb-4">
                  <label className="block font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="(704) 555-1234"
                  />
                </div>

                <div className="mb-6">
                  <label className="block font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
