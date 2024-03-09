/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ['responsive', 'hover', 'focus', 'sm'],
      // Agrega otras variantes si es necesario
    },
  },
  plugins: [],
}

