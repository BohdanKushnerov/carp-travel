'use client';

import Image from 'next/image';
import React, { FC, useEffect, useRef, useState } from 'react';
import SvgIcon from '../SvgIcon';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import { AppScreen } from '@/hooks/useResizeWindow';
import useSliderImageSize from '@/hooks/useSliderImageSize';

const slides = [
  {
    subtitle: 'Feel the adrenaline rush',
    slide: 1,
    image: {
      mobile: '/slider/mobile/slide-1.webp',
      tablet: '/slider/tablet/slide-1.webp',
      desktop: '/slider/desktop/slide-1.webp',
    },
    activity: 'ATVs Traveling',
    description:
      'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
  },
  {
    subtitle: 'Destroy your limitations',
    slide: 2,
    image: {
      mobile: '/slider/mobile/slide-2.webp',
      tablet: '/slider/tablet/slide-2.webp',
      desktop: '/slider/desktop/slide-2.webp',
    },
    activity: 'Skydiving',
    description:
      "Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird's eye view forever.",
  },
  {
    subtitle: 'Get Inspired',
    slide: 3,
    image: {
      mobile: '/slider/mobile/slide-3.webp',
      tablet: '/slider/tablet/slide-3.webp',
      desktop: '/slider/desktop/slide-3.webp',
    },
    activity: 'Hot Air Ballooning',
    description:
      'Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.',
  },
  {
    subtitle: 'Overcome your fears',
    slide: 4,
    image: {
      mobile: '/slider/mobile/slide-4.webp',
      tablet: '/slider/tablet/slide-4.webp',
      desktop: '/slider/desktop/slide-4.webp',
    },
    activity: 'Rock Climbing',
    description:
      'Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.',
  },
  {
    subtitle: 'Trust the flow',
    slide: 5,
    image: {
      mobile: '/slider/mobile/slide-5.webp',
      tablet: '/slider/tablet/slide-5.webp',
      desktop: '/slider/desktop/slide-5.webp',
    },
    activity: 'Rafting',
    description:
      'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
  },
];

interface ISliderProps {
  currentSlide: number;
  handleChangeCurrentSlide: (num: number) => void;
  screen: AppScreen;
}

const Slider: FC<ISliderProps> = ({
  currentSlide,
  handleChangeCurrentSlide,
  screen,
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
      {/* 
            case 'mobile':
        return { width: 280, height: 213 };
      case 'tablet':
        return { width: 463, height: 370 };
      case 'desktop':
      default:
        return { width: 607, height: 429 };
      */}
      <div className="mx-auto mb-[12px] md:h-[370px] md:w-[463px] xl:w-[607px]">
        <Swiper
          // className="w-[280px] md:h-[370px] md:w-[463px] xl:w-[607px]"
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
              <Image
                // className="h-auto w-auto"
                width={imgWidth}
                height={imgHeight}
                src={slide.image[screen]}
                alt={slide.subtitle}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/*  */}
      <h3 className="mb-[24px] ml-auto text-right text-[12px] leading-[200%] tracking-[0.2em]">
        {slides[currentSlide].subtitle}
      </h3>

      <ul className="mb-[34px] flex flex-col gap-4">
        {/*  */}
        {slides.map(slide => (
          <li
            key={slide.slide}
            onClick={() => handleSlideChange(slide.slide - 1)}
            className="flex cursor-pointer items-center gap-2 text-[20px] font-medium uppercase leading-[85%]"
          >
            {currentSlide === slide.slide - 1 && (
              <SvgIcon
                className="fill-white"
                width={6}
                height={6}
                iconPath="/sprite.svg#icon-rectangle"
              />
            )}
            <p>{slide.activity}</p>
          </li>
        ))}
        {/*  */}
      </ul>

      {/*  */}
      <p className="text-[14px] leading-[143%]">
        {slides[currentSlide].description}
      </p>
    </>
  );
};

export default Slider;
