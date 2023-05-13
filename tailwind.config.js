/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
        sans: ['Rubik', 'sans-serif']
      },
      colors: {
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
        grayishBlue: 'hsl(229, 8%, 60%)',
        veryDarkBlue: 'hsl(229, 31%, 25%)',
      },
      minHeight: {
        '60vh': '60vh'
      },
      width: {
        '95%':'95%'
      }
    },

    
    backgroundImage: () => ({
      dots: "url('../public/images/bg-dots.svg')",
    }),
  },
  plugins: [],
};
