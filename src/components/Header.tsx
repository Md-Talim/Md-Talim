'use client';

import { motion } from 'framer-motion';
const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="space-y-2 overflow-hidden"
    >
      <p>Hi, my name is</p>
      <h1 className="flex flex-col gap-2 text-3xl text-lighter md:gap-4 md:text-4xl lg:text-6xl">
        Mohammad Talim.
        <span className="block">I build things for the web.</span>
      </h1>
      <p>CSE Student, Front-end Engineer.</p>
    </motion.header>
  );
};

export default Header;
