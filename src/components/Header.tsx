'use client';

import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <h1 className="max-w-5xl text-6xl uppercase leading-tight">
        Hi, I&apos;m Talim.
        <br /> A Front-End Developer, UI Designer, building good things for the
        web.
      </h1>
    </motion.header>
  );
};

export default Header;
