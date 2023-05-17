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
          ? 'flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-lighter transition'
          : 'flex items-center gap-2 rounded-lg px-4 py-2 transition hover:bg-dark hover:text-lighter'
      }
      href={link}
    >
      {children}
    </Link>
  );
};

export default NavLink;
