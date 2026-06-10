<script lang="ts">
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import type { SpotlightGirl } from '$lib/data/spotlight';
	import { squircleClip } from '$lib/utils/squircle';

	interface Props {
		girl: SpotlightGirl;
	}

	let { girl }: Props = $props();
	let activeLabel = $state(0);
	let reducedMotion = $state(false);

	function spotlightScrollLock(node: HTMLElement) {
		// Check reduced motion preference
		if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			reducedMotion = true;
			return;
		}

		let tl: gsap.core.Timeline;

		const timer = setTimeout(() => {
			const photos = node.querySelectorAll<HTMLElement>('.spotlight-photo');
			if (photos.length < 3) return;

			// Initial state: photo 0 visible, photos 1+2 off-screen right
			gsap.set(photos[1], { x: 40, opacity: 0 });
			gsap.set(photos[2], { x: 40, opacity: 0 });

			tl = gsap.timeline({
				scrollTrigger: {
					trigger: node,
					pin: true,
					start: 'top top',
					end: '+=400%',
					scrub: 1.5,
	
				onUpdate: (self) => {
						// Handle reverse scroll label sync
						const p = self.progress;
						if (self.direction === -1) {
							// Scrolling up — labels need to reverse
							// Total: dwell(0.8) + slide(1) + dwell(0.8) + slide(1) + dwell(0.8) = 4.4
							if (p < 0.18) activeLabel = 0;      // Before first transition
							else if (p < 0.59) activeLabel = 1;  // Between transitions
							else activeLabel = 2;
						}
					}
				}
			});

			// Segment 1: Dwell on Fantasy
			tl.to({}, { duration: 0.8 });

			// Segment 2: Fantasy slides left + fades, Friend slides in
			tl.call(() => { activeLabel = 1; })
			  .to(photos[0], { x: -40, opacity: 0, duration: 1, ease: 'power2.inOut' }, '<')
			  .to(photos[1], { x: 0, opacity: 1, duration: 1, ease: 'power2.inOut' }, '<');

			// Segment 3: Dwell on Friend
			tl.to({}, { duration: 0.8 });

			// Segment 4: Friend slides left, Lover slides in
			tl.call(() => { activeLabel = 2; })
			  .to(photos[1], { x: -40, opacity: 0, duration: 1, ease: 'power2.inOut' }, '<')
			  .to(photos[2], { x: 0, opacity: 1, duration: 1, ease: 'power2.inOut' }, '<');

			// Segment 5: Dwell on Lover, then unpin
			tl.to({}, { duration: 0.8 });
		}, 200);

		return {
			destroy() {
				clearTimeout(timer);
				if (tl) {
					tl.scrollTrigger?.kill();
					tl.kill();
				}
			}
		};
	}
</script>

{#if reducedMotion}
	<!-- Static fallback for reduced motion -->
	<div style="max-width: 1120px; margin: 0 auto; padding: 48px clamp(24px, 4vw, 48px);">
		<div style="text-align: center; margin-bottom: 24px;">
			<p style="font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 500; font-size: clamp(24px, 3vw, 36px); color: #E8E4DF;">{girl.name}</p>
			<p style="font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 400; font-style: italic; font-size: clamp(14px, 1.5vw, 18px); color: #E8E4DF; opacity: 0.8;">{girl.hook}</p>
		</div>
		<div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
			{#each girl.photos as photo, i}
				<div style="width: 200px; aspect-ratio: 9/16; border-radius: 24px; overflow: hidden; position: relative;">
					<img src={photo} alt="{girl.name} — {girl.labels[i]}" style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0;" loading="lazy" />
					<div style="position: absolute; bottom: 8px; left: 0; right: 0; text-align: center;">
						<span style="font-family: 'JetBrains Mono', monospace; font-size: 12.8px; color: #E8E4DF; opacity: 0.6;">{girl.labels[i]}</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
{:else}
	<!-- Scroll-locked spotlight -->
	<div use:spotlightScrollLock style="min-height: 100vh; display: flex; align-items: center; justify-content: center;">
		<div class="spotlight-layout">
			<!-- Left: Photo area -->
			<div class="photo-glow">
			<div class="photo-area" use:squircleClip={24}>
				{#each girl.photos as photo, i}
					<div class="spotlight-photo" style="{i === 0 ? 'position: relative;' : 'position: absolute; inset: 0;'}">
						<img src={photo} alt="{girl.name} — {girl.labels[i]}" loading="lazy" />
					</div>
				{/each}
			<!-- Mobile: labels overlaid on photo -->
				<div class="mobile-labels md:hidden">
					{#each girl.labels as label, i}
						<span class="label" class:active={i === activeLabel}>{label}</span>
					{/each}
				</div>
			</div>
			</div>

			<!-- Right: Text panel -->
			<div class="text-panel">
				<p class="girl-name">{girl.name}</p>
				<p class="girl-hook">{girl.hook}</p>
				<div class="label-row">
					{#each girl.labels as label, i}
						<span class="label" class:active={i === activeLabel}>{label}</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.spotlight-layout {
		display: flex;
		align-items: center;
		gap: 48px;
		max-width: 1120px;
		width: 100%;
		padding: 0 clamp(24px, 4vw, 48px);
	}

	.photo-glow {
		flex-shrink: 0;
		animation: glowPulse 4s ease-in-out infinite;
		border-radius: 24px;
	}

	.photo-area {
		height: 80vh;
		aspect-ratio: 9 / 16;
		width: auto;
		overflow: hidden;
		position: relative;
	}

	@keyframes glowPulse {
		0%, 100% {
			box-shadow: 0 0 60px 15px rgba(174,13,70,0.08);
		}
		50% {
			box-shadow: 0 0 60px 15px rgba(174,13,70,0.04);
		}
	}

	.spotlight-photo {
		overflow: hidden;
	}

	.spotlight-photo img {
		width: 100%;
		height: auto;
		display: block;
	}

	.text-panel {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.girl-name {
		font-family: 'Cormorant Garamond', Georgia, serif;
		font-weight: 500;
		font-size: clamp(32px, 4vw, 56px);
		color: #E8E4DF;
		margin-bottom: 12px;
	}

	.girl-hook {
		font-family: 'Cormorant Garamond', Georgia, serif;
		font-weight: 400;
		font-style: italic;
		font-size: clamp(16px, 1.8vw, 22px);
		color: #E8E4DF;
		opacity: 0.8;
		line-height: 1.6;
		margin-bottom: 24px;
	}

	.label-row {
		display: none;
	}

	@media (min-width: 769px) {
		.label-row {
			display: flex;
			gap: 20px;
		}
	}

	.label {
		font-family: 'JetBrains Mono', monospace;
		font-size: 12.8px;
		color: #E8E4DF;
		opacity: 0.3;
		transition: opacity 0.3s;
	}

	.label.active {
		opacity: 0.8;
	}

	.mobile-labels {
		position: absolute;
		bottom: 16px;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
		gap: 24px;
		z-index: 2;
	}
	.mobile-labels .label {
		font-size: 16px;
		text-shadow: 0 1px 4px rgba(0,0,0,0.6);
	}

	@media (max-width: 768px) {
		.spotlight-layout {
			flex-direction: column;
			gap: 24px;
		}

		.photo-area {
			width: 100%;
			max-height: none;
		}

		.text-panel {
			text-align: center;
			align-items: center;
		}
	}
</style>
