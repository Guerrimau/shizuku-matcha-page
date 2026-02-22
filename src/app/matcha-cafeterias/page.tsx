import { Metadata } from 'next';
import CafeteriasPageClient from './CafeteriasPageClient';

export const metadata: Metadata = {
  title: 'Matcha para Cafeterías de Especialidad',
  description: 'Matcha de primera cosecha de Shizuoka para cafeterías en Hermosillo. Cultivar Okumidori, precio directo de importador, sin pedido mínimo. Envíos nacionales.',
  keywords: 'matcha para cafeterías hermosillo, matcha mayoreo hermosillo, matcha b2b hermosillo, matcha primera cosecha cafeterías, matcha okumidori, matcha shizuoka mayorista',
  openGraph: {
    title: 'Matcha para Cafeterías de Especialidad | Shizuku Matcha Studio',
    description: 'Matcha de primera cosecha de Shizuoka. Precio directo de importador. Sin pedido mínimo. Asesoría técnica incluida.',
    url: 'https://shizukumatchastudio.com/matcha-cafeterias',
    type: 'website',
    locale: 'es_MX',
    images: [
      {
        url: '/HERO.jpg',
        width: 1200,
        height: 630,
        alt: 'Shizuku Matcha Studio — Matcha de especialidad para cafeterías en Hermosillo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matcha para Cafeterías de Especialidad | Shizuku Matcha Studio',
    description: 'Matcha de primera cosecha de Shizuoka. Precio directo de importador. Sin pedido mínimo.',
    images: ['/HERO.jpg'],
  },
  alternates: {
    canonical: 'https://shizukumatchastudio.com/matcha-cafeterias',
  },
  other: {
    'geo.region': 'MX-SON',
    'geo.placename': 'Hermosillo',
  },
};

export default function CafeteriasPage() {
  return <CafeteriasPageClient />;
}
