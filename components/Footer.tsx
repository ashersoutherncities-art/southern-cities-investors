import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="site-shell py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/logos/sc-investors-02.svg"
              alt="Southern Cities Investors"
              width={320}
              height={90}
              className="h-16 w-auto mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed mt-4">
              A division of Southern Cities Enterprises. A real estate evaluation, acquisition, partnership, and investor support platform focused on North Carolina and Southern markets.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/property-owners', label: 'Property Owners' },
                { href: '/submit-deal', label: 'Submit a Deal' },
                { href: '/services', label: 'Investor Support' },
                { href: '/portfolio', label: 'Portfolio' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Contact
            </h4>
            <p className="text-sm text-white/60">Serving North Carolina and Southern markets</p>
            <div className="mt-4 space-y-2">
              <Link href="/property-owners" className="block text-sm font-medium text-orange hover:text-orange-light transition-colors">Start Property Review</Link>
              <Link href="/submit-deal" className="block text-sm font-medium text-orange hover:text-orange-light transition-colors">Submit a Deal</Link>
              <Link href="/contact" className="block text-sm font-medium text-orange hover:text-orange-light transition-colors">Apply for Investor Support</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/40">
            {new Date().getFullYear()} Southern Cities Investors. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
