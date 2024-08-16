import React from 'react';
import Section from '../Section';
import Container from '../Container';
import ContactsForm from './ContactsForm';

const Contacts = () => {
  return (
    <Section className="bg-contactsBcg bg-[url('/bcg-images/contacts-ex.png')] bg-cover bg-center bg-no-repeat py-[56px] bg-blend-overlay">
      <Container className="xl:grid-cols-auto xl:grid-custom-two-rows md:grid-custom-three-rows md:grid md:grid-cols-1 md:grid-rows-3 xl:grid-cols-2 xl:grid-rows-2">
        <h2 className="mb-[36px] text-[40px] font-thin uppercase leading-[140%] tracking-[-0.04em] md:text-left md:text-[67px] md:leading-[100%] xl:col-span-2 xl:ml-[24px] xl:text-[98px]">
          Contact <b className="font-medium">us </b>
        </h2>

        {/*  */}
        <div className="md:grid-cols-auto md:grid-custom-two-rows xl:grid-custom-three-rows mb-[12px] md:mb-[64px] md:grid md:grid-cols-2 md:grid-rows-2 xl:ml-[107px] xl:w-[311px] xl:grid-cols-1 xl:grid-rows-3">
          <div className="mb-[24px] flex flex-row justify-end gap-[20px] md:order-1 md:ml-[48px] xl:ml-0">
            <div className="flex flex-col">
              {/*  */}
              <a
                className="text-[14px] font-normal leading-[171%] md:text-[16px] md:leading-[150%] xl:text-[18px] xl:leading-[133%]"
                href="tel:+380981234567"
                rel="noopener noreferrer nofollow"
              >
                +38 (098) 12 34 567
              </a>
              <a
                className="text-[14px] font-normal leading-[171%] md:text-[16px] md:leading-[150%] xl:text-[18px] xl:leading-[133%]"
                href="tel:+380731234567"
                rel="noopener noreferrer nofollow"
              >
                +38 (073) 12 34 567
              </a>
            </div>
            {/* */}
            <p className="text-[12px] leading-[167%] xl:leading-[200%]">
              Phone number
            </p>
          </div>

          {/*  */}
          <div className="mb-[24px] ml-[16px] flex flex-row items-center gap-[20px] md:order-3 xl:order-2 xl:ml-0">
            <a
              className="text-[14px] font-normal leading-[171%] md:text-[16px] md:leading-[150%] xl:text-[18px] xl:leading-[133%]"
              href="mailto:support@carptravel.com"
              rel="noopener noreferrer nofollow"
            >
              support@carptravel.com
            </a>
            <p className="text-[12px] leading-[167%] xl:leading-[200%]">
              E-mail
            </p>
          </div>

          {/*  */}
          <div className="mr-[15px] flex flex-row justify-end gap-[20px] md:order-2 md:row-span-2 md:ml-[90px] md:justify-normal xl:order-3 xl:ml-0 xl:mr-[30px] xl:flex-row-reverse">
            <p className="text-[12px] leading-[167%] xl:leading-[200%]">
              Follow us
            </p>
            <ul>
              <li className="xl:flex xl:justify-end">
                <a
                  className="text-[14px] font-normal leading-[171%] md:text-[16px] md:leading-[150%] xl:text-[18px] xl:leading-[133%]"
                  href="#"
                  rel="noopener noreferrer nofollow"
                >
                  facebook
                </a>
              </li>
              <li className="xl:flex xl:justify-end">
                <a
                  className="text-[14px] font-normal leading-[171%] md:text-[16px] md:leading-[150%] xl:text-[18px] xl:leading-[133%]"
                  href="#"
                  rel="noopener noreferrer nofollow"
                >
                  instagram
                </a>
              </li>
              <li className="xl:flex xl:justify-end">
                <a
                  className="text-[14px] font-normal leading-[171%] md:text-[16px] md:leading-[150%] xl:text-[18px] xl:leading-[133%]"
                  href="#"
                  rel="noopener noreferrer nofollow"
                >
                  youtube
                </a>
              </li>
              <li className="xl:flex xl:justify-end">
                <a
                  className="text-[14px] font-normal leading-[171%] md:text-[16px] md:leading-[150%] xl:text-[18px] xl:leading-[133%]"
                  href="#"
                  rel="noopener noreferrer nofollow"
                >
                  tiktok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <ContactsForm />
      </Container>
    </Section>
  );
};

export default Contacts;
