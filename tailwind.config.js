import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".ease-in-transition": {
          "transition-property": "all",
          "transition-duration": "150ms",
          "transition-timing-function": "cubic-bezier(0.4, 0, 1, 1)",
        },
      });
    },
  ],
};
