import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx}",
]
export const theme = {
  extend: {
    fontFamily: {
      sans: ['var(--font-paprika)', ...fontFamily.sans],
    },
  },
}
export const plugins = []

