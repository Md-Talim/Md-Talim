'use client';

import Button from '@/components/Button';
import Header from '@/components/Header';
import { contacts } from '@/constants';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="space-y-8 px-16 py-40">
      <Header />
      <ul className="mt-6 flex flex-col gap-4 md:flex-row">
        {contacts.map((contact, index) => (
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 * (index + 1), duration: 0.2 }}
            key={index}
            className="w-fit"
          >
            <Button {...contact} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Hero;
