export const scrollToSection = (sectionId: string) => {
  if (typeof window !== 'undefined') {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 0;
      window.scrollTo({
        top: section.offsetTop - offset,
        behavior: 'smooth',
      });
    }
  }
};
