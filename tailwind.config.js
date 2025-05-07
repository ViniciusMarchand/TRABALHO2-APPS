/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,jsx}', './screens/**/*.{js,ts,jsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary:"#fdfdfd",
        secondary:"#E6E6E6",
        tertiary: "#C9C9C9",
        contrast:"#007082"
      },
    },
    borderWidth: {
      DEFAULT: '1px', 
      '1': '1px',
    }
  },
  plugins: [],
};
