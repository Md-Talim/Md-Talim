'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="container mx-auto flex w-full flex-col items-center justify-between gap-10 space-y-8 pt-20 text-center sm:flex-row md:text-left lg:px-16 lg:pt-40">
      <div>
        <motion.header
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <h1 className="max-w-[25ch] text-3xl leading-tight md:text-4xl lg:text-6xl">
            Hi, I&apos;m Talim.
            <br /> A Front-End{' '}
            <span className="font-bold text-primary">Developer</span>,
            <br /> UI <span className="font-bold text-primary">Designer</span>,
            building good things for the web.
          </h1>
        </motion.header>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/contact"
            className="mt-5 inline-block rounded-full bg-primary px-12 py-4 text-xl font-bold text-white md:mt-10 md:px-16 md:py-6"
          >
            Get in touch
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Image
          src="/hero.svg"
          alt="web developer"
          width="400"
          height="400"
          className="relative max-w-full"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
