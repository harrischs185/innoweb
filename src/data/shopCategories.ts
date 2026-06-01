export const categoryConfig = {
	graded: {
		title: 'Graded Cards',
		description: 'Browse graded cards, autographs, graded cards, and featured football collectibles.',
	},
    autographed: {
		title: 'Autographed Cards',
		description: 'Browse autographed cards, autographs, graded cards, and featured football collectibles.',
	},
    football: {
		title: 'Football Cards',
		description: 'Browse football cards, autographs, graded cards, and featured football collectibles.',
	},
	baseball: {
		title: 'Baseball Cards',
		description: 'Browse baseball cards, autographs, graded cards, and featured baseball collectibles.',
	},
	basketball: {
		title: 'Basketball Cards',
		description: 'Browse basketball cards, autographs, graded cards, and featured basketball collectibles.',
	},
    golf: {
		title: 'Golf Cards',
		description: 'Browse golf cards, autographs, graded cards, and featured basketball collectibles.',
	},
    soccer: {
		title: 'Soccer Cards',
		description: 'Browse soccer cards, autographs, graded cards, and featured basketball collectibles.',
	},
    racing: {
		title: 'Racing Cards',
		description: 'Browse racing cards, autographs, graded cards, and featured basketball collectibles.',
	},
    'wwe-ufc': {
		title: 'WWE-UFC Cards',
		description: 'Browse MMA & UFC cards, autographs, graded cards, and featured basketball collectibles.',
	},
    tcg: {
		title: 'TCG Cards',
		description: 'Browse Pokemon & other TCG cards, autographs, graded cards, and featured basketball collectibles.',
	},
    other: {
		title: 'Other',
		description: 'Browse other pieces of sports memoriabilia.',
	},
	'new-arrivals': {
		title: 'New Arrivals',
		description: 'Browse the latest sports cards and collectibles added to the shop.',
	},
	'bunkers-bargains': {
		title: "Bunker's Bargains",
		description: "Browse limited-time deals, discounts, and featured bargains from Bunker's Bargains.",
	},
} as const;

export type CategoryKey = keyof typeof categoryConfig;