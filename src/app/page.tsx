import { Metadata } from "next";
import { getExperience, getFaqs, getTeas } from "./queries";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Products from "@/components/Products";
import Experience from "@/components/Experience";
import BusinessSection from "@/components/BusinessSection";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import SectionDivider from "@/components/SectionDivider";
import Transparency from "@/components/Transparency";
import HowToPrepare from "@/components/HowToPrepare";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Shizuku Matcha Studio — Matcha de Shizuoka directo a Hermosillo",
  description:
    "Importado directamente de Shizuoka, Japón. Cultivar Okumidori. Pickup en Hermosillo y envíos a todo México. Desde $350 MXN.",

  openGraph: {
    title: "Shizuku Matcha Studio — Matcha de Shizuoka directo a Hermosillo",
    description:
      "Importado directamente de Shizuoka, Japón. Cultivar Okumidori. Pickup en Hermosillo y envíos a todo México. Desde $350 MXN.",
    url: "https://shizukumatchastudio.com",
    type: "website",
    locale: "es_MX",
    images: [
      {
        url: "https://shizukumatchastudio.com/MATCHA_LATTE_HOT_SQUARE.jpg",
        width: 1200,
        height: 1200,
        alt: "Matcha latte caliente preparado con Shizu no Midori — Shizuku Matcha Studio Hermosillo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shizuku Matcha Studio — Matcha de Shizuoka directo a Hermosillo",
    description:
      "Importado directamente de Shizuoka, Japón. Cultivar Okumidori. Pickup en Hermosillo y envíos a todo México. Desde $350 MXN.",
    images: ["https://shizukumatchastudio.com/MATCHA_LATTE_HOT_SQUARE.jpg"],
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
  const experience = await getExperience();

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <SectionDivider />
      <Story />
      <SectionDivider />
      <Transparency />
      <SectionDivider />
      <Products data={teas} />
      <SectionDivider />
      <HowToPrepare />
      <Testimonials />
      <FAQ data={faqs} />
      <SectionDivider />
      <BusinessSection />
      <Footer />
    </div>
  );
}
