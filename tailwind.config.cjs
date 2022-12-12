const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	mode: 'jit',
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/colors/themes')['[data-theme=light]'],
					error: '#d11749'
				}
			}
		]
	},
	plugins: [require('daisyui')],
	darkMode: 'class'
};

module.exports = config;
