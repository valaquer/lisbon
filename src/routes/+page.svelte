<script lang="ts">
	import { onMount } from 'svelte';
	import { PUBLIC_TURNSTILE_SITE_KEY } from '$env/static/public';

	let email = $state('');
	let consent = $state(false);
	let submitting = $state(false);
	let message = $state('');
	let isError = $state(false);
	let turnstileToken = $state('');
	let turnstileEl: HTMLDivElement;
	let turnstileWidgetId: string | undefined;

	onMount(() => {
		// Render Turnstile explicitly after Svelte hydrates
		function renderTurnstile() {
			if ((window as any).turnstile && turnstileEl) {
				turnstileWidgetId = (window as any).turnstile.render(turnstileEl, {
					sitekey: PUBLIC_TURNSTILE_SITE_KEY,
					theme: 'dark',
					appearance: 'interaction-only',
					callback: (token: string) => {
						turnstileToken = token;
					}
				});
			}
		}

		// Turnstile script may already be loaded or still loading
		if ((window as any).turnstile) {
			renderTurnstile();
		} else {
			// Wait for Turnstile script to load
			const check = setInterval(() => {
				if ((window as any).turnstile) {
					clearInterval(check);
					renderTurnstile();
				}
			}, 100);
			// Clean up after 10s
			setTimeout(() => clearInterval(check), 10000);
		}
	});

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		submitting = true;
		message = '';

		// Get token directly from widget as safety net
		const token = turnstileToken || ((window as any).turnstile?.getResponse(turnstileWidgetId) ?? '');

		try {
			const res = await fetch('/api/signup', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email,
					consent_flag: consent,
					honeypot: (document.getElementById('website') as HTMLInputElement)?.value || '',
					turnstile_token: token
				})
			});

			const data = await res.json();

			if (data.success) {
				message = "You're on the list!";
				isError = false;
				email = '';
				consent = false;
			} else {
				message = data.error || 'Something went wrong.';
				isError = true;
			}
		} catch {
			message = 'Network error. Please try again.';
			isError = true;
		} finally {
			submitting = false;
			// Reset Turnstile for next submission
			if ((window as any).turnstile && turnstileWidgetId !== undefined) {
				(window as any).turnstile.reset(turnstileWidgetId);
				turnstileToken = '';
			}
		}
	}
</script>

<svelte:head>
	<title>Provoque AI</title>
</svelte:head>

<div class="screen">
	<div class="container">
		<h1>Provoque AI</h1>
		<p class="tagline">Join the waitlist</p>

		<form onsubmit={handleSubmit} class="form">
			<input
				type="email"
				bind:value={email}
				placeholder="Enter your email"
				required
				autocomplete="email"
				class="input"
			/>

			<!-- Honeypot -->
			<div style="position:absolute;left:-9999px;" aria-hidden="true">
				<input type="text" id="website" name="website" tabindex="-1" autocomplete="off" />
			</div>

			<label class="consent-label">
				<input type="checkbox" bind:checked={consent} required class="checkbox" />
				<span>I agree to the <a href="/privacy" class="link">privacy policy</a> and consent to receiving emails.</span>
			</label>

			<!-- Turnstile widget (explicit render via onMount) -->
			<div bind:this={turnstileEl}></div>

			<button type="submit" disabled={submitting} class="button">
				{submitting ? 'Signing up...' : 'Join Waitlist'}
			</button>

			{#if message}
				<p class="message" class:error={isError} class:success={!isError}>
					{message}
				</p>
			{/if}
		</form>
	</div>
</div>

<style>
	.screen {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #000;
	}

	.container {
		max-width: 420px;
		width: 100%;
		padding: 2rem;
		text-align: center;
	}

	h1 {
		color: #fff;
		font-family: system-ui, sans-serif;
		font-size: 2rem;
		font-weight: 300;
		letter-spacing: 0.05em;
		margin-bottom: 0.5rem;
	}

	.tagline {
		color: #888;
		font-family: system-ui, sans-serif;
		font-size: 1rem;
		margin-bottom: 2rem;
	}

	.form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		position: relative;
	}

	.input {
		padding: 0.75rem 1rem;
		border: 1px solid #333;
		border-radius: 8px;
		background: #111;
		color: #fff;
		font-size: 1rem;
		font-family: system-ui, sans-serif;
		outline: none;
		transition: border-color 0.2s;
	}

	.input:focus {
		border-color: #666;
	}

	.input::placeholder {
		color: #555;
	}

	.consent-label {
		display: flex;
		align-items: flex-start;
		gap: 0.5rem;
		color: #999;
		font-size: 0.8rem;
		font-family: system-ui, sans-serif;
		text-align: left;
		cursor: pointer;
	}

	.checkbox {
		margin-top: 2px;
		accent-color: #fff;
	}

	.link {
		color: #ccc;
		text-decoration: underline;
	}

	.link:hover {
		color: #fff;
	}

	.button {
		padding: 0.75rem 1rem;
		border: none;
		border-radius: 8px;
		background: #fff;
		color: #000;
		font-size: 1rem;
		font-weight: 500;
		font-family: system-ui, sans-serif;
		cursor: pointer;
		transition: opacity 0.2s;
	}

	.button:hover {
		opacity: 0.9;
	}

	.button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.message {
		font-size: 0.875rem;
		font-family: system-ui, sans-serif;
	}

	.error {
		color: #f87171;
	}

	.success {
		color: #4ade80;
	}
</style>
