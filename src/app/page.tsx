import Button from '@/components/Button';
import ContactSection from '@/components/ContactSection';
import Container from '@/components/Container';
import CopyToClipboard from '@/components/CopyToClipboard';
import ProjectCard from '@/components/ProjectCard';
import SocialLinks from '@/components/SocialLinks';
import { projects } from '@/constants';
import { Project } from '@/global';
import Link from 'next/link';

const ArrowIcon = (props: { className: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fillRule="evenodd"
      d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Home = () => {
  return (
    <>
      <Container className="mt-16 sm:mt-32" id="about">
        <div className="max-w-3xl max-sm:text-center">
          <h1 className="text-4xl font-bold text-zinc-800 sm:text-5xl">
            I Design & Develop Websites.
          </h1>
          <p className="mt-6 lg:text-2xl font-medium md:text-xl text-lg text-zinc-600">
            I&apos;m Talim, a frontend developer and user interface designer.
            I&apos;m a final-year student pursuing a diploma in Computer Science
            Engineering.
          </p>
          <CopyToClipboard text="md.talim@skiff.com" />
          <SocialLinks />
        </div>
      </Container>

      <Container className="mt-12">
        <h2 className="text-3xl font-semibold text-zinc-800 sm:text-4xl">
          Recent Projects
        </h2>
        <p className="mt-3 lg:text-2xl md:text-xl text-lg text-zinc-600">
          Projects I&apos;m working on currently.
        </p>
        <div className="mt-8 flex flex-col gap-6">
          {projects.map((project: Project, index) => (
            <>{index < 2 && <ProjectCard key={project.name} {...project} />}</>
          ))}
        </div>
        <Button className="mt-6 flex">
          <Link href="/projects" className="text-sm">
            View all projects
          </Link>
          <ArrowIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700" />
        </Button>
      </Container>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
};

export default Home;
