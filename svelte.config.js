import adapter from '@sveltejs/adapter-vercel';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex({
			extensions: ['.md'],
		}),
	],
	compilerOptions: {
		runes: ({ filename }) => {
			if (filename.split(/[/\\]/).includes('node_modules')) return undefined;
			if (filename.endsWith('.md')) return false;
			return true;
		}
	},
	kit: {
		adapter: adapter({ runtime: 'nodejs22.x' }),
		prerender: {}
	}
};

export default config;
