import { FC } from 'react';
import Image from 'next/image';
import Nav from './Nav/Nav';
import MobileMenu from './Nav/MobileMenu';
import Container from './Container';

const Header: FC = () => {
  return (
    <header className="absolute left-1/2 top-0 z-10 w-full -translate-x-1/2 transform bg-transparent px-[20px] md:px-[32px] xl:px-[80px]">
      <Container className="flex items-center justify-between pt-[24px]">
        <Image
          className="h-auto w-auto"
          src={'/logo.webp'}
          alt="logo"
          width={61}
          height={34}
        />

        <Nav className="hidden md:block" />
        <MobileMenu />
      </Container>
    </header>
  );
};

export default Header;
