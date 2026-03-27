export default function ForInvestors() {
  const opportunities = [
    {
      title: "Joint Venture Opportunities",
      description: "Partner with us on acquisition deals. Share the risk, share the profit.",
      icon: "🤝"
    },
    {
      title: "Wholesale Deals Available",
      description: "Get access to off-market properties at deep discounts before they hit the market.",
      icon: "💎"
    },
    {
      title: "Co-Investment Partnerships",
      description: "Invest alongside us in high-quality real estate opportunities.",
      icon: "💼"
    },
    {
      title: "Deal Syndication",
      description: "Pool capital with other investors for larger commercial opportunities.",
      icon: "📈"
    }
  ]

  return (
    <section id="investors" className="py-20 bg-gradient-to-br from-navy to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">For Investors & Partners</h2>
          <p className="text-xl text-gray-300">Join our network of successful real estate investors</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {opportunities.map((opp, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition">
              <div className="text-5xl mb-4">{opp.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-gold">{opp.title}</h3>
              <p className="text-gray-300">{opp.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto text-center border-2 border-gold">
          <h3 className="text-2xl font-bold mb-4">Why Partner With Southern Cities Investors?</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <div className="text-3xl font-bold text-gold mb-2">30+ Years</div>
              <div className="text-sm text-gray-300">Real Estate Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold mb-2">Off-Market</div>
              <div className="text-sm text-gray-300">Exclusive Deal Flow</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold mb-2">Charlotte</div>
              <div className="text-sm text-gray-300">Market Expertise</div>
            </div>
          </div>
          <a 
            href="#contact" 
            className="inline-block bg-gold text-navy px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  )
}
