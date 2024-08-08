import Section from './Section';
import Container from './Container';
import Slider from './Slider/Slider';

const Services = () => {
  return (
    <Section className="py-[56px]">
      <Container className="md:grid md:grid-cols-2 md:grid-rows-4">
        {/* */}
        <h2 className="mb-[24px] text-[40px] font-thin uppercase leading-[140%] tracking-[-0.04em] md:mb-[36px] md:text-[67px] md:leading-[100%] xl:mb-[23px] xl:text-[98px]">
          WE <b className="font-medium">OFFER</b>
        </h2>
        {/*  */}
        <Slider />
      </Container>
    </Section>
  );
};

export default Services;
