import { Metadata } from 'next';
import CafeteriasPageClient from './CafeteriasPageClient';

export const metadata: Metadata = {
  title: 'Matcha para Cafeterías de Especialidad',
  description: 'Matcha de especialidad de Shizuoka para cafeterías en Hermosillo. Cultivar Okumidori, blend estacional, precio directo de importador, sin pedido mínimo. Envíos nacionales.',

  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: 'Shizuku Matcha Studio',
    url: 'https://shizukumatchastudio.com/matcha-cafeterias',
    title: 'Matcha para Cafeterías de Especialidad | Shizuku Matcha Studio',
    description: 'Matcha de especialidad de Shizuoka para cafeterías en Hermosillo. Cultivar Okumidori, blend estacional. Precio directo de importador. Sin pedido mínimo.',
    images: [
      {
        url: 'https://shizukumatchastudio.com/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Shizuku Matcha Studio — Matcha de especialidad para cafeterías en Hermosillo',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Matcha para Cafeterías de Especialidad | Shizuku Matcha Studio',
    description: 'Matcha de especialidad de Shizuoka para cafeterías en Hermosillo. Cultivar Okumidori, blend estacional. Precio directo de importador.',
    images: ['https://shizukumatchastudio.com/og.jpg'],
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
