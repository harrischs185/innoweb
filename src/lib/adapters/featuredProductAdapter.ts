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

export type InnoWebFeaturedCollection = {
	title: string;
	description: string;
	products: InnoWebFeaturedProduct[];
	primaryProduct: InnoWebFeaturedProduct | null;
	productCount: number;
	href: string;
	ctaLabel: string;
};

export function adaptFeaturedCollection(
	response: CardFlowFeaturedProductsResponse,
): InnoWebFeaturedCollection | null {
	if (!response.data) return null;

	const products = adaptFeaturedProducts(response);

	return {
		title: response.data.collection.name,
		description:
			response.data.collection.description ??
			'Curated featured products from CardFlow.',
		products,
		primaryProduct: products[0] ?? null,
		productCount: products.length,
		href: '/shop/featured-products',
		ctaLabel: 'Shop Collection',
	};
}