<script lang="ts">
	import { onMount } from 'svelte';
	import { PUBLIC_TURNSTILE_SITE_KEY } from '$env/static/public';

	interface Props {
		id?: string;
	}

	let { id }: Props = $props();

	let email = $state('');
	let status = $state<'idle' | 'loading' | 'success' | 'error' | 'verified'>('idle');
	let errorMessage = $state('');
	let honeypot = $state('');
	let turnstileToken = $state('');
	let turnstileContainerId = `turnstile-${id || 'default'}`;

	onMount(() => {
		// Check for verified redirect
		const params = new URLSearchParams(window.location.search);
		if (params.get('verified') === 'true') {
			status = 'verified';
			history.replaceState(null, '', '/');
		}

		// Render Turnstile widget once script is available
		function renderTurnstile() {
			if (typeof window.turnstile !== 'undefined') {
				window.turnstile.render(`#${turnstileContainerId}`, {
					sitekey: PUBLIC_TURNSTILE_SITE_KEY,
					callback: (token: string) => { turnstileToken = token; },
					'expired-callback': () => { turnstileToken = ''; },
					appearance: 'interaction-only',
				});
			} else {
				setTimeout(renderTurnstile, 100);
			}
		}
		renderTurnstile();
	});

	async function handleSubmit() {
		if (!email.trim()) {
			errorMessage = 'Please enter your email address.';
			status = 'error';
			return;
		}

		status = 'loading';
		errorMessage = '';

		try {
			const res = await fetch('/api/signup', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email: email.trim(),
					consent_flag: true,
					honeypot,
					turnstile_token: turnstileToken,
				}),
			});

			const data = await res.json();

			if (res.ok && data.success) {
				status = 'success';
			} else {
				errorMessage = data.error || 'Something went wrong. Please try again.';
				status = 'error';
			}
		} catch {
			errorMessage = 'Network error. Please try again.';
			status = 'error';
		}
	}

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

{#if status === 'verified'}
	<div class="success-message">
		Your email has been confirmed. Thank you.
	</div>
{:else if status === 'success'}
	<div class="success-message">
		Check your email to confirm.
	</div>
{:else}
	<div class="email-capture">
		<input
			id={id ? `${id}-email` : undefined}
			type="email"
			placeholder="your email address"
			class="email-input"
			bind:value={email}
			disabled={status === 'loading'}
			onkeydown={(e) => { if (e.key === 'Enter') handleSubmit(); }}
		/>
		<button
			class="email-btn"
			onclick={handleSubmit}
			disabled={status === 'loading'}
			use:shimmerAction
		>
			<span style="position: relative; z-index: 1;">
				{status === 'loading' ? 'Sending...' : 'Join the waitlist'}
			</span>
			<div data-shimmer style="position: absolute; inset: 0; transform: translateX(-100%); background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0.2) 60%, transparent 100%);"></div>
		</button>

		<!-- Honeypot -->
		<input
			type="text"
			name="website"
			bind:value={honeypot}
			style="position: absolute; left: -9999px; opacity: 0; height: 0; width: 0;"
			tabindex="-1"
			autocomplete="off"
		/>
	</div>

	<!-- Turnstile container — outside flex row, invisible -->
	<div id={turnstileContainerId} style="position: fixed; bottom: 0; right: 0; z-index: 100;"></div>

	{#if status === 'error' && errorMessage}
		<p class="error-text">{errorMessage}</p>
	{/if}

	<p class="consent-text">
		First to know when we launch. No spam, just the important stuff.
		<a href="/privacy" class="privacy-link">See our Privacy Policy</a>
	</p>
{/if}

<style>
	.email-capture {
		display: flex;
		gap: 12px;
		max-width: 420px;
		position: relative;
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

	.email-input:disabled {
		opacity: 0.5;
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

	.email-btn:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}

	.success-message {
		font-family: 'Inter', system-ui, sans-serif;
		font-size: 14px;
		color: #E8E4DF;
		animation: fadeIn 0.3s ease-out;
	}

	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	.error-text {
		font-family: 'Inter', system-ui, sans-serif;
		font-size: 12.8px;
		color: #AE0D46;
		margin-top: 8px;
	}

	.consent-text {
		font-family: 'Inter', system-ui, sans-serif;
		font-size: 12.8px;
		color: #E8E4DF;
		opacity: 0.4;
		margin-top: 12px;
		line-height: 1.5;
	}

	.privacy-link {
		color: #E8E4DF;
		opacity: 0.8;
		text-decoration: none;
	}

	.privacy-link:hover {
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		.email-capture {
			flex-direction: column;
			max-width: 100%;
		}

		.success-message {
			text-align: center;
		}

		.consent-text {
			text-align: center;
		}
	}
</style>
