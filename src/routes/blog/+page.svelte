<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let activeTab = $state('Comparisons');

	const categories = [
		{ name: 'Comparisons', count: 19 },
		{ name: 'Reviews', count: 6 },
		{ name: 'Guides', count: 7 },
		{ name: 'Features', count: 2 }
	];

	const posts = [
		{ cat: 'Comparisons', date: 'April 11, 2026', readTime: '', title: '6 Best JanitorAI Alternatives in 2026 (Reliable & No API Keys Needed)', desc: 'JanitorAI down again or tired of API key hassles? Here are the 6 best JanitorAI alternatives in 2026 with better uptime, deeper memory, and no technical setup required.', tags: ['janitor ai alternative', 'janitor ai alternatives', 'apps like janitor ai'] },
		{ cat: 'Comparisons', date: 'April 10, 2026', readTime: '', title: '6 Best SpicyChat Alternatives in 2026 (Deeper AI, Better Experience)', desc: 'Looking for SpicyChat alternatives with better quality, real memory, and deeper connections? Here are the 6 best apps like SpicyChat in 2026 — tested and compared.', tags: ['spicychat alternative', 'spicychat alternatives', 'apps like spicychat'] },
		{ cat: 'Comparisons', date: '', readTime: '', title: '6 Best Talkie AI Alternatives in 2026 (Deeper Connections & Better Memory)', desc: 'Looking for Talkie AI alternatives with more emotional depth, better memory, and fewer restrictions? Here are the 6 best apps like Talkie in 2026.', tags: ['talkie ai alternative', 'talkie ai alternatives', 'apps like talkie'] },
		{ cat: 'Comparisons', date: 'April 9, 2026', readTime: '10 min read', title: '8 Best AI Boyfriend Apps in 2026 (Tested & Ranked)', desc: 'Looking for the best AI boyfriend app in 2026? We tested 8 top virtual boyfriend apps — including free options — and ranked them on memory, emotional depth, and conversation quality.', tags: ['ai boyfriend', 'ai boyfriend app', 'best ai boyfriend'] },
	];
</script>

<Header />
<main>
	<section class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
		<div class="max-w-6xl mx-auto">
			<div class="text-center mb-12">
				<h1 class="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">AI Companion Insights</h1>
				<p class="text-lg text-muted-foreground max-w-2xl mx-auto">Hands-on reviews, real comparisons, and honest guides for AI girlfriends and AI companions in 2026.</p>
			</div>

			<div class="flex flex-wrap justify-center gap-2 mb-12">
				{#each categories as cat}
					<button
						class="px-4 py-2 rounded-full text-sm font-medium transition-colors {activeTab === cat.name ? 'bg-honey text-white' : 'bg-card text-muted-foreground hover:text-foreground border border-border'}"
						onclick={() => activeTab = cat.name}
					>
						{cat.name} ({cat.count})
					</button>
				{/each}
			</div>

			<div class="grid md:grid-cols-2 gap-6">
				{#each posts.filter(p => p.cat === activeTab) as post}
					<article class="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all">
						<div class="flex items-center gap-2 text-xs text-muted-foreground mb-3">
							{post.date}
							{#if post.readTime}<span>·</span><span>{post.readTime}</span>{/if}
						</div>
						<h2 class="text-lg font-bold mb-2">{post.title}</h2>
						<p class="text-sm text-muted-foreground mb-4">{post.desc}</p>
						<div class="flex flex-wrap gap-2">
							{#each post.tags as tag}
								<span class="px-2 py-1 rounded-md text-xs bg-muted text-muted-foreground">{tag}</span>
							{/each}
						</div>
					</article>
				{/each}
			</div>

			<div class="text-center mt-16 py-12 border-t border-border">
				<h3 class="text-xl sm:text-2xl font-bold mb-2">Ready to experience the best AI companion?</h3>
				<p class="text-muted-foreground mb-6">Join 1,000+ on the provoque.ai waitlist — free, no card.</p>
				<button class="inline-flex items-center gap-2 px-8 py-3 rounded-full text-base font-medium bg-honey text-white hover:bg-honey-dark transition-colors">Join the Waitlist</button>
			</div>
		</div>
	</section>
</main>
<Footer />
