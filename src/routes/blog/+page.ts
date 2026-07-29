export const prerender = true;

import { getArticles } from '$lib/data/blog/manifest';
import type { ArticleMeta } from '$lib/data/blog/manifest';

export async function load() {
	const articles = await getArticles();
	const featured = articles.find((a) => a.featured) ?? articles[0];
	const rest = articles.filter((a) => a.slug !== featured?.slug);

	return { featured, articles: rest };
}
