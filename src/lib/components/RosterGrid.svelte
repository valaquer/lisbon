<script lang="ts">
	import type { RosterGirl } from '$lib/data/roster';

	interface Props {
		girls: RosterGirl[];
	}

	let { girls }: Props = $props();
</script>

<div class="border border-white/10 p-8 text-center text-text/50 font-inter">
	RosterGrid ({girls.length} girls)
</div>
