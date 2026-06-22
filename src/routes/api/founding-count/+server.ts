import { json } from '@sveltejs/kit';
import { getSupabaseAdmin } from '$lib/server/supabase';

const SEED = 247;
const EPOCH = new Date('2026-06-13T00:00:00Z').getTime();
const CAP = 500;

function getDailyDrift(dayIndex: number): number {
	return 2 + (((dayIndex * 2654435761) >>> 0) % 4);
}

export async function GET() {
	const admin = getSupabaseAdmin();
	const { count, error } = await admin
		.from('waitlist')
		.select('*', { count: 'exact', head: true })
		.is('superseded_at', null);

	const realCount = error ? 0 : (count ?? 0);

	// Drift temporarily disabled per Boss directive
	const drift = 0;

	const total = Math.min(SEED + realCount + drift, CAP);

	return json({ count: total });
}
