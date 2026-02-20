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

export const metadata: Metadata = {
  title: "Shizuku Matcha Studio | Matcha Premium de Origen en Hermosillo",
  description:
    "Matcha premium de especialidad importado de Shizuoka, Japón. Perfil balanceado e ideal para lattes. Calidad técnica de primera cosecha. Envíos a todo México.",
  keywords:
    "matcha premium hermosillo, matcha japonés hermosillo, matcha latte, matcha ceremonial, matcha shizuoka, té japonés premium, matcha sonora, stone-ground matcha mexico, matcha okumidori, tencha molido en piedra",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://shizukumatchastudio.com",
    siteName: "Shizuku Matcha Studio",
    title: "Shizuku Matcha Studio | Matcha Premium de Especialidad",
    description:
      "Matcha de especialidad importado de Shizuoka, Japón. Cultivar Okumidori de primera cosecha. Perfil balanceado para lattes.",
    images: [
      {
        url: "/MATCHA_LATTE_HOT.jpg",
        width: 1200,
        height: 630,
        alt: "Shizuku Matcha Studio — Matcha de especialidad Shizu no Midori",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shizuku Matcha Studio | Matcha de Especialidad",
    description:
      "Matcha de especialidad importado de Shizuoka, Japón. Cultivar Okumidori. Primera cosecha.",
    images: ["/MATCHA_WISK.jpg"],
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
