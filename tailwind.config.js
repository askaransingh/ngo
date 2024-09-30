/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        txPrimary: "#555",
        txLight: "#999",
        txDark: "#222",
        bgPrimary: "#f1f1f1",
      },
    },
  },
  plugins: [require('tailwind-scrollbar'),],
};
