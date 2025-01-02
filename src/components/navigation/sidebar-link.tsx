import clsx from "clsx";
import { motion } from "motion/react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface Props {
  href: string;
  label: string;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const MotionLink = motion.create(Link);

export const SidebarLink = ({ href, label, selected, setSelected }: Props) => (
  <MotionLink
    initial={{ x: -70 }}
    animate={{ x: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    href={href}
    onClick={() => setSelected(label.toLowerCase())}
    className={clsx(
      "writing-vertical flex h-24 w-full shrink-0 items-center justify-center border-r-2 text-sm transition-all",
      selected === label.toLowerCase()
        ? "border-indigo-500 bg-zinc-800 opacity-100"
        : "border-transparent opacity-50 hover:border-r-zinc-50 hover:bg-zinc-900",
    )}
  >
    {label}
  </MotionLink>
);
