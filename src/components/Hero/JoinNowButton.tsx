'use client';

import React from 'react';
import SvgIcon from '../common/SvgIcon';
import { scrollToSection } from '@/utils/scrollToSection';

const JoinNowButton = () => {
  return (
    <button
      className="custom-transition-colors relative flex h-[53px] w-[280px] items-center justify-center bg-white/10 px-[64px] py-[18px] text-center text-[18px] font-bold leading-[267%] hover:cursor-pointer hover:bg-white/20 focus:bg-white/20 md:ml-auto md:h-[50px] md:w-[230px] md:p-[14px] xl:h-[71px] xl:w-[293px] xl:p-[16px] xl:text-[32px]"
      onClick={() => scrollToSection('contacts')}
    >
      JOIN NOW
      <SvgIcon
        className="absolute left-0 top-0 fill-white md:hidden"
        width={42}
        height={53}
        iconPath="/sprite.svg#icon-mobile-left-btn"
      />
      <SvgIcon
        className="absolute right-0 top-0 z-10 fill-white md:hidden"
        width={42}
        height={53}
        iconPath="/sprite.svg#icon-mobile-right-btn"
      />
      <SvgIcon
        className="absolute left-0 top-0 hidden fill-white md:block xl:hidden"
        width={35}
        height={50}
        iconPath="/sprite.svg#icon-tablet-left-btn"
      />
      <SvgIcon
        className="absolute right-0 top-0 z-10 hidden fill-white md:block xl:hidden"
        width={35}
        height={50}
        iconPath="/sprite.svg#icon-tablet-right-btn"
      />
      <SvgIcon
        className="absolute left-0 top-0 hidden fill-white xl:block"
        width={44}
        height={71}
        iconPath="/sprite.svg#icon-desktop-left-btn"
      />
      <SvgIcon
        className="absolute right-0 top-0 z-10 hidden fill-white xl:block"
        width={44}
        height={71}
        iconPath="/sprite.svg#icon-desktop-right-btn"
      />
    </button>
  );
};

export default JoinNowButton;
