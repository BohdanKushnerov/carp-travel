import React, { FC } from 'react';

interface INavLinkProps {
  href: string;
  label: string;
}

const NavLink: FC<INavLinkProps> = ({ href, label }) => (
  <li>
    <a
      className="hover:custom-text-shadow focus:custom-text-shadow relative inline-block text-[18px] font-normal tracking-[0.1em] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gray-200 after:transition-all after:duration-300 after:content-[''] hover:after:w-full focus:after:w-full md:text-[14px]"
      href={href}
    >
      {label}
    </a>
  </li>
);

export default NavLink;
