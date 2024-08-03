import React, { FC } from 'react';
import Section from './Section';

const Hero: FC = () => {
  return (
    <Section className="bg-hero-mobile bg-cover bg-center bg-no-repeat pb-[56px] pt-[105px] md:pt-[121px]">
      <div className="md:grid-custom-rows mx-auto w-full min-w-320px max-w-[440px] md:grid md:max-w-[704px] md:grid-cols-2 md:grid-rows-3">
        <div className="mb-[24px] ml-auto flex w-[118px] flex-col md:order-2 md:mb-[0px] md:w-[230px]">
          <h2 className="text-[37px] font-thin leading-[37px] tracking-[0.04em] text-white md:text-[67px] md:leading-[55px] md:tracking-[0.08em]">
            <span className="font-medium">7</span>
            DAYS
          </h2>
          {/* font-light text-[14px] tracking-[1.85em] text-white */}
          <p className="text-right text-[12px] font-light tracking-[0.79em] text-white md:text-[14px] md:tracking-[1.85em]">
            JOURNEY
          </p>
        </div>
        <h1 className="w-auto pb-[24px] text-[40px] font-medium uppercase leading-[140%] tracking-[-0.04em] text-white md:order-1 md:row-span-2 md:mb-[0px] md:pb-0 md:text-[67px]">
          <span className="block">Uncover</span>
          <span className="block font-thin">Carpathian’s</span>
          <span className="block font-thin">Secrets</span>
        </h1>
        <p className="max-w-157px pb-[24px] text-[10px] font-extralight leading-[160%] text-white md:order-4 md:mt-[68px] md:max-w-[262px] md:auto-rows-min md:pb-0 md:text-[14px] md:leading-[114%] md:tracking-[0.09em]">
          Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
        </p>
        <p className="max-w-280px pb-[24px] text-justify text-[14px] font-extralight leading-[143%] text-white md:order-3 md:ml-auto md:mt-[45px] md:max-w-[230px] md:pb-0 md:text-[16px] md:leading-[125%]">
          We offer you unforgettable trips to the most beautiful parts of the
          Carpathians. Enjoy stunning views, exciting expeditions, and the best
          service!
        </p>
        <button className="flex h-[53px] w-[280px] items-center justify-center border border-dashed border-white bg-white/10 px-[64px] py-[18px] text-center text-[18px] font-bold leading-[267%] text-white md:order-5 md:ml-auto md:mt-auto md:w-[230px]">
          JOIN NOW
        </button>
      </div>
    </Section>
  );
};

export default Hero;
