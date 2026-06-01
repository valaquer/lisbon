import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { supabase } from '$lib/server/supabase';
import type { RequestHandler } from './$types';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();

	const email = data.email?.trim().toLowerCase();
	const consentFlag = data.consent_flag;
	const honeypot = data.honeypot;
	const turnstileToken = data.turnstile_token;

	// Honeypot: if filled, return silent success
	if (honeypot) {
		return json({ success: true });
	}

	// Consent check
	if (!consentFlag) {
		return json({ error: 'You must agree to the privacy policy.' }, { status: 400 });
	}

	// Email validation
	if (!email || !EMAIL_REGEX.test(email) || email.length > 320) {
		return json({ error: 'Please enter a valid email address.' }, { status: 400 });
	}

	// Turnstile verification
	const turnstileSecret = env.TURNSTILE_SECRET_KEY;
	if (!turnstileSecret) {
		return json({ error: 'Server configuration error.' }, { status: 500 });
	}

	const turnstileResponse = await fetch(
		'https://challenges.cloudflare.com/turnstile/v0/siteverify',
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams({
				secret: turnstileSecret,
				response: turnstileToken || ''
			})
		}
	);

	const turnstileResult = await turnstileResponse.json();
	if (!turnstileResult.success) {
		return json({ error: 'Verification failed. Please try again.' }, { status: 400 });
	}

	// Supabase INSERT
	const { error } = await supabase.from('waitlist').insert({
		email,
		consent_flag: true
	});

	if (error) {
		// Duplicate email (Postgres 23505)
		if (error.code === '23505') {
			return json({ error: "You're already signed up!" }, { status: 409 });
		}
		return json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
	}

	return json({ success: true });
};
