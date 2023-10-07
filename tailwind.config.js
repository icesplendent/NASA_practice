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
        background: "#3f3f3f",
        cythiablue: "#0E2DD1",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        jura: ["Jura", "ui-serif"],
      },
      backdropFilter: ["responsive"], // 啟用 backdrop filter 功能
    },
    plugins: [require("tw-elements/dist/plugin.cjs")],
  },
};
