import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		adapter: adapter({ runtime: 'nodejs22.x' }),
		prerender: {
			handleHttpError: ({ path }) => {
				// /privacy page is a future REQ — suppress prerender 404 until it exists
				if (path === '/privacy') return;
			}
		}
	}
};

export default config;
