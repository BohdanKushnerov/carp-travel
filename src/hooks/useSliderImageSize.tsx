import { useEffect, useState } from 'react';
import { AppScreen } from './useResizeWindow';

const useSliderImageSize = (screen: AppScreen) => {
  const [imgSize, setImgSize] = useState({ width: 607, height: 429 });

  const { width, height } = imgSize;

  useEffect(() => {
    setImgSize(getImageSize());
  }, [screen]);

  const getImageSize = () => {
    switch (screen) {
      case 'mobile':
        return { width: 280, height: 213 };
      case 'tablet':
        return { width: 463, height: 370 };
      case 'desktop':
      default:
        return { width: 607, height: 429 };
    }
  };

  return { width, height };
};

export default useSliderImageSize;
