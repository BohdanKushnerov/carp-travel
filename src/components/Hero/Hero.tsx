import React, { FC } from 'react';
import Section from '../common/Section';
import JoinNowButton from './JoinNowButton';
import Container from '../common/Container';
import { sectionNames } from '@/enums/sectionsNames';

const Hero: FC = () => {
  return (
    <Section
      className="bg-hero-mob bg-cover bg-center bg-no-repeat pb-[56px] pt-[105px] md:bg-hero-tab md:pt-[121px] xl:bg-hero-desk xl:pt-[130px]"
      id={sectionNames.Hero}
    >
      <Container className="md:grid-three-rows-auto md:grid md:grid-cols-2 md:grid-rows-3">
        <div className="mb-[24px] ml-auto flex w-[118px] flex-col md:order-2 md:mb-[56px] md:w-[230px] xl:mb-[181px] xl:w-[305px]">
          <h2 className="text-[37px] font-thin leading-[37px] tracking-[0.04em] md:text-[67px] md:leading-[55px] md:tracking-[0.08em] xl:text-[98px] xl:leading-[98px] xl:tracking-[0em]">
            <b className="font-medium">7</b>
            DAYS
          </h2>
          <h3 className="text-right text-[12px] font-light tracking-[0.79em] md:text-[14px] md:tracking-[1.85em] xl:text-[16px] xl:tracking-[2.28em]">
            JOURNEY
          </h3>
        </div>

        <h1 className="mb-[24px] w-auto text-[40px] uppercase leading-[140%] tracking-[-0.04em] md:order-1 md:col-span-1 md:row-span-2 md:mb-[68px] md:text-[67px] md:leading-[100%] xl:mb-[148px] xl:text-[98px]">
          <b className="block font-medium">Uncover</b>
          <span className="block font-thin">Carpathian’s</span>
          <span className="block font-thin">Secrets</span>
        </h1>

        <p className="mb-[24px] w-[157px] text-[10px] leading-[160%] md:order-4 md:col-span-1 md:row-span-1 md:mb-0 md:w-[262px] md:auto-rows-min md:pb-0 md:text-[14px] md:leading-[114%] md:tracking-[0.09em] xl:w-[608px] xl:text-[16px] xl:leading-[150%]">
          Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
        </p>

        <div className="w-[280px] md:order-3 md:col-span-1 md:row-span-2 md:ml-auto md:w-[230px] xl:mt-auto xl:w-[294px]">
          <p className="mb-[24px] text-justify text-[14px] leading-[143%] md:mb-[28px] md:text-[16px] md:leading-[125%] xl:text-[18px] xl:leading-[133%]">
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </p>

          <JoinNowButton />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
