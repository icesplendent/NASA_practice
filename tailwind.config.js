/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./node_modules/tw-elements/dist/js/**/*.cjs",
  ],
  theme: {
    extend: {
      jura: ["Jura", "system-ui"],
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
