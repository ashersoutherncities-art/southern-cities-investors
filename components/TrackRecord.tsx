export default function TrackRecord() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Track Record</h2>
          <p className="text-xl text-gray-300">Proven results in Charlotte and beyond</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="text-5xl font-bold text-gold mb-2">150+</div>
            <div className="text-lg">Properties Acquired</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="text-5xl font-bold text-gold mb-2">$25M+</div>
            <div className="text-lg">Capital Invested</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="text-5xl font-bold text-gold mb-2">10+</div>
            <div className="text-lg">Cities Served</div>
          </div>
        </div>

        {/* Recent Acquisitions Grid */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Recent Acquisitions</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/20 transition">
                <div className="aspect-video bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-400">Property Image</span>
                </div>
                <div className="p-4">
                  <div className="font-semibold text-gold mb-1">Charlotte, NC</div>
                  <div className="text-sm text-gray-300">Single Family • Distressed</div>
                  <div className="text-xs text-gray-400 mt-2">Closed in 14 days</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Before/After Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Transformation Examples</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-700 flex items-center justify-center">
                <span className="text-gray-400">Before Photo</span>
              </div>
              <div className="p-4 text-center">
                <div className="font-semibold text-gold">Before Renovation</div>
                <div className="text-sm text-gray-300">Distressed Property</div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-700 flex items-center justify-center">
                <span className="text-gray-400">After Photo</span>
              </div>
              <div className="p-4 text-center">
                <div className="font-semibold text-gold">After Renovation</div>
                <div className="text-sm text-gray-300">Fully Renovated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
