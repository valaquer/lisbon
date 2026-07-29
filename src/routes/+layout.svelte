<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { page } from '$app/stores';

	injectAnalytics({ mode: 'auto' });

	let { children } = $props();
	let isBlog = $derived($page.url.pathname.startsWith('/blog'));

	function rulerTool(node: HTMLElement) {
		if (window.innerWidth <= 768) return { destroy() {} };

		const saved = JSON.parse(localStorage.getItem('rulers') || '{}');
		const heroBottom = window.innerHeight;
		let posA = saved.posA ?? heroBottom, posB = saved.posB ?? 400;
		let dragging: 'a' | 'b' | null = null;
		let lockedA = saved.lockedA ?? false, lockedB = saved.lockedB ?? false;
		let absA_locked = saved.absA_locked ?? 0, absB_locked = saved.absB_locked ?? 0;

		function saveState() {
			localStorage.setItem('rulers', JSON.stringify({ posA, posB, lockedA, lockedB, absA_locked, absB_locked }));
		}

		const lockSvg = '&#x1F512;';
		const unlockSvg = '&#x1F513;';

		const rulerA = document.createElement('div');
		rulerA.style.cssText = 'position: fixed; top: 200px; left: 0; right: 0; z-index: 9999; cursor: ns-resize; user-select: none; pointer-events: auto;';
		rulerA.innerHTML = `<div style="height: 1px; background: #00FF88; box-shadow: 0 0 4px #00FF88;"></div><span style="position: absolute; left: 12px; top: 4px; font-family: JetBrains Mono, monospace; font-size: 11px; color: #00FF88; background: rgba(0,0,0,0.7); padding: 2px 6px; border-radius: 4px; pointer-events: none;">A: 200px</span><button style="position: absolute; right: 12px; top: -4px; background: rgba(0,0,0,0.7); border: none; font-size: 14px; cursor: pointer; padding: 2px 6px; border-radius: 4px; pointer-events: auto; line-height: 1;" data-lock="a">${unlockSvg}</button>`;

		const rulerB = document.createElement('div');
		rulerB.style.cssText = 'position: fixed; top: 400px; left: 0; right: 0; z-index: 9999; cursor: ns-resize; user-select: none; pointer-events: auto;';
		rulerB.innerHTML = `<div style="height: 1px; background: #FF6B00; box-shadow: 0 0 4px #FF6B00;"></div><span style="position: absolute; left: 12px; top: 4px; font-family: JetBrains Mono, monospace; font-size: 11px; color: #FF6B00; background: rgba(0,0,0,0.7); padding: 2px 6px; border-radius: 4px; pointer-events: none;">B: 400px</span><button style="position: absolute; right: 12px; top: -4px; background: rgba(0,0,0,0.7); border: none; font-size: 14px; cursor: pointer; padding: 2px 6px; border-radius: 4px; pointer-events: auto; line-height: 1;" data-lock="b">${unlockSvg}</button>`;

		const distEl = document.createElement('div');
		distEl.style.cssText = 'position: fixed; right: 12px; bottom: 12px; z-index: 9999; font-family: JetBrains Mono, monospace; font-size: 13px; color: #E8E4DF; background: rgba(0,0,0,0.85); padding: 8px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.15); pointer-events: none;';

		document.body.appendChild(rulerA);
		document.body.appendChild(rulerB);
		document.body.appendChild(distEl);

		// Restore lock state on load
		if (lockedA) rulerA.querySelector('[data-lock]')!.innerHTML = lockSvg;
		if (lockedB) rulerB.querySelector('[data-lock]')!.innerHTML = lockSvg;

		// Lock buttons
		rulerA.querySelector('[data-lock]')!.addEventListener('click', (e) => {
			e.stopPropagation();
			lockedA = !lockedA;
			if (lockedA) {
				absA_locked = Math.round(posA + window.scrollY);
				(e.target as HTMLElement).innerHTML = lockSvg;
			} else {
				(e.target as HTMLElement).innerHTML = unlockSvg;
			}
			saveState();
		});

		rulerB.querySelector('[data-lock]')!.addEventListener('click', (e) => {
			e.stopPropagation();
			lockedB = !lockedB;
			if (lockedB) {
				absB_locked = Math.round(posB + window.scrollY);
				(e.target as HTMLElement).innerHTML = lockSvg;
			} else {
				(e.target as HTMLElement).innerHTML = unlockSvg;
			}
			saveState();
		});

		function updateLabels() {
			const scrollY = window.scrollY;

			if (lockedA) {
				posA = absA_locked - scrollY;
				rulerA.style.top = posA + 'px';
			}
			if (lockedB) {
				posB = absB_locked - scrollY;
				rulerB.style.top = posB + 'px';
			}

			const absA = lockedA ? absA_locked : Math.round(posA + scrollY);
			const absB = lockedB ? absB_locked : Math.round(posB + scrollY);
			rulerA.querySelector('span')!.textContent = `A: ${absA}px`;
			rulerB.querySelector('span')!.textContent = `B: ${absB}px`;
			distEl.textContent = `\u0394 ${Math.abs(absB - absA)}px`;
		}

		rulerA.addEventListener('mousedown', (e) => {
			if ((e.target as HTMLElement).hasAttribute('data-lock')) return;
			if (lockedA) return;
			e.preventDefault();
			dragging = 'a';
		});
		rulerB.addEventListener('mousedown', (e) => {
			if ((e.target as HTMLElement).hasAttribute('data-lock')) return;
			if (lockedB) return;
			e.preventDefault();
			dragging = 'b';
		});

		function onMouseMove(e: MouseEvent) {
			if (!dragging) return;
			const y = Math.max(0, Math.min(e.clientY, window.innerHeight));
			if (dragging === 'a' && !lockedA) { posA = y; rulerA.style.top = y + 'px'; }
			else if (dragging === 'b' && !lockedB) { posB = y; rulerB.style.top = y + 'px'; }
			updateLabels();
		}
		function onMouseUp() { dragging = null; saveState(); }

		window.addEventListener('mousemove', onMouseMove);
		window.addEventListener('mouseup', onMouseUp);
		window.addEventListener('scroll', updateLabels);
		updateLabels();

		return {
			destroy() {
				window.removeEventListener('mousemove', onMouseMove);
				window.removeEventListener('mouseup', onMouseUp);
				window.removeEventListener('scroll', updateLabels);
				rulerA.remove();
				rulerB.remove();
				distEl.remove();
			}
		};
	}
</script>

<!-- Rulers hidden — uncomment to enable -->
<!-- <div use:rulerTool style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 9998; pointer-events: none;"></div> -->

<Nav {isBlog} />
<div class="page-content">
	{@render children()}
</div>

<style>
	.page-content {
		padding-top: 64px;
	}

	@media (max-width: 768px) {
		.page-content {
			padding-top: 48px;
		}
	}
</style>
