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
				primary: {
					purple: '#639',
					purple1: '#020041',
					purple2: '#170387'
				},
				secondary: {
					pink: '#ff1ee5'
				},
				tertiary: {
					teal: '#74edf1'
				},
				nuetral: {
					white: '#fff',
					dark: '#333'
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
