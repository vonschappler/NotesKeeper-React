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
        von: "#1b1c1d 0 0 5px",
        "von-inset": "inset #1b1c1d 0 0 5px",
        "von-inverted": "#dedede 0 0 5px",
      },
      colors: {
        von: {
          darkGray: "#1b1c1d",
          lightGray: "#dedede",
          teal: "#16b2ab",
        },
      },
    },
  },
  corePlugins: {
    // preflight: false,
  },
  plugins: [],
};
