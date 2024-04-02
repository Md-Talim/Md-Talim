import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import { Project, SocialLink } from "@/global";
import {
  carszone,
  gameshub,
  jotiondocs,
  nextbird,
  searchx,
  shoeStore,
  wordGame,
} from "@/images";

export const projects: Project[] = [
  {
    name: "Jotion Docs",
    imageSrc: jotiondocs,
    codeLink: "https://github.com/Md-Talim/jotion-docs",
    liveLink: "https://jotion-docs.vercel.app/",
    description:
      "A full stack Notion Clone app. Easily create and share documents. Jotion is the workspace where better, faster work happens.",
  },
  {
    name: "Word Game",
    imageSrc: wordGame,
    codeLink: "https://github.com/Md-Talim/wordle-game-clone",
    liveLink: "https://wordle-game-guess.vercel.app/",
    description:
      "The Wordle game clone. Guess the right word within 5 guesses. Built with React + TypeScript.",
  },
  {
    name: "Games Hub",
    imageSrc: gameshub,
    codeLink: "https://github.com/Md-Talim/game-hub",
    liveLink: "http://gameshub-rho.vercel.app/",
    description:
      "A dynamic game showcase platform designed to provide detailed information about various games. A place for gamers to find their favourite games.",
  },
  {
    name: "Carszone",
    imageSrc: carszone,
    codeLink: "https://github.com/Md-Talim/carszone",
    liveLink: "https://carszone.vercel.app/",
    description:
      "An intuitive car showcase project offering comprehensive vehicle details. A place for car lovers to find their favourite cars.",
  },
  {
    name: "NextBird",
    imageSrc: nextbird,
    codeLink: "https://github.com/Md-Talim/nextbird",
    liveLink: "https://nextbird.vercel.app/",
    description:
      "A full-stack Twitter Clone with user authentication via Google and GitHub, a dynamic social platform using Next.js and MongoDB.",
  },
  {
    name: "Nike Landing Page",
    imageSrc: shoeStore,
    codeLink: "https://github.com/Md-Talim/shoe-store",
    liveLink: "https://shoe-store-alpha.vercel.app/",
    description:
      "Landing page for a shoe store. It includes an awesome hero section, a special offers section as well as a newsletter section.",
  },
  {
    name: "SearchX",
    imageSrc: searchx,
    codeLink: "https://github.com/Md-Talim/search-x",
    liveLink: "https://searchx-seven.vercel.app/",
    description:
      "A dynamic search engine project crafted with Next.js and Tailwind CSS, powered by Google's official API",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Connect on LinkedIn",
    link: "https://www.linkedin.com/in/md-talim/",
    icon: LinkedInIcon,
  },
  {
    label: "Follow on GitHub",
    link: "https://github.com/md-talim",
    icon: GitHubIcon,
  },
];

export const primaryEmail = "the.mohd.talim@gmail.com";
