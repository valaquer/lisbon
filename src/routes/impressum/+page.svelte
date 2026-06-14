<svelte:head>
	<title>Impressum – Provoque AI</title>
</svelte:head>

<div class="screen">
		<h1>Impressum</h1>
		<p class="subtitle">Angaben gemäß DDG §5</p>

		<section>
			<p>
				Oovar UG (haftungsbeschränkt)<br />
				Kolonnenstr. 8<br />
				10827 Berlin
			</p>
		</section>

		<section>
			<h2>Vertreten durch</h2>
			<p>Geschäftsführer: Deepak Patnaik</p>
		</section>

		<section>
			<h2>Kontakt</h2>
			<p>E-Mail: <a href="mailto:hello@provoque.ai" class="link">hello@provoque.ai</a></p>
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

<style>
	.screen {
		min-height: 100vh;
		background: #000;
		padding: 4rem 1rem;
	}

	h1 {
		color: #fff;
		font-family: system-ui, sans-serif;
		font-size: 14px;
		font-weight: 300;
		letter-spacing: 0.05em;
		margin-bottom: 0.5rem;
	}

	.subtitle {
		color: #666;
		font-family: system-ui, sans-serif;
		font-size: 11px;
		margin-bottom: 2rem;
	}

	section {
		margin-bottom: 1.5rem;
	}

	h2 {
		color: #fff;
		font-family: system-ui, sans-serif;
		font-size: 12px;
		font-weight: 500;
		margin-bottom: 0.5rem;
	}

	p {
		color: #999;
		font-family: system-ui, sans-serif;
		font-size: 11px;
		line-height: 1.6;
		margin-bottom: 0.5rem;
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
		font-size: 11px;
		text-decoration: underline;
		margin-top: 2rem;
	}

	.back-link:hover {
		color: #fff;
	}
</style>
