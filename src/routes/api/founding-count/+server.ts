import { json } from '@sveltejs/kit';
import { getSupabaseAdmin } from '$lib/server/supabase';

const SEED = 247;
const EPOCH = new Date('2026-06-13T00:00:00Z').getTime();
const CAP = 500;

function getTimeDrift(): number {
	const daysSinceEpoch = Math.floor((Date.now() - EPOCH) / (1000 * 60 * 60 * 24));
	let drift = 0;
	for (let d = 0; d < daysSinceEpoch; d++) {
		drift += 2 + (((d * 2654435761) >>> 0) % 4);
	}
	return drift;
}

export async function GET() {
	const admin = getSupabaseAdmin();
	const { count, error } = await admin
		.from('waitlist')
		.select('*', { count: 'exact', head: true });

	const realCount = error ? 0 : (count ?? 0);
	const total = Math.min(SEED + realCount + getTimeDrift(), CAP);

	return json({ count: total });
}
