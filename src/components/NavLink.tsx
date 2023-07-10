'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface Props {
  link: string;
  children: ReactNode;
}

const NavLink = ({ link, children }: Props) => {
  const pathName = usePathname();

  return (
    <Link
      className={
        pathName === link
          ? 'flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-lighter transition-[padding] hover:px-8'
          : 'flex items-center gap-2 rounded-full bg-light px-4 py-2 transition-all hover:px-8'
      }
      href={link}
    >
      {children}
    </Link>
  );
};

export default NavLink;
