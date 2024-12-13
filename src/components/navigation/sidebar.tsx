"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { SidebarLink } from "./sidebar-link";

export const Sidebar = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        setSelected(entry.target.id);
      });
    };

    const observer = new IntersectionObserver(callback, options);
    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <motion.nav
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="no-scrollbar sticky left-0 top-0 z-20 flex h-screen flex-col items-center overflow-y-scroll bg-zinc-950"
    >
      <span className="my-4 flex size-10 shrink-0 items-center justify-center text-xl font-black leading-[1]">
        M<span className="text-indigo-500">.</span>
      </span>

      <SidebarLink
        href="#about"
        label="About"
        selected={selected}
        setSelected={setSelected}
      />
    </motion.nav>
  );
};
