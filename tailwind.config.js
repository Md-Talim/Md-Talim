/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // primary: '#00ADB5',
        primary: '#4E4FEB',
        dark: '#393E46',
        darker: 'rgb(16, 16, 16)',
        light: '#D9D9D9',
        lighter: '#EEEEEE',
      },
      fontFamily: {
        sans: ['--font-inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
