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
  title: "Shizuku Matcha Studio — Matcha de Shizuoka directo a Hermosillo",
  description:
    "Matcha de especialidad en Hermosillo, importado de Shizuoka, Japón. Cultivar Okumidori. Pickup local y envíos a todo México. Desde $350 MXN.",

  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Shizuku Matcha Studio",
    url: "https://shizukumatchastudio.com",
    title: "Shizuku Matcha Studio — Matcha de Shizuoka directo a Hermosillo",
    description:
      "Matcha de especialidad en Hermosillo, importado de Shizuoka, Japón. Cultivar Okumidori. Pickup local y envíos a todo México. Desde $350 MXN.",
    images: [
      {
        url: "https://shizukumatchastudio.com/og.jpg",
        width: 1200,
        height: 630,
        alt: "Matcha latte caliente preparado con Shizu no Midori — Shizuku Matcha Studio Hermosillo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shizuku Matcha Studio — Matcha de Shizuoka directo a Hermosillo",
    description:
      "Matcha de especialidad en Hermosillo, importado de Shizuoka, Japón. Cultivar Okumidori. Pickup local y envíos a todo México. Desde $350 MXN.",
    images: ["https://shizukumatchastudio.com/og.jpg"],
  },

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
