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
		.select('*', { count: 'exact', head: true });

	const realCount = error ? 0 : (count ?? 0);

	// Get signup dates to determine which days had real activity
	const { data: signupDays } = await admin
		.from('waitlist')
		.select('created_at');

	const daysWithSignups = new Set<number>();
	if (signupDays) {
		for (const row of signupDays) {
			const dayIndex = Math.floor((new Date(row.created_at).getTime() - EPOCH) / (1000 * 60 * 60 * 24));
			if (dayIndex >= 0) daysWithSignups.add(dayIndex);
		}
	}

	// Only add drift for days with zero signups
	const daysSinceEpoch = Math.floor((Date.now() - EPOCH) / (1000 * 60 * 60 * 24));
	let drift = 0;
	for (let d = 0; d < daysSinceEpoch; d++) {
		if (!daysWithSignups.has(d)) {
			drift += getDailyDrift(d);
		}
	}

	const total = Math.min(SEED + realCount + drift, CAP);

	return json({ count: total });
}
