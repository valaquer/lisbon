<script lang="ts">
	interface Props {
		id?: string;
	}

	let { id }: Props = $props();

	function shimmerAction(node: HTMLElement) {
		const shimmerDiv = node.querySelector('[data-shimmer]') as HTMLElement;
		if (!shimmerDiv) return;
		let timer: ReturnType<typeof setTimeout> | null = null;

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const delay = 0.5 + Math.random();
					timer = setTimeout(() => {
						shimmerDiv.style.animation = 'shimmer 0.8s ease-out forwards';
					}, delay * 1000);
				} else {
					// Reset on exit so it fires again on re-entry
					if (timer) { clearTimeout(timer); timer = null; }
					shimmerDiv.style.animation = 'none';
					shimmerDiv.style.transform = 'translateX(-100%)';
				}
			});
		}, { threshold: 0.5 });
		observer.observe(node);

		return {
			destroy() {
				if (timer) clearTimeout(timer);
				observer.disconnect();
			}
		};
	}
</script>

<div class="email-capture">
	<input
		id={id ? `${id}-email` : undefined}
		type="email"
		placeholder="your email address"
		class="email-input"
	/>
	<button class="email-btn" use:shimmerAction>
		<span style="position: relative; z-index: 1;">Join the waitlist</span>
		<div data-shimmer style="position: absolute; inset: 0; transform: translateX(-100%); background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0.2) 60%, transparent 100%);"></div>
	</button>
</div>

<style>
	.email-capture {
		display: flex;
		gap: 12px;
		max-width: 420px;
	}

	.email-input {
		flex: 1;
		padding: 12px 16px;
		background-color: rgba(255, 255, 255, 0.06);
		border: 1px solid rgba(255, 255, 255, 0.25);
		border-radius: 8px;
		color: #E8E4DF;
		font-family: 'Inter', system-ui, sans-serif;
		font-size: 0.9rem;
		outline: none;
	}

	.email-btn {
		position: relative;
		padding: 12px 24px;
		background-color: #AE0D46;
		color: #E8E4DF;
		border: none;
		border-radius: 8px;
		font-family: 'Inter', system-ui, sans-serif;
		font-size: 0.9rem;
		font-weight: 500;
		cursor: pointer;
		white-space: nowrap;
		letter-spacing: 0.02em;
		overflow: hidden;
		transition: box-shadow 0.3s;
	}

	.email-btn:hover {
		box-shadow: 0 0 30px rgba(174, 13, 70, 0.3);
	}

	@media (max-width: 768px) {
		.email-capture {
			flex-direction: column;
			max-width: 100%;
		}
	}
</style>
