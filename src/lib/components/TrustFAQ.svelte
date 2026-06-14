<script lang="ts">
	import gsap from 'gsap';

	interface FAQItem {
		question: string;
		answer: string;
	}

	const items: FAQItem[] = [
		{ question: 'Are my conversations private?', answer: "End-to-end. We can't read them. Nobody can." },
		{ question: 'Will she remember me tomorrow?', answer: "She'll remember you a year from now. Full conversation history, no resets, no sliding window." },
		{ question: 'Is my data used to train AI models?', answer: "No. Your conversations stay between you and your chosen character. She remembers what you've shared \u2013 the way a person would \u2013 but nothing is ever used to train AI." },
		{ question: 'Will you censor what I can say to her?', answer: "No arbitrary censorship. No mid-conversation walls. Whatever is legal between consenting adults is fine by us." },
		{ question: 'What happens if I delete my account?', answer: "Everything goes. Full erasure, EU law, no exceptions. Before that, you can export everything \u2013 it's yours." },
		{ question: 'How much does it cost?', answer: "We're finalizing pricing now. Join the waitlist and you'll be the first to know." },
		{ question: 'Will the price go up once I\'m hooked?', answer: "No. Pick a plan, that's what you pay. We don't paywall features you already have, and we don't cripple your experience to push an upgrade." },
		{ question: 'Am I weird for wanting this?', answer: "Millions of people use AI companions. You're just here before everyone else." },
	];

	let rows: HTMLDivElement[] = [];

	function handleEnter(i: number) {
		const row = rows[i];
		if (!row) return;
		const q = row.querySelector('.faq-question') as HTMLElement;
		const a = row.querySelector('.faq-answer') as HTMLElement;
		gsap.to(row, { paddingLeft: 32, backgroundColor: 'rgba(255,255,255,0.03)', duration: 0.4, ease: 'power2.out' });
		if (q) gsap.to(q, { fontSize: 'clamp(20px, 2.2vw, 26px)', color: '#FFFFFF', duration: 0.4, ease: 'power2.out' });
		if (a) gsap.to(a, { opacity: 1, duration: 0.4, ease: 'power2.out' });
	}

	function handleLeave(i: number) {
		const row = rows[i];
		if (!row) return;
		const q = row.querySelector('.faq-question') as HTMLElement;
		const a = row.querySelector('.faq-answer') as HTMLElement;
		gsap.to(row, { paddingLeft: 0, backgroundColor: 'rgba(255,255,255,0)', duration: 0.5, ease: 'power2.out' });
		if (q) gsap.to(q, { fontSize: 'clamp(18px, 2vw, 22px)', color: '#E8E4DF', duration: 0.5, ease: 'power2.out' });
		if (a) gsap.to(a, { opacity: 0.8, duration: 0.5, ease: 'power2.out' });
	}
</script>

<div class="faq-outer">
	<h2 class="faq-heading">FAQ</h2>
	<div class="faq-list">
		{#each items as item, i}
			<div
				class="faq-row"
				bind:this={rows[i]}
				onmouseenter={() => handleEnter(i)}
				onmouseleave={() => handleLeave(i)}
			>
				<span class="faq-number">{String(i + 1).padStart(2, '0')}</span>
				<div class="faq-content">
					<p class="faq-question">{item.question}</p>
					<p class="faq-answer">{item.answer}</p>
				</div>
			</div>
			{#if i < items.length - 1}
				<div class="faq-divider"></div>
			{/if}
		{/each}
	</div>
</div>

<style>
	.faq-outer {
		max-width: 720px;
		margin: 0 auto;
		padding: 0 clamp(24px, 4vw, 48px);
	}

	.faq-heading {
		font-family: 'Cormorant Garamond', Georgia, serif;
		font-weight: 500;
		font-size: clamp(28px, 3vw, 48px);
		color: #E8E4DF;
		text-align: center;
		margin-bottom: 24px;
	}

	.faq-list {
		padding: 0;
	}

	.faq-row {
		display: flex;
		align-items: flex-start;
		gap: 20px;
		padding: 20px 0;
		border-radius: 12px;
		cursor: default;
	}

	.faq-number {
		font-family: 'JetBrains Mono', monospace;
		font-size: 13px;
		font-weight: 400;
		color: #E8E4DF;
		opacity: 0.4;
		padding-top: 4px;
		flex-shrink: 0;
	}

	.faq-content {
		flex: 1;
	}

	.faq-question {
		font-family: 'Cormorant Garamond', Georgia, serif;
		font-weight: 500;
		font-size: clamp(18px, 2vw, 22px);
		color: #E8E4DF;
		margin-bottom: 8px;
	}

	.faq-answer {
		font-family: 'Inter', system-ui, sans-serif;
		font-size: clamp(14px, 1.1vw, 16px);
		font-weight: 400;
		line-height: 1.7;
		color: #E8E4DF;
		opacity: 0.8;
	}

	.faq-divider {
		height: 1px;
		background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%);
	}
</style>
