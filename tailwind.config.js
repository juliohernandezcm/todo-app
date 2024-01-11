/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			primary: '#02b075',
			secondary: '#ff4837',
			gray: '#494848',
			input: '#1f2125',
			background: '#16161a',
		},
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
