'use client';

import Section from '../Section';
import Container from '../Container';
import Slider from './Slider';
import { useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';
import useResizeWindow from '@/hooks/useResizeWindow';
import { slides } from '@/constants/slides';

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const screen = useResizeWindow(768, 1280);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChangeCurrentSlide = useCallback((num: number) => {
    setCurrentSlide(num);
  }, []);

  return (
    <Section
      className={clsx(
        'bg-cover bg-center bg-no-repeat py-[56px] transition-all duration-500 ease-in-out',
        {
          'bg-services-mob-1':
            isMounted && screen === 'mobile' && currentSlide === 0,
          'bg-services-mob-2':
            isMounted && screen === 'mobile' && currentSlide === 1,
          'bg-services-mob-3':
            isMounted && screen === 'mobile' && currentSlide === 2,
          'bg-services-mob-4':
            isMounted && screen === 'mobile' && currentSlide === 3,
          'bg-services-mob-5':
            isMounted && screen === 'mobile' && currentSlide === 4,
          'bg-services-tab-1':
            isMounted && screen === 'tablet' && currentSlide === 0,
          'bg-services-tab-2':
            isMounted && screen === 'tablet' && currentSlide === 1,
          'bg-services-tab-3':
            isMounted && screen === 'tablet' && currentSlide === 2,
          'bg-services-tab-4':
            isMounted && screen === 'tablet' && currentSlide === 3,
          'bg-services-tab-5':
            isMounted && screen === 'tablet' && currentSlide === 4,
          'bg-services-desk-1':
            isMounted && screen === 'desktop' && currentSlide === 0,
          'bg-services-desk-2':
            isMounted && screen === 'desktop' && currentSlide === 1,
          'bg-services-desk-3':
            isMounted && screen === 'desktop' && currentSlide === 2,
          'bg-services-desk-4':
            isMounted && screen === 'desktop' && currentSlide === 3,
          'bg-services-desk-5':
            isMounted && screen === 'desktop' && currentSlide === 4,
        }
      )}
    >
      <Container className="md:grid-cols-auto md:grid-custom-four-rows xl:grid-three-cols-auto xl:grid-custom-three-rows md:grid md:grid-cols-2 md:grid-rows-4 xl:grid-cols-3 xl:grid-rows-3">
        {/*  */}
        <h2 className="mb-[24px] text-[40px] font-thin uppercase leading-[140%] tracking-[-0.04em] md:order-1 md:mb-[36px] md:text-[67px] md:leading-[100%] xl:mb-[23px] xl:text-[98px]">
          WE <b className="font-medium">OFFER</b>
        </h2>
        {/*  */}
        <p className="mb-[16px] text-right text-[43px] font-thin md:order-2 md:mb-[40px] md:text-left md:text-[67px] md:leading-[116%] xl:col-span-2 xl:mb-[20px] xl:text-[98px]">
          <span>0{currentSlide + 1}/</span>
          <span className="text-slider">05</span>
        </p>
        {/*  */}
        <Slider
          currentSlide={currentSlide}
          handleChangeCurrentSlide={handleChangeCurrentSlide}
          screen={screen}
          isMounted={isMounted}
        />

        {/*  */}
        {isMounted && (
          <h3
            className={clsx(
              'mb-[24px] ml-auto text-right text-[12px] leading-[200%] tracking-[0.2em] md:order-5 md:mb-[34px] xl:mb-0 xl:w-full xl:text-left',
              {
                'pt-0': screen === 'desktop' && currentSlide === 0,
                'pt-[43px]': screen === 'desktop' && currentSlide === 1,
                'pt-[91px]': screen === 'desktop' && currentSlide === 2,
                'pt-[163px]': screen === 'desktop' && currentSlide === 3,
                'pt-[211px]': screen === 'desktop' && currentSlide === 4,
              }
            )}
          >
            {slides[currentSlide].subtitle}
          </h3>
        )}

        {/* */}
        <p className="text-[14px] leading-[143%] md:order-6 md:mt-auto md:text-[13px] md:leading-[154%] xl:col-start-3 xl:row-start-3 xl:mt-auto xl:w-[293px] xl:text-[18px] xl:leading-[133%]">
          {slides[currentSlide].description}
        </p>
      </Container>
    </Section>
  );
};

export default Services;
