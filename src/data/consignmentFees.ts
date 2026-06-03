export const consignmentFees = [
	{
		purchasePrice: 'Up to $9.99',
		youReceive: '80% of Sale',
		listingFee: '$0.75 Listing',
	},
	{
		purchasePrice: '$10.00 - $24.99',
		youReceive: '80% of Sale',
		listingFee: '$0.50 Listing',
	},
	{
		purchasePrice: '$25 - $999.99',
		youReceive: '90% of Sale',
		listingFee: '$0.25 Listing',
	},
	{
		purchasePrice: '$1,000 - $4,999',
		youReceive: '90% of Sale',
		listingFee: 'Free Listing',
	},
	{
		purchasePrice: '$5,000 and Up',
		youReceive: '95% of Sale',
		listingFee: 'Free Listing',
	},
] as const;