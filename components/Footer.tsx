import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
              A division of Southern Cities Enterprises. Acquiring properties at
              deep discounts through off-market sourcing and creative finance.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/services", label: "Services" },
                { href: "/strategy", label: "Strategy" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/contact", label: "Contact" },
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
            <p className="text-sm text-white/60">Charlotte, NC</p>
            <Link
              href="/contact"
              className="inline-block mt-4 text-sm font-medium text-orange hover:text-orange-light transition-colors"
            >
              Get in Touch
            </Link>
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
