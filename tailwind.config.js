/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'back-img': "url('/background.jpg')",
        'nav-img': "url('/nav.jpg')",
        'cont-img':"url('/cont.jpg')"
      },
      spacing: {
        '50%': '50%',
        '10%': '10%',
        '20%': '20%',
        '80%': '80%',
      },
      colors: {
        'bgcolor': '#071323',
      },
    },
  },
  plugins: [],
}
