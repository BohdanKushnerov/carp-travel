import React from 'react';
import Section from './Section';
import Container from './Container';

const About = () => {
  return (
    <Section className="bg-about-mob md:bg-about-tab xl:bg-about-desk bg-cover bg-center bg-no-repeat py-[56px]">
      <Container className="md:grid-custom-three-rows xl:grid-custom-two-rows md:grid-cols-auto md:grid md:grid-cols-2 md:grid-rows-3 xl:grid-rows-2">
        {/*  */}
        <h2 className="order-1 mb-[8px] text-[40px] font-thin uppercase leading-[140%] tracking-[-0.04em] md:mb-0 md:w-[412px] md:text-[67px] md:leading-[100%] xl:w-[606px] xl:text-[98px]">
          WHO <b className="font-medium">WE ARE</b>
        </h2>
        {/*  */}
        <div className="order-2 mb-[40px] w-[180px] text-[14px] leading-[143%] md:row-span-2 md:mb-[64px] md:ml-auto md:w-[220px] md:text-[16px] md:leading-[125%] xl:row-span-1 xl:mb-[72px] xl:ml-[24px] xl:w-[292px] xl:text-[18px] xl:leading-[133%]">
          <p className="mb-[20px] md:mb-[16px] xl:mb-[24px]">
            <strong className="font-normal"> a team of enthusiasts </strong>
            who are fully committed to the mission of creating unforgettable and
            extraordinary trips to the most beautiful parts of the Carpathians.
            Our goal is not just to show you the natural wonders of the
            mountains, but to provide you with a deep immersion in their magical
            atmosphere.
          </p>
          <p>
            <strong className="font-normal">We believe </strong>
            that nature has the power to inspire, strengthen character and
            provide new perspectives. Therefore, each of our tours is aimed at
            unlocking your potential, enriching your spiritual world and
            creating unforgettable memories.
          </p>
        </div>
        {/* */}
        <h3 className="order-3 mb-[40px] ml-auto w-[180px] text-[14px] leading-[143%] md:mb-[64px] md:ml-0 md:mt-auto md:w-[221px] md:text-[16px] md:leading-[125%] xl:order-4 xl:mb-0 xl:ml-auto xl:w-[297px] xl:text-[18px] xl:leading-[133%]">
          <b className="font-normal">
            <span className="block uppercase">From vacationers</span>
            <span className="block text-right uppercase">
              to active travelers
            </span>
          </b>
          <span className="tracking-[-0.01em] md:tracking-[0.02em]">
            we have a tour for everyone.
          </span>
        </h3>
        {/* */}
        <p className="order-4 text-[14px] leading-[143%] md:col-span-2 md:ml-auto md:max-w-[463px] md:text-[16px] md:leading-[125%] xl:order-3 xl:col-span-1 xl:ml-0 xl:mr-auto xl:w-[605px] xl:text-[18px] xl:leading-[133%]">
          <strong className="font-normal">We use methods </strong> that are
          time-tested and proven. Our expert guides with in-depth knowledge of
          the Carpathian landscapes lead you safely through the mysteries of
          these mountains.
        </p>
      </Container>
    </Section>
  );
};

export default About;
