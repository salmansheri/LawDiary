/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: []

  },
  theme: {
    extend: {
      
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '8': '8 8 0%'

      },
      colors: {
        'myViolet': "#6e62e5",
        "mybg": "#EEEEEE"
      }
      
    },
  },
  plugins: [require('daisyui')],
}
