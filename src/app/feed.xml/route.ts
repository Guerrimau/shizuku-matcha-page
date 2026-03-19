import { NextResponse } from "next/server";

const SITE_URL = "https://shizukumatchastudio.com";
const SITE_TITLE = "Shizuku Matcha Studio — Blog";
const SITE_DESCRIPTION =
  "Guías técnicas sobre matcha, preparación, y cultura del té japonés. Información verificada desde Hermosillo, Sonora.";

// Blog articles with metadata
const articles = [
  {
    title: "Guía de Preparación de Matcha — Técnica Correcta Paso a Paso",
    slug: "guia-preparacion-matcha",
    description:
      "Guía técnica completa: sifting, temperatura del agua (55-65°C), técnica de batido en W, ratios para matcha latte.",
    pubDate: "2025-01-01T08:00:00Z",
    modDate: "2026-03-16T12:00:00Z",
  },
  {
    title: "La Verdad sobre el Matcha Ceremonial — Grados y Marketing",
    slug: "verdad-matcha-ceremonial",
    description:
      "Análisis técnico de los grados de matcha: qué significa ceremonial, cómo se clasifican en Japón vs. marketing occidental.",
    pubDate: "2025-01-01T08:00:00Z",
    modDate: "2026-03-16T12:00:00Z",
  },
];

function generateRSSItem(article: (typeof articles)[0]): string {
  return `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${SITE_URL}/aprende/${article.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/aprende/${article.slug}</guid>
      <description><![CDATA[${article.description}]]></description>
      <pubDate>${new Date(article.pubDate).toUTCString()}</pubDate>
      <atom:updated>${new Date(article.modDate).toISOString()}</atom:updated>
    </item>`;
}

function generateRSS(): string {
  const itemsXml = articles.map(generateRSSItem).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${SITE_TITLE}</title>
    <link>${SITE_URL}</link>
    <description>${SITE_DESCRIPTION}</description>
    <language>es-MX</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${SITE_URL}/favicons/favicon-512x512.png</url>
      <title>${SITE_TITLE}</title>
      <link>${SITE_URL}</link>
    </image>
    ${itemsXml}
  </channel>
</rss>`;
}

export async function GET() {
  const rss = generateRSS();

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
