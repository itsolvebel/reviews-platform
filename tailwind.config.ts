import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xs: '325px',
        xsm: '370px',
        sm: '480px',
        csm: '540px',
        md: '768px',
        cmd: '914px',
        lg: '976px',
        clg: '1182px',
        xl: '1280px',
        '1xl': '1400px',
      },
      colors: {
        black: {
          1: '#000000',
          2: '#1A1A1A',
          3: '#3B3A3A',
        },
        purple: {
          1: '#534599',
        },
        white: {
          1: '#FFF',
          2: '#DDD',
          3: '#D9D9D9',
        },
        green: {
          1: '#50C878',
        },
      },
    },
  },
  plugins: [],
};
export default config;
