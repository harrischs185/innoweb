import beginnerGuidesTile from '../assets/images/blog/categories/beginner-guides-mangaTile.png';
import cardIdentificationTile from '../assets/images/blog/categories/card-identification-mangaTile.png';
import gradingTile from '../assets/images/blog/categories/grading-mangaTile.png';
import marketAnalysisTile from '../assets/images/blog/categories/market-analysis-mangaTile.png';
import playerAnalysisTile from '../assets/images/blog/categories/player-analysis-mangaTile.png';
import collectingTipsTile from '../assets/images/blog/categories/collecting-tips-mangaTile.png';
import storageProtectionTile from '../assets/images/blog/categories/storage-and-protection-mangaTile.png';
import setSpotlightsTile from '../assets/images/blog/categories/set-spotlights-mangaTile.png';
import hobbyCultureTile from '../assets/images/blog/categories/hobby-culture-mangaTile.png';

export const blogCategories = [
	{
		slug: 'beginner-guides',
		title: 'Beginner Guides',
		eyebrow: 'Start Here',
		description: 'Learn the basics before chasing cardboard chaos.',
		image: beginnerGuidesTile.src,
	},
	{
		slug: 'card-identification',
		title: 'Card Identification',
		eyebrow: 'Sniff Test',
		description: 'Short prints, parallels, variations, and details that matter.',
		image: cardIdentificationTile.src,
	},
	{
		slug: 'grading',
		title: 'Grading',
		eyebrow: 'Condition Check',
		description: 'Know when grading helps and when it becomes a fizzle.',
		image: gradingTile.src,
	},
	{
		slug: 'market-analysis',
		title: 'Market Analysis',
		eyebrow: 'Dinger Or Fizzle',
		description: 'Understand hype, demand, pricing, and collector behavior.',
		image: marketAnalysisTile.src,
	},
	{
		slug: 'player-analysis',
		title: 'Player Analysis',
		eyebrow: 'Film Room',
		description: 'Players, performance, hobby attention, and collector interest.',
		image: playerAnalysisTile.src,
	},
	{
		slug: 'collecting-tips',
		title: 'Collecting Tips',
		eyebrow: 'Playbook',
		description: 'Practical habits for smarter, cleaner collecting.',
		image: collectingTipsTile.src,
	},
	{
		slug: 'storage-protection',
		title: 'Storage & Protection',
		eyebrow: 'Protect The Hits',
		description: 'Keep cards safe, clean, organized, and ready.',
		image: storageProtectionTile.src,
	},
	{
		slug: 'set-spotlights',
		title: 'Set Spotlights',
		eyebrow: 'Cardboard History',
		description: 'Sets, designs, releases, and hobby favorites.',
		image: setSpotlightsTile.src,
	},
	{
		slug: 'hobby-culture',
		title: 'Hobby Culture',
		eyebrow: 'Story Time',
		description: 'Nostalgia, weird finds, hobby moments, and collector stories.',
		image: hobbyCultureTile.src,
	},
] as const;