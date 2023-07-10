'use client';

import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <h1 className="text-3xl leading-tight md:text-4xl lg:max-w-5xl lg:text-6xl">
        Hi, I&apos;m Talim.
        <br /> A Front-End{' '}
        <span className="font-bold text-primary">Developer</span>,
        <br /> UI <span className="font-bold text-primary">Designer</span>,
        building good things for the web.
      </h1>
    </motion.header>
  );
};

export default Header;
