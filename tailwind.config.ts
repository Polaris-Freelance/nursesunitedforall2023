import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundColor: {
        primary: '#0F183F',
        secondary: '#D72E2F'
      },
      textColor: {
        primary: '#0F183F',
        secondary: '#D72E2F'
      }
    },
  },
  plugins: [],
} satisfies Config;
