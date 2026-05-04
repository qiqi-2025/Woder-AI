/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#fff4d6',
        red: '#ff3b30',
        blue: '#1f6fff',
        yellow: '#ffd83d',
        green: '#20c56b',
        purple: '#8b5cf6',
        pink: '#ff5ca8',
        'black': '#111111',
      },
      boxShadow: {
        'custom': '8px 8px 0 #111111',
        'card': '5px 5px 0 #111111',
      },
    },
  },
  plugins: [],
}
