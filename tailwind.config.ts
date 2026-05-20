import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#121316',
        blush: '#FFB8A2',
        plum: '#8E7DFF',
        moss: '#9BD6C7'
      },
      fontFamily: {
        sans: ['Pretendard', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 10px 35px rgba(0,0,0,0.35)'
      }
    }
  },
  plugins: []
};

export default config;
