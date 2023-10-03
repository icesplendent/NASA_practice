/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./node_modules/tw-elements/dist/js/**/*.cjs",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#3f3f3f',
        'cythiablue': '#0E2DD1'
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
