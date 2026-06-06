export type CardFlowProductDetail = {
	sku: string;
	slug: string;
	title: string;
	shortDescription: string | null;
	longDescription: string | null;
	price: string | number | null;
	compareAtPrice: string | number | null;
	currency: string;
	condition: string | null;
	gradeCompany: string | null;
	gradeValue: string | null;
	autographStatus: boolean;
	autographGrade: string | null;
	serialNumbered: boolean;
	serialNumber: string | null;
	itemType: string | null;
	year: number | null;
	brand: string | null;
	setName: string | null;
	subset: string | null;
	parallel: string | null;
	variation: string | null;
	cardNumber: string | null;
	sport: {
		slug: string;
		name: string;
	} | null;
	players: {
		slug: string;
		displayName: string;
	}[];
	teams: {
		slug: string;
		name: string;
	}[];
	categories: {
		slug: string;
		name: string;
	}[];
	images: {
		url: string;
		altText: string | null;
		displayOrder: number;
		role: string;
		roleConfidence: string;
	}[];
	availabilityStatus: string | null;
	listingStatus: string | null;
	inventoryStatus: string | null;
};

export type InnoWebProductDetail = {
	title: string;
	price: string;
	slug: string;
	sku: string;
	images: string[];
	category: string;
	description: string | null;
	tags: string[];
	availability: string;
};

function formatPrice(price: string | number | null): string {
	if (price == null) return 'Price coming soon';

	return `$${Number(price).toFixed(2)}`;
}

export function adaptProductDetail(product: CardFlowProductDetail): InnoWebProductDetail {
	const tags = [
		product.sport?.name,
		...product.categories.map((category) => category.name),
		...product.players.map((player) => player.displayName),
	]
		.filter(Boolean)
		.map(String);

    const generatedDescription =
        [
            product.year,
            product.brand,
            product.setName,
            product.cardNumber ? `#${product.cardNumber}` : null,
        ]
            .filter(Boolean)
            .join(' ');

    const description =
		product.longDescription ??
		product.shortDescription ??
		(generatedDescription.length > 0 ? generatedDescription : null);
   
	return {
		title: product.title,
		price: formatPrice(product.price),
		slug: product.slug,
		sku: product.sku,
		images: product.images.map((image) => image.url),
		category: product.sport?.name ?? product.categories[0]?.name ?? 'Collectibles',
		description,
		tags,
		availability: product.availabilityStatus ?? 'Preview',
	};
}