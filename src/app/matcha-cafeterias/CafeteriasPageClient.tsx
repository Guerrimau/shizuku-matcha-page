"use client";

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CafeteriasHero from '@/components/CafeteriasHero'
import CafeteriasBenefits from '@/components/CafeteriasBenefits'
import CafeteriasProducts from '@/components/CafeteriasProducts'
import CafeteriasProcess from '@/components/CafeteriasProcess'
import CafeteriasFAQ from '@/components/CafeteriasFAQ'
import CafeteriasCTA from '@/components/CafeteriasCTA'

export default function CafeteriasPageClient() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <CafeteriasHero />
      <CafeteriasBenefits />
      <CafeteriasProducts />
      <CafeteriasProcess />
      <CafeteriasFAQ />
      <CafeteriasCTA />
      <Footer /> 
    </div>
  )
}

