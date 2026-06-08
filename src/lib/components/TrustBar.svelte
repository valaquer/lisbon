<section class="trust-container">
	<div class="trust-card">
		<div class="trust-grid">
			<!-- Row 1: Product promises -->
			<div class="trust-cell col-divider row-divider">
				<svg class="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
				</svg>
				<h3 class="trust-heading">Identity-locked generation</h3>
				<p class="trust-description">Single-reference visual pipeline. No generative drift, no artifacts, no degradation across sessions. Same face, every time.</p>
			</div>
			<div class="trust-cell col-divider row-divider">
				<svg class="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
					<polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
					<line x1="12" y1="22.08" x2="12" y2="12"/>
				</svg>
				<h3 class="trust-heading">Persistent memory architecture</h3>
				<p class="trust-description">Multi-tier retrieval, not a sliding context window. Full conversation history accessible. Three years of context, not the last 8K tokens.</p>
			</div>
			<div class="trust-cell row-divider">
				<svg class="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
				</svg>
				<h3 class="trust-heading">Long-term relationship design</h3>
				<p class="trust-description">Relationship state persistence across sessions. Not a chatbot that resets – a partner that evolves. Built for years of connection, not minutes of novelty.</p>
			</div>

			<!-- Row 2: Infrastructure promises -->
			<div class="trust-cell col-divider">
				<svg class="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
					<path d="M7 11V7a5 5 0 0 1 10 0v4"/>
				</svg>
				<h3 class="trust-heading">Model pinning</h3>
				<p class="trust-description">Dedicated model instance. Upstream provider updates never propagate to your session.</p>
			</div>
			<div class="trust-cell col-divider">
				<svg class="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<circle cx="12" cy="12" r="10"/>
					<line x1="2" y1="12" x2="22" y2="12"/>
					<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
				</svg>
				<h3 class="trust-heading">EU GDPR Art 17, 20 · DDG §5</h3>
				<p class="trust-description">Full erasure rights. Data portability. German Digital Services Act compliant.</p>
			</div>
			<div class="trust-cell">
				<svg class="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
					<polyline points="7 10 12 15 17 10"/>
					<line x1="12" y1="15" x2="12" y2="3"/>
				</svg>
				<h3 class="trust-heading">Full data export</h3>
				<p class="trust-description">One-click archive. All personal data, chat history, preferences and media.</p>
			</div>
		</div>
	</div>
</section>

<style>
	.trust-container {
		position: relative;
		overflow: visible;
		max-width: 1120px;
		margin: 0 auto;
		padding: 48px clamp(24px, 4vw, 48px);
	}

	/* Ambient magenta gradient — backlight halo around card edges */
	.trust-container::before {
		content: '';
		position: absolute;
		inset: -60px;
		background:
			radial-gradient(
				ellipse 400px 250px at 25% 40%,
				rgba(174, 13, 70, 0.08) 0%,
				transparent 70%
			),
			radial-gradient(
				ellipse 300px 200px at 75% 60%,
				rgba(174, 13, 70, 0.06) 0%,
				transparent 70%
			);
		pointer-events: none;
		z-index: 0;
	}

	.trust-card {
		position: relative;
		z-index: 1;
		background: rgba(20, 22, 28, 0.85);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-top-color: rgba(255, 255, 255, 0.12);
		border-left-color: rgba(255, 255, 255, 0.10);
		box-shadow:
			0 0 0 1px rgba(0, 0, 0, 0.3),
			0 4px 16px rgba(0, 0, 0, 0.25),
			0 16px 48px rgba(0, 0, 0, 0.15),
			inset 0 1px 0 rgba(255, 255, 255, 0.05);
		border-radius: 24px;
		isolation: isolate;
	}

	.trust-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(2, auto);
	}

	.trust-cell {
		position: relative;
		padding: 32px;
	}

	/* Gradient fade dividers */
	.col-divider::after {
		content: '';
		position: absolute;
		right: 0;
		top: 20%;
		bottom: 20%;
		width: 1px;
		background: linear-gradient(
			to bottom,
			transparent 0%,
			rgba(255, 255, 255, 0.08) 50%,
			transparent 100%
		);
		pointer-events: none;
	}

	.row-divider::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 20%;
		right: 20%;
		height: 1px;
		background: linear-gradient(
			to right,
			transparent 0%,
			rgba(255, 255, 255, 0.08) 50%,
			transparent 100%
		);
		pointer-events: none;
	}

	.trust-icon {
		width: 24px;
		height: 24px;
		color: rgba(232, 228, 223, 0.6);
		margin-bottom: 12px;
	}

	.trust-heading {
		font-family: 'JetBrains Mono', monospace;
		font-weight: 500;
		font-size: 14px;
		color: #E8E4DF;
		margin: 0 0 16px 0;
		line-height: 1.4;
	}

	.trust-description {
		font-family: 'JetBrains Mono', monospace;
		font-weight: 100;
		font-size: 13px;
		color: rgba(232, 228, 223, 0.6);
		margin: 0;
		line-height: 1.5;
	}

	/* Mobile */
	@media (max-width: 768px) {
		.trust-container {
			padding: 48px clamp(16px, 4vw, 24px);
		}

		.trust-grid {
			grid-template-columns: 1fr;
		}

		.trust-cell {
			padding: 24px;
		}

		.col-divider::after {
			display: none;
		}

		.row-divider::before {
			left: 10%;
			right: 10%;
		}
	}
</style>
