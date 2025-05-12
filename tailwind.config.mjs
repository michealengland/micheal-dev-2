/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			container: {
				center: true,
			},
			fontFamily: {
				sans: ['Mulish, sans-serif'],
				mono: ['Fira Code, monospace']
			},
			colors: {
				base: '#112358', // Fibonacci Blue
				white: '#F4F5FA', // White Solid
				overlay: '#D4EAFF', // Veiling Waterfalls
				surface: '#004499', // Fight Night
				accent: '#0192C6', // Dyanmic Blue
				highlighter: '#F1FF62', // Lemon Pie
				dark: '#333',
				rp: {
					base: '#191724',
					surface: '#2a273f',
					overlay: '#393552',
					subtle: '#908caa',
					text: '#e0def4',
					love: '#eb6f92',
					gold: '#f6c177',
					rose: '#ebbcba',
					pine: '#31748f',
					foam: '#9ccfd8',
					iris: '#c4a7e7'
				}
			},
			zIndex: {
				behind: '-1',
				0: '0',
				1: '1'
			}
		}
	},
	plugins: [],
}
