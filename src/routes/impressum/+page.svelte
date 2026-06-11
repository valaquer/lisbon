<svelte:head>
	<title>Impressum – Provoque AI</title>
</svelte:head>

<div class="screen">
	<div class="container">
		<h1>Impressum</h1>
		<p class="subtitle">Angaben gemäß DDG §5</p>

		<section>
			<p>
				Oovar UG (haftungsbeschränkt)<br />
				Prenzlauer Allee 209a<br />
				10405 Berlin
			</p>
		</section>

		<section>
			<h2>Vertreten durch</h2>
			<p>Geschäftsführer: Deepak Patnaik</p>
		</section>

		<section>
			<h2>Kontakt</h2>
			<p>E-Mail: <a href="mailto:hello@oovar.ai" class="link">hello@oovar.ai</a></p>
		</section>

		<section>
			<h2>Handelsregister</h2>
			<p>
				HRB 280921 B<br />
				Amtsgericht Charlottenburg
			</p>
		</section>

		<section>
			<h2>Stammkapital</h2>
			<p>EUR 500 (vollständig eingezahlt)</p>
		</section>

		<a href="/" class="back-link">Back to provoque.ai</a>
	</div>
</div>

<style>
	.screen {
		min-height: 100vh;
		background: #000;
		padding: 4rem 1rem;
	}

	.container {
		max-width: 640px;
		margin: 0 auto;
	}

	h1 {
		color: #fff;
		font-family: system-ui, sans-serif;
		font-size: 2rem;
		font-weight: 300;
		letter-spacing: 0.05em;
		margin-bottom: 0.5rem;
	}

	.subtitle {
		color: #666;
		font-family: system-ui, sans-serif;
		font-size: 0.875rem;
		margin-bottom: 3rem;
	}

	section {
		margin-bottom: 2rem;
	}

	h2 {
		color: #fff;
		font-family: system-ui, sans-serif;
		font-size: 1.125rem;
		font-weight: 500;
		margin-bottom: 0.75rem;
	}

	p {
		color: #999;
		font-family: system-ui, sans-serif;
		font-size: 0.9375rem;
		line-height: 1.6;
		margin-bottom: 0.75rem;
	}

	.link {
		color: #ccc;
		text-decoration: underline;
	}

	.link:hover {
		color: #fff;
	}

	.back-link {
		display: inline-block;
		color: #888;
		font-family: system-ui, sans-serif;
		font-size: 0.875rem;
		text-decoration: underline;
		margin-top: 2rem;
	}

	.back-link:hover {
		color: #fff;
	}
</style>
