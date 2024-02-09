/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'satoshi': ['Satoshi Variable', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      colors: {
        warga: {
          text: '#FFA500', // Contoh warna teks untuk Warga
          gradientStart: '#EEA849',
          gradientEnd: '#F46B45',
          background: '#FEFBF6',
        },
        juragan: {
          text: '#56CCF2',
          gradientStart: '#56CCF2',
          gradientEnd: '#2F80ED',
          background: '#F6FCFE',
        },
        sultan: {
          text: '#38EF7D',
          gradientStart: '#38EF7D',
          gradientEnd: '#11998E',
          background: '#F6FEF9',
        },
        konglomrat: {
          text: '#E100FF',
          gradientStart: '#E100FF',
          gradientEnd: '#7F00FF',
          background: '#FEF5FF',
        },
      },
      boxShadow: {
        'shadow-right': '4px 4px 10px 0px rgba(0, 0, 0, 0.1)',
        'pag': '2px 2px 4px 0px rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [],
}