'use client';

import Section from './Section';
import Container from './Container';
import Slider from './Slider/Slider';
import { useCallback, useState } from 'react';
import clsx from 'clsx';
import useResizeWindow from '@/hooks/useResizeWindow';

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const screen = useResizeWindow(768, 1280);

  const handleChangeCurrentSlide = useCallback((num: number) => {
    setCurrentSlide(num);
  }, []);

  return (
    <Section
      className={clsx(
        'bg-services-mob-1 bg-cover bg-center bg-no-repeat py-[56px] transition-all duration-500 ease-in-out',
        {
          'bg-services-mob-1': screen === 'mobile' && currentSlide === 0,
          'bg-services-mob-2': screen === 'mobile' && currentSlide === 1,
          'bg-services-mob-3': screen === 'mobile' && currentSlide === 2,
          'bg-services-mob-4': screen === 'mobile' && currentSlide === 3,
          'bg-services-mob-5': screen === 'mobile' && currentSlide === 4,
          'bg-services-tab-1': screen === 'tablet' && currentSlide === 0,
          'bg-services-tab-2': screen === 'tablet' && currentSlide === 1,
          'bg-services-tab-3': screen === 'tablet' && currentSlide === 2,
          'bg-services-tab-4': screen === 'tablet' && currentSlide === 3,
          'bg-services-tab-5': screen === 'tablet' && currentSlide === 4,
          'bg-services-desk-1': screen === 'desktop' && currentSlide === 0,
          'bg-services-desk-2': screen === 'desktop' && currentSlide === 1,
          'bg-services-desk-3': screen === 'desktop' && currentSlide === 2,
          'bg-services-desk-4': screen === 'desktop' && currentSlide === 3,
          'bg-services-desk-5': screen === 'desktop' && currentSlide === 4,
        }
      )}
    >
      <Container className="md:grid md:grid-cols-2 md:grid-rows-4">
        {/* */}
        <h2 className="mb-[24px] text-[40px] font-thin uppercase leading-[140%] tracking-[-0.04em] md:mb-[36px] md:text-[67px] md:leading-[100%] xl:mb-[23px] xl:text-[98px]">
          WE <b className="font-medium">OFFER</b>
        </h2>
        {/*  */}
        <p className="mb-[16px] text-right text-[43px] font-thin">
          <span>0{currentSlide + 1}/</span>
          <span className="text-slider">05</span>
        </p>
        {/*  */}
        <Slider
          currentSlide={currentSlide}
          handleChangeCurrentSlide={handleChangeCurrentSlide}
          screen={screen}
        />
      </Container>
    </Section>
  );
};

export default Services;
