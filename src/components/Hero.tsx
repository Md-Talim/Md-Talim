'use client';

import Header from '@/components/Header';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="space-y-8 pt-20 lg:px-16 lg:pt-40">
      <Header />
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
    </section>
  );
};

export default Hero;
