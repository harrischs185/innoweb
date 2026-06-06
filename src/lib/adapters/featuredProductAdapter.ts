import { adaptProductCard, type CardFlowProductSummary, type InnoWebProductCard } from './productAdapter';

export type CardFlowFeaturedProductsResponse = {
  data: {
    collection: {
      slug: string;
      name: string;
      description: string | null;
    };
    products: Array<
      CardFlowProductSummary & {
        slotLabel: string | null;
        sortOrder: number;
      }
    >;
  } | null;
};

export type InnoWebFeaturedProduct = InnoWebProductCard & {
  slotLabel: string | null;
  sortOrder: number;
};

export function adaptFeaturedProducts(
  response: CardFlowFeaturedProductsResponse,
): InnoWebFeaturedProduct[] {
  if (!response.data) return [];

  return response.data.products.map((product) => ({
    ...adaptProductCard(product),
    slotLabel: product.slotLabel,
    sortOrder: product.sortOrder,
  }));
}