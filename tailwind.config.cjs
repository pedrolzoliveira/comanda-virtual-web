/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: ({ theme }) =>
        Object.entries(
          theme('spacing')
        ).reduce((styleConfig, [key, value]) => {
          styleConfig[`fill-${key}`] = `repeat(auto-fill, ${value})`
          return styleConfig
        }, {})
    }
  },
  plugins: []
}
