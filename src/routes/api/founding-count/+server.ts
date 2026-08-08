import { json } from '@sveltejs/kit';
import { getSupabaseAdmin } from '$lib/server/supabase';

export async function GET() {
	const admin = getSupabaseAdmin();
	const { count, error } = await admin
		.from('waitlist')
		.select('*', { count: 'exact', head: true })
		.is('superseded_at', null);

	return json({ count: error ? 0 : (count ?? 0) });
}
