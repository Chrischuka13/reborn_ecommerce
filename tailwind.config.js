/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scrollLR: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        scrollLR: "scrollLR 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};