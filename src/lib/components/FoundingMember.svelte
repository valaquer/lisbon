<script lang="ts">
	import EmailCapture from './EmailCapture.svelte';
</script>

<!-- Gradient rule divider -->
<div style="padding: 80px 0;">
	<div style="height: 1px; background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%);"></div>
</div>

<!-- Founding Member block -->
<div style="max-width: 1120px; margin: 0 auto; padding: 0 clamp(24px, 4vw, 48px);">
	<div class="founding-card">
		<!-- Label -->
		<p style="text-align: center; font-family: 'JetBrains Mono', monospace; font-weight: 500; font-size: 13px; color: #10B981; letter-spacing: 0.08em; margin-bottom: 16px;">
			★ FOUNDING MEMBER ★
		</p>

		<!-- Headline -->
		<h2 style="text-align: center; font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 500; font-size: clamp(28px, 3vw, 48px); color: #E8E4DF; margin-bottom: 16px;">
			Be one of the first.
		</h2>

		<!-- Scarcity line -->
		<p style="text-align: center; font-family: 'Inter', system-ui, sans-serif; font-size: 16px; color: #E8E4DF; opacity: 0.8; margin-bottom: 32px;">
			500 founding member spots. When they're gone, they're gone.
		</p>

		<!-- Perks list -->
		<div class="perks-label-wrapper"><p style="font-family: 'Inter', system-ui, sans-serif; font-size: 14px; color: #E8E4DF; opacity: 0.8; margin-bottom: 12px;">You get</p></div>
		<div class="perks-list">
			<p class="perk-item"><span class="perk-bullet">✦</span> Founding member badge</p>
			<p class="perk-item"><span class="perk-bullet">✦</span> Your name in the credits</p>
			<p class="perk-item"><span class="perk-bullet">✦</span> Priority access at launch</p>
			<p class="perk-item"><span class="perk-bullet">✦</span> Private Discord channel</p>
			<p class="perk-item"><span class="perk-bullet">✦</span> A seat at the table</p>
			<p class="perk-item"><span class="perk-bullet">✦</span> Tell us what you want built</p>
		</div>

		<p style="text-align: center; font-family: 'Inter', system-ui, sans-serif; font-size: 14px; color: #E8E4DF; opacity: 0.8; margin-bottom: 32px;">Founding membership closes at launch; the waitlist gets first claim.</p>

		<!-- Email capture -->
		<div class="founding-form-wrapper">
			<EmailCapture id="founding" buttonText="Claim your spot" />
		</div>
	</div>
</div>

<style>
	.founding-card {
		position: relative;
		max-width: 640px;
		margin: 0 auto;
		padding: 48px 40px;
		background-color: rgba(11, 13, 16, 0.85);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 24px;
		overflow: hidden;
	}

	.founding-card::before {
		content: '';
		position: absolute;
		inset: -40%;
		background: radial-gradient(ellipse at center, rgba(16, 185, 129, 0.06) 0%, transparent 70%);
		pointer-events: none;
		z-index: 0;
	}

	.founding-card > * {
		position: relative;
		z-index: 1;
	}

	.perks-list {
		max-width: 320px;
		margin: 0 auto 32px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.perk-item {
		font-family: 'Inter', system-ui, sans-serif;
		font-size: 14px;
		color: #E8E4DF;
		opacity: 0.8;
	}

	.perk-bullet {
		color: #10B981;
		margin-right: 8px;
	}

	.perks-label-wrapper {
		max-width: 320px;
		margin: 0 auto;
	}

	.founding-form-wrapper {
		max-width: 420px;
		margin: 0 auto;
		text-align: center;
	}

	@media (max-width: 768px) {
		.founding-card {
			padding: 40px 24px;
		}

		.founding-form-wrapper {
			max-width: 100%;
		}
	}
</style>
