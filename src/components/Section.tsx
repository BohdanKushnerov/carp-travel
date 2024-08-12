import React, { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
// import clsx from 'clsx';

interface ISection {
  className: string;
  children: ReactNode;
}

const Section: FC<ISection> = ({ className, children, ...rest }) => {
  return (
    <section
      className={twMerge(
        'w-full border-none px-[20px] outline-none md:px-[32px] xl:px-[80px]',
        className
      )}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Section;
