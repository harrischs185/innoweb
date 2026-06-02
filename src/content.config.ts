import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		category: z.string(),
		categorySlug: z.string(),
		excerpt: z.string(),
		readTime: z.string(),
		status: z.enum(['Featured', 'Popular', 'New']),
	}),
});

export const collections = {
	blog,
};