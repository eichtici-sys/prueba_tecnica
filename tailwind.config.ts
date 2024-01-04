import type { Config } from "tailwindcss"
const { nextui } = require("@nextui-org/react")
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A1449",
        secondary: "#3FA8DF",
        textPrimary: "#454F5B",
        textSuccess: "#6FCF97",
        textError: "#E2362F",
        textSecondary: "#6B6B6B",
        titles: "#18120F",
        backgroundColor: "#F4F6F8",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [nextui()],
}
export default config
