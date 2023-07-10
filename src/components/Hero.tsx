'use client';

import Button from '@/components/Button';
import Header from '@/components/Header';
import { contacts } from '@/constants';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="space-y-4">
      <Header />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="max-w-[60ch] text-lg tracking-wide"
      >
        Hey, I&apos;m Talim. A Computer Science Student at{' '}
        <span className="font-bold">Govt. Polytechnic College, Indri</span>
        .
        <br />I am a beginner front-end engineer with experience in{' '}
        <span className="bg-primary font-bold text-lighter">
          React
        </span> and{' '}
        <span className="bg-primary font-bold text-lighter">TailwindCSS</span>.
        I have a passion for creating beautiful and functional user interfaces
        and am eager to continue learning and growing in the field.
      </motion.p>
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
