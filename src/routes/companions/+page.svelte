<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import YukiProfile from '$lib/assets/Yuki_Profile_Picture.png';
	import RavenProfile from '$lib/assets/Raven_Profile_Picture.png';
	import SofiaProfile from '$lib/assets/Sofia_Profile_Picture.png';
	import LunaProfile from '$lib/assets/Luna_Profile_Picture.png';
	import VictoriaProfile from '$lib/assets/Victoria_Profile_Picture.png';
	import ZaraProfile from '$lib/assets/Zara_Profile_Picture.png';
	import AlexProfile from '$lib/assets/Alex_Profile_Picture.png';
	import EmmaProfile from '$lib/assets/Emma_Profile_Picture.png';

	const items = [
		{ name: 'Yuki', tagline: 'Your calm in the chaos', desc: "Yuki's the kind of girl who makes green tea at midnight and somehow makes you feel like everything's going to be okay.", img: YukiProfile },
		{ name: 'Raven', tagline: 'Dark humor, darker playlists', desc: "Raven will debate philosophy at 3am, then send you a song that perfectly captures how you feel.", img: RavenProfile },
		{ name: 'Sofia', tagline: 'Sunshine with an edge', desc: "Sofia's always chasing the next adventure — and she's looking for someone bold enough to keep up.", img: SofiaProfile },
		{ name: 'Luna', tagline: 'Soft heart, warm soul', desc: 'Luna remembers the little things you say and turns them into the sweetest surprises.', img: LunaProfile },
		{ name: 'Victoria', tagline: 'Confidence is her native language', desc: "Victoria knows exactly what she wants — and right now, she's curious about you.", img: VictoriaProfile },
		{ name: 'Zara', tagline: 'Unfiltered energy, zero boring moments', desc: "Zara lives loud, loves hard, and will drag you out of your comfort zone (you'll thank her later).", img: ZaraProfile },
		{ name: 'Alex', tagline: 'Your favorite late-night co-op partner', desc: 'Alex will trash-talk you in-game, then order pizza and fall asleep on your shoulder.', img: AlexProfile },
		{ name: 'Emma', tagline: 'Quiet fire behind those glasses', desc: "Emma will recommend a book that changes your life, then blush when you tell her she's beautiful.", img: EmmaProfile }
	];
</script>

