'use client';

import React, { FC } from 'react';
import { Link } from 'react-scroll';

interface INavLinkProps {
  href: string;
  label: string;
}

const NavLink: FC<INavLinkProps> = ({ href, label }) => {
  return (
    <li>
      <Link
        className="hover:custom-text-shadow focus:custom-text-shadow relative inline-block text-[18px] font-normal tracking-[0.1em] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-200 after:transition-all after:duration-300 after:content-[''] hover:after:w-full focus:after:w-full md:text-[14px] cursor-pointer"
        to={href}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavLink;
