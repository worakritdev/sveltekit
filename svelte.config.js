import { mdsvex } from "mdsvex";
import { mdsvexConfig } from "./mdsvex.config.js";
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		mdsvex(mdsvexConfig),
		preprocess({
			postcss: true
		}),
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
