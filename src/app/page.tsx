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

export const metadata: Metadata = {
  title: "Shizuku Matcha Studio | Matcha Latte Hermosillo | Matcha de Especialidad",
  description:
    "Matcha de primera cosecha importado de Shizuoka, Japón. Cultivar Okumidori, molido en piedra. Disponible en Hermosillo con envíos a todo México.",
  keywords:
    "matcha latte hermosillo, donde comprar matcha hermosillo, matcha hermosillo, matcha shizuoka méxico, matcha primera cosecha méxico, matcha para cafeterías hermosillo, matcha mayoreo hermosillo, qué es el matcha, matcha vs ceremonial, matcha sonora, matcha okumidori",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://shizukumatchastudio.com",
    siteName: "Shizuku Matcha Studio",
    title: "Shizuku Matcha Studio | Matcha de Especialidad en Hermosillo",
    description:
      "Matcha de origen en Shizuoka, Japón. Importado a Hermosillo. Primera cosecha, cultivar Okumidori. Envíos a todo México.",
    images: [
      {
        url: "/MATCHA_LATTE_HOT.jpg",
        width: 1200,
        height: 630,
        alt: "Matcha latte preparado con Shizu no Midori en Hermosillo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shizuku Matcha Studio | Matcha Hermosillo",
    description:
      "Matcha de origen en Shizuoka, Japón. Importado a Hermosillo. Primera cosecha. Envíos nacionales.",
    images: ["/MATCHA_LATTE_HOT.jpg"],
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
      <Experience data={experience} />
      <SectionDivider />
      <Products data={teas} />
      <SectionDivider />
      <Story />
      <SectionDivider />
      <FAQ data={faqs} />
      <SectionDivider />
      <BusinessSection />
      <Footer />
    </div>
  );
}
