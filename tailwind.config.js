/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./node_modules/tw-elements/dist/js/**/*.cjs",
  ],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      jura: ["Jura", "ui-serif"],
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
