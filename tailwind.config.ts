import type { Config } from "tailwindcss";

const config: Config = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{css,js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
    keyframes: {
      moveUp: {
        '0%': { transform: 'translateY(100vh)' },
        '50%': { opacity: '1' },
        '100%': { transform: 'translateY(-140vh)' },
      },
    },
    animation: {
      moveUp: 'moveUp 8s ease-in-out infinite forwards',
    }, 
      colors: {
        primary:{
               'DEFAULT': '#2128bd',
              'light':'#005FFE'
        },
        background:{
          'DEFAULT': '#fffff',
          'blue':'blue-100'

        },
      },
    },
  },
  plugins: [],
};
export default config;
