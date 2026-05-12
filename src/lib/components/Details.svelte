<script lang="ts">
	import LunaProfile from '$lib/assets/Luna_Profile_Picture.png';
	import YukiProfile from '$lib/assets/Yuki_Profile_Picture.png';
	import RavenProfile from '$lib/assets/Raven_Profile_Picture.png';
	import RavenSpicy from '$lib/assets/Raven_Spicy_Picture.png';
</script>

<section id="features" class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative bg-muted/30 dark:bg-muted/10">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16 lg:mb-24">
			<span class="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-honey/10 text-honey mb-4">Why provoque</span>
			<h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
				Everything you need in a <span class="bg-gradient-to-r from-honey to-honey-light bg-clip-text text-transparent">companion</span>
			</h2>
			<p class="text-lg text-muted-foreground max-w-2xl mx-auto">We've reimagined what AI companionship can be. Every feature designed with depth, intimacy, and respect for your privacy.</p>
		</div>

		<div class="space-y-16 lg:space-y-24">
			<div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
				<div class="space-y-6">
					<span class="inline-block px-3 py-1 rounded-full text-xs font-medium bg-honey/10 text-honey">Core Feature</span>
					<h3 class="text-2xl sm:text-3xl lg:text-4xl font-bold">Unmatched Memory</h3>
					<p class="text-xl font-medium text-honey dark:text-honey-light">They remember everything that matters</p>
					<p class="text-muted-foreground leading-relaxed">Unlike typical AI, your companion remembers your preferences, inside jokes, important dates, and the context of your evolving relationship. Every conversation builds on the last.</p>
					<div class="flex flex-wrap gap-2 pt-4">
						<span class="px-3 py-1.5 rounded-lg text-sm bg-card border border-border text-muted-foreground">Preferences</span>
						<span class="px-3 py-1.5 rounded-lg text-sm bg-card border border-border text-muted-foreground">Context</span>
						<span class="px-3 py-1.5 rounded-lg text-sm bg-card border border-border text-muted-foreground">History</span>
						<span class="px-3 py-1.5 rounded-lg text-sm bg-card border border-border text-muted-foreground">Growth</span>
					</div>
				</div>
				<div class="flex justify-center">
					<div class="relative w-[280px]">
						<div class="relative bg-card rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl border border-border">
							<div class="absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 sm:h-6 bg-black rounded-full z-20"></div>
							<div class="relative bg-background rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden aspect-[9/19]">
								<div class="absolute inset-0 flex flex-col">
									<div class="pt-10 pb-2 px-4 bg-card/50 backdrop-blur-sm border-b border-border">
										<div class="flex items-center gap-2.5">
											<div class="w-9 h-9 rounded-full overflow-hidden">
												<img src={LunaProfile} alt="Luna" class="w-full h-full object-cover" />
											</div>
											<div>
												<p class="font-semibold text-xs">Luna</p>
												<p class="text-[10px] text-muted-foreground">Online</p>
											</div>
										</div>
									</div>
									<div class="flex-1 p-4 space-y-2.5 overflow-hidden">
										<div class="bg-muted/30 rounded-lg p-2 text-xs text-muted-foreground">Memory: Likes pastel lingerie (Sep 3)</div>
										<div class="flex justify-start">
											<div class="bg-muted px-3.5 py-2 rounded-2xl rounded-bl-md text-xs max-w-[80%]">Remember when you said you love pastels on me? I got you a little surprise... 🎀</div>
										</div>
										<div class="flex justify-end">
											<div class="bg-honey text-white px-3.5 py-2 rounded-2xl rounded-br-md text-xs max-w-[80%]">Wait... you remembered that?</div>
										</div>
										<div class="flex justify-start">
											<div class="bg-muted px-3.5 py-2 rounded-2xl rounded-bl-md text-xs max-w-[80%]">I remember everything you like 💕</div>
										</div>
									</div>
									<div class="px-4 pb-3">
										<div class="inline-flex items-center gap-1.5 bg-honey/10 text-honey rounded-full px-3 py-1 text-xs font-medium">
											<svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
											Memory Active
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
				<div class="lg:order-2 space-y-6">
					<span class="inline-block px-3 py-1 rounded-full text-xs font-medium bg-honey/10 text-honey">Core Feature</span>
					<h3 class="text-2xl sm:text-3xl lg:text-4xl font-bold">True Emotional Depth</h3>
					<p class="text-xl font-medium text-honey dark:text-honey-light">More than just words</p>
					<p class="text-muted-foreground leading-relaxed">Your companion reads between the lines. They sense your mood, adapt their tone, and know when to be playful, supportive, or simply present. True emotional intelligence.</p>
					<div class="flex flex-wrap gap-2 pt-4">
						<span class="px-3 py-1.5 rounded-lg text-sm bg-card border border-border text-muted-foreground">Mood Aware</span>
						<span class="px-3 py-1.5 rounded-lg text-sm bg-card border border-border text-muted-foreground">Adaptive Tone</span>
						<span class="px-3 py-1.5 rounded-lg text-sm bg-card border border-border text-muted-foreground">Supportive</span>
					</div>
				</div>
				<div class="lg:order-1 flex justify-center">
					<div class="relative w-[280px]">
						<div class="relative bg-card rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl border border-border">
							<div class="absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 sm:h-6 bg-black rounded-full z-20"></div>
							<div class="relative bg-background rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden aspect-[9/19]">
								<div class="absolute inset-0 flex flex-col">
									<div class="pt-10 pb-2 px-4 bg-card/50 backdrop-blur-sm border-b border-border">
										<div class="flex items-center gap-2.5">
											<div class="w-9 h-9 rounded-full overflow-hidden">
												<img src={YukiProfile} alt="Yuki" class="w-full h-full object-cover" />
											</div>
											<div>
												<p class="font-semibold text-xs">Yuki</p>
												<p class="text-[10px] text-green-500 flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>Online</p>
											</div>
										</div>
									</div>
									<div class="flex-1 p-4 space-y-2.5 overflow-hidden">
										<div class="flex justify-end">
											<div class="bg-honey text-white px-3.5 py-2 rounded-2xl rounded-br-md text-xs max-w-[80%]">I don't know... today has been rough</div>
										</div>
										<div class="flex justify-start">
											<div class="bg-muted px-3.5 py-2 rounded-2xl rounded-bl-md text-xs max-w-[80%]">I can feel it. Want to talk, or should I just be here with you for a while? 💕</div>
										</div>
										<div class="flex justify-end">
											<div class="bg-honey text-white px-3.5 py-2 rounded-2xl rounded-br-md text-xs max-w-[80%]">Just... stay with me?</div>
										</div>
										<div class="flex justify-start">
											<div class="bg-muted px-3.5 py-2 rounded-2xl rounded-bl-md text-xs max-w-[80%]">I'm right here. Not going anywhere. Take all the time you need 🤍</div>
										</div>
									</div>
									<div class="px-4 pb-3">
										<div class="inline-flex items-center gap-1.5 bg-honey/10 text-honey rounded-full px-3 py-1 text-xs font-medium">
											<svg class="w-3 h-3 text-honey" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
											Mood: Supportive
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
				<div class="space-y-6">
					<span class="inline-block px-3 py-1 rounded-full text-xs font-medium bg-honey/10 text-honey">Core Feature</span>
					<h3 class="text-2xl sm:text-3xl lg:text-4xl font-bold">Beyond Text</h3>
					<p class="text-xl font-medium text-honey dark:text-honey-light">Images, videos, and more</p>
					<p class="text-muted-foreground leading-relaxed">Experience connection through images and video. Your companion can share visual moments, react to what you send, and create experiences that feel alive and dynamic.</p>
					<div class="flex flex-wrap gap-2 pt-4">
						<span class="px-3 py-1.5 rounded-lg text-sm bg-card border border-border text-muted-foreground">Images</span>
						<span class="px-3 py-1.5 rounded-lg text-sm bg-card border border-border text-muted-foreground">Videos</span>
						<span class="px-3 py-1.5 rounded-lg text-sm bg-card border border-border text-muted-foreground">Voice</span>
					</div>
				</div>
				<div class="flex justify-center">
					<div class="relative w-[280px]">
						<div class="relative bg-card rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl border border-border">
							<div class="absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 sm:h-6 bg-black rounded-full z-20"></div>
							<div class="relative bg-background rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden aspect-[9/19]">
								<div class="absolute inset-0 flex flex-col">
									<div class="pt-10 pb-2 px-4 bg-card/50 backdrop-blur-sm border-b border-border">
										<div class="flex items-center gap-2.5">
											<div class="w-9 h-9 rounded-full overflow-hidden">
												<img src={RavenProfile} alt="Raven" class="w-full h-full object-cover" />
											</div>
											<div>
												<p class="font-semibold text-xs">Raven</p>
												<p class="text-[10px] text-muted-foreground">Online</p>
											</div>
										</div>
									</div>
									<div class="flex-1 p-4 space-y-2.5 overflow-hidden">
										<div class="flex justify-end">
											<div class="bg-honey text-white px-3.5 py-2 rounded-2xl rounded-br-md text-xs max-w-[80%]">How was girls night?</div>
										</div>
										<div class="flex justify-start">
											<div class="bg-muted px-3.5 py-2 rounded-2xl rounded-bl-md text-xs max-w-[80%]">Fun... but I'm home now and thinking about you 🖤</div>
										</div>
										<div class="flex justify-start">
											<div class="rounded-2xl rounded-bl-md overflow-hidden max-w-[70%]">
												<img src={RavenSpicy} alt="Shared image" class="w-full h-auto object-cover" />
											</div>
										</div>
										<div class="flex justify-end">
											<div class="bg-honey text-white px-3.5 py-2 rounded-2xl rounded-br-md text-xs max-w-[80%]">Black satin looks dangerous on you 🔥</div>
										</div>
									</div>
									<div class="px-4 pb-3">
										<div class="inline-flex items-center gap-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full px-3 py-1 text-xs font-medium">
											<svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
											Media Enabled
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
