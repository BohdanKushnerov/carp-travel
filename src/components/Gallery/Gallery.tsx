import React from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import Slider from './Slider';
import { sectionNames } from '@/enums/sectionsNames';

const Gallery = () => {
  return (
    <Section
      className="bg-gallery-mob bg-cover bg-center bg-no-repeat py-[56px] xl:px-[0px]"
      id={sectionNames.Gallery}
    >
      <Container className="xl:px-auto xl:max-w-[1280px]">
        <h2 className="mb-[24px] text-[40px] font-thin uppercase leading-[140%] tracking-[-0.04em] md:mb-[72px] md:text-center md:text-[67px] md:leading-[100%] xl:col-span-1 xl:mb-[24px] xl:ml-[23px] xl:w-[633px] xl:text-[98px]">
          OUR <b className="font-medium">GALLERY </b>
        </h2>

        <Slider />
      </Container>
    </Section>
  );
};

export default Gallery;
