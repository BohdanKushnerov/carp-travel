import React from 'react';
import Section from './Section';
import Container from './Container';
import Form from './Form/Form';

const benefits = [
  {
    title: 'Professional development',
    description:
      'We offer growth opportunities and a creative environment to nurture your talents.',
  },
  {
    title: 'Teamwork',
    description:
      'Join our close-knit family, where support and inspiration abound.',
  },
  {
    title: 'Stimulating work environment',
    description: 'Flexibility and remote options for a comfortable experience.',
  },
  {
    title: 'Exciting challenges',
    description:
      'Unleash your potential through unforgettable projects showcasing Carpathian beauty.',
  },
];

const Career = () => {
  return (
    <Section className="px-0 md:bg-[url('/bcg-images/form-ex.png')] md:bg-cover md:bg-center md:bg-no-repeat">
      <div className="w-full border-none bg-[url('/bcg-images/form-ex.png')] bg-cover bg-center bg-no-repeat px-[20px] py-[56px] outline-none md:bg-none md:px-0">
        <Container className="md:grid-custom-three-rows md:grid-three-cols-auto md:grid md:grid-cols-3 md:grid-rows-3">
          <h2 className="mb-[24px] text-[40px] font-thin uppercase leading-[140%] tracking-[-0.04em] md:order-1 md:col-span-2 md:mb-[12px] md:h-min md:w-[368px] md:text-[67px] md:leading-[100%] xl:text-[98px]">
            Choose <b className="font-medium">US</b>
          </h2>
          {/*  */}
          <p className="mb-[36px] ml-auto w-[179px] text-[14px] leading-[143%] md:order-2 md:mb-0 md:w-[221px] md:text-[13px] md:leading-[154%] xl:text-[18px] xl:leading-[133%]">
            Your chance to join our passionate team in Carpathian tourism.
            Seeking talented professionals to share our common mission.
          </p>
          {/*  */}
          <h3 className="mb-[36px] ml-auto w-[179px] text-[30px] uppercase md:order-3 md:col-span-3 md:mb-[56px] md:ml-[80px] md:w-[143px]">
            Why us ?
          </h3>
          {/* */}
          <ul className="flex w-[181px] flex-col gap-[16px] md:order-4 md:mr-[20px] md:w-[225px] md:gap-[24px]">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex flex-col gap-[12px] text-right">
                <h3 className="text-[14px] font-normal leading-[143%] md:text-[16px] md:leading-[125%]">
                  {benefit.title}
                </h3>
                <p className="text-[12px] leading-[167%]">
                  {benefit.description}
                </p>
              </li>
            ))}
          </ul>
          {/*  */}
          <div className="hidden md:order-5 md:col-span-2 md:block">
            <Form />
          </div>
        </Container>
      </div>

      <Section className="bg-[url('/bcg-images/form-ex.png')] bg-cover bg-center bg-no-repeat py-[56px] md:hidden md:bg-none">
        <Container className="">
          <Form />
        </Container>
      </Section>
    </Section>
  );
};

export default Career;
