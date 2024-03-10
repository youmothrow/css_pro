/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },     
      animation: {
        bounce: 'bounce 0.3s infinite',
        wiggle: 'wiggle 1s infinite',
      },
      keyframes: {
        wiggle: {
          '0%,100%': {
        	transform: 'scale(1.2) rotate(7deg)',	  
          },
          '50%': {
          	transform: 'scale(0.8) rotate(-7deg)',
          },
        },
      },
    },    
  },
  plugins: [require("daisyui")],
}

