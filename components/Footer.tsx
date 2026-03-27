export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Southern Cities Investors</h3>
            <p className="text-gray-300 text-sm mb-4">
              Professional real estate acquisitions in Charlotte and surrounding areas. We buy properties fast, any condition.
            </p>
            <div className="text-sm text-gray-400">
              Charlotte, NC
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#how-it-works" className="text-gray-300 hover:text-gold transition">How It Works</a></li>
              <li><a href="#what-we-buy" className="text-gray-300 hover:text-gold transition">What We Buy</a></li>
              <li><a href="#submit-property" className="text-gray-300 hover:text-gold transition">Sell Your Property</a></li>
              <li><a href="#investors" className="text-gray-300 hover:text-gold transition">For Investors</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="tel:7042992742" className="hover:text-gold transition">(704) 299-2742</a>
              </li>
              <li>
                <a href="mailto:investors@developthesouth.com" className="hover:text-gold transition">
                  investors@developthesouth.com
                </a>
              </li>
            </ul>
          </div>

          {/* Sister Companies */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Our Network</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-gold transition">Southern Cities Enterprises (Parent)</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gold transition">Southern Cities Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gold transition">Southern Cities Construction</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gold transition">Southern Cities Brokerage</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-700 pt-8 mb-6">
          <p className="text-xs text-gray-400 text-center max-w-4xl mx-auto">
            <strong>Disclaimer:</strong> We are not realtors acting in a brokerage capacity. We are direct property buyers making cash offers on properties. 
            Any properties purchased may be resold for profit. All offers are subject to property inspection and evaluation.
          </p>
        </div>

        {/* Copyright & Legal */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div>
            © {new Date().getFullYear()} Southern Cities Investors. All rights reserved.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
