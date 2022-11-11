/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				700: '#171B21',
				600: '#272B31',
				500: '#3E4146',
				400: '#65686C',
				300: '#8C8E91',
				200: '#B3B5B7',
				100: '#DBDBDC'
			}
		}
	},
	plugins: []
}
