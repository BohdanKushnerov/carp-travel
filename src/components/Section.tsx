import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface ISection {
  className: string;
  children: ReactNode;
}

const Section: FC<ISection> = ({ className, children, ...rest }) => {
  return (
    <section
      className={clsx(
        className,
        'w-full border-none px-[20px] outline-none md:px-[32px] xl:px-[80px]'
      )}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Section;
