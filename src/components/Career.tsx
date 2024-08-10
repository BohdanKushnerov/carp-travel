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
        <Container className="md:grid-custom-three-rows md:grid-three-cols-auto xl:grid-cols-auto md:grid md:grid-cols-3 md:grid-rows-3 xl:grid-cols-2 xl:grid-rows-[auto_84px_auto]">
          <h2 className="mb-[24px] text-[40px] font-thin uppercase leading-[140%] tracking-[-0.04em] md:order-1 md:col-span-2 md:mb-[12px] md:h-min md:w-[368px] md:text-[67px] md:leading-[100%] xl:col-span-1 xl:mb-[24px] xl:w-[540px] xl:text-[98px]">
            Choose <b className="font-medium">US</b>
          </h2>
          {/*  */}
          <p className="mb-[36px] ml-auto w-[179px] text-[14px] leading-[143%] md:order-2 md:mb-0 md:w-[221px] md:text-[13px] md:leading-[154%] xl:w-[293px] xl:text-[18px] xl:leading-[133%]">
            Your chance to join our passionate team in Carpathian tourism.
            Seeking talented professionals to share our common mission.
          </p>
          {/*  */}
          <h3 className="mb-[36px] ml-auto w-[179px] text-[30px] uppercase md:order-3 md:col-span-3 md:mb-[56px] md:ml-[80px] md:w-[143px] xl:col-span-1 xl:mb-[45px] xl:ml-[124px] xl:w-[171px] xl:text-[36px] xl:leading-[108%]">
            Why us ?
          </h3>
          {/* */}
          <ul className="flex w-[181px] flex-col gap-[16px] md:order-4 md:mr-[20px] md:w-[225px] md:gap-[24px] xl:order-5 xl:ml-[40px] xl:mr-[24px] xl:w-[562px]">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex flex-col gap-[12px] text-right xl:ml-auto xl:flex-row xl:gap-[24px]"
              >
                {/*  */}
                <h3 className="text-[14px] font-normal leading-[143%] md:text-[16px] md:leading-[125%] xl:text-[18px] xl:leading-[133%]">
                  {benefit.title}
                </h3>
                {/*  */}
                <p className="text-[12px] leading-[167%] xl:w-[285px] xl:text-left xl:leading-[200%]">
                  {benefit.description}
                </p>
              </li>
            ))}
          </ul>
          {/*  */}
          <div className="hidden md:order-5 md:col-span-2 md:block xl:order-4 xl:col-span-1 xl:row-span-2">
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
