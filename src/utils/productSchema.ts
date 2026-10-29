import type { Product } from "@/data/products";

const baseUrl = "https://shizukumatchastudio.com";

function getPriceValidUntil() {
  const oneYearFromNow = Date.now() + 365 * 24 * 60 * 60 * 1000;
  return new Date(oneYearFromNow).toISOString().split("T")[0];
}

function getAvailability(product: Product) {
  if (product.inStock === false) return "https://schema.org/OutOfStock";
  return "https://schema.org/InStock";
}

export function buildProductSchema(product: Product) {
  const productUrl = `${baseUrl}/productos/${product.slug}`;
  const priceValidUntil = getPriceValidUntil();
  const prices = product.sizes.map((size) => size.price);

  const offers = product.sizes.map((size) => ({
    "@type": "Offer",
    name: size.label,
    price: size.price.toString(),
    priceCurrency: "MXN",
    availability: getAvailability(product),
    priceValidUntil,
    url: productUrl,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.name,
    description: product.description,
    image: product.images.map((image) => `${baseUrl}${image}`),
    url: productUrl,
    brand: {
      "@type": "Brand",
      name: "Shizuku Matcha Studio",
    },
    offers:
      offers.length === 1
        ? offers[0]
        : {
            "@type": "AggregateOffer",
            lowPrice: Math.min(...prices).toString(),
            highPrice: Math.max(...prices).toString(),
            priceCurrency: "MXN",
            offerCount: offers.length,
            offers,
          },
  };
}
