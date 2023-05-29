import { StaticImageData } from 'next/image';
import { gameshub, searchx } from '../assets';
import { GithubIcon, GmailIcon, LinkedinIcon } from '../components/icons';

interface Contact {
  name: string;
  link: string;
  icon: () => JSX.Element;
}

const contacts: Contact[] = [
  {
    name: 'Github',
    link: 'https://www.github.com/Md-Talim/',
    icon: GithubIcon,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/md-talim/',
    icon: LinkedinIcon,
  },
  {
    name: 'Gmail',
    link: 'mailto:mohd.talim.work@gmail.com',
    icon: GmailIcon,
  },
];

interface Project {
  name: string;
  src: StaticImageData;
  description: string;
  codeLink: string;
  liveLink: string;
}

const projects: Project[] = [
  {
    name: 'Games Hub',
    src: gameshub,
    description:
      'Games Hub is a games database. It is powered by raw games api.',
    codeLink: 'https://www.github.com/md-talim/game-hub/',
    liveLink: 'https://gameshub-rho.vercel.app/',
  },
  {
    name: 'Search X',
    src: searchx,
    description:
      'Search X is a search engine. It uses the progammable search engine api from Google.',
    codeLink: 'https://www.github.com/md-talim/search-x/',
    liveLink: 'https://searchx-seven.vercel.app/',
  },
];

export { contacts, projects };
