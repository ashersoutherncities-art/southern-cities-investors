export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Charlotte, NC",
      text: "I inherited my parents' house and didn't know what to do with it. Southern Cities made the process so easy. They gave me a fair offer and closed in 10 days. I couldn't be happier.",
      timeline: "Sold in 10 days"
    },
    {
      name: "Michael Thompson",
      location: "Matthews, NC",
      text: "I was behind on my mortgage and facing foreclosure. Southern Cities stepped in, made a quick offer, and saved me from losing everything. Professional and compassionate.",
      timeline: "Closed in 2 weeks"
    },
    {
      name: "Lisa Martinez",
      location: "Concord, NC",
      text: "After my divorce, I needed to sell fast. No time for repairs or dealing with agents. Southern Cities bought my house as-is and closed on my schedule. Stress-free experience.",
      timeline: "Sold in 12 days"
    },
    {
      name: "Robert Chen",
      location: "Gastonia, NC",
      text: "I'm a tired landlord who was done with tenants and repairs. Southern Cities gave me a fair cash offer, no commissions, no hassle. Best decision I made.",
      timeline: "Closed in 3 weeks"
    },
    {
      name: "Jennifer Adams",
      location: "Rock Hill, SC",
      text: "My property had fire damage and needed major work. Other buyers wanted me to fix everything first. Southern Cities bought it as-is and paid cash. Amazing team.",
      timeline: "Sold in 9 days"
    },
    {
      name: "David Williams",
      location: "Mooresville, NC",
      text: "I needed to relocate for work quickly. Southern Cities made me an offer in 48 hours and closed in less than 2 weeks. Couldn't have asked for a smoother process.",
      timeline: "Closed in 11 days"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Real stories from real sellers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <div className="font-semibold text-navy">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.location}</div>
                <div className="text-sm text-gold font-semibold mt-2">{testimonial.timeline}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-navy text-white rounded-xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Sell Your Property?</h3>
            <p className="text-lg mb-6">Join hundreds of satisfied sellers who chose the easy way out.</p>
            <a 
              href="#submit-property" 
              className="inline-block bg-gold text-navy px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Get Your Cash Offer Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
