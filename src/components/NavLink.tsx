'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface Props {
  link: string;
  name: string;
}

const NavLink = ({ link, name }: Props) => {
  const pathName = usePathname();

  return (
    <Link
      className={
        pathName === link
          ? 'rounded-full bg-primary px-6 py-2 font-bold text-lighter transition-[padding] hover:px-8'
          : 'rounded-full bg-light px-6 py-2 transition-[padding] hover:px-8'
      }
      href={link}
    >
      {name}
    </Link>
  );
};

export default NavLink;
