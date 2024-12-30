/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'venetian-nights': '#794DFD',
        'sambucus': '#1B1C2D',
      },
    },
  },
  plugins: [],
}
