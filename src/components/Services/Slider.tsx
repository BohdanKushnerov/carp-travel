'use client';

import Image from 'next/image';
import React, { FC, useEffect, useRef, useState } from 'react';
import SvgIcon from '../common/SvgIcon';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import { AppScreen } from '@/hooks/useResizeWindow';
import useSliderImageSize from '@/hooks/useSliderImageSize';
import clsx from 'clsx';
import { slides } from '@/constants/slides';

interface ISliderProps {
  currentSlide: number;
  handleChangeCurrentSlide: (num: number) => void;
  screen: AppScreen;
  isMounted: boolean;
}

const Slider: FC<ISliderProps> = ({
  currentSlide,
  handleChangeCurrentSlide,
  screen,
  isMounted,
}) => {
  const swiperRef = useRef<SwiperRef>(null);

  const { width: imgWidth, height: imgHeight } = useSliderImageSize(screen);

  const handleSlideChange = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
      handleChangeCurrentSlide(index);
    }
  };

  return (
    <>
      <div className="mx-auto mb-[12px] md:order-3 md:row-span-3 md:mb-0 md:mr-[20px] md:h-[370px] md:w-[463px] xl:row-span-2 xl:h-[429px] xl:w-[607px]">
        <Swiper
          className="w-auto"
          ref={swiperRef}
          modules={[EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={slide => handleChangeCurrentSlide(slide.realIndex)}
          loop={true}
          fadeEffect={{ crossFade: true }}
          effect="fade"
          speed={1000}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {slides.map(slide => (
            <SwiperSlide key={slide.slide}>
              {isMounted && (
                <Image
                  width={imgWidth}
                  height={imgHeight}
                  src={slide.image[screen]}
                  alt={slide.subtitle}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <ul className="mb-[34px] flex h-min flex-col gap-4 md:order-4 md:mb-[25px] xl:mb-0 xl:mr-[60px] xl:w-[252px] xl:gap-6">
        {/*  */}
        {slides.map(slide => (
          <li
            key={slide.slide}
            onClick={() => handleSlideChange(slide.slide - 1)}
            className="flex cursor-pointer items-center gap-2 text-[20px] font-medium uppercase leading-[85%] hover:text-gold focus:text-gold md:text-[22px] md:leading-[82%] xl:text-[28px] xl:leading-[86%]"
          >
            {currentSlide === slide.slide - 1 && (
              <SvgIcon
                className="fill-white"
                width={6}
                height={6}
                iconPath="/sprite.svg#icon-rectangle"
              />
            )}
            <p
              className={clsx(
                slide.slide - 1 !== currentSlide && 'font-extralight opacity-50'
              )}
            >
              {slide.activity}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Slider;
