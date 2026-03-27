export default function WhatWeBuy() {
  const propertyTypes = [
    { icon: "🏠", title: "Single Family Homes", description: "Any size, any condition" },
    { icon: "🏢", title: "Multi-Family Properties", description: "Duplexes, triplexes, apartments" },
    { icon: "🏬", title: "Commercial Properties", description: "Retail, office, mixed-use" },
    { icon: "🌳", title: "Vacant Land", description: "Residential or commercial lots" },
    { icon: "⚠️", title: "Distressed / Pre-Foreclosure", description: "Behind on payments? We can help" },
    { icon: "📜", title: "Inherited / Probate Properties", description: "Simplified estate settlement" },
    { icon: "💔", title: "Divorce Situations", description: "Fair, fast, confidential" },
    { icon: "📊", title: "Tax Delinquent Properties", description: "Resolve your tax issues" },
  ]

  return (
    <section id="what-we-buy" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What We Buy</h2>
          <p className="text-xl text-gray-600 mb-2">Any property type, any condition</p>
          <p className="text-lg font-semibold text-gold">We buy properties AS-IS — no repairs needed</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {propertyTypes.map((type, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition border-2 border-transparent hover:border-gold"
            >
              <div className="text-5xl mb-3">{type.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
              <p className="text-gray-600 text-sm">{type.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-navy text-white rounded-xl p-8 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Not Sure If We'll Buy Your Property?</h3>
          <p className="text-lg mb-6">We consider all properties. The worst we can say is no — but we usually say yes.</p>
          <a 
            href="#submit-property" 
            className="inline-block bg-gold text-navy px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Submit Your Property
          </a>
        </div>
      </div>
    </section>
  )
}
