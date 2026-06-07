<script lang="ts">
	interface Props {
		heading: string;
		body: string;
		image: string;
		rotation: string;
		reverse?: boolean;
	}

	let { heading, body, image, rotation, reverse = false }: Props = $props();
</script>

<div class="border border-white/10 p-8 text-text/50 font-inter">
	PromiseCard: {heading}
</div>
