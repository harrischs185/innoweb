export const categoryConfig = {
	graded: {
		title: 'Graded Cards',
		description: 'Browse graded cards, autographs, graded cards, and featured football collectibles.',
		filterType: 'category',
		filterValue: 'graded',
	},
    autographed: {
		title: 'Autographed Cards',
		description: 'Browse autographed cards, autographs, graded cards, and featured football collectibles.',
		filterType: 'category',
		filterValue: 'autographed',
	},
    football: {
		title: 'Football Cards',
		description: 'Browse football cards, autographs, graded cards, and featured football collectibles.',
		filterType: 'sport',
		filterValue: 'football',
	},
	baseball: {
		title: 'Baseball Cards',
		description: 'Browse baseball cards, autographs, graded cards, and featured baseball collectibles.',
		filterType: 'sport',
		filterValue: 'baseball',
	},
	basketball: {
		title: 'Basketball Cards',
		description: 'Browse basketball cards, autographs, graded cards, and featured basketball collectibles.',
		filterType: 'sport',
		filterValue: 'basketball',
	},
    golf: {
		title: 'Golf Cards',
		description: 'Browse golf cards, autographs, graded cards, and featured basketball collectibles.',
		filterType: 'sport',
		filterValue: 'golf',
	},
    soccer: {
		title: 'Soccer Cards',
		description: 'Browse soccer cards, autographs, graded cards, and featured basketball collectibles.',
		filterType: 'sport',
		filterValue: 'soccer',
	},
    racing: {
		title: 'Racing Cards',
		description: 'Browse racing cards, autographs, graded cards, and featured basketball collectibles.',
		filterType: 'sport',
		filterValue: 'racing',
	},
    'wwe-ufc': {
		title: 'WWE-UFC Cards',
		description: 'Browse MMA & UFC cards, autographs, graded cards, and featured basketball collectibles.',
		filterType: 'sport',
		filterValue: 'wwe-ufc',
	},
    tcg: {
		title: 'TCG Cards',
		description: 'Browse Pokemon & other TCG cards, autographs, graded cards, and featured basketball collectibles.',
		filterType: 'sport',
		filterValue: 'tcg',
	},
    other: {
		title: 'Other',
		description: 'Browse other pieces of sports memoriabilia.',
		filterType: 'sport',
		filterValue: 'other',
	},
	'new-arrivals': {
		title: 'New Arrivals',
		description: 'Browse the latest sports cards and collectibles added to the shop.',
		filterType: 'dynamic',
		filterValue: 'new-arrivals',
	},
	'bunkers-bargains': {
		title: "Bunker's Bargains",
		description: "Browse limited-time deals, discounts, and featured bargains from Bunker's Bargains.",
		filterType: 'category',
		filterValue: 'bunkers-bargains',
	},
	'featured-products': {
		title: 'Featured QB Collection',
		description: 'Featured quarterback cards and collectibles.',
		filterType: 'collection',
		filterValue: 'featured-products',
	},
} as const;

export type CategoryKey = keyof typeof categoryConfig;