import { getSvgPath } from 'figma-squircle';

/**
 * Svelte action: applies a squircle clip-path to an element.
 * Reads actual dimensions, generates the path, updates on resize.
 */
export function squircleClip(node: HTMLElement, radius: number = 24) {
	function apply() {
		const w = node.offsetWidth;
		const h = node.offsetHeight;
		if (w === 0 || h === 0) return;
		const path = getSvgPath({
			width: w,
			height: h,
			cornerRadius: radius,
			cornerSmoothing: 0.6,
		});
		node.style.clipPath = `path('${path}')`;
	}

	apply();
	const ro = new ResizeObserver(apply);
	ro.observe(node);

	return {
		update(newRadius: number) {
			radius = newRadius;
			apply();
		},
		destroy() {
			ro.disconnect();
		}
	};
}
