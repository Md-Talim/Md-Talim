"use client";

import { OutlineButton } from "@/components/buttons";
import { Reveal } from "@/components/utils/reveal";

export const HeroSection = () => (
  <section className="overflow-hidden py-24 text-slate-100 md:py-32">
    <div className="relative">
      <div className="pointer-events-none relative z-10 space-y-4">
        <Reveal>
          <h1 className="pointer-events-auto text-4xl font-black text-zinc-100 sm:text-6xl md:text-8xl">
            I'm Talim, a{" "}
            <span className="text-indigo-500">Software Engineer</span>
          </h1>
        </Reveal>
        <Reveal>
          <p className="pointer-events-auto max-w-xl text-sm leading-relaxed text-zinc-300 md:text-base md:leading-relaxed">
            Full-Stack Developer. Studying CS Engineering. Building projects to
            dive deep into tech. Open to internships and always excited to
            connect with like-minded peers!
          </p>
        </Reveal>
        <Reveal>
          <OutlineButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
            className="pointer-events-auto mt-4 !border-indigo-500 bg-indigo-500 !text-lg !font-black text-zinc-100 before:!bg-indigo-700 hover:border-indigo-700 hover:!text-white md:mt-6"
          >
            Contact Me
          </OutlineButton>
        </Reveal>
      </div>
    </div>
  </section>
);
