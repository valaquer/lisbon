export interface ArticleMeta {
	slug: string;
	title: string;
	category: string;
	date: string;
	author: string;
	readTime: string;
	heroImage: string;
	excerpt: string;
	featured?: boolean;
}

export async function getArticles(): Promise<ArticleMeta[]> {
	const modules = import.meta.glob('/src/lib/data/blog/posts/*.md', { eager: true }) as Record<string, { metadata: ArticleMeta }>;

	const articles = Object.values(modules)
		.map((mod) => mod.metadata)
		.filter((meta) => meta?.slug)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return articles;
}

export function getArticleSlugs(): string[] {
	const modules = import.meta.glob('/src/lib/data/blog/posts/*.md', { eager: true }) as Record<string, { metadata: ArticleMeta }>;
	return Object.values(modules)
		.map((mod) => mod.metadata?.slug)
		.filter(Boolean) as string[];
}

export const CATEGORIES = ['All', 'Memory', 'Relationships', 'Technology', 'Behind the scenes'] as const;
