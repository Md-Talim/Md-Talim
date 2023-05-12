import { GithubIcon, GmailIcon, LinkedinIcon } from '../components/icons';

type contactType = {
  name: string;
  link: string;
  icon: () => JSX.Element;
}[];

const contacts: contactType = [
  {
    name: 'Github',
    link: 'https://www.github.com/Md-Talim/',
    icon: GithubIcon,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/md-talim/',
    icon: GmailIcon,
  },
  {
    name: 'Gmail',
    link: 'mailto:mohd.talim.work@gmail.com',
    icon: LinkedinIcon,
  },
];

export { contacts };
