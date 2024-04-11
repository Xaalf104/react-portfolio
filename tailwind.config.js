/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    debugScreens:{
      prefix: ['screen size: '],
      style:{
        backgroundColor: '#FF9000',
        color: '#fff'
      }
    },
    extend: {
      colors: {
        'black': '#402B3A',
        'white': '#F8F4EC',
        'pink': '#FF9BD2',
        'red': '#D63484',
      },
      backgroundImage: {
        'main': "url('/src/assets/pixel-bg.png')",  
        
      }
    },
    fontFamily: {
      kaushan: ['Kaushan Script', 'cursive'],
      spacemono: ['Space Mono', 'monospace'],
    }
  },
  plugins: [ require('tailwindcss-debug-screens'),],
}

