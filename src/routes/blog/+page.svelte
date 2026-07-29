<script lang="ts">
	import { CATEGORIES } from '$lib/data/blog/manifest';
	import type { ArticleMeta } from '$lib/data/blog/manifest';

	let { data } = $props();
	let activeCategory = $state('All');

	let filteredArticles = $derived(
		activeCategory === 'All'
			? data.articles
			: data.articles.filter((a: ArticleMeta) => a.category === activeCategory)
	);
</script>

<svelte:head>
	<title>Blog | provoque.ai</title>
	<meta name="description" content="Thoughts on AI companionship, memory, and building relationships that don't forget." />
	<meta property="og:title" content="Blog | provoque.ai" />
	<meta property="og:description" content="Thoughts on AI companionship, memory, and building relationships that don't forget." />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="blog-page">
	<div class="blog-container">
		<div class="blog-header">
			<h1>Blog</h1>
			<p>Thoughts on AI companionship, memory, and building relationships that don't forget.</p>
		</div>

		<div class="category-pills">
			{#each CATEGORIES as cat}
				<button
					class="pill"
					class:active={activeCategory === cat}
					onclick={() => activeCategory = cat}
				>
					{cat}
				</button>
			{/each}
		</div>

		{#if data.featured && (activeCategory === 'All' || data.featured.category === activeCategory)}
			<a href="/blog/{data.featured.slug}" class="featured-card">
				<div class="featured-image">
					<img src={data.featured.heroImage} alt={data.featured.title} />
				</div>
				<div class="featured-text">
					<span class="card-category">{data.featured.category}</span>
					<h2>{data.featured.title}</h2>
					<p class="card-excerpt">{data.featured.excerpt}</p>
					<div class="card-meta">
						<span>{data.featured.author}</span>
						<span class="meta-sep">|</span>
						<span>{data.featured.date}</span>
						<span class="meta-sep">|</span>
						<span>{data.featured.readTime}</span>
					</div>
				</div>
			</a>
		{/if}

		<div class="article-grid">
			{#each filteredArticles as article}
				<a href="/blog/{article.slug}" class="article-card">
					<div class="card-image">
						<img src={article.heroImage} alt={article.title} />
					</div>
					<span class="card-category">{article.category}</span>
					<h3>{article.title}</h3>
					<div class="card-date">
						<span>{article.date}</span>
						<span>{article.readTime}</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	.blog-page {
		background: #0B0D10;
		min-height: 100vh;
		color: #E8E4DF;
	}

	.blog-container {
		max-width: 1184px;
		margin: 0 auto;
		padding: 48px 32px;
	}

	.blog-header {
		margin-bottom: 40px;
	}

	.blog-header h1 {
		font-family: 'Cormorant Garamond', Georgia, serif;
		font-size: 48px;
		font-weight: 400;
		margin: 0 0 12px;
	}

	.blog-header p {
		font-size: 15px;
		color: rgba(232, 228, 223, 0.5);
		max-width: 480px;
		line-height: 1.6;
	}

	.category-pills {
		display: flex;
		gap: 8px;
		margin-bottom: 48px;
		flex-wrap: wrap;
	}

	.pill {
		font-family: 'Inter', system-ui, sans-serif;
		font-size: 12px;
		padding: 8px 18px;
		border-radius: 20px;
		cursor: pointer;
		transition: all 0.2s;
		background: transparent;
		border: 1px solid rgba(232, 228, 223, 0.15);
		color: rgba(232, 228, 223, 0.5);
	}

	.pill.active {
		background: rgba(174, 13, 70, 0.15);
		border: 1px solid #AE0D46;
		color: #E8E4DF;
	}

	.featured-card {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0;
		margin-bottom: 64px;
		background: rgba(232, 228, 223, 0.03);
		border-radius: 16px;
		overflow: hidden;
		text-decoration: none;
		color: inherit;
		transition: background 0.3s;
	}

	.featured-card:hover {
		background: rgba(232, 228, 223, 0.06);
	}

	.featured-image {
		position: relative;
		overflow: hidden;
	}

	.featured-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center 20%;
	}

	.featured-text {
		padding: 48px 40px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.featured-text h2 {
		font-family: 'Cormorant Garamond', Georgia, serif;
		font-size: 32px;
		font-weight: 400;
		margin: 0 0 16px;
		line-height: 1.2;
	}

	.card-category {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		color: #AE0D46;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		margin-bottom: 16px;
	}

	.card-excerpt {
		font-size: 14px;
		color: rgba(232, 228, 223, 0.5);
		line-height: 1.7;
		margin-bottom: 24px;
	}

	.card-meta {
		display: flex;
		align-items: center;
		gap: 16px;
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		color: rgba(232, 228, 223, 0.4);
	}

	.meta-sep {
		color: rgba(232, 228, 223, 0.2);
	}

	.article-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 28px;
	}

	.article-card {
		text-decoration: none;
		color: inherit;
		transition: transform 0.2s;
	}

	.article-card:hover {
		transform: translateY(-4px);
	}

	.card-image {
		aspect-ratio: 3/4;
		border-radius: 12px;
		overflow: hidden;
		margin-bottom: 16px;
	}

	.card-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center 20%;
	}

	.article-card h3 {
		font-family: 'Cormorant Garamond', Georgia, serif;
		font-size: 20px;
		font-weight: 400;
		margin: 8px 0 12px;
		line-height: 1.3;
	}

	.card-date {
		display: flex;
		gap: 12px;
		font-family: 'JetBrains Mono', monospace;
		font-size: 10px;
		color: rgba(232, 228, 223, 0.4);
	}

	@media (max-width: 768px) {
		.blog-container {
			padding: 32px 20px;
		}

		.featured-card {
			grid-template-columns: 1fr;
		}

		.article-grid {
			grid-template-columns: 1fr;
			gap: 32px;
		}
	}
</style>
