import type { Config } from 'tailwindcss'

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				lightHover: '#fcf4ff',
				darkHover: '#2E2E2E',
				darkTheme: '#141414',
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
				firaCode: ['Fira Code', 'serif'],
			},
			boxShadow: {
				black: '4px 4px 0 #000',
				white: '4px 4px 0 #fff',
			},
			gridTemplateColumns: {
				auto: 'repeat(auto-fit, minmax(200px, 1fr))',
			},
		},
	},
	darkMode: 'selector',
	plugins: [],
} satisfies Config
