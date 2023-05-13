/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00ADB5',
        dark: '#393E46',
        darker: '#222831',
        lighter: '#EEEEEE',
      },
      fontFamily: {
        sans: ['GlacialIndifference-Regular', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
