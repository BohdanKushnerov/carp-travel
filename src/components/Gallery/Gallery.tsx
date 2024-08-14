import React from 'react';
import Section from '../Section';
import Container from '../Container';
import Image from 'next/image';
import Slider from './Slider';

const Gallery = () => {
  return (
    <Section className="bg-gallery-mob bg-cover bg-center bg-no-repeat py-[56px]">
      <Container className="">
        <h2 className="mb-[24px] text-[40px] font-thin uppercase leading-[140%] tracking-[-0.04em] md:mb-[72px] md:text-center md:text-[67px] md:leading-[100%] xl:col-span-1 xl:mb-[24px] xl:w-[540px] xl:text-[98px]">
          OUR <b className="font-medium">GALLERY </b>
        </h2>
        <ul className="mx-auto flex min-w-[280px] max-w-[440px] flex-col gap-[24px] md:hidden">
          <li className="">
            <Image
              className="h-auto w-full"
              src="/bcg-images/gallery/slider/one.webp"
              alt="high-angle-shot-beautiful-mountainous-landscape-with-hills-cloudy-sky"
              width={280}
              height={187}
            />
          </li>
          <li>
            <Image
              className="h-auto w-full"
              src="/bcg-images/gallery/slider/two.webp"
              alt="breathtaking-view-lake-high-carpathian-mountains"
              width={280}
              height={187}
            />
          </li>
          <li>
            <Image
              className="h-auto w-full"
              src="/bcg-images/gallery/slider/three.webp"
              alt="aleksandr-paramonov-l8LzIWmfZdY-unsplash"
              width={280}
              height={187}
            />
          </li>
        </ul>

        <Slider />
      </Container>
    </Section>
  );
};

export default Gallery;
