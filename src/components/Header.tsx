import { FC } from 'react';
import Image from 'next/image';
import Nav from './Nav/Nav';
import MobileMenu from './Nav/MobileMenu';

const Header: FC = () => {
  return (
    <header className="fixed left-1/2 top-0 z-10 flex w-full min-w-320px max-w-[480px] -translate-x-1/2 transform justify-between bg-transparent px-[20px] py-[36px] md:max-w-[704px] md:px-0 xl:max-w-[1120px]">
      <Image src={'/logo.webp'} alt="logo" width={61} height={34} />

      <Nav className="hidden md:block" />
      <MobileMenu />
    </header>
  );
};

export default Header;
