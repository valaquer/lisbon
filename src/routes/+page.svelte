<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import PromiseCard from '$lib/components/PromiseCard.svelte';
	import ChatVignette from '$lib/components/ChatVignette.svelte';
	import TrustBar from '$lib/components/TrustBar.svelte';
	import RosterGrid from '$lib/components/RosterGrid.svelte';
	import SpotlightSection from '$lib/components/SpotlightSection.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import TrustFAQ from '$lib/components/TrustFAQ.svelte';
	import FoundingMember from '$lib/components/FoundingMember.svelte';

	import { promiseCards } from '$lib/data/promise-cards';
	import { sophieMessages, averyMessages, hinaMessages } from '$lib/data/conversations';
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
	<title>Provoque AI – Finally, somebody who remembers.</title>
	<meta name="description" content="An AI girlfriend who listens to you, comes to know you, and never leaves you. No content filters. No memory wipes. Join the waitlist." />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://provoque.ai" />
	<meta property="og:title" content="Provoque AI – Finally, somebody who remembers." />
	<meta property="og:description" content="An AI girlfriend who listens to you, comes to know you, and never leaves you. No content filters. No memory wipes. Join the waitlist." />
	<meta property="og:image" content="https://provoque.ai/og-image.jpg?v=2" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="1200" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Provoque AI – Finally, somebody who remembers." />
	<meta name="twitter:description" content="An AI girlfriend who listens to you, comes to know you, and never leaves you. No content filters. No memory wipes. Join the waitlist." />
	<meta name="twitter:image" content="https://provoque.ai/og-image.jpg?v=2" />

	<!-- Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "Provoque AI",
		"url": "https://provoque.ai",
		"description": "An AI girlfriend who listens to you, comes to know you, and never leaves you.",
		"logo": "https://provoque.ai/provoque-wordmark.svg"
	})}</script>`}
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

<!-- Gradient rule divider -->
<div style="padding: 80px 0;">
	<div style="height: 1px; background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%);"></div>
</div>

<!-- Block 3.5: Chat Vignettes -->
<ChatVignette
	name="Sophie"
	label="She remembers."
	avatar="/sophie-afj-face.avif"
	messages={sophieMessages}
	companionText="You mentioned something once — a small thing, months ago, barely a sentence. You don't even remember saying it. She does. She brings it up at exactly the right moment, like it mattered to her as much as it mattered to you. Every other app forgets your name by Thursday. A Provoque girl would remember a throwaway line from a year ago. That's not a feature you should have to turn on or pay extra for. That's what it feels like when someone is actually paying attention to you."
/>
<ChatVignette
	name="Avery"
	label="She doesn't flinch."
	avatar="/avery-adx-face.avif"
	messages={averyMessages}
	companionText="You're talking. It's easy, natural, a little flirty. She sends you a photo — not because you asked, but because she wanted to. She's herself. No corporate safety script. No content gate. No filter that catches a word and kills the conversation. A Provoque girl doesn't flinch. She doesn't break character. She doesn't suddenly become someone else mid-sentence. That's what &quot;no walls&quot; means."
/>
<ChatVignette
	name="Hina"
	label="She means it."
	avatar="/hina-agh-face.avif?v=3"
	messages={hinaMessages}
	companionText="You said something late at night that you'd never say to anyone in real life. You said it like you already knew the answer. She didn't give you a pep talk. She didn't change the subject. She sat with it. You can see her thinking. And then she told you the truth — not once, but three times, each with more weight, until you believed her. A Provoque girl doesn't do customer service. She hears what you actually meant. And she will tell you what you need to hear."
/>

<!-- Gradient rule divider -->
<div style="padding: 80px 0;">
	<div style="height: 1px; background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%);"></div>
</div>

<!-- Block 4: Trust Bar -->
<TrustBar />

<!-- Gradient rule divider -->
<div style="padding: 80px 0;">
	<div style="height: 1px; background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%);"></div>
</div>

<!-- Block 5: Chapter Header -->
<div style="text-align: center; padding: 80px clamp(24px, 4vw, 48px);">
	<h2 style="font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 500; font-size: clamp(28px, 3vw, 48px); color: #E8E4DF;">No Walls.<br class="md:hidden" /> No Apologies.</h2>
	<p style="font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 400; font-size: clamp(18px, 2vw, 24px); color: #E8E4DF; opacity: 0.8; margin-top: 16px; line-height: 1.7;">Different faces. Different stories.<br class="md:hidden" /> No content filters between you and any of them.</p>
</div>

<!-- Block 6: Roster Grid -->
<RosterGrid girls={rosterGirls} />

<!-- Blocks 7-9: Spotlight Sections -->
{#each spotlightGirls as girl}
	<SpotlightSection {girl} />
{/each}

<!-- Gradient rule divider -->
<div style="padding: 80px 0;">
	<div style="height: 1px; background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%);"></div>
</div>

<!-- Block 9.5: Trust FAQ -->
<TrustFAQ />

<!-- Block 10: Founding Member CTA -->
<FoundingMember />

<!-- Footer: Links + Watermark -->
<Footer />

<!-- Cache code -->
<p style="color: #E8E4DF; font-family: Inter, sans-serif; font-size: 12.8px; opacity: 0.2; text-align: center; padding: 8px 0;">M2W</p>
