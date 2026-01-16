"use client";

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Story from '@/components/Story'
import Products from '@/components/Products'
import Experience from '@/components/Experience'
import HowToOrder from '@/components/HowToOrder'
import FAQ from '@/components/FAQ'
import BusinessSection from '@/components/BusinessSection'
import Footer from '@/components/Footer'

export default function HomePageClient() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Experience />
      <Products />
      <Story />
      <FAQ />
      <BusinessSection />
      <Footer /> 
    </div>
  )
}

