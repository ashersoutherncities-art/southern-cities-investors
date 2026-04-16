"use client";

import Link from "next/link";
import Image from "next/image";
import { Suspense, useState } from "react";
import CartNavLink from "@/components/CartNavLink";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/submit-deal", label: "Submit a Deal" },
  { href: "/strategy", label: "Strategy" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Apply" },
];

const servicesDropdownLinks = [
  {
    href: "/services#products",
    label: "Products",
    description: "Templates, tools, and digital resources you can buy and use right away.",
  },
  {
    href: "/services#membership",
    label: "Membership",
    description: "Recurring educational access for investors who want consistent reps and resources.",
  },
  {
    href: "/services#services-list",
    label: "Services",
    description: "Focused help for live deals, reviews, and decision support.",
  },
  {
    href: "/services#ongoing-support",
    label: "Ongoing Support",
    description: "Recurring support options for buyers and operators who need more involvement.",
  },
  {
    href: "/services#addons",
    label: "Add-ons",
    description: "Extra support layers for packaging, oversight, and disposition help.",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-navy text-white sticky top-0 z-50">
      <div className="site-shell">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logos/sc-investors-02.svg"
              alt="Southern Cities Investors"
              width={280}
              height={80}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-orange transition-colors"
                onClick={() => setServicesOpen((open) => !open)}
              >
                Products & Services
                <svg className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute left-0 top-full mt-3 w-[22rem] rounded-xl border border-white/10 bg-navy shadow-2xl overflow-hidden z-50 p-3">
                  <Link
                    href="/services"
                    className="block rounded-lg px-4 py-3 text-sm font-semibold text-white hover:bg-white/5 hover:text-orange transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    All Products & Services
                  </Link>
                  <div className="mt-2 space-y-2">
                    {servicesDropdownLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block rounded-lg px-4 py-3 hover:bg-white/5 transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        <div className="text-sm font-semibold text-white hover:text-orange transition-colors">{link.label}</div>
                        <div className="mt-1 text-xs leading-relaxed text-white/55">{link.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-orange transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Suspense fallback={<Link href="/cart" className="text-sm font-medium text-white/80 hover:text-orange transition-colors">Cart</Link>}>
              <CartNavLink />
            </Suspense>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-white/10">
            <div className="py-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/40 mb-2">Products & Services</p>
              <Link
                href="/services"
                onClick={() => setMobileOpen(false)}
                className="block py-2 px-0 text-sm font-medium text-white/80 hover:text-orange transition-colors"
              >
                All Products & Services
              </Link>
              {servicesDropdownLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 px-0 text-sm font-medium text-white/80 hover:text-orange transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 px-0 text-sm font-medium text-white/80 hover:text-orange transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Suspense fallback={<Link href="/cart" onClick={() => setMobileOpen(false)} className="block py-2 px-0 text-sm font-medium text-white/80 hover:text-orange transition-colors">Cart</Link>}>
              <CartNavLink mobile onClick={() => setMobileOpen(false)} />
            </Suspense>
          </nav>
        )}
      </div>
    </header>
  );
}
