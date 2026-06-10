import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { supabase } from '$lib/server/supabase';
import { getSupabaseAdmin } from '$lib/server/supabase';
import { sendVerificationEmail } from '$lib/server/resend';
import type { RequestHandler } from './$types';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();

	const email = data.email?.trim().toLowerCase();
	const honeypot = data.honeypot;
	const turnstileToken = data.turnstile_token;

	// Honeypot: if filled, return silent success
	if (honeypot) {
		return json({ success: true });
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

	// Generate verification token in app code
	const verificationToken = crypto.randomUUID();

	// Supabase INSERT
	const { error } = await supabase.from('waitlist').insert({
		email,
		consent_flag: true,
		verification_token: verificationToken
	});

	if (error) {
		// Duplicate email (Postgres 23505)
		if (error.code === '23505') {
			return json({ error: "You're already signed up!" }, { status: 409 });
		}
		return json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
	}

	// Send confirmation email (decoupled from INSERT — D9)
	let emailSent = false;
	try {
		await sendVerificationEmail(email, verificationToken);
		emailSent = true;
		await getSupabaseAdmin().from('waitlist').update({ resend_status: 'sent' }).eq('email', email);
	} catch {
		await getSupabaseAdmin().from('waitlist').update({ resend_status: 'failed' }).eq('email', email);
	}

	return json({ success: true, emailSent });
};
