/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				spin: 'spin 3s linear infinite',
			},
		},
	},
	plugins: [],
}
