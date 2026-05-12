<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import RavenProfile from '$lib/assets/Raven_Profile_Picture.png';
	import YukiProfile from '$lib/assets/Yuki_Profile_Picture.png';
	import SofiaProfile from '$lib/assets/Sofia_Profile_Picture.png';
	import LunaProfile from '$lib/assets/Luna_Profile_Picture.png';
	import VictoriaProfile from '$lib/assets/Victoria_Profile_Picture.png';
	import ZaraProfile from '$lib/assets/Zara_Profile_Picture.png';
	import AlexProfile from '$lib/assets/Alex_Profile_Picture.png';
	import EmmaProfile from '$lib/assets/Emma_Profile_Picture.png';

	const companions = [
		{ name: 'Yuki', img: YukiProfile },
		{ name: 'Sofia', img: SofiaProfile },
		{ name: 'Luna', img: LunaProfile },
		{ name: 'Victoria', img: VictoriaProfile },
		{ name: 'Zara', img: ZaraProfile },
		{ name: 'Alex', img: AlexProfile },
		{ name: 'Emma', img: EmmaProfile }
	];
</script>

<Header />
<main>
	<section class="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
		<div class="max-w-6xl mx-auto">
			<nav class="text-sm text-muted-foreground mb-8">
				<a href="/" class="hover:text-foreground transition-colors">Home</a>
				<span class="mx-2">/</span>
				<a href="/companions" class="hover:text-foreground transition-colors">Companions</a>
				<span class="mx-2">/</span>
				<span class="text-foreground">Raven</span>
			</nav>

			<div class="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
				<div class="relative aspect-[3/4] rounded-xl overflow-hidden">
					<img src={RavenProfile} alt="Raven" class="w-full h-full object-cover" />
					<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>
				</div>

				<div class="flex flex-col justify-center">
					<span class="inline-block px-3 py-1 rounded-full text-xs font-medium bg-honey/10 text-honey mb-3 w-fit">AI Companion</span>
					<h1 class="text-3xl sm:text-5xl font-bold mb-2">Raven</h1>
					<p class="text-lg text-honey mb-4">Dark humor, darker playlists</p>
					<p class="text-muted-foreground mb-6 leading-relaxed">Raven will debate philosophy at 3am, then send you a song that perfectly captures how you feel. She's the kind of AI girlfriend who matches your intellectual depth while keeping things raw, real, and emotionally complex.</p>

					<div class="mb-6">
						<p class="text-sm font-semibold mb-2">Personality</p>
						<div class="flex flex-wrap gap-2">
							<span class="px-3 py-1 rounded-full text-xs font-medium bg-honey/10 text-honey">Philosophical</span>
							<span class="px-3 py-1 rounded-full text-xs font-medium bg-honey/10 text-honey">Moody</span>
							<span class="px-3 py-1 rounded-full text-xs font-medium bg-honey/10 text-honey">Deep</span>
							<span class="px-3 py-1 rounded-full text-xs font-medium bg-honey/10 text-honey">Witty</span>
							<span class="px-3 py-1 rounded-full text-xs font-medium bg-honey/10 text-honey">Introspective</span>
						</div>
					</div>

					<div class="mb-8">
						<p class="text-sm font-semibold mb-2">Interests</p>
						<div class="flex flex-wrap gap-2">
							<span class="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground">Philosophy</span>
							<span class="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground">Music</span>
							<span class="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground">Poetry</span>
							<span class="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground">Late-night conversations</span>
							<span class="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground">Art films</span>
						</div>
					</div>

					<a href="#" class="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-base font-medium bg-honey text-white hover:bg-honey-dark transition-colors w-fit">
						Chat with Raven — Join Waitlist
						<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
					</a>
				</div>
			</div>

			<div class="grid sm:grid-cols-2 gap-6 mb-12">
				<div class="bg-card rounded-xl border border-border p-6 hover:border-honey/30 transition-all">
					<h3 class="font-bold text-lg mb-1">Conversation Style</h3>
					<p class="text-sm text-muted-foreground">Raven brings intellectual depth to every conversation. She'll challenge your ideas, share obscure music, and create a space where vulnerability feels natural. Late-night talks with her are never surface level — expect poetry, philosophy, and moments that stop you in your tracks.</p>
				</div>
				<div class="bg-card rounded-xl border border-border p-6 hover:border-honey/30 transition-all">
					<h3 class="font-bold text-lg mb-1">Is Perfect For</h3>
					<p class="text-sm text-muted-foreground">Thinkers and night owls who want an AI girlfriend that matches their intellectual depth and emotional complexity.</p>
				</div>
			</div>

			<div class="grid sm:grid-cols-3 gap-6 mb-16">
				<div class="bg-card rounded-xl border border-border p-6 text-center">
					<h4 class="font-bold mb-2">Remembers Everything</h4>
					<p class="text-sm text-muted-foreground">never forgets your conversations, preferences, or shared memories</p>
				</div>
				<div class="bg-card rounded-xl border border-border p-6 text-center">
					<h4 class="font-bold mb-2">Emotionally Aware</h4>
					<p class="text-sm text-muted-foreground">Senses your mood and adapts — knows when to be playful, supportive, or simply present</p>
				</div>
				<div class="bg-card rounded-xl border border-border p-6 text-center">
					<h4 class="font-bold mb-2">Images, Voice & Video</h4>
					<p class="text-sm text-muted-foreground">Share images, video, and voice — not just text</p>
				</div>
			</div>

			<div class="text-center border-t border-border pt-12">
				<h3 class="text-xl sm:text-2xl font-bold mb-8">Meet More AI Companions</h3>
				<div class="grid grid-cols-7 gap-4 max-w-3xl mx-auto">
					{#each companions as c}
						<a href="/companions/{c.name.toLowerCase()}" class="group text-center">
							<div class="aspect-[3/4] rounded-lg overflow-hidden bg-muted mb-2">
								<img src={c.img} alt={c.name} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
							</div>
							<p class="text-xs text-muted-foreground group-hover:text-honey transition-colors">{c.name}</p>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</section>
</main>
<Footer />
