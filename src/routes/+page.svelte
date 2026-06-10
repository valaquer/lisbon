<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import PromiseCard from '$lib/components/PromiseCard.svelte';
	import TrustBar from '$lib/components/TrustBar.svelte';
	import RosterGrid from '$lib/components/RosterGrid.svelte';
	import SpotlightSection from '$lib/components/SpotlightSection.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { promiseCards } from '$lib/data/promise-cards';
	import { rosterGirls } from '$lib/data/roster';
	import { spotlightGirls } from '$lib/data/spotlight';

	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
	});
</script>

<svelte:head>
	<title>Provoque AI</title>
</svelte:head>

<!-- Block 2: Hero -->
<Hero />

<!-- Block 3: Promise Cards -->
<div style="max-width: 1120px; margin: 0 auto; padding: 48px clamp(24px, 4vw, 48px);">
	{#each promiseCards as card, i}
		<PromiseCard
			heading={card.heading}
			body={card.body}
			image={card.image}
			rotation={card.rotation}
			reverse={i % 2 !== 0}
		/>
	{/each}
</div>

<!-- Block 4: Trust Bar -->
<TrustBar />

<!-- Block 5: Chapter Header -->
<div style="text-align: center; padding: 80px clamp(24px, 4vw, 48px);">
	<h2 style="font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 500; font-size: clamp(36px, 4vw, 56px); color: #E8E4DF;">No Walls.<br class="md:hidden" /> No Apologies.</h2>
	<p style="font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 400; font-size: clamp(18px, 2vw, 24px); color: #E8E4DF; opacity: 0.8; margin-top: 16px; line-height: 1.7;">Different faces. Different stories.<br class="md:hidden" /> No content filters between you and any of them.</p>
</div>

<!-- Block 6: Roster Grid -->
<RosterGrid girls={rosterGirls} />

<!-- Blocks 7-9: Spotlight Sections -->
{#each spotlightGirls as girl}
	<SpotlightSection {girl} />
{/each}

<!-- Block 10: Footer + CTA + Watermark -->
<Footer />
