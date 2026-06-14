<script lang="ts">
	interface Props {
		value: number;
		total: number;
		label?: string;
	}

	let { value, total, label = 'spots claimed' }: Props = $props();

	const digits = String(value).padStart(3, '0').split('');
</script>

<div class="flip-counter">
	<div class="flip-digits">
		{#each digits as digit}
			<div class="flip-card">
				<div class="flip-card-inner">
					<span class="flip-digit">{digit}</span>
				</div>
				<div class="flip-line"></div>
			</div>
		{/each}
	</div>
	<span class="flip-separator">/</span>
	<span class="flip-total">{total}</span>
	<span class="flip-label"><span class="live-dot"></span>{label}</span>
</div>

<style>
	.flip-counter {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 8px;
		margin-bottom: 16px;
	}

	.flip-digits {
		display: flex;
		gap: 4px;
	}

	.flip-card {
		position: relative;
		width: 28px;
		height: 40px;
		border-radius: 4px;
		overflow: hidden;
		background-color: rgba(255, 255, 255, 0.06);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.flip-card-inner {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.flip-digit {
		font-family: 'JetBrains Mono', monospace;
		font-size: 20px;
		font-weight: 600;
		color: #10B981;
	}

	.flip-line {
		position: absolute;
		top: 50%;
		left: 0;
		right: 0;
		height: 1px;
		background-color: rgba(255, 255, 255, 0.1);
	}

	.flip-separator {
		font-family: 'JetBrains Mono', monospace;
		font-size: 14px;
		color: #E8E4DF;
		opacity: 0.8;
	}

	.flip-total {
		font-family: 'JetBrains Mono', monospace;
		font-size: 14px;
		font-weight: 500;
		color: #E8E4DF;
		opacity: 0.8;
	}

	.flip-label {
		font-family: 'JetBrains Mono', monospace;
		font-size: 13px;
		color: #E8E4DF;
		opacity: 0.8;
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.live-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background-color: #34D399;
		box-shadow: 0 0 6px #34D399;
		animation: livePulse 1.5s ease-in-out infinite;
	}

	@keyframes livePulse {
		0%, 100% { opacity: 0.5; }
		50% { opacity: 1; }
	}
</style>
