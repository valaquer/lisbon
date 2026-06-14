<script lang="ts">
	import type { ChatMessage } from '$lib/data/conversations';

	interface Props {
		name: string;
		label: string;
		companionText: string;
		messages: ChatMessage[];
		avatar: string;
	}

	let { name, label, companionText, messages, avatar }: Props = $props();
</script>

<div style="padding: 80px clamp(24px, 4vw, 48px) 0;">
	<!-- Label -->
	<p style="font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 500; font-size: clamp(28px, 3vw, 48px); color: #E8E4DF; text-align: center; margin-bottom: 24px;">{label}</p>

	<!-- 4-column grid: breathing | vignette | companion text | breathing -->
	<div class="vignette-layout">
		<div class="breathing-col"></div>

		<!-- Phone frame -->
		<div class="phone-frame">
			<!-- Chat header: avatar + name + divider -->
			<div style="display: flex; align-items: center; gap: 10px; margin-bottom: 16px;">
				<img src={avatar} alt={name} style="width: 32px; height: 32px; border-radius: 50%; object-fit: cover;" />
				<p style="font-family: 'Inter', system-ui, sans-serif; font-size: 13px; font-weight: 500; color: #E8E4DF; opacity: 0.8;">{name}</p>
			</div>
			<div style="height: 1px; background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%); margin-bottom: 16px;"></div>

			<!-- Messages -->
			<div style="display: flex; flex-direction: column; gap: 8px; flex: 1;">
				{#each messages as msg}
					{#if msg.image && !msg.text}
						<!-- Photo message -->
						<div style="max-width: 180px; margin-top: 8px; {msg.sender === 'him' ? 'margin-left: auto;' : ''}">
							<img src={msg.image} alt="" style="width: 100%; border-radius: 12px; display: block;" />
							{#if msg.time}
								<p style="font-family: 'Inter', system-ui, sans-serif; font-size: 9px; color: #E8E4DF; opacity: 0.3; margin-top: 4px; {msg.sender === 'him' ? 'text-align: right;' : ''}">{msg.time}</p>
							{/if}
						</div>
					{:else if msg.sender === 'him'}
						<!-- His bubble -->
						<div style="max-width: 85%; margin-left: auto; padding: 8px 12px; background-color: rgba(15,20,40,0.30); border: 1px solid rgba(232,228,223,0.15); border-radius: 12px 12px 4px 12px;">
							<p style="font-family: 'iA Writer Quattro V', 'iA Writer Quattro', monospace; font-size: 13px; line-height: 1.6; color: #E8E4DF; opacity: 0.8;">{@html msg.text}</p>
							{#if msg.time}
								<p style="font-family: 'Inter', system-ui, sans-serif; font-size: 9px; color: #E8E4DF; opacity: 0.3; margin-top: 4px; text-align: right;">{msg.time}</p>
							{/if}
						</div>
					{:else if msg.sender === 'inner-voice'}
						<!-- Inner voice bubble -->
						<div style="max-width: 85%; padding: 8px 12px; background-color: rgba(40,5,18,0.20); border: 1px solid rgba(174,13,70,0.20); border-radius: 12px 12px 12px 4px;">
							<p style="font-family: 'iA Writer Quattro V', 'iA Writer Quattro', monospace; font-size: 13px; line-height: 1.6; color: #AE0D46; opacity: 0.8; font-style: italic;">{msg.text}</p>
						</div>
					{:else}
						<!-- Her bubble -->
						<div style="max-width: 85%; padding: 8px 12px; background-color: rgba(40,5,18,0.20); border: 1px solid rgba(174,13,70,0.20); border-radius: 12px 12px 12px 4px;">
							<p style="font-family: 'iA Writer Quattro V', 'iA Writer Quattro', monospace; font-size: 13px; line-height: 1.6; color: #E8E4DF; opacity: 0.8;">{@html msg.text}</p>
							{#if msg.time}
								<p style="font-family: 'Inter', system-ui, sans-serif; font-size: 9px; color: #E8E4DF; opacity: 0.3; margin-top: 4px; text-align: right;">{msg.time}</p>
							{/if}
						</div>
					{/if}
				{/each}
			</div>

			<!-- Input bar -->
			<div style="display: flex; align-items: center; gap: 8px; margin-top: 16px;">
				<div style="flex: 1; padding: 10px 14px; background-color: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px;">
					<p style="font-family: 'Inter', system-ui, sans-serif; font-size: 13px; color: #E8E4DF; opacity: 0.3;">Message {name}...</p>
				</div>
				<div style="width: 36px; height: 36px; border-radius: 50%; background-color: #AE0D46; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8E4DF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
				</div>
			</div>
		</div>

		<!-- Companion text -->
		<div class="companion-text">
			<p style="font-family: 'Inter', system-ui, sans-serif; font-size: clamp(14px, 1.1vw, 16px); font-weight: 400; line-height: 1.7; color: #E8E4DF; opacity: 0.8;">{companionText}</p>
		</div>

		<div class="breathing-col"></div>
	</div>
</div>

<style>
	.vignette-layout {
		display: grid;
		grid-template-columns: 1fr auto auto 1fr;
		gap: 48px;
		align-items: center;
		max-width: 1120px;
		margin: 0 auto;
	}

	.phone-frame {
		max-width: 360px;
		width: 360px;
		background-color: rgba(11,13,16,0.40);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border: 1px solid rgba(255,255,255,0.08);
		border-radius: 24px;
		padding: 24px 16px 16px;
		display: flex;
		flex-direction: column;
	}

	.companion-text {
		max-width: 400px;
	}

	@media (max-width: 768px) {
		.vignette-layout {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 32px;
		}

		.breathing-col {
			display: none;
		}

		.phone-frame {
			max-width: 360px;
			width: 100%;
		}

		.companion-text {
			max-width: 480px;
			text-align: center;
		}
	}
</style>
