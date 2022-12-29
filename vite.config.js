import { sveltekit } from '@sveltejs/kit/vite';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()]
};

export default config;
