<svelte:head>
	<title>Privacy Policy – Provoque AI</title>
</svelte:head>

<div class="screen">
		<h1>Privacy Policy</h1>
		<p class="updated">Last updated: June 11, 2026</p>

		<section>
			<h2>1. Data Controller</h2>
			<p>
				Oovar UG (haftungsbeschränkt)<br />
				Kolonnenstr. 8<br />
				10827 Berlin, Germany<br />
				Represented by: Deepak Patnaik<br />
				Email: <a href="mailto:hello@provoque.ai" class="link">hello@provoque.ai</a>
			</p>
		</section>

		<section>
			<h2>2. Purpose and Legal Basis</h2>
			<p>We use your email address for the following purposes:</p>
			<ul>
				<li>Launch updates – notifying you when Provoque AI launches</li>
				<li>Product news – updates about features and development</li>
				<li>Occasional exclusive offers – promotional content related to Provoque AI</li>
			</ul>
			<p>
				The legal basis for processing is your explicit consent (GDPR Art. 6(1)(a)),
				given by submitting the signup form.
			</p>
		</section>

		<section>
			<h2>3. What Data We Collect</h2>
			<p>When you sign up for the Provoque AI waitlist, we collect:</p>
			<ul>
				<li>Your email address</li>
				<li>Timestamp of your consent</li>
				<li>Signup status (pending or confirmed)</li>
			</ul>
			<p>We do not collect your name, location, or any other personal data.</p>
		</section>

		<section>
			<h2>4. Recipients</h2>
			<p>Your data is processed by the following third-party services:</p>
			<ul>
				<li>
					<strong>Supabase</strong> – database hosting in Frankfurt, Germany (eu-central-1).
					Stores your email, consent timestamp, and signup status.
				</li>
				<li>
					<strong>Resend</strong> – email delivery service. Sends the confirmation email
					from hello@provoque.ai.
				</li>
				<li>
					<strong>Cloudflare</strong> – provides Turnstile bot protection on the signup form.
					The cf_clearance cookie is strictly necessary for the form to function
					(TDDDG §25(2) Nr. 2).
				</li>
				<li>
					<strong>Vercel</strong> – website hosting and cookieless analytics.
				</li>
			</ul>
		</section>

		<section>
			<h2>5. Third-Country Transfers</h2>
			<p>
				Resend and Vercel are US-based companies. Data transfers to the United States
				are covered by the EU-US Data Privacy Framework (adequacy decision of July 10, 2023).
				Both companies are certified under the framework.
			</p>
		</section>

		<section>
			<h2>6. Retention Period</h2>
			<p>
				We retain your data until product launch or until you withdraw your consent –
				whichever comes first. You can withdraw your consent at any time (see below).
			</p>
		</section>

		<section>
			<h2>7. Your Rights</h2>
			<p>Under the GDPR, you have the right to:</p>
			<ul>
				<li><strong>Access</strong> – request a copy of your data</li>
				<li><strong>Rectification</strong> – correct inaccurate data</li>
				<li><strong>Erasure</strong> – request deletion of your data</li>
				<li><strong>Restriction</strong> – restrict the processing of your data</li>
				<li><strong>Portability</strong> – receive your data in a structured format</li>
				<li><strong>Objection</strong> – object to processing of your data</li>
			</ul>
			<p>
				To exercise any of these rights, email
				<a href="mailto:hello@provoque.ai" class="link">hello@provoque.ai</a>.
			</p>
		</section>

		<section>
			<h2>8. Right to Withdraw Consent</h2>
			<p>
				You can withdraw your consent at any time by clicking the unsubscribe link
				in any of our emails. Withdrawal does not affect the lawfulness of processing
				carried out before the withdrawal.
			</p>
		</section>

		<section>
			<h2>9. Right to Lodge a Complaint</h2>
			<p>
				You have the right to lodge a complaint with a data protection supervisory authority.
				The responsible authority is:
			</p>
			<p>
				Berliner Beauftragte für Datenschutz und Informationsfreiheit<br />
				Friedrichstr. 219<br />
				10969 Berlin
			</p>
		</section>

		<section>
			<h2>10. Voluntary Provision</h2>
			<p>
				Providing your email address is voluntary. There are no consequences if you
				choose not to provide it.
			</p>
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

	.updated {
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

	ul {
		color: #999;
		font-family: system-ui, sans-serif;
		font-size: 11px;
		line-height: 1.6;
		padding-left: 1.5rem;
		margin-bottom: 0.5rem;
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
		font-size: 11px;
		text-decoration: underline;
		margin-top: 2rem;
	}

	.back-link:hover {
		color: #fff;
	}
</style>
