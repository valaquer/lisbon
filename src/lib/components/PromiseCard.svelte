<script lang="ts">
	import { squircleClip } from '$lib/utils/squircle';

	interface Props {
		heading: string;
		body: string;
		image: string;
		rotation: string;
		reverse?: boolean;
	}

	let { heading, body, image, rotation, reverse = false }: Props = $props();
	let expanded = $state(false);
</script>

<div class="promise-card" class:reverse>
	<div class="photo-wrapper">
		<div class="glow"></div>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class="promise-photo"
			class:expanded
			style="transform: rotate({rotation});"
			onclick={() => { expanded = !expanded; }}
			use:squircleClip={24}
		>
			<picture>
				<source srcset={image.replace(/\.jpg$/, '.avif')} type="image/avif" />
				<img src={image} alt="{heading}" width="540" height="960" />
			</picture>
		</div>
	</div>
	<div class="text-block" class:text-reverse={reverse}>
		<h2 class="card-heading">{heading}</h2>
		<p class="card-body">{body}</p>
	</div>
</div>

<style>
	.promise-card {
		display: flex;
		align-items: center;
		gap: 48px;
		margin-bottom: 48px;
	}

	.promise-card:last-child {
		margin-bottom: 0;
	}

	.promise-card.reverse {
		flex-direction: row-reverse;
	}

	.photo-wrapper {
		position: relative;
		flex-shrink: 0;
	}

	.glow {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 200%;
		height: 200%;
		background: radial-gradient(ellipse at center, rgba(174, 13, 70, 0.10) 0%, transparent 70%);
		pointer-events: none;
	}

	.promise-photo {
		width: 220px;
		aspect-ratio: 9 / 16;
		overflow: hidden;
		transition: width 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);
	}

	@media (hover: hover) {
		.promise-photo:hover {
			width: 374px;
			transition-duration: 0.6s;
		}
	}

	.promise-photo.expanded {
		width: 374px;
		transition-duration: 0.6s;
	}

	.promise-photo img {
		width: 102%;
		height: 102%;
		object-fit: cover;
		margin: -1%;
	}

	.text-block {
		max-width: 420px;
	}

	.text-reverse {
		text-align: right;
		margin-left: auto;
	}

	.card-heading {
		font-family: 'Cormorant Garamond', Georgia, serif;
		font-weight: 500;
		font-size: clamp(28px, 3vw, 48px);
		color: #E8E4DF;
		margin-bottom: 12px;
	}

	.card-body {
		font-family: 'Inter', system-ui, sans-serif;
		font-size: clamp(14px, 1.1vw, 16px);
		color: #E8E4DF;
		opacity: 0.8;
		line-height: 1.7;
		max-width: 420px;
	}

	@media (prefers-reduced-motion: reduce) {
		.promise-photo {
			transition: none;
		}
		.promise-photo:hover,
		.promise-photo.expanded {
			width: 220px;
			transition: none;
		}
	}

	@media (max-width: 768px) {
		.promise-card,
		.promise-card.reverse {
			flex-direction: column;
			gap: 24px;
		}

		.text-block,
		.text-reverse {
			text-align: center;
			margin-left: 0;
		}
	}
</style>
