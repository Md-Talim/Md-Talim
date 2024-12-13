"use client";

import { OutlineButton } from "@/components/buttons";
import { GitHubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import { contact } from "@/data/links";
import Link from "next/link";

const SocialLinks = () => (
  <div className="flex items-center gap-4 text-lg">
    <Link
      className="text-zinc-300 transition-colors hover:text-indigo-300"
      href={contact["github"]}
      target="_blank"
      rel="nofollow"
    >
      <GitHubIcon />
    </Link>
    <Link
      className="text-zinc-300 transition-colors hover:text-indigo-300"
      href={contact["linkedin"]}
      target="_blank"
      rel="nofollow"
    >
      <LinkedinIcon />
    </Link>
    <Link
      className="text-zinc-300 transition-colors hover:text-indigo-300"
      href={contact["gmail"]}
      target="_blank"
      rel="nofollow"
    >
      <MailIcon />
    </Link>
  </div>
);

export const Header = () => (
  <header className="sticky top-0 z-20 flex h-[72px] items-center justify-between bg-zinc-900/50 px-4 backdrop-blur-md">
    <SocialLinks />
    <OutlineButton onClick={() => window.open("/resume.pdf")}>
      My Resume
    </OutlineButton>
  </header>
);
