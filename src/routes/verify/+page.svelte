<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Verify Email – Provoque AI</title>
</svelte:head>

<div class="screen">
	<div class="container">
		<h1>Provoque AI</h1>

		{#if data.status === 'confirmed'}
			<p class="result success">{data.message}</p>
		{:else if data.status === 'already_verified'}
			<p class="result info">{data.message}</p>
		{:else}
			<p class="result error">{data.message}</p>
		{/if}

		<a href="/" class="link">Back to provoque.ai</a>
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
		margin-bottom: 2rem;
	}

	.result {
		font-family: system-ui, sans-serif;
		font-size: 1.125rem;
		margin-bottom: 2rem;
	}

	.success {
		color: #4ade80;
	}

	.info {
		color: #60a5fa;
	}

	.error {
		color: #f87171;
	}

	.link {
		color: #888;
		font-family: system-ui, sans-serif;
		font-size: 0.875rem;
		text-decoration: underline;
	}

	.link:hover {
		color: #fff;
	}
</style>
