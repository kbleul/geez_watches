/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        'topSeller': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
    },
    fontFamily : {
      "nav-main" : ['Aboreto', 'cursive'],
    }
  },
  plugins: [],
  
}
