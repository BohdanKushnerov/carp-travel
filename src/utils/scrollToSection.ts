import { scroller } from 'react-scroll';

export const scrollToSection = (sectionId: string) => {
  scroller.scrollTo(sectionId, {
    duration: 500,
    smooth: true,
  });
};
