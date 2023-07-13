'use client';

import NavLink from './NavLink';
import { HomeIcon, ProjectIcon } from './icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

const NavBar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="w-full"
    >
      <div className="mx-auto flex items-center justify-between p-8 lg:px-16">
        <Link href="/" className="text-xl font-bold tracking-wide">
          tALIM
        </Link>
        <ul className="flex flex-row gap-4">
          <li>
            <NavLink link="/" name="Home" />
          </li>
          <li>
            <NavLink link="/work" name="Work" />
          </li>
          <li>
            <NavLink link="/contact" name="Contact" />
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default NavBar;
