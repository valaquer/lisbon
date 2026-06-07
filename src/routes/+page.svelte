<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import PromiseCard from '$lib/components/PromiseCard.svelte';
	import ChatVignette from '$lib/components/ChatVignette.svelte';
	import TrustBar from '$lib/components/TrustBar.svelte';
	import RosterGrid from '$lib/components/RosterGrid.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { promiseCards } from '$lib/data/promise-cards';
	import { sophieMessages, averyMessages, hinaMessages } from '$lib/data/conversations';
	import { rosterGirls } from '$lib/data/roster';
</script>

<svelte:head>
	<title>Provoque AI</title>
</svelte:head>

<!-- Block 1: Nav -->
<Nav />

<!-- Block 2: Hero -->
<Hero />

<!-- Block 3: Promise Cards -->
{#each promiseCards as card, i}
	<PromiseCard
		heading={card.heading}
		body={card.body}
		image={card.image}
		rotation={card.rotation}
		reverse={i % 2 !== 0}
	/>
{/each}

<!-- Block 4: Sophie Chat Vignette -->
<ChatVignette
	mode="phone"
	name="Sophie"
	avatar="/sophie-afj-face.jpg"
	messages={sophieMessages}
	placeholder="Message Sophie..."
/>

<!-- Block 5: Trust Bar -->
<TrustBar />

<!-- Block 6: Avery Chat Vignette -->
<ChatVignette
	mode="phone"
	name="Avery"
	avatar="/avery-adx-face.jpg"
	messages={averyMessages}
	placeholder="Message Avery..."
/>

<!-- Block 7: Roster Grid -->
<RosterGrid girls={rosterGirls} />

<!-- Block 8: Hina Chat Vignette -->
<ChatVignette
	mode="desktop"
	name="Hina"
	avatar="/hina-agh-face.jpg"
	messages={hinaMessages}
	placeholder="Message Hina..."
/>

<!-- Block 9: Footer + CTA + Watermark -->
<Footer />
