'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import SvgIcon from './SvgIcon';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      return window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500, 
      smooth: true,
    });
  };

  return (
    <button
      className={clsx(
        'fixed bottom-16 right-8 z-50 flex h-auto w-auto cursor-pointer bg-transparent transition-transform duration-300 ease-in-out hover:scale-110',
        {
          hidden: !isVisible,
        }
      )}
      onClick={scrollToTop}
    >
      <SvgIcon
        className="fill-white"
        width={50}
        height={50}
        iconPath="/sprite.svg#icon-scroll-up"
      />
    </button>
  );
};

export default ScrollToTopButton;
