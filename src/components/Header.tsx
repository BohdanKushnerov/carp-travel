import React, { FC } from 'react';
import Image from 'next/image';

const Header: FC = () => {
  return (
    <header className="fixed left-1/2 top-0 z-10 flex w-full min-w-320px max-w-[480px] -translate-x-1/2 transform justify-between bg-transparent px-[20px] py-[36px] md:px-0 md:max-w-[704px]">
      <Image src={'/logo.webp'} alt="logo" width={61} height={34} />

      <nav className="hidden md:block">
        <ul className="flex gap-6">
          <li>
            <a
              className="text-[14px] font-normal tracking-[0.1em] text-white"
              href=""
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-[14px] font-normal tracking-[0.1em] text-white"
              href=""
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="text-[14px] font-normal tracking-[0.1em] text-white"
              href=""
            >
              Career
            </a>
          </li>
          <li>
            <a
              className="text-[14px] font-normal tracking-[0.1em] text-white"
              href=""
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              className="text-[14px] font-normal tracking-[0.1em] text-white"
              href=""
            >
              Contacts
            </a>
          </li>
        </ul>
      </nav>
      <button className="text-sm font-normal tracking-wide text-white md:hidden">
        MENU
      </button>
    </header>
  );
};

export default Header;
