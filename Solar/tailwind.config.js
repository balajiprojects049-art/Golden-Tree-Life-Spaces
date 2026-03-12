/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2DBE3A',
        'primary-dark': '#1E8E3E',
        solar: '#F5A623',
        'solar-light': '#F7B84B',
        'light-gray': '#F5F7F8',
        'dark-text': '#1f2937', // text-gray-800
        'body-text': '#4b5563', // text-gray-600
        'professional-dark': '#0f172a', // slate-900 (for footer)
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'clean': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'clean-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
