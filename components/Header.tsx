'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-navy text-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-gold">SOUTHERN CITIES</span>
            <span>INVESTORS</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="hover:text-gold transition">How It Works</a>
          <a href="#what-we-buy" className="hover:text-gold transition">What We Buy</a>
          <a href="#investors" className="hover:text-gold transition">For Investors</a>
          <a href="#contact" className="hover:text-gold transition">Contact</a>
          <a href="#submit-property" className="bg-gold text-navy px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">
            Sell Your Property
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy border-t border-gold">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#how-it-works" className="hover:text-gold transition" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#what-we-buy" className="hover:text-gold transition" onClick={() => setMobileMenuOpen(false)}>What We Buy</a>
            <a href="#investors" className="hover:text-gold transition" onClick={() => setMobileMenuOpen(false)}>For Investors</a>
            <a href="#contact" className="hover:text-gold transition" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a href="#submit-property" className="bg-gold text-navy px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition text-center" onClick={() => setMobileMenuOpen(false)}>
              Sell Your Property
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
