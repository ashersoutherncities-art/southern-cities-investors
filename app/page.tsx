import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import WhatWeBuy from '@/components/WhatWeBuy'
import ForInvestors from '@/components/ForInvestors'
import PropertyForm from '@/components/PropertyForm'
import WhySellToUs from '@/components/WhySellToUs'
import TrackRecord from '@/components/TrackRecord'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <WhatWeBuy />
      <ForInvestors />
      <PropertyForm />
      <WhySellToUs />
      <TrackRecord />
      <Testimonials />
      <Contact />
    </main>
  )
}
