'use client';

import Header from '@/components/Header';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="space-y-8 px-16 pt-40">
      <Header />
      <Link
        href="/contact"
        className="mt-10 inline-block rounded-full bg-primary px-16 py-8 text-xl font-bold text-white"
      >
        Get in touch
      </Link>
    </section>
  );
};

export default Hero;
