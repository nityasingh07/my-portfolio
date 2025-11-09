/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // This line tells Tailwind to scan all files ending in .js, .jsx, .ts, or .tsx inside the src folder.
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
