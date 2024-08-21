'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import clsx from 'clsx';

const slides = [
  {
    subtitle:
      'high-angle-shot-beautiful-mountainous-landscape-with-hills-cloudy-sky',
    slide: 1,
    image: '/bcg-images/gallery/slider/one.webp',
  },
  {
    subtitle: 'breathtaking-view-lake-high-carpathian-mountains',
    slide: 2,
    image: '/bcg-images/gallery/slider/two.webp',
  },
  {
    subtitle: 'aleksandr-paramonov-l8LzIWmfZdY-unsplash',
    slide: 3,
    image: '/bcg-images/gallery/slider/three.webp',
  },
  {
    subtitle:
      'high-angle-shot-beautiful-mountainous-landscape-with-hills-cloudy-sky',
    slide: 4,
    image: '/bcg-images/gallery/slider/one.webp',
  },
  {
    subtitle: 'breathtaking-view-lake-high-carpathian-mountains',
    slide: 5,
    image: '/bcg-images/gallery/slider/two.webp',
  },
  {
    subtitle: 'aleksandr-paramonov-l8LzIWmfZdY-unsplash',
    slide: 6,
    image: '/bcg-images/gallery/slider/three.webp',
  },
];

const Slider = () => {
  return (
    <Swiper
      className="custom-swiper relative flex h-[609px] w-[280px] md:h-[294px] md:w-[704px] xl:h-[429px] xl:w-[1280px]"
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      direction="vertical"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 0,
        slideShadows: false,
      }}
      modules={[EffectCoverflow, Navigation]}
      navigation={{
        nextEl: '.next-button',
        prevEl: '.prev-button',
      }}
      slidesPerView={3}
      spaceBetween={24}
      breakpoints={{
        768: {
          direction: 'horizontal',
          coverflowEffect: {
            stretch: -44,
            depth: 0,
            scale: 0.35,
          },
        },
        1280: {
          direction: 'horizontal',
          coverflowEffect: {
            stretch: -44,
            depth: 0,
            scale: 0.5,
          },
        },
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="custom-swiper-slide">
          {({ isActive }) => (
            <div
              className={clsx(
                'relative h-[187px] w-[280px] md:right-[80px] md:h-[294px] md:w-[415px] xl:h-[429px] xl:w-[606px]',
                {
                  'md:right-[93px] xl:right-[86px]': isActive,
                }
              )}
            >
              <Image
                className="h-full w-full object-cover"
                src={slide.image}
                alt={slide.subtitle}
                width={606}
                height={429}
                priority={true}
              />
            </div>
          )}
        </SwiperSlide>
      ))}
      <button
        type="button"
        className="prev-button custom-transition-all hidden uppercase outline-none hover:scale-105 hover:text-gold focus:scale-105 focus:text-gold md:absolute md:bottom-[17px] md:left-[38px] md:z-10 md:inline-block md:text-[33px] md:font-thin xl:bottom-[-10px] xl:left-[221px]"
      >
        back
      </button>
      <button
        type="button"
        className="next-button custom-transition-all hidden uppercase outline-none hover:scale-105 hover:text-gold focus:scale-105 focus:text-gold md:absolute md:bottom-[17px] md:right-[38px] md:z-10 md:inline-block md:text-[33px] md:font-thin xl:bottom-[-10px] xl:right-[221px]"
      >
        next
      </button>
    </Swiper>
  );
};

export default Slider;
