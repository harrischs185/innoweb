import { getCollection } from 'astro:content';

export async function getArticles() {
	const articles = await getCollection('blog');

	return articles.map((article) => ({
		slug: article.id.replace(/\.md$/, ''),
		...article.data,
	}));
}