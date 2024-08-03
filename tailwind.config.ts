import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        xl: '1280px',
      },
      minWidth: {
        '320px': '320px',
        '480px': '480px',
        '768px': '768px',
        '1280px': '1280px',
      },
      maxWidth: {
        '157px': '157px',
        '280px': '280px',
        '320px': '320px',
        '480px': '480px',
        '710px': '710px',
        '768px': '768px',
        '1280px': '1280px',
      },
      backgroundImage: {
        'hero-mobile': "url('/bcg-hero.webp')",
        'hero-mobile2x': "url('/bcg-hero2x.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
