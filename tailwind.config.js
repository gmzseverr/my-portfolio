/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      default: ['"Inter var", sans-serif'],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #4731D3 0%, #4731D3 70%, #CBF281 30%, #CBF281 100%)",
        "dark-gradient":
          "linear-gradient(to right, #171043 0%, #171043 70%, #1A210B 30%, #1A210B 100%)",
      },
      boxShadow: {
        custom:
          "0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(24, 39, 75, 0.14)",
      },
    },
  },
  plugins: [require("daisyui")],
};
