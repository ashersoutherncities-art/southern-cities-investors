export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Submit Your Property",
      description: "Fill out our simple form with your property details. Takes less than 2 minutes."
    },
    {
      number: "2",
      title: "We Analyze & Make an Offer",
      description: "Our team reviews your property and provides a fair cash offer within 24-48 hours."
    },
    {
      number: "3",
      title: "Choose Your Closing Date",
      description: "Pick a closing date that works for you. We're flexible and work on your timeline."
    },
    {
      number: "4",
      title: "Get Paid",
      description: "Close fast and hassle-free. No repairs, no fees, no stress. Just cash in your account."
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Four simple steps to sell your property fast</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition h-full">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-navy text-2xl font-bold mb-4 mx-auto">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-1">
                  <div className="w-1/2 h-0.5 bg-gold"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#submit-property" 
            className="inline-block bg-navy text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  )
}
