import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '500px',
      md: [
        { min: '668px', max: '767px' },
        { min: '868px' },
      ],
      lg: '1100px',
      xl: '1400px',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        buttoncoral: {
          DEFAULT: '#ff758c', // Main coral color
          hover: '#ff7eb3',   // Hover state for coral
        }, 
        orange: '#FF6F61',
        'educationbackground': '#F6AEAD',
       
        
      },
      backgroundImage: {
        coral: 'linear-gradient(90deg, #ff758c 0%, #ff7eb3 100%)',
        'main-color': 'linear-gradient(to bottom, #EDE7F6, #FF7F50)',
        lavender: 'linear-gradient(to bottom, #D5C6E0, #FFE6E6)',
        'educationbackground': '#F6AEAD',
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['19px', '25px'],
        xl: ['24px', '32px'],
        '2xl': ['33px', '40px'],
      },
      fontFamily: {
        'Bree Serif': ['Bree Serif', 'sans-serif'],
        'Libre-Baskerville': ['Libre Baskerville', 'serif'],
        'Playfair-Display': ['Playfair Display', 'sans-serif'],
        'Roboto-Condensed': ['Roboto Condensed', 'serif'],
        'Edu-AU-VIC-WA-NT-Guides': ['Edu AU VIC WA NT Guides', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
