import { Input } from 'postcss';
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
      colors: {
        slider: 'rgba(255, 255, 255, 0.2)',
        gold: '#fc0',
        incorrectField: '#ff5757',
      },
      backgroundImage: {
        'hero-mob': "url('/bcg-images/hero/bcg-hero-mob.webp')",
        'hero-tab': "url('/bcg-images/hero/bcg-hero-tab.webp')",
        'hero-desk': "url('/bcg-images/hero/bcg-hero-desk.webp')",
        'about-mob': "url('/bcg-images/about/bcg-about-mob.webp')",
        'about-tab': "url('/bcg-images/about/bcg-about-tab.webp')",
        'about-desk': "url('/bcg-images/about/bcg-about-desk.webp')",
        'services-mob-1': "url('/bcg-images/services/bcg-serv-mob-1.webp')",
        'services-mob-2': "url('/bcg-images/services/bcg-serv-mob-2.webp')",
        'services-mob-3': "url('/bcg-images/services/bcg-serv-mob-3.webp')",
        'services-mob-4': "url('/bcg-images/services/bcg-serv-mob-4.webp')",
        'services-mob-5': "url('/bcg-images/services/bcg-serv-mob-5.webp')",
        'services-tab-1': "url('/bcg-images/services/bcg-serv-tab-1.webp')",
        'services-tab-2': "url('/bcg-images/services/bcg-serv-tab-2.webp')",
        'services-tab-3': "url('/bcg-images/services/bcg-serv-tab-3.webp')",
        'services-tab-4': "url('/bcg-images/services/bcg-serv-tab-4.webp')",
        'services-tab-5': "url('/bcg-images/services/bcg-serv-tab-5.webp')",
        'services-desk-1': "url('/bcg-images/services/bcg-serv-desk-1.webp')",
        'services-desk-2': "url('/bcg-images/services/bcg-serv-desk-2.webp')",
        'services-desk-3': "url('/bcg-images/services/bcg-serv-desk-3.webp')",
        'services-desk-4': "url('/bcg-images/services/bcg-serv-desk-4.webp')",
        'services-desk-5': "url('/bcg-images/services/bcg-serv-desk-5.webp')",
        'career-desk': "url('/bcg-images/career/bcg-career-desk.webp')",
        'career-tab': "url('/bcg-images/career/bcg-career-tab.webp')",
        'career-mob': "url('/bcg-images/career/bcg-career-mob.webp')",
        'gallery-desk': "url('/bcg-images/career/bcg-gallery-desk.webp')",
        'gallery-tab': "url('/bcg-images/gallery/bcg-gallery-tab.webp')",
        'gallery-mob': "url('/bcg-images/gallery/bcg-gallery-mob.webp')",
      },
      backgroundColor: {
        mobileMenu: 'rgba(1, 10, 5, 0.75);',
        input: 'rgba(255, 255, 255, 0.05)',
        contactsBcg: 'rgba(2, 15, 8, 0.75)',
      },
    },
  },
  plugins: [],
};
export default config;
