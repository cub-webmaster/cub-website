import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	onwarn: (warning, handler) => {
		if (warning.filename.includes('node_modules')) return;
		handler(warning);
	},
	compilerOptions: {
		experimental: {
			async: true
		},
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		adapter: adapter(),
		prerender: {
			handleMissingId: 'warn'
		},
		alias: {
			$lib: 'src/lib',
			'$lib/*': 'src/lib/*',
			'$components/*': 'src/components/*',
			'$data/*': 'src/data/*'
		}
	}
};

export default config;
