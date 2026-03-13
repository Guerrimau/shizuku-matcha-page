import { Metadata } from "next";
import { getFaqs, getTeas } from "./queries";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Products from "@/components/Products";
import BusinessSection from "@/components/BusinessSection";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SectionDivider from "@/components/SectionDivider";
import Transparency from "@/components/Transparency";
import HowToPrepare from "@/components/HowToPrepare";
import Testimonials from "@/components/Testimonials";
import OrderCTA from "@/components/OrderCTA";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://shizukumatchastudio.com",
  },

  other: {
    "geo.region": "MX-SON",
    "geo.placename": "Hermosillo",
    "geo.position": "29.0729;-110.9559",
    ICBM: "29.0729, -110.9559",
  },
};

export default async function Home() {
  const faqs = await getFaqs();
  const teas = await getTeas();

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <SectionDivider />
      <Products data={teas} />
      <SectionDivider />
      <Story />
      <SectionDivider />
      <Transparency />
      <SectionDivider />
      <HowToPrepare />
      <Testimonials />
      <FAQ data={faqs} />
      <OrderCTA />
      <SectionDivider />
      <BusinessSection />
      <Footer />
    </div>
  );
}
