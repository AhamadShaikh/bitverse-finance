/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      colors:{
        main:{
          100:'#5C4F05',
          'yellow':'#DBB800',
          'bgColor':"#100F0F"
        }
      }
    },
  },
  plugins: [],
}