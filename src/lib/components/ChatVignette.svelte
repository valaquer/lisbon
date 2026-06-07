<script lang="ts">
	import type { ChatMessage } from '$lib/data/conversations';

	interface Props {
		mode: 'phone' | 'desktop';
		name: string;
		avatar: string;
		messages: ChatMessage[];
		selfieImage?: string;
		placeholder: string;
	}

	let { mode, name, avatar, messages, selfieImage, placeholder }: Props = $props();
</script>

<div class="border border-white/10 p-8 text-center text-text/50 font-inter min-h-[60vh] flex items-center justify-center">
	ChatVignette: {name} ({mode})
</div>
