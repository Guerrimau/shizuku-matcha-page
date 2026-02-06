import { Metadata } from "next";
import { getExperience, getFaqs, getTeas } from "./queries";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Products from "@/components/Products";
import Experience from "@/components/Experience";
import FAQ from "@/components/FAQ";
import BusinessSection from "@/components/BusinessSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shizuku Matcha Studio — Matcha premium en Hermosillo",
  description:
    "Matcha japonés premium de primera cosecha de Shizuoka. Disponible en Hermosillo, Sonora. The art of stillness.",
  keywords:
    "matcha premium hermosillo, matcha japonés hermosillo, matcha shizuoka, té japonés premium, matcha sonora, stone-ground matcha mexico",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://shizukumatchastudio.com",
    siteName: "Shizuku Matcha Studio",
    title: "Shizuku Matcha Studio — The art of stillness",
    description:
      "Matcha japonés premium de primera cosecha de Shizuoka. Hermosillo, Sonora.",
    images: [
      {
        url: "/BowlWithMatcha.png",
        width: 1200,
        height: 630,
        alt: "Shizuku Matcha Studio — Matcha premium ritual preparation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shizuku Matcha Studio — Matcha premium en Hermosillo",
    description:
      "Matcha japonés premium de primera cosecha de Shizuoka. Hermosillo, Sonora.",
    images: ["/BowlWithMatcha.png"],
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
      <Experience data={experience} />
      <Products data={teas} />
      <Story />
      <FAQ data={faqs} />
      <BusinessSection />
      <Footer />
    </div>
  );
}
