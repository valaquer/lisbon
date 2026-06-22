import { redirect } from '@sveltejs/kit';
import { getSupabaseAdmin } from '$lib/server/supabase';
import type { PageServerLoad } from './$types';

const TOKEN_EXPIRY_HOURS = 48;

export const load: PageServerLoad = async ({ url }) => {
	const token = url.searchParams.get('token');

	if (!token) {
		return { status: 'error', message: 'No verification token provided.' };
	}

	const supabaseAdmin = getSupabaseAdmin();

	const { data, error } = await supabaseAdmin
		.from('waitlist')
		.select('id, status, created_at, superseded_at')
		.eq('verification_token', token)
		.single();

	if (error || !data) {
		return { status: 'error', message: 'Invalid or expired verification link.' };
	}

	if (data.superseded_at) {
		return { status: 'expired', message: 'This link is no longer valid. Please sign up again to get a fresh link.' };
	}

	if (data.status === 'confirmed') {
		return { status: 'already_verified', message: 'Your email is already confirmed.' };
	}

	// Check 48-hour expiry
	const createdAt = new Date(data.created_at);
	const now = new Date();
	const hoursElapsed = (now.getTime() - createdAt.getTime()) / (1000 * 60 * 60);

	if (hoursElapsed > TOKEN_EXPIRY_HOURS) {
		return { status: 'expired', message: 'This verification link has expired. Please sign up again.' };
	}

	// Flip status to confirmed and nullify token
	const { error: updateError } = await supabaseAdmin
		.from('waitlist')
		.update({ status: 'confirmed', verification_token: null })
		.eq('id', data.id);

	if (updateError) {
		return { status: 'error', message: 'Something went wrong. Please try again.' };
	}

	throw redirect(303, '/?verified=true');
};
