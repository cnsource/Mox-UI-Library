/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'prussian-blue': '#13293dff',
        'baby-powder': '#fffcf9ff',
        'madder-lake': '#c3423fff',
        'carolina-blue': '#1b98e0ff',
        'tiffany-blue': '#2ec4b6ff'
      }
    },
  },
  plugins: [],
}
