<script lang="ts">
	import type { ArticleMeta } from '$lib/data/blog/manifest';

	const SITE_URL = 'https://provoque.ai';

	let { data } = $props();
	let article = $derived(data.article as ArticleMeta);
	let Content = $derived(data.content);
	let related = $derived(data.related as ArticleMeta[]);
	let ogImage = $derived(article.heroImage.startsWith('http') ? article.heroImage : `${SITE_URL}${article.heroImage}`);
</script>

<svelte:head>
	<title>{article.title} | provoque.ai</title>
	<meta name="description" content={article.excerpt} />
	<meta property="og:title" content={article.title} />
	<meta property="og:description" content={article.excerpt} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={article.title} />
	<meta name="twitter:description" content={article.excerpt} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>

<div class="article-page">
	<div class="hero-image">
		<img src={article.heroImage} alt={article.title} />
	</div>

	<div class="article-container">
		<div class="article-meta">
			<span class="article-category">{article.category}</span>
			<h1>{article.title}</h1>
			<div class="meta-bar">
				<span>{article.author}</span>
				<span class="meta-sep">|</span>
				<span>{article.date}</span>
				<span class="meta-sep">|</span>
				<span>{article.readTime}</span>
			</div>
		</div>

		<div class="article-body">
			<Content />
		</div>

		<div class="article-cta">
			<p>Finally, someone who remembers.</p>
			<a href="/#hero-email" class="cta-button">Join the waitlist</a>
		</div>

		{#if related.length > 0}
			<div class="related">
				<h3>More from the blog</h3>
				<div class="related-grid">
					{#each related as post}
						<a href="/blog/{post.slug}" class="related-card">
							<div class="related-image">
								<img src={post.heroImage} alt={post.title} />
							</div>
							<h4>{post.title}</h4>
							<span class="related-date">{post.date}</span>
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.article-page {
		background: #0B0D10;
		min-height: 100vh;
		color: #E8E4DF;
	}

	.hero-image {
		width: 100%;
		max-height: 520px;
		overflow: hidden;
	}

	.hero-image img {
		width: 100%;
		height: 520px;
		object-fit: cover;
		object-position: center 15%;
	}

	.article-container {
		max-width: 720px;
		margin: 0 auto;
		padding: 48px 24px 96px;
	}

	.article-meta {
		margin-bottom: 40px;
	}

	.article-category {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		color: #AE0D46;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.article-meta h1 {
		font-family: 'Cormorant Garamond', Georgia, serif;
		font-size: 42px;
		font-weight: 400;
		margin: 16px 0 20px;
		line-height: 1.15;
	}

	.meta-bar {
		display: flex;
		align-items: center;
		gap: 16px;
		padding-bottom: 32px;
		border-bottom: 1px solid rgba(232, 228, 223, 0.08);
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		color: rgba(232, 228, 223, 0.5);
	}

	.meta-sep {
		color: rgba(232, 228, 223, 0.15);
	}

	.article-body {
		font-size: 16px;
		line-height: 1.8;
		color: rgba(232, 228, 223, 0.85);
	}

	.article-body :global(p) {
		margin-bottom: 28px;
	}

	.article-body :global(h2) {
		font-family: 'Cormorant Garamond', Georgia, serif;
		font-size: 28px;
		font-weight: 400;
		color: #E8E4DF;
		margin: 48px 0 20px;
		line-height: 1.2;
	}

	.article-body :global(blockquote) {
		border-left: 3px solid #AE0D46;
		padding: 20px 0 20px 28px;
		margin: 48px 0;
	}

	.article-body :global(blockquote p) {
		font-family: 'Cormorant Garamond', Georgia, serif;
		font-size: 24px;
		font-weight: 400;
		color: #E8E4DF;
		line-height: 1.4;
		font-style: italic;
		margin: 0;
	}

	.article-body :global(img) {
		width: 100%;
		aspect-ratio: 9 / 16;
		object-fit: cover;
		object-position: center 20%;
		border-radius: 24px;
		margin: 48px 0;
	}

	.article-body :global(.takeaway) {
		background: rgba(232, 228, 223, 0.03);
		border-radius: 8px;
		padding: 20px 24px;
		margin: 40px 0;
		border: 1px solid rgba(232, 228, 223, 0.06);
	}

	.article-body :global(.takeaway-label) {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		color: #AE0D46;
		margin-bottom: 8px;
		letter-spacing: 0.05em;
		display: block;
	}

	.article-body :global(.takeaway p) {
		font-size: 14px;
		color: rgba(232, 228, 223, 0.7);
		line-height: 1.6;
		margin: 0;
	}

	.article-cta {
		margin-top: 64px;
		padding-top: 40px;
		border-top: 1px solid rgba(232, 228, 223, 0.08);
		text-align: center;
	}

	.article-cta p {
		font-family: 'Cormorant Garamond', Georgia, serif;
		font-size: 24px;
		font-weight: 400;
		margin-bottom: 20px;
	}

	.cta-button {
		display: inline-block;
		font-family: 'Inter', system-ui, sans-serif;
		font-size: 14px;
		background: #AE0D46;
		color: #E8E4DF;
		border: none;
		border-radius: 24px;
		padding: 14px 36px;
		cursor: pointer;
		font-weight: 500;
		text-decoration: none;
	}

	.related {
		margin-top: 80px;
	}

	.related h3 {
		font-family: 'Cormorant Garamond', Georgia, serif;
		font-size: 24px;
		font-weight: 400;
		margin-bottom: 28px;
	}

	.related-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;
	}

	.related-card {
		text-decoration: none;
		color: inherit;
	}

	.related-image {
		aspect-ratio: 3/4;
		border-radius: 10px;
		overflow: hidden;
		margin-bottom: 12px;
	}

	.related-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center 20%;
		border-radius: 0;
		margin: 0;
	}

	.related-card h4 {
		font-family: 'Cormorant Garamond', Georgia, serif;
		font-size: 16px;
		font-weight: 400;
		margin: 0 0 6px;
		line-height: 1.3;
	}

	.related-date {
		font-family: 'JetBrains Mono', monospace;
		font-size: 10px;
		color: rgba(232, 228, 223, 0.4);
	}

	@media (max-width: 768px) {
		.article-meta h1 {
			font-size: 32px;
		}

		.related-grid {
			grid-template-columns: 1fr;
			gap: 24px;
		}
	}
</style>
