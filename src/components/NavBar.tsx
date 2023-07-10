'use client';

import Image from 'next/image';
import { logo } from '../assets';
import NavLink from './NavLink';
import { HomeIcon, ProjectIcon } from './icons';
import { motion } from 'framer-motion';

const NavBar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full"
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between p-8 lg:max-w-5xl lg:px-4">
        <Image src={logo} alt="m in cursive" className="aspect-square w-20" />
        <ul className="flex flex-row gap-2">
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
        </ul>
      </div>
    </motion.nav>
  );
};

export default NavBar;
