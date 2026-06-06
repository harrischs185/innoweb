export type CardFlowProductSummary = {
  sku: string;
  slug: string;
  title: string;
  price: string | number | null;
  currency: string;
  availabilityStatus: string | null;
  listingStatus: string | null;
  sport: {
    slug: string;
    name: string;
  } | null;
  primaryImage: {
    url: string;
    altText: string | null;
    displayOrder: number;
    role: string;
    roleConfidence: string;
  } | null;
};

export type InnoWebProductCard = {
  sku: string;
  title: string;
  href: string;
  imageSrc: string | null;
  imageAlt: string;
  priceLabel: string;
  sportName: string | null;
  availabilityStatus: string | null;
};

export function adaptProductCard(product: CardFlowProductSummary): InnoWebProductCard {
  return {
    sku: product.sku,
    title: product.title,
    href: `/products/${product.slug}`,
    imageSrc: product.primaryImage?.url ?? null,
    imageAlt: product.primaryImage?.altText ?? product.title,
    priceLabel: product.price == null ? 'Price coming soon' : `$${Number(product.price).toFixed(2)}`,
    sportName: product.sport?.name ?? null,
    availabilityStatus: product.availabilityStatus,
  };
}