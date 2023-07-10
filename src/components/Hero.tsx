'use client';

import Header from '@/components/Header';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="space-y-8 px-16 pt-40">
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link
          href="/contact"
          className="mt-10 inline-block rounded-full bg-primary px-16 py-6 text-xl font-bold text-white"
        >
          Get in touch
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
