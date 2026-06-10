<script lang="ts">
	import EmailCapture from './EmailCapture.svelte';
	import { onMount } from 'svelte';
	let vw = $state('');
	onMount(() => { vw = String(window.innerWidth); });
</script>

<section class="hero">
	<!-- Sophie — full bleed background -->
	<picture>
		<source media="(max-width: 768px)" srcset="/sophie-afj.jpg" />
		<img
			src="/sophie-hero-wide.jpg"
			alt="Sophie"
			class="hero-img"
		/>
	</picture>

	<!-- Text + Form overlay -->
	<div class="hero-content">
		<h1 class="hero-headline">
			Finally, somebody<br/>who remembers.
		</h1>

		<p class="hero-subhead">
			An AI girlfriend<br/>
			who listens to you,<br/>
			comes to know you,<br/>
			and<br/>
			never leaves you.
		</p>

		<EmailCapture id="hero" />
		<p style="color: #E8E4DF; font-family: Inter, sans-serif; font-size: 14px; margin-top: 12px;">Cache Code: 5QO | vw:{vw}</p>
	</div>
</section>


<style>
	.hero {
		position: relative;
		height: calc(100vh - 64px);
		overflow: hidden;
	}

	.hero-img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-46%, -51%) scale(1.40);
		max-width: none;
		height: 100%;
		pointer-events: none;
	}

	.hero-content {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		width: 45%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 clamp(32px, 4vw, 80px);
		z-index: 2;
	}

	.hero-headline {
		font-family: 'Cormorant Garamond', Georgia, serif;
		font-weight: 600;
		font-size: clamp(32px, 3.5vw, 64px);
		line-height: 1.15;
		color: #E8E4DF;
		margin-bottom: 24px;
	}

	.hero-subhead {
		font-family: 'Cormorant Garamond', Georgia, serif;
		font-weight: 400;
		font-size: clamp(16px, 1.4vw, 20px);
		color: #E8E4DF;
		opacity: 0.8;
		line-height: 1.8;
		margin-bottom: 32px;
	}

	@media (max-width: 768px) {
		.hero {
			height: auto;
			display: flex;
			flex-direction: column;
		}

		.hero-img {
			position: relative;
			top: auto;
			left: auto;
			transform: none;
			width: 100%;
			height: 60vh;
			object-fit: cover;
		}

		.hero-content {
			position: relative;
			top: auto;
			right: auto;
			bottom: auto;
			width: 100%;
			padding: 24px;
			text-align: center;
		}
	}
</style>
