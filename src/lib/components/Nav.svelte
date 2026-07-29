<script>
	let { isBlog = false } = $props();
</script>

<nav class="nav-bar">
	<a href={isBlog ? '/blog' : '/'}>
		<img src="/provoque-wordmark.svg" alt="provoque" class="nav-logo" />
	</a>

	<div class="nav-links">
		{#if isBlog}
			<a href="/" class="nav-link">Home</a>
		{:else}
			<a href="/blog" class="nav-link">Blog</a>
		{/if}

		<button
			class="nav-cta"
			onclick={() => {
				const el = document.getElementById('hero-email');
				if (el) {
					el.scrollIntoView({ behavior: 'smooth', block: 'center' });
					setTimeout(() => el.focus(), 600);
				} else {
					window.location.href = '/#hero-email';
				}
			}}
		>
			Join the waitlist
		</button>
	</div>
</nav>

<style>
	.nav-bar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 50;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 16px 48px;
		background: rgba(11, 13, 16, 0.85);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
	}

	.nav-logo {
		height: 32px !important;
		width: auto !important;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.nav-link {
		font-family: 'Inter', system-ui, sans-serif;
		font-size: 13px;
		color: rgba(232, 228, 223, 0.5);
		text-decoration: none;
		transition: color 0.2s;
	}

	.nav-link:hover {
		color: #E8E4DF;
	}

	.nav-cta {
		padding: 10px 24px;
		background-color: #AE0D46;
		color: #E8E4DF;
		border: none;
		border-radius: 8px;
		font-family: 'Inter', system-ui, sans-serif;
		font-size: 0.85rem;
		font-weight: 500;
		cursor: pointer;
		letter-spacing: 0.02em;
		white-space: nowrap;
	}

	@media (max-width: 768px) {
		.nav-bar {
			padding: 12px 20px;
		}

		.nav-logo {
			height: 24px !important;
		}

		.nav-cta {
			padding: 8px 16px;
			font-size: 0.8rem;
		}
	}
</style>
