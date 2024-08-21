import React, { FC } from 'react';
import NavLink from './NavLink';

const navItems = [
  { href: 'about', label: 'About' },
  { href: 'services', label: 'Services' },
  { href: 'career', label: 'Career' },
  { href: 'gallery', label: 'Gallery' },
  { href: 'contacts', label: 'Contacts' },
];

interface INavProps {
  className: string;
}

const Nav: FC<INavProps> = ({ className }) => {
  return (
    <nav className={className}>
      <ul className="flex w-min flex-col gap-12 md:flex-row md:gap-6">
        {navItems.map(item => (
          <NavLink key={item.href} href={item.href} label={item.label} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
