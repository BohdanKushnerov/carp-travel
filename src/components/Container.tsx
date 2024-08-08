import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';

interface IContainerProps {
  className: string;
  children: ReactNode;
}

const Container: FC<IContainerProps> = ({ className, children }) => {
  return (
    <div
      className={clsx(
        'mx-auto w-full max-w-[440px] md:max-w-[704px] xl:max-w-[1120px]',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
