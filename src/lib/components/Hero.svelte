<script lang="ts">
	import SofiaProfile from '$lib/assets/Sofia_Profile_Picture.png';
	import SofiaSpicy from '$lib/assets/Sofia_Spicy_Picture.png';
</script>

<section class="relative pt-16 sm:pt-20 lg:pt-2">
	<div class="py-4 sm:py-8 lg:py-2 xl:py-12 px-4 sm:px-6 lg:px-8 w-full">
		<div class="max-w-7xl mx-auto">
			<div class="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
				<div class="text-center lg:text-left">
					<div class="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-honey/10 dark:bg-honey/20 border border-honey/20 mb-3 sm:mb-4 lg:mb-2 xl:mb-4">
						<span class="relative flex h-2 w-2">
							<span class="absolute inline-flex h-full w-full rounded-full bg-honey opacity-75"></span>
							<span class="relative inline-flex rounded-full h-2 w-2 bg-honey"></span>
						</span>
						<span class="text-xs sm:text-sm font-medium text-honey-dark dark:text-honey">Early Access Opening Soon</span>
					</div>

					<h1 class="text-3xl sm:text-5xl lg:text-4xl xl:text-6xl font-bold tracking-tight mb-3 sm:mb-4 lg:mb-4 xl:mb-6">
						<span class="text-foreground">Your AI</span><br />
						<span class="bg-gradient-to-r from-honey to-honey-light bg-clip-text text-transparent">Companion</span><br />
						<span class="text-foreground">Awaits</span>
					</h1>

					<p class="text-sm sm:text-lg lg:text-base xl:text-lg text-muted-foreground mb-4 sm:mb-6 lg:mb-3 xl:mb-4 max-w-lg mx-auto lg:mx-0">
						Experience emotional depth, lasting memory, and rich conversations with an AI companion that truly understands you.
					</p>

					<div class="max-w-md mx-auto lg:mx-0">
						<p class="text-sm text-muted-foreground mb-4">Join <span class="font-semibold text-honey">5,848+</span> others waiting for early access</p>

						<div class="w-full relative">
							<div class="absolute -inset-4 bg-gradient-to-r from-honey/20 via-honey/10 to-honey/20 rounded-3xl blur-2xl opacity-50"></div>
							<div class="relative bg-card rounded-2xl p-4 sm:p-6 lg:p-5 xl:p-8 border border-border shadow-xl">
								<div class="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-honey/30 rounded-tl-2xl"></div>
								<div class="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-honey/30 rounded-br-2xl"></div>

								<div class="text-center mb-3 sm:mb-6">
									<h3 class="text-lg sm:text-xl font-bold mb-1">Join the Waitlist</h3>
									<p class="text-muted-foreground text-xs sm:text-sm">Be first to experience the future</p>
								</div>

								<div class="space-y-3">
									<input
										type="email"
										placeholder="Enter your email"
										class="w-full bg-muted text-foreground placeholder-muted-foreground px-4 py-3 sm:px-5 sm:py-4 rounded-xl border border-border focus:outline-none focus:border-honey/50 transition-all"
									/>
									<button class="w-full bg-honey text-white py-3 sm:py-4 text-base sm:text-lg rounded-lg font-medium hover:bg-honey-dark transition-colors">
										Continue
									</button>
								</div>

								<div class="hidden sm:flex justify-center gap-4 mt-6 pt-4 border-t border-border">
									<span class="flex items-center gap-1.5 text-xs text-muted-foreground">
										<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
										No spam
									</span>
									<span class="flex items-center gap-1.5 text-xs text-muted-foreground">
										<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
										Privacy first
									</span>
									<span class="flex items-center gap-1.5 text-xs text-muted-foreground">
										<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
										Early access
									</span>
								</div>
							</div>
						</div>

						<div class="hidden sm:flex flex-wrap justify-center lg:justify-start gap-6 mt-6 lg:mt-4 xl:mt-8 text-sm text-muted-foreground">
							<span class="flex items-center gap-2">
								<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
								Privacy First
							</span>
							<span class="flex items-center gap-2">
								<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
								Secure & Safe
							</span>
							<span class="flex items-center gap-2">
								<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
								No Spam
							</span>
						</div>
					</div>
				</div>

				<div class="hidden lg:flex justify-center">
					<div class="relative">
						<div class="relative w-[280px]">
							<div class="relative bg-card rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl border border-border">
								<div class="absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 sm:h-6 bg-black rounded-full z-20"></div>
								<div class="relative bg-background rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden aspect-[9/19]">
									<div class="absolute inset-0 flex flex-col">
										<div class="pt-10 pb-3 px-4 bg-card/50 backdrop-blur-sm border-b border-border">
											<div class="flex items-center gap-2.5">
												<div class="w-9 h-9 rounded-full overflow-hidden">
													<img src={SofiaProfile} alt="Sofia" class="w-full h-full object-cover" />
												</div>
												<div>
													<p class="font-semibold text-xs">Sofia</p>
													<p class="text-[10px] text-muted-foreground">Online</p>
												</div>
											</div>
										</div>
										<div class="flex-1 p-4 space-y-2.5 overflow-hidden">
											<div class="flex justify-start">
												<div class="bg-muted px-3.5 py-2 rounded-2xl rounded-bl-md text-xs max-w-[80%]">I know exactly what I want tonight...</div>
											</div>
											<div class="flex justify-end">
												<div class="bg-honey text-white px-3.5 py-2 rounded-2xl rounded-br-md text-xs max-w-[80%]">Oh? And what's that? 😏</div>
											</div>
											<div class="flex justify-start">
												<div class="rounded-2xl rounded-bl-md overflow-hidden max-w-[70%]">
													<img src={SofiaSpicy} alt="Selfie" class="w-full h-auto object-cover" />
												</div>
											</div>
											<div class="flex justify-start">
												<div class="bg-muted px-3.5 py-2 rounded-2xl rounded-bl-md text-xs max-w-[80%]">You. All to myself 💋</div>
											</div>
										</div>
										<div class="p-3.5 border-t border-border bg-card/50">
											<div class="flex items-center gap-2 bg-muted rounded-full px-3.5 py-2">
												<span class="text-xs text-muted-foreground flex-1">Message...</span>
												<div class="w-7 h-7 rounded-full bg-honey flex items-center justify-center">
													<svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="absolute -inset-4 bg-gradient-to-b from-honey/10 to-transparent rounded-[3rem] -z-10 blur-2xl opacity-50"></div>

						<div class="absolute -top-3 -right-3 bg-card rounded-2xl p-2.5 shadow-lg border border-border">
							<div class="flex items-center gap-1.5">
								<div class="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
									<svg class="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
								</div>
								<span class="text-[10px] font-medium">Memory Saved</span>
							</div>
						</div>

						<div class="absolute -bottom-3 -left-3 bg-card rounded-2xl p-2.5 shadow-lg border border-border">
							<div class="flex items-center gap-1.5">
								<div class="w-6 h-6 rounded-full bg-honey/20 flex items-center justify-center">
									<svg class="w-3 h-3 text-honey" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
								</div>
								<span class="text-[10px] font-medium">Emotionally Aware</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
				<span class="text-xs text-muted-foreground">Scroll to explore</span>
				<div class="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
					<div class="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"></div>
				</div>
			</div>
		</div>
	</div>
</section>
