/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sage: "#E49478",
        sagedark: "#637e6a",
        cream: "#10100F",
      },
      keyframes: {
        movein: {
          "0%": { transform: "translate(0, -20px)", opacity: 0 },
          "100%": { transform: "translate(0, 0)", opacity: 1 },
        },
        moveout: {
          "0%": { transform: "translate(0, 0)", opacity: 1 },
          "100%": { transform: "translate(0, 20px)", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
