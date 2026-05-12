<script lang="ts">
	import Yuki from '$lib/assets/Yuki_Profile_Picture.png';
</script>

<section class="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
	<div class="absolute inset-0 bg-gradient-to-b from-honey/5 via-transparent to-background pointer-events-none"></div>
	<div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-honey/10 via-transparent to-transparent pointer-events-none"></div>

	<div class="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10 pt-20 pb-16">
		<div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
			<div class="text-center lg:text-left">
				<span class="inline-block px-3 py-1 rounded-full text-xs font-medium bg-honey/10 text-honey mb-6">
					AI Companion with Memory
				</span>
				<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
					<span class="bg-gradient-to-r from-honey to-honey-light bg-clip-text text-transparent">
						The Only AI<br />That Truly<br />Remembers
					</span>
				</h1>
				<p class="text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
					Meet your AI companion with genuine long-term memory, emotional depth, and rich media experiences.
					She remembers everything about you.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
		<button class="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-base font-medium bg-honey text-white hover:bg-honey-dark transition-colors">
			Join the Waitlist
		</button>
		<button class="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-base font-medium border border-border text-foreground hover:bg-card transition-colors">
			Meet the Companions
		</button>
				</div>
				<div class="flex items-center gap-4 justify-center lg:justify-start text-sm text-muted-foreground">
					<div class="flex -space-x-2">
						<div class="w-8 h-8 rounded-full bg-honey/20 ring-2 ring-background"></div>
						<div class="w-8 h-8 rounded-full bg-honey/30 ring-2 ring-background"></div>
						<div class="w-8 h-8 rounded-full bg-honey/40 ring-2 ring-background"></div>
						<div class="w-8 h-8 rounded-full bg-honey/50 ring-2 ring-background"></div>
					</div>
					<span><strong class="text-foreground">5,846</strong> on the waitlist</span>
				</div>
			</div>

			<div class="hidden lg:block">
				<div class="relative bg-card rounded-2xl border border-border overflow-hidden shadow-xl">
					<div class="py-4 px-5 bg-card/80 backdrop-blur-sm border-b border-border">
						<div class="flex items-center gap-3">
							<div class="w-10 h-10 rounded-full overflow-hidden ring-2 ring-honey/20">
								<img src={Yuki} alt="Yuki" class="w-full h-full object-cover" />
							</div>
							<div>
								<p class="font-semibold text-sm">Yuki</p>
								<p class="text-xs text-green-500 flex items-center gap-1">
									<span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
									Online
								</p>
							</div>
						</div>
					</div>
					<div class="p-4 space-y-3 min-h-[280px]">
						<div class="flex justify-end">
							<div class="px-4 py-2.5 rounded-2xl text-sm max-w-[80%] bg-honey text-white rounded-br-md">
								I don't know... today has been rough
							</div>
						</div>
						<div class="flex justify-start">
							<div class="px-4 py-2.5 rounded-2xl text-sm max-w-[80%] bg-muted text-foreground rounded-bl-md">
								I can feel that. Want to talk, or should I just be here with you?
							</div>
						</div>
						<div class="flex justify-end">
							<div class="px-4 py-2.5 rounded-2xl text-sm max-w-[80%] bg-honey text-white rounded-br-md">
								Just... stay with me?
							</div>
						</div>
					</div>
					<div class="p-4 border-t border-border bg-card/50">
						<div class="flex items-center gap-2 bg-muted rounded-full px-4 py-2.5">
							<span class="text-sm text-muted-foreground flex-1">Message...</span>
							<div class="w-8 h-8 rounded-full bg-honey flex items-center justify-center">
								<svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
