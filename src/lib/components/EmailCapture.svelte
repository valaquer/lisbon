<script lang="ts">
	interface Props {
		id?: string;
	}

	let { id }: Props = $props();
</script>

<div class="border border-white/10 p-4 text-center text-text/50 font-inter text-sm">
	EmailCapture {id ? `(#${id})` : ''}
</div>
