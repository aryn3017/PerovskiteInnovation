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
      screens: {
      'llg': { 'max': '1023px' },
      'lg': { 'min': '1023px' },
      'mmd': { 'max': '767px' },
      'umd': { 'max': '806px' },
      'md': { 'min': '767px' },
      'ssm': { 'max': '639px' },
      'sm': { 'min': '639px' },
    },
    fontFamily: {
        playwrite: ['Playwrite ES Deco','sans-serif'],
        limelight: ['Limelight', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'bgcolor': '#071323',
      },
    },
  },
  plugins: [],
}
