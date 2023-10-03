import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      heading: 'var(--heading-font)',
      body: 'var(--body-font)',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('tailwind-scrollbar')],
};
export default config;
