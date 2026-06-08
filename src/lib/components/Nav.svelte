<nav class="nav-bar">
	<img src="/provoque-wordmark.svg" alt="provoque" class="nav-logo" />

	<button
		class="nav-cta"
		onclick={() => {
			const el = document.getElementById('hero-email');
			if (el) {
				el.scrollIntoView({ behavior: 'smooth', block: 'center' });
				setTimeout(() => el.focus(), 600);
			}
		}}
	>
		Join the waitlist
	</button>
</nav>

<style>
	.nav-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 16px 48px;
		background-color: #0B0D10;
	}

	.nav-logo {
		height: 32px !important;
		width: auto !important;
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
