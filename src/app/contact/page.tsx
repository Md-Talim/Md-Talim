'use client';

import { contacts } from '@/constants';
import Button from '@/components/Button';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <main className="px-16 py-40">
      <h2 className="text-3xl md:text-6xl">Let&apos;s work together</h2>
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
    </main>
  );
};

export default Contact;
