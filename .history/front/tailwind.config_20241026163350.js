/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{jsx,js,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blueSlate: '#608BC1',
        blackPure: '#45474B',
        blackAccent: '',
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

