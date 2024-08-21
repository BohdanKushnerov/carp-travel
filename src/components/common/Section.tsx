import React, { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ISection {
  className: string;
  children: ReactNode;
  id?: string;
}

const Section: FC<ISection> = ({ className, children, id }) => {
  return (
    <section
      className={twMerge(
        'xl:px-auto w-full border-none px-[20px] outline-none md:px-[32px]',
        className
      )}
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