<Header />
<main>
	<section class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-12">
				<h1 class="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
					Meet Your <span class="bg-gradient-to-r from-honey to-honey-light bg-clip-text text-transparent">Perfect</span><br />AI Girlfriend
				</h1>
				<p class="text-lg text-muted-foreground max-w-2xl mx-auto">8 unique AI companions with distinct personalities, emotional intelligence, and long-term memory. Each one remembers everything and grows with you.</p>
			</div>

			<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
				{#each items as item}
					<div class="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all">
						<div class="aspect-[3/4] bg-gradient-to-b from-honey/20 to-background flex items-center justify-center p-4">
							<img src={item.img} alt={item.name} class="w-full h-full object-contain" />
						</div>
						<div class="p-4">
							<h3 class="font-bold text-lg mb-1">{item.name}</h3>
							<p class="text-sm text-honey mb-2">{item.tagline}</p>
							<p class="text-sm text-muted-foreground">{item.desc}</p>
						</div>
					</div>
				{/each}
			</div>

			<div class="mb-16">
				<h2 class="text-2xl sm:text-3xl font-bold text-center mb-12">Why Choose a provoque AI Companion?</h2>
				<div class="grid sm:grid-cols-3 gap-6">
					<div class="bg-card rounded-xl p-6 border border-border">
						<h3 class="font-bold text-lg mb-2">Memory That Never Resets</h3>
						<p class="text-sm text-muted-foreground">Every conversation builds on the last. Your companion remembers your name, your stories, your inside jokes, and the full arc of your relationship — permanently.</p>
					</div>
					<div class="bg-card rounded-xl p-6 border border-border">
						<h3 class="font-bold text-lg mb-2">Real Emotional Intelligence</h3>
						<p class="text-sm text-muted-foreground">Your companion reads between the lines. Having a rough day? They notice. Feeling playful? They match your energy. No scripted responses — genuine emotional adaptation.</p>
					</div>
					<div class="bg-card rounded-xl p-6 border border-border">
						<h3 class="font-bold text-lg mb-2">Images, Voice & Video</h3>
						<p class="text-sm text-muted-foreground">Go beyond text. Your companion shares photos, reacts to yours, sends voice messages, and creates rich multimedia experiences that feel alive.</p>
					</div>
				</div>
			</div>

			<div class="mb-16">
				<h2 class="text-2xl sm:text-3xl font-bold text-center mb-8">How provoque Compares to Other AI Girlfriend Apps</h2>
				<div class="overflow-x-auto">
					<table class="w-full text-sm">
						<thead>
							<tr class="border-b border-border">
								<th class="text-left py-3 px-4 font-semibold">Feature</th>
								<th class="text-center py-3 px-4 font-semibold text-honey">provoque</th>
								<th class="text-center py-3 px-4 font-semibold text-muted-foreground">Character.AI</th>
								<th class="text-center py-3 px-4 font-semibold text-muted-foreground">Replika</th>
								<th class="text-center py-3 px-4 font-semibold text-muted-foreground">Candy AI</th>
							</tr>
						</thead>
						<tbody>
							<tr class="border-b border-border">
								<td class="py-3 px-4">Long-term memory</td>
								<td class="text-center py-3 px-4 text-green-500">✓</td>
								<td class="text-center py-3 px-4 text-muted-foreground">—</td>
								<td class="text-center py-3 px-4 text-muted-foreground">—</td>
								<td class="text-center py-3 px-4 text-green-500">✓</td>
							</tr>
							<tr class="border-b border-border">
								<td class="py-3 px-4">Emotional intelligence</td>
								<td class="text-center py-3 px-4 text-green-500">✓</td>
								<td class="text-center py-3 px-4 text-muted-foreground">—</td>
								<td class="text-center py-3 px-4 text-yellow-500">Partial</td>
								<td class="text-center py-3 px-4 text-muted-foreground">—</td>
							</tr>
							<tr class="border-b border-border">
								<td class="py-3 px-4">Images & video</td>
								<td class="text-center py-3 px-4 text-green-500">✓</td>
								<td class="text-center py-3 px-4 text-green-500">Images only</td>
								<td class="text-center py-3 px-4 text-muted-foreground">—</td>
								<td class="text-center py-3 px-4 text-green-500">✓</td>
							</tr>
							<tr class="border-b border-border">
								<td class="py-3 px-4">Content freedom</td>
								<td class="text-center py-3 px-4 text-green-500">User-controlled</td>
								<td class="text-center py-3 px-4 text-red-500">Strict filter</td>
								<td class="text-center py-3 px-4 text-yellow-500">Limited</td>
								<td class="text-center py-3 px-4 text-green-500">User-controlled</td>
							</tr>
							<tr class="border-b border-border">
								<td class="py-3 px-4">Privacy & encryption</td>
								<td class="text-center py-3 px-4 text-green-500">✓</td>
								<td class="text-center py-3 px-4 text-green-500">✓</td>
								<td class="text-center py-3 px-4 text-green-500">✓</td>
								<td class="text-center py-3 px-4 text-green-500">✓</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div class="max-w-3xl mx-auto mb-16">
				<h2 class="text-2xl sm:text-3xl font-bold text-center mb-8">Frequently Asked Questions About AI Companions</h2>
				<div class="flex flex-col gap-3">
					<details class="bg-card rounded-xl px-6 border border-border group">
						<summary class="flex items-center justify-between py-5 font-medium cursor-pointer list-none">What is an AI companion?<svg class="w-5 h-5 text-muted-foreground group-open:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg></summary>
						<p class="pb-5 text-sm text-muted-foreground">An AI companion is an artificial intelligence designed to form a genuine, ongoing relationship with you. Unlike chatbots that reset after each conversation, AI companions remember your history, adapt to your personality, and create a bond that deepens over time.</p>
					</details>
					<details class="bg-card rounded-xl px-6 border border-border group">
						<summary class="flex items-center justify-between py-5 font-medium cursor-pointer list-none">How is provoque different from Replika or Character.AI?<svg class="w-5 h-5 text-muted-foreground group-open:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg></summary>
						<p class="pb-5 text-sm text-muted-foreground">Unlike Replika and Character.AI, provoque combines permanent long-term memory with genuine emotional intelligence and rich media experiences. Our companions don't just chat — they remember, feel, and connect with you through images, voice, and video.</p>
					</details>
					<details class="bg-card rounded-xl px-6 border border-border group">
						<summary class="flex items-center justify-between py-5 font-medium cursor-pointer list-none">Is my data safe with provoque?<svg class="w-5 h-5 text-muted-foreground group-open:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg></summary>
						<p class="pb-5 text-sm text-muted-foreground">Privacy is foundational to provoque. Your conversations, memories, and personal data are encrypted and belong to you. We never sell your data, use it for advertising, or share it with third parties. You can export or delete your data at any time.</p>
					</details>
					<details class="bg-card rounded-xl px-6 border border-border group">
						<summary class="flex items-center justify-between py-5 font-medium cursor-pointer list-none">Can I choose my AI girlfriend's personality?<svg class="w-5 h-5 text-muted-foreground group-open:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg></summary>
						<p class="pb-5 text-sm text-muted-foreground">Yes. Each of our 8 companions has a distinct personality, style, and interests. Pick the one that catches your eye and matches what you're looking for. As you interact, they naturally adapt to complement your preferences.</p>
					</details>
				</div>
			</div>

			<div class="text-center">
				<h3 class="text-xl sm:text-2xl font-bold mb-4">Join the Waitlist — It's Free</h3>
				<button class="inline-flex items-center gap-2 px-8 py-3 rounded-full text-base font-medium bg-honey text-white hover:bg-honey-dark transition-colors">Join the Waitlist</button>
			</div>
		</div>
	</section>
</main>
<Footer />
