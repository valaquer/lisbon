export const prerender = true;

import { error } from '@sveltejs/kit';
import { getArticleSlugs, getArticles } from '$lib/data/blog/manifest';
import type { ArticleMeta } from '$lib/data/blog/manifest';

export async function entries() {
	const slugs = getArticleSlugs();
	return slugs.map((slug) => ({ slug }));
}

export async function load({ params }) {
	const modules = import.meta.glob('/src/lib/data/blog/posts/*.md', { eager: true }) as Record<
		string,
		{ default: any; metadata: ArticleMeta }
	>;

	const match = Object.values(modules).find((mod) => mod.metadata?.slug === params.slug);

	if (!match) {
		throw error(404, 'Article not found');
	}

	const articles = await getArticles();
	const related = articles
		.filter((a) => a.slug !== params.slug)
		.slice(0, 3);

	return {
		article: match.metadata,
		content: match.default,
		related,
	};
}
