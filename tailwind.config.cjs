const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	mode: 'jit',
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	darkMode: 'class'
};

module.exports = config;
