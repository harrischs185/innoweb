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
  price: string;
  image: string;
  slug: string;
  href: string;
  sportName: string | null;
  availabilityStatus: string | null;
};

export function adaptProductCard(product: CardFlowProductSummary): InnoWebProductCard {
  return {
    sku: product.sku,
    title: product.title,
    price: product.price == null ? 'Price coming soon' : `$${Number(product.price).toFixed(2)}`,
    image: product.primaryImage?.url ?? '',
    slug: product.slug,
    href: `/product/${product.slug}`,
    sportName: product.sport?.name ?? null,
    availabilityStatus: product.availabilityStatus,
  };
}