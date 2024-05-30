/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      height: {
        screen: "100dvh",
      },
      boxShadow: {
        DEFAULT: "#1b1c1d 0 0 5px",
        inset: "inset #1b1c1d 0 0 5px",
        inverted: "#dedede 0 0 5px",
      },
    },
  },
  corePlugins: {},
  plugins: [],
};
