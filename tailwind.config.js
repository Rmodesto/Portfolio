/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      height: {
        spacer: "6rem", // Custom height class for Spacer component
      },

      backgroundImage: (theme) => ({
        "gradient-spacer-ttb":
          "linear-gradient(to bottom, #252C38 2%, #f5f5f5 50%, #ffffff 100%)",
        "gradient-spacer-btt":
          "linear-gradient(to top,#252C38 2%, #f5f5f5 50%, #ffffff 100%)",
      }),

      animation: {
        "gradient-move": "gradientMove 4s ease-in-out infinite",
      },
      keyframes: {
        gradientMove: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
    },

    fontFamily: {
      acumin: ["acumin-pro", "sans-serif"],
      sans: ["helvetica", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#7C3AED",
      black: {
        900: "#1c1917",
        500: "#252c38",
        100: "#3A414B",
      },
      slate: "#64748B",
      green: "#059669",
      yellow: "#FACC15",
      orange: "#F97316",
      blue: "#2563EB",
      rose: "#E11D48",
      gray: {
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
      },
    },

    screens: {
      xs: "375px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
  },

  plugins: [],
};
