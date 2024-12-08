import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			sm: '100%',
  			md: '640px',
  			lg: '768px',
  			xl: '1024px',
  			'2xl': '1280px'
  		}
  	},
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'bg':"#F2F0F1",
        'bg2':"#F0F0F0",
        "cardbg":"#F0EEED",
        'red':"#FF3333",
        'redbg':"#f2a7c3",
        'Text':"#FAFAFA",
        'Text1':"#7D8184",
      },
    },
  },
  plugins: [],
};
export default config;
