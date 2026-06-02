<svelte:head>
	<title>Privacy Policy – Provoque AI</title>
</svelte:head>

<div class="screen">
	<div class="container">
		<h1>Privacy Policy</h1>
		<p class="updated">Last updated: June 2, 2026</p>

		<section>
			<h2>1. Data Controller</h2>
			<p>
				Oovar.ai UG (haftungsbeschränkt)<br />
				10405 Berlin, Germany<br />
				Represented by: Deepak Patnaik<br />
				Email: <a href="mailto:hello@provoque.ai" class="link">hello@provoque.ai</a>
			</p>
		</section>

		<section>
			<h2>2. What Data We Collect</h2>
			<p>When you sign up for the Provoque AI waitlist, we collect:</p>
			<ul>
				<li>Your email address</li>
				<li>Your consent to this privacy policy (checkbox confirmation)</li>
				<li>Timestamp of your consent</li>
			</ul>
			<p>We do not collect your name, location, or any other personal data.</p>
		</section>

		<section>
			<h2>3. Purpose</h2>
			<p>We use your email address to:</p>
			<ul>
				<li>Send you a one-time confirmation email to verify your address</li>
				<li>Notify you when Provoque AI launches</li>
			</ul>
			<p>We will not use your email for any other purpose without your explicit consent.</p>
		</section>

		<section>
			<h2>4. Legal Basis</h2>
			<p>
				We process your data based on your explicit consent (GDPR Art. 6(1)(a)). You provide
				this consent by checking the consent checkbox and submitting the signup form.
			</p>
		</section>

		<section>
			<h2>5. Data Processors</h2>
			<p>Your data is processed by the following third-party services:</p>
			<ul>
				<li>
					<strong>Supabase</strong> — database hosting in Frankfurt, Germany (eu-central-1).
					Stores your email, consent, and signup status. EU data residency.
				</li>
				<li>
					<strong>Resend</strong> — email delivery service (EU region, Ireland). Sends the
					confirmation email from hello@provoque.ai.
				</li>
				<li>
					<strong>Cloudflare</strong> — provides Turnstile bot protection on the signup form.
					See the Cookies section below.
				</li>
				<li>
					<strong>Vercel</strong> — website hosting. Serves the provoque.ai pages.
				</li>
			</ul>
		</section>

		<section>
			<h2>6. Cookies</h2>
			<p>
				We do not set any first-party cookies. However, Cloudflare Turnstile (our bot
				protection) may set the following cookies:
			</p>
			<ul>
				<li>
					<strong>cf_clearance</strong> — confirms you have passed the Turnstile challenge.
					Expires after 30 minutes.
				</li>
				<li>
					<strong>__cf_bm</strong> — Cloudflare bot management cookie. Expires after 30 minutes.
				</li>
			</ul>
			<p>These cookies are strictly necessary for the signup form to function and cannot be disabled.</p>
		</section>

		<section>
			<h2>7. Data Retention</h2>
			<p>
				We retain your data until you request its deletion or until Provoque AI launches and
				the waitlist is no longer needed — whichever comes first. You can request deletion at
				any time.
			</p>
		</section>

		<section>
			<h2>8. Your Rights</h2>
			<p>Under the GDPR, you have the right to:</p>
			<ul>
				<li><strong>Access</strong> — request a copy of your data</li>
				<li><strong>Rectification</strong> — correct inaccurate data</li>
				<li><strong>Erasure</strong> — request deletion of your data</li>
				<li><strong>Portability</strong> — receive your data in a structured format</li>
				<li><strong>Withdraw consent</strong> — at any time, without affecting the lawfulness of prior processing</li>
			</ul>
			<p>
				To exercise any of these rights, email
				<a href="mailto:hello@provoque.ai" class="link">hello@provoque.ai</a>.
			</p>
		</section>

		<section>
			<h2>9. Supervisory Authority</h2>
			<p>
				You have the right to lodge a complaint with a data protection supervisory authority.
				The responsible authority for Berlin is the Berliner Beauftragte für Datenschutz und
				Informationsfreiheit.
			</p>
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

	.updated {
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

	ul {
		color: #999;
		font-family: system-ui, sans-serif;
		font-size: 0.9375rem;
		line-height: 1.6;
		padding-left: 1.5rem;
		margin-bottom: 0.75rem;
	}

	li {
		margin-bottom: 0.375rem;
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
