import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        surface: {
          '50': '#dfe0e2',
          '100': '#d5d5d9',
          '200': '#cacbcf',
          '300': '#aaabb3',
          '400': '#6b6d79',
          '500': '#2b2e40',
          '600': '#27293a',
          '700': '#202330',
          '800': '#1a1c26',
          '900': '#15171f',
        },
        primary: {
          '50': '#f9dce2',
          '100': '#f6d0d8',
          '200': '#f4c5ce',
          '300': '#eea2b1',
          '400': '#e15c77',
          '500': '#d4163c',
          '600': '#bf1436',
          '700': '#9f112d',
          '800': '#7f0d24',
          '900': '#680b1d',
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config