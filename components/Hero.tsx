export default function Hero() {
  return (
    <section className="relative bg-navy text-white py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-gray-900 opacity-95"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            We Buy Properties.<br />
            <span className="text-gold">Any Condition. Fast Close.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Off-market acquisitions, distressed properties, creative deals
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#submit-property" 
              className="bg-gold text-navy px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition shadow-xl w-full sm:w-auto"
            >
              Sell Your Property
            </a>
            <a 
              href="#investors" 
              className="bg-transparent border-2 border-gold text-gold px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gold hover:text-navy transition w-full sm:w-auto"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>

      {/* Urgency Badges */}
      <div className="container mx-auto px-4 mt-12 relative z-10">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-gold font-bold text-2xl">7-30</div>
            <div className="text-sm">Days to Close</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-gold font-bold text-2xl">$0</div>
            <div className="text-sm">Agent Fees</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-gold font-bold text-2xl">24-48h</div>
            <div className="text-sm">Offer Time</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-gold font-bold text-2xl">Cash</div>
            <div className="text-sm">Offers</div>
          </div>
        </div>
      </div>
    </section>
  )
}
