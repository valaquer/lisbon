import { json } from '@sveltejs/kit';
import { getSupabaseAdmin } from '$lib/server/supabase';
import { sendVerificationEmail } from '$lib/server/resend';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();
	const email = data.email?.trim().toLowerCase();

	if (!email) {
		return json({ error: 'Email is required.' }, { status: 400 });
	}

	const admin = getSupabaseAdmin();

	// Find the active pending row for this email
	const { data: row, error } = await admin
		.from('waitlist')
		.select('id, status, verification_token, resend_count')
		.eq('email', email)
		.is('superseded_at', null)
		.single();

	if (error || !row) {
		return json({ error: 'No pending signup found for this email.' }, { status: 404 });
	}

	if (row.status === 'confirmed') {
		return json({ message: 'Your email is already confirmed.' });
	}

	if (row.resend_count >= 1) {
		return json({
			message: "Don't worry. You don't have to do anything more. We'll look into it and sort it out for you.",
			sorted: true
		});
	}

	// Re-send the verification email
	try {
		await sendVerificationEmail(email, row.verification_token);
		await admin
			.from('waitlist')
			.update({ resend_count: row.resend_count + 1, resend_status: 'sent' })
			.eq('id', row.id);
		return json({ message: 'Verification email resent. Check your spam folder too.', resent: true });
	} catch {
		return json({ error: 'Failed to resend. Please try again later.' }, { status: 500 });
	}
};
