import Button from '@/components/Button';
import Container from '@/components/Container';
import CopyToClipboard from '@/components/CopyToClipboard';
import ProjectCard from '@/components/ProjectCard';
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons';
import { projects } from '@/constants';
import { Project } from '@/global';
import Link from 'next/link';

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
      clipRule="evenodd"
    />
  </svg>
);

const SocialLink = ({
  children,
  href,
  label,
}: {
  children: React.ReactNode;
  href: string;
  label: string;
}) => {
  return (
    <Link className="group -m-1 p-1" href={href} aria-label={label}>
      {children}
    </Link>
  );
};

const Home = () => {
  return (
    <>
      <Container className="mt-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-zinc-800 sm:text-5xl">
            I Design & Develop Websites.
          </h1>
          <p className="mt-6 text-xl text-zinc-600">
            I’m Talim, a Frontend developer and user interface designer. I’m
            final year student of Diploma in Computer Science Engineering.
          </p>
          <CopyToClipboard text="mohd.talim.work@gmail.com" />
          <div className="mt-6 flex gap-4">
            <SocialLink
              href="https://github.com/md-talim"
              label="Follow on Twitter"
            >
              <GitHubIcon className="h-8 w-8 fill-zinc-500 transition group-hover:fill-zinc-600" />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/md-talim/"
              label="Follow on Twitter"
            >
              <LinkedInIcon className="h-8 w-8 fill-zinc-500 transition group-hover:fill-zinc-600" />
            </SocialLink>
          </div>
        </div>
      </Container>

      <Container className="mt-12">
        <h2 className="text-3xl font-semibold text-zinc-800 sm:text-4xl">
          Recent Projects
        </h2>
        <p className="mt-3 text-2xl text-zinc-600">
          Projects I&apos;m working on currently.
        </p>
        <div className="mt-8 flex flex-col gap-6">
          {projects.map((project: Project, index) => (
            <>{index < 2 && <ProjectCard key={project.name} {...project} />}</>
          ))}
        </div>
        <Button className="mt-6 flex gap-2">
          <Link href="/projects" className="text-lg">
            View all projects
          </Link>
          <ArrowIcon />
        </Button>
      </Container>
    </>
  );
};

export default Home;
