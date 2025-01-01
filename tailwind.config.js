/** @type {import('tailwindcss').Config} */

const tail = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        pacifico: "var(--font-pacifico)",
        inter: "var(--font-inter)",
      },
      transisitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(20px)",
          },
          "50%": {
            transform: "none",
          },
        },
      },
      animation: {
        "bounce-1": "bounce 0.5s",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animate")],
  daisyui: {
    themes: ["light", "dark", "autumn"],
  },
};

export default tail;
