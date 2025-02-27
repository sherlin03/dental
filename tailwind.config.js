/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}',
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx,html}'],
  safelist: [
    "text-[#3B4FA2]",
    "border-[#3B4FA2]",
  ],
  theme: {
    container:{
      padding:'2rem'
    },
    fontFamily: {
      'body': [
        'DM Sans', 
        'ui-sans-serif', 
        'system-ui',
        // other fallback fonts
      ],
      'sans': [
        '"DM Sans"', 
        'ui-sans-serif', 
        'system-ui',
        // other fallback fonts
      ]
    },
    extend: {
      fontFamily:{
        space:['Space Grotesk'],
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

