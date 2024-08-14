'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import {
  EffectCoverflow,
  EffectFade,
  Navigation,
  Pagination,
  Thumbs,
} from 'swiper/modules';
import 'swiper/css';
import useResizeWindow from '@/hooks/useResizeWindow';
import useSliderImageSize from '@/hooks/useSliderImageSize';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
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
  const [isMounted, setIsMounted] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);

  const screen = useResizeWindow(768, 180);
  // const { width: imgWidth, height: imgHeight } = useSliderImageSize(screen);

  // 415/294 === 121/ 86.93
  // 606/429 === 313/225

  console.log('activeSlide', activeSlide);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    //  <Swiper
    //     className="gallery h-[609px] md:h-[295px] xl:h-[430px]"
    //     wrapperTag="ul"
    //     modules={[Navigation]}
    //     centeredSlides={true}
    //     grabCursor={true}
    //     direction={'vertical'}
    //     initialSlide={1}
    //     slidesPerView={3}
    //     spaceBetween={24}
    //     loop={true}
    //     speed={800}
    //     navigation={{
    //       nextEl: '.button-next',
    //       prevEl: '.button-prev',
    //     }}
    //     breakpoints={{
    //       768: {
    //         direction: 'horizontal',
    //       },
    //     }}
    //   >
    //     {data.slides.map(({ img, alt }, index) => (
    //       <SwiperSlide tag="li" key={index} className="gallery-slider">
    //         {({ isActive }) => (
    //           <div
    //             className={`image-wrapper  relative h-[187px] transition-all duration-700 ease-[cubic-bezier(.57,.21,.69,1.25)]
    //             ${
    //               isActive
    //                 ? 'before:hidden md:h-[294px] md:w-[415px] xl:h-[429px] xl:w-[606px]'
    //                 : ' md:h-[87px] md:w-[121px] xl:h-[225px] xl:w-[313px] smOnly:before:hidden'
    //             }  `}
    //           >
    //             <Image
    //               src={img}
    //               alt={alt}
    //               fill
    //               sizes="(max-width: 480px) 280px, (max-width: 1279px) 463px, 606px"
    //               quality={90}
    //               priority
    //               className="object-cover"
    //             />
    //           </div>
    //         )}
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      modules={[EffectCoverflow, Navigation]}
      navigation={{
        nextEl: '.next-button',
        prevEl: '.prev-button',
      }}
      className="relative flex h-[294px] w-[704px] xl:h-[429px]"
      slidesPerView={3}
      spaceBetween={24}
      breakpoints={{
        768: {
          coverflowEffect: {
            rotate: 0,
            stretch: -44,
            depth: 0,
            modifier: 1,
            scale: 0.35,
          },
        },

        1280: {
          coverflowEffect: {
            rotate: 0,
            stretch: -44,
            depth: 0,
            modifier: 1,
            scale: 0.5,
          },
        },
      }}
    >
      {slides.concat(slides).map((slide, index) => (
        <SwiperSlide key={index} className="">
          {({ isActive }) => (
            <div
              className={clsx(
                'wrapper relative right-[80px] h-[294px] w-[415px] xl:h-[429px] xl:w-[606px]',
                {
                  'right-[92px] xl:right-[95px]': isActive,
                }
              )}
            >
              <Image
                src={slide.image}
                alt="View of nature"
                width={606}
                height={429}
                className="w-full"
                priority={true}
              />
            </div>
          )}
        </SwiperSlide>
      ))}
      <button
        type="button"
        className="prev-button outline-none transition hover:scale-105 focus:scale-105 md:absolute md:bottom-[17px] md:left-[38px] md:text-[33px] md:font-thin xl:bottom-[-10px] xl:left-[228px]"
      >
        BACK
      </button>
      <button
        type="button"
        className="next-button outline-none transition hover:scale-105 focus:scale-105 md:absolute md:bottom-[17px] md:right-[38px] md:text-[33px] md:font-thin xl:bottom-[-10px] xl:right-[228px]"
      >
        NEXT
      </button>
    </Swiper>
    // ===============
    // <Swiper
    //   ref={swiperRef}
    //   className="mySwiper relative h-[294px] w-full"
    //   modules={[Navigation, Pagination, EffectCoverflow]}
    //   spaceBetween={28}
    //   centeredSlides={true}
    //   slidesPerView={3}
    //   loop={true}
    //   effect="coverflow"
    //   onSlideChange={swiper => setActiveSlide(swiper.realIndex)}
    //   navigation={{
    //     prevEl: '.my-prev-button',
    //     nextEl: '.my-next-button',
    //   }}
    //   pagination={{ clickable: true }}
    //   grabCursor={true}
    //   coverflowEffect={{
    //     rotate: 0,
    //     stretch: 0,
    //     depth: 150,
    //     modifier: 0.2,
    //     slideShadows: false,
    //   }}
    //   wrapperClass="customWrapper"
    // >
    //   {[...slides].map(slide => (
    //     <SwiperSlide key={slide.slide} className="customSlide">
    //       <div
    //         className={clsx('', {
    //           'md:h-[294px] md:w-[415px]': activeSlide === slide.slide - 1,
    //           'md:h-[86px] md:w-[120px]': activeSlide !== slide.slide - 1,
    //         })}
    //       >
    //         <Image
    //           src={slide.image}
    //           alt={slide.subtitle}
    //           width={606}
    //           height={429}
    //           className="w-full"
    //         />
    //       </div>
    //     </SwiperSlide>
    //   ))}
    //   <button
    //     type="button"
    //     className="my-prev-button outline-none transition hover:scale-105 focus:scale-105 md:absolute md:bottom-[17px] md:left-[50px] md:text-[33px] md:font-thin xl:bottom-[-10px] xl:left-[228px]"
    //   >
    //     BACK
    //   </button>
    //   <button
    //     type="button"
    //     className="my-next-button outline-none transition hover:scale-105 focus:scale-105 md:absolute md:bottom-[17px] md:right-[50px] md:text-[33px] md:font-thin xl:bottom-[-10px] xl:right-[228px]"
    //   >
    //     NEXT
    //   </button>
    // </Swiper>
  );
};

export default Slider;
