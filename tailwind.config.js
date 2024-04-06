/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'pp': {
        '50': '#faf7fd',
        '100': '#f4ecfb',
        '200': '#ebddf7',
        '300': '#dbc2f0',
        '400': '#c59be5',
        '500': '#b47ddb',
        '600': '#9956c7',
        '700': '#8442ae',
        '800': '#6f3b8e',
        '900': '#5b3073',
        '950': '#3d1952',
  },
  },
    extend: {
      fontFamily:{
        'pop':['Madimi One'],
        'rob':['Roboto',"sans-serif"]

      }
    },
  },
  plugins: [],
}