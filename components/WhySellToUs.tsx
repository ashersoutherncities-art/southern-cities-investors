export default function WhySellToUs() {
  const benefits = [
    { icon: "🔧", title: "No Repairs Needed", description: "We buy properties as-is. No fixing, cleaning, or staging required." },
    { icon: "💰", title: "No Agent Commissions", description: "Keep more money in your pocket. No 6% commission fees." },
    { icon: "📄", title: "No Closing Costs", description: "We cover all closing costs. You get the full offer amount." },
    { icon: "⚡", title: "Fast Close (7-30 Days)", description: "Close on your timeline. We can move as fast as you need." },
    { icon: "💵", title: "Cash Offers", description: "No bank financing delays. We pay cash." },
    { icon: "✅", title: "No Obligation", description: "Get a free offer with zero commitment. No pressure." },
    { icon: "🔒", title: "Confidential", description: "Your situation stays private. Discreet and professional." },
    { icon: "🤝", title: "Fair & Honest", description: "Transparent process. Fair offers based on market value." }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Sell to Us?</h2>
          <p className="text-xl text-gray-600">The easiest way to sell your property</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition">
              <div className="text-5xl mb-3">{benefit.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto bg-gold/10 border-2 border-gold rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Compare Traditional Sale vs Selling to Us</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gold">
                  <th className="py-3 px-4"></th>
                  <th className="py-3 px-4 text-center">Traditional Sale</th>
                  <th className="py-3 px-4 text-center bg-gold/20">Southern Cities Investors</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">Timeline</td>
                  <td className="py-3 px-4 text-center">60-90+ days</td>
                  <td className="py-3 px-4 text-center bg-gold/20 font-semibold">7-30 days</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">Repairs Needed</td>
                  <td className="py-3 px-4 text-center">Yes</td>
                  <td className="py-3 px-4 text-center bg-gold/20 font-semibold">No</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">Agent Fees</td>
                  <td className="py-3 px-4 text-center">6% commission</td>
                  <td className="py-3 px-4 text-center bg-gold/20 font-semibold">$0</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold">Closing Costs</td>
                  <td className="py-3 px-4 text-center">Seller pays</td>
                  <td className="py-3 px-4 text-center bg-gold/20 font-semibold">We pay</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Financing Risk</td>
                  <td className="py-3 px-4 text-center">Buyer may back out</td>
                  <td className="py-3 px-4 text-center bg-gold/20 font-semibold">Cash (no risk)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
