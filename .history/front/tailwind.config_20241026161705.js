/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{jsx,js,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blueSlate : '',
        blackpure: '#1E201E',  
        blackaccent: '#3C3D37',  
      },
      screens: {
        'xmd': '960px',
        'xsm': '720px',
        'xs': '450px',
        'xxs': '370px',
      },

      fontFamily: {
        poppins: 'Poppins',
        kanit: 'Kanit',
      },
    },
  },
  plugins: [],
}

