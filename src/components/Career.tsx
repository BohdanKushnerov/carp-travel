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
    <Section className="px-0">
      <Section className="bg-[url('/bcg-images/form-ex.png')] bg-cover bg-center bg-no-repeat py-[56px]">
        <Container className="">
          <h2 className="mb-[24px] text-[40px] font-thin uppercase leading-[140%] tracking-[-0.04em] md:text-[67px] md:leading-[100%] xl:text-[98px]">
            Choose <b className="font-medium">US</b>
          </h2>
          {/*  */}
          <p className="mb-[36px] ml-auto w-[179px] text-[14px] leading-[143%] md:text-[13px] md:leading-[154%] xl:text-[18px] xl:leading-[133%]">
            Your chance to join our passionate team in Carpathian tourism.
            Seeking talented professionals to share our common mission.
          </p>
          {/*  */}
          <h3 className="mb-[36px] ml-auto w-[179px] text-[30px] uppercase">
            Why us ?
          </h3>
          {/*  */}
          <ul className="flex w-[181px] flex-col gap-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex flex-col gap-2 text-right">
                <h3 className="text-[14px] font-normal leading-[143%]">
                  {benefit.title}
                </h3>
                <p className="text-[12px] leading-[167%]">
                  {benefit.description}
                </p>
              </li>
            ))}
          </ul>
          {/*  */}
        </Container>
      </Section>

      <Section className="bg-[url('/bcg-images/form-ex.png')] bg-cover bg-center bg-no-repeat py-[56px]">
        <Container className="">
          <p className="mb-[24px] ml-auto w-[179px] text-[14px] leading-[143%] md:text-[13px] md:leading-[154%] xl:text-[18px] xl:leading-[133%]">
            Don't miss your opportunity! Fill out the form right now and join
            our team!
          </p>
          <Form />
        </Container>
      </Section>
    </Section>
  );
};

export default Career;
