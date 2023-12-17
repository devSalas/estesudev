/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			colors:{
				primary:"#0f1624", 
				secondary:"#FFFBF5",
				third:"rgb(59 130 246)",
				fourth:"#1c1f25"
			},
			gridTemplateColumns:{
				responsive:" repeat(auto-fit, minmax(200px, 1fr))",
				responSkill:"repeat(auto-fit, minmax(150px, 1fr))"
			},animation: {
				'scale': 'scale 2s linear infinite',
				 'links':'links 1s linear infinite'
			},
			keyframes: {
				scale: {
				  '0%, 100%': { transform: 'scale(1)' },
				  '50%':{ transform: 'scale(1.08)'}
				},
				links:{
					'0%, 100%': { transform: 'scale(1)' },
				    '50%':{ transform: 'scale(1.08)'},
				}	
			},
			borderRadius:{
				primary:"3px",
				secondary:"6px"
			}
		},
	},
	plugins: [],
}
