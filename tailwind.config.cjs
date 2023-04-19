/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    gridTemplateColumns: ({ theme }) => ({
      fill: 'repeat(auto-fill, 18rem)'
    }),
    extend: {}
  },
  plugins: []
}
