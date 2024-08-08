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
        'hero-mob': "url('/bcg-images/hero/bcg-hero-mob.webp')",
        'hero-tab': "url('/bcg-images/hero/bcg-hero-tab.webp')",
        'hero-desk': "url('/bcg-images/hero/bcg-hero-desk.webp')",
        'about-mob': "url('/bcg-images/about/bcg-about-mob.webp')",
        'about-tab': "url('/bcg-images/about/bcg-about-tab.webp')",
        'about-desk': "url('/bcg-images/about/bcg-about-desk.webp')",
      },
      backgroundColor: {
        mobileMenu: 'rgba(1, 10, 5, 0.75);',
      },
    },
  },
  plugins: [],
};
export default config;
