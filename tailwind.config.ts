import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        
        translate: 'translate 0.5s ease-out',
        

      },
      
      keyframes: {
        translate:{
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {

          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {

        'primary-color': '#D88131',
        'secondary-color': '#736F6F',
        'label-color': '#303640'


      },
    },
  },
  plugins: [],
};
export default config;
