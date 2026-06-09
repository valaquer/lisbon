<script lang="ts">
	import type { RosterGirl } from '$lib/data/roster';

	interface Props {
		girls: RosterGirl[];
	}

	let { girls }: Props = $props();

	// Mobile roster: 6 rows × 4 cols = 24 cards, tiling 16 girls
	const mobileRoster = Array.from({ length: 24 }, (_, i) => girls[i % girls.length]);

	let expandedCard = $state<number | null>(null);
	function toggleCard(idx: number) {
		expandedCard = expandedCard === idx ? null : idx;
	}
</script>

<!-- Desktop Roster Grid (6 columns with 1/4 wing clip) -->
<div class="hidden md:block" style="overflow: hidden; padding: 48px 0;">
	<div style="display: flex; flex-direction: column; align-items: center; gap: 16px; width: max-content; position: relative; left: 50%; transform: translateX(-50%);">
		<!-- Row 1 (top 2/3 clipped — show bottom 1/3 only) — 6 columns -->
		<div style="display: flex; gap: 16px;">
		<!-- Left wing (show right 1/4) -->
		<div style="width: 55px; flex-shrink: 0; overflow: hidden;
			-webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%), linear-gradient(to bottom, transparent 0%, black 1%); -webkit-mask-composite: destination-in;
			mask-image: linear-gradient(to right, transparent 0%, black 5%), linear-gradient(to bottom, transparent 0%, black 1%); mask-composite: intersect;">
			<div style="width: 220px; margin-left: -165px; display: flex; align-items: flex-end; overflow: hidden;">
				<div style="aspect-ratio: 9/16; width: 100%; border-radius: 24px; overflow: hidden; background: {girls[11].bg}; position: relative; margin-top: -153%;">
					<img src={girls[11].img} alt={girls[11].name} style="width: 102%; height: 102%; object-fit: cover; position: absolute; top: -1%; left: -1%;" />
				</div>
			</div>
		</div>
		{#each girls.slice(0, 4) as girl}
		<div style="width: 220px; flex-shrink: 0; overflow: hidden; display: flex; align-items: flex-end;
			-webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 1%);
			mask-image: linear-gradient(to bottom, transparent 0%, black 1%);">
			<div class="roster-card" style="aspect-ratio: 9/16; width: 100%; border-radius: 24px; overflow: hidden; background: {girl.bg}; position: relative; margin-top: -153%;">
				{#if girl.img}<img src={girl.img} alt={girl.name} style="width: 102%; height: 102%; object-fit: cover; position: absolute; top: -1%; left: -1%;" />{/if}
			</div>
		</div>
		{/each}
		<!-- Right wing (show left 1/4) -->
		<div style="width: 55px; flex-shrink: 0; overflow: hidden;
			-webkit-mask-image: linear-gradient(to right, black 95%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 1%); -webkit-mask-composite: destination-in;
			mask-image: linear-gradient(to right, black 95%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 1%); mask-composite: intersect;">
			<div style="width: 220px; display: flex; align-items: flex-end; overflow: hidden;">
				<div style="aspect-ratio: 9/16; width: 100%; border-radius: 24px; overflow: hidden; background: {girls[8].bg}; position: relative; margin-top: -153%;">
					<img src={girls[8].img} alt={girls[8].name} style="width: 102%; height: 102%; object-fit: cover; position: absolute; top: -1%; left: -1%;" />
				</div>
			</div>
		</div>
		</div>
		<!-- Row 2 (full — 6 columns) -->
		<div style="display: flex; gap: 16px;">
		<!-- Left wing (show right 1/4) -->
		<div style="width: 55px; flex-shrink: 0; overflow: hidden;
			-webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%);
			mask-image: linear-gradient(to right, transparent 0%, black 5%);">
			<div class="roster-card" style="margin-left: -165px;">
				<img src={girls[15].img} alt={girls[15].name} style="width: 102%; height: 102%; object-fit: cover; position: absolute; top: -1%; left: -1%;" />
			</div>
		</div>
		{#each girls.slice(4, 8) as girl}
		<div class="roster-card">
			{#if girl.img}<img src={girl.img} alt={girl.name} style="width: 102%; height: 102%; object-fit: cover; position: absolute; top: -1%; left: -1%;" />{/if}
			<div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 14px 14px 12px; background: linear-gradient(transparent, rgba(0,0,0,0.35));">
				<div style="display: flex; align-items: center; gap: 6px; margin-bottom: 3px;">
					<span style="font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 600; font-size: 18px; color: #E8E4DF;">{girl.name}</span>
					<span style="background: #10B981; color: #fff; font-family: 'Inter', system-ui, sans-serif; font-size: 9px; font-weight: 600; padding: 2px 6px; border-radius: 10px; letter-spacing: 0.03em;">Online</span>
				</div>
				<div style="font-family: 'Inter', system-ui, sans-serif; font-size: 11px; color: #E8E4DF; opacity: 0.5; margin-bottom: 6px;">{girl.age} years old</div>
				<div style="display: flex; align-items: center; gap: 10px;">
					<span style="display: flex; align-items: center; gap: 3px; font-family: 'Inter', system-ui, sans-serif; font-size: 11px; color: #E8E4DF; opacity: 0.5;"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#E8E4DF" fill-opacity="0.5" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> {girl.hearts}</span>
					<span style="display: flex; align-items: center; gap: 3px; font-family: 'Inter', system-ui, sans-serif; font-size: 11px; color: #E8E4DF; opacity: 0.5;"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#E8E4DF" fill-opacity="0.5" stroke="none"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg> {girl.chats}</span>
				</div>
			</div>
		</div>
		{/each}
		<!-- Right wing (show left 1/4) -->
		<div style="width: 55px; flex-shrink: 0; overflow: hidden;
			-webkit-mask-image: linear-gradient(to right, black 95%, transparent 100%);
			mask-image: linear-gradient(to right, black 95%, transparent 100%);">
			<div class="roster-card">
				<img src={girls[12].img} alt={girls[12].name} style="width: 102%; height: 102%; object-fit: cover; position: absolute; top: -1%; left: -1%;" />
			</div>
		</div>
		</div>
		<!-- Row 3 (full — 6 columns) -->
		<div style="display: flex; gap: 16px;">
		<!-- Left wing (show right 1/4) -->
		<div style="width: 55px; flex-shrink: 0; overflow: hidden;
			-webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%);
			mask-image: linear-gradient(to right, transparent 0%, black 5%);">
			<div class="roster-card" style="margin-left: -165px;">
				<img src={girls[3].img} alt={girls[3].name} style="width: 102%; height: 102%; object-fit: cover; position: absolute; top: -1%; left: -1%;" />
			</div>
		</div>
		{#each girls.slice(8, 12) as girl}
		<div class="roster-card">
			{#if girl.img}<img src={girl.img} alt={girl.name} style="width: 102%; height: 102%; object-fit: cover; position: absolute; top: -1%; left: -1%;" />{/if}
			<div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 14px 14px 12px; background: linear-gradient(transparent, rgba(0,0,0,0.35));">
				<div style="display: flex; align-items: center; gap: 6px; margin-bottom: 3px;">
					<span style="font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 600; font-size: 18px; color: #E8E4DF;">{girl.name}</span>
					<span style="background: #10B981; color: #fff; font-family: 'Inter', system-ui, sans-serif; font-size: 9px; font-weight: 600; padding: 2px 6px; border-radius: 10px; letter-spacing: 0.03em;">Online</span>
				</div>
				<div style="font-family: 'Inter', system-ui, sans-serif; font-size: 11px; color: #E8E4DF; opacity: 0.5; margin-bottom: 6px;">{girl.age} years old</div>
				<div style="display: flex; align-items: center; gap: 10px;">
					<span style="display: flex; align-items: center; gap: 3px; font-family: 'Inter', system-ui, sans-serif; font-size: 11px; color: #E8E4DF; opacity: 0.5;"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#E8E4DF" fill-opacity="0.5" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> {girl.hearts}</span>
					<span style="display: flex; align-items: center; gap: 3px; font-family: 'Inter', system-ui, sans-serif; font-size: 11px; color: #E8E4DF; opacity: 0.5;"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#E8E4DF" fill-opacity="0.5" stroke="none"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg> {girl.chats}</span>
				</div>
			</div>
		</div>
		{/each}
		<!-- Right wing (show left 1/4) -->
		<div style="width: 55px; flex-shrink: 0; overflow: hidden;
			-webkit-mask-image: linear-gradient(to right, black 95%, transparent 100%);
			mask-image: linear-gradient(to right, black 95%, transparent 100%);">
			<div class="roster-card">
				<img src={girls[0].img} alt={girls[0].name} style="width: 102%; height: 102%; object-fit: cover; position: absolute; top: -1%; left: -1%;" />
			</div>
		</div>
		</div>
		<!-- Row 4 (bottom 2/3 clipped — show top 1/3 only) — 6 columns -->
		<div style="display: flex; gap: 16px;">
		<!-- Left wing (show right 1/4) -->
		<div style="width: 55px; flex-shrink: 0; overflow: hidden;
			-webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%), linear-gradient(to bottom, black 99%, transparent 100%); -webkit-mask-composite: destination-in;
			mask-image: linear-gradient(to right, transparent 0%, black 5%), linear-gradient(to bottom, black 99%, transparent 100%); mask-composite: intersect;">
			<div style="width: 220px; margin-left: -165px; display: flex; align-items: flex-start; overflow: hidden;">
				<div style="aspect-ratio: 9/16; width: 100%; border-radius: 24px; overflow: hidden; background: {girls[7].bg}; position: relative; margin-bottom: -153%;">
					<img src={girls[7].img} alt={girls[7].name} style="width: 102%; height: 102%; object-fit: cover; position: absolute; top: -1%; left: -1%;" />
				</div>
			</div>
		</div>
		{#each girls.slice(12, 16) as girl}
		<div style="width: 220px; flex-shrink: 0; overflow: hidden; display: flex; align-items: flex-start;
			-webkit-mask-image: linear-gradient(to bottom, black 99%, transparent 100%);
			mask-image: linear-gradient(to bottom, black 99%, transparent 100%);">
			<div class="roster-card" style="aspect-ratio: 9/16; width: 100%; border-radius: 24px; overflow: hidden; background: {girl.bg}; position: relative; margin-bottom: -153%;">
				{#if girl.img}<img src={girl.img} alt={girl.name} style="width: 102%; height: 102%; object-fit: cover; position: absolute; top: -1%; left: -1%;" />{/if}
			</div>
		</div>
		{/each}
		<!-- Right wing (show left 1/4) -->
		<div style="width: 55px; flex-shrink: 0; overflow: hidden;
			-webkit-mask-image: linear-gradient(to right, black 95%, transparent 100%), linear-gradient(to bottom, black 99%, transparent 100%); -webkit-mask-composite: destination-in;
			mask-image: linear-gradient(to right, black 95%, transparent 100%), linear-gradient(to bottom, black 99%, transparent 100%); mask-composite: intersect;">
			<div style="width: 220px; display: flex; align-items: flex-start; overflow: hidden;">
				<div style="aspect-ratio: 9/16; width: 100%; border-radius: 24px; overflow: hidden; background: {girls[4].bg}; position: relative; margin-bottom: -153%;">
					<img src={girls[4].img} alt={girls[4].name} style="width: 102%; height: 102%; object-fit: cover; position: absolute; top: -1%; left: -1%;" />
				</div>
			</div>
		</div>
		</div>
	</div>
</div>

<!-- Mobile Roster Grid (6 rows × 4 cols, device-edge clipping) -->
<div class="md:hidden" style="overflow: hidden; padding: 48px 0; width: 100%;">
	<div style="display: flex; flex-direction: column; gap: 10px; width: max-content; position: relative; left: 50%; transform: translateX(-50%);">
		<!-- Row 1 (top 3/4 clipped — show bottom 1/4 only) -->
		<div style="display: flex; gap: 10px;">
		{#each mobileRoster.slice(0, 4) as girl}
			<div style="width: 150px; flex-shrink: 0; overflow: hidden; display: flex; align-items: flex-end;
				-webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 5%);
				mask-image: linear-gradient(to bottom, transparent 0%, black 5%);">
				<div style="aspect-ratio: 9/16; width: 100%; border-radius: 16px; overflow: hidden; background: {girl.bg}; position: relative; margin-top: -163%;">
					{#if girl.img}<img src={girl.img} alt={girl.name} style="width: 102%; height: 102%; object-fit: cover; position: absolute; top: -1%; left: -1%;" />{/if}
				</div>
			</div>
		{/each}
		</div>
		<!-- Rows 2-5 (full cards) -->
		{#each Array(4) as _, rowIdx}
		<div style="display: flex; gap: 10px;">
		{#each mobileRoster.slice((rowIdx + 1) * 4, (rowIdx + 2) * 4) as girl, i}
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div class="mobile-card" class:expanded={expandedCard === (rowIdx + 1) * 4 + i} onclick={() => toggleCard((rowIdx + 1) * 4 + i)} style="width: 150px; flex-shrink: 0; aspect-ratio: 9/16; border-radius: 16px; overflow: hidden; background: {girl.bg}; position: relative; cursor: pointer;">
				{#if girl.img}<img src={girl.img} alt={girl.name} style="width: 102%; height: 102%; object-fit: cover; position: absolute; top: -1%; left: -1%;" />{/if}
				<div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 10px 10px 8px; background: linear-gradient(transparent, rgba(0,0,0,0.4));">
					<div style="display: flex; align-items: center; gap: 4px; margin-bottom: 2px;">
						<span style="font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 600; font-size: 14px; color: #E8E4DF;">{girl.name}</span>
						<span style="background: #10B981; color: #fff; font-family: 'Inter', system-ui, sans-serif; font-size: 7px; font-weight: 600; padding: 1px 4px; border-radius: 8px; letter-spacing: 0.03em;">Online</span>
					</div>
					<div style="font-family: 'Inter', system-ui, sans-serif; font-size: 9px; color: #E8E4DF; opacity: 0.5;">{girl.age} years old</div>
				</div>
			</div>
		{/each}
		</div>
		{/each}
		<!-- Row 6 (bottom 3/4 clipped — show top 1/4 only) -->
		<div style="display: flex; gap: 10px;">
		{#each mobileRoster.slice(20, 24) as girl}
			<div style="width: 150px; flex-shrink: 0; overflow: hidden; display: flex; align-items: flex-start;
				-webkit-mask-image: linear-gradient(to bottom, black 95%, transparent 100%);
				mask-image: linear-gradient(to bottom, black 95%, transparent 100%);">
				<div style="aspect-ratio: 9/16; width: 100%; border-radius: 16px; overflow: hidden; background: {girl.bg}; position: relative; margin-bottom: -163%;">
					{#if girl.img}<img src={girl.img} alt={girl.name} style="width: 102%; height: 102%; object-fit: cover; position: absolute; top: -1%; left: -1%;" />{/if}
				</div>
			</div>
		{/each}
		</div>
	</div>
</div>

<style>
	.roster-card {
		flex-shrink: 0;
		width: 220px;
		aspect-ratio: 9 / 16;
		border-radius: 24px;
		overflow: hidden;
		position: relative;
		cursor: pointer;
		box-shadow: 0 0 80px 20px rgba(174,13,70,0.03);
	}
	.roster-card img {
		transition: transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);
	}
	@media (hover: hover) {
		.roster-card:hover img {
			transform: scale(1.05);
			transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
		}
	}

	/* Mobile tap-to-expand — floats above grid */
	.mobile-card {
		transition: transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);
	}
	.mobile-card.expanded {
		transform: scale(1.7);
		z-index: 10;
		transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
	}
</style>
