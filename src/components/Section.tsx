import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface ISection {
  className: string;
  children: ReactNode;
}

const Section: FC<ISection> = ({ className, children, ...rest }) => {
  return (
    <section
      className={clsx('w-full px-[20px] md:px-[32px]', className)}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Section;
