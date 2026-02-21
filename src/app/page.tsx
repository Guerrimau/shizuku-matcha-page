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
  // Next.js aplica el template del layout: "Matcha de Shizuoka en Hermosillo | Shizuku Matcha Studio"
  title: "Matcha de Shizuoka en Hermosillo",

  // Misma description que el layout — se sobreescribe aquí para que sea idéntica
  // y Google no tenga dos versiones distintas compitiendo
  description:
    "Matcha de especialidad importado directo del productor en Shizuoka, Japón. Cultivar Okumidori, primera cosecha. Envíos a Hermosillo y todo México. Desde $350 MXN.",

  openGraph: {
    title: "Matcha de Shizuoka en Hermosillo | Shizuku Matcha Studio",
    description:
      "Importado directo del productor en Shizuoka. Cultivar Okumidori, primera cosecha. Desde $350 MXN.",
    url: "https://shizukumatchastudio.com",
    type: "website",
    locale: "es_MX",
    // No se repite la imagen — la hereda del layout.tsx
  },

  twitter: {
    title: "Matcha de Shizuoka en Hermosillo | Shizuku Matcha Studio",
    description:
      "Importado directo del productor en Shizuoka. Cultivar Okumidori, primera cosecha. Desde $350 MXN.",
    // No se repite la imagen — la hereda del layout.tsx
  },

  alternates: {
    // Canonical específico del homepage — va aquí, no en layout
    canonical: "https://shizukumatchastudio.com",
  },

  other: {
    // Geo tags específicos de esta página
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
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <FAQ data={faqs} />
      <SectionDivider />
      <BusinessSection />
      <Footer />
    </div>
  );
}
