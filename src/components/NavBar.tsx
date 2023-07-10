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
      transition={{ duration: 0.5, delay: 0.4 }}
      className="w-full"
    >
      <div className="mx-auto flex items-center justify-between p-8 lg:px-16">
        <Link href="/" className="text-xl font-bold tracking-wide">
          tALIM
        </Link>
        <ul className="flex flex-row gap-4">
          <li>
            <NavLink link="/">
              <HomeIcon />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink link="/work">
              <ProjectIcon />
              Work
            </NavLink>
          </li>
          <li>
            <NavLink link="/contact">
              <ProjectIcon />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default NavBar;
