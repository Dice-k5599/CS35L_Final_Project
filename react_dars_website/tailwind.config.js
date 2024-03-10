/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/Components/Pages/{dashboard,selectionPage}/*.js"],
  theme: {
    extend: {
      colors: {
        'ucla-blue': '#0A93DC',
      },
    },
  },
  plugins: [],
}

