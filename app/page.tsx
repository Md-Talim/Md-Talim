import Button from "@/components/Button";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import CopyToClipboard from "@/components/CopyToClipboard";
import ProjectCard from "@/components/ProjectCard";
import SocialLinks from "@/components/SocialLinks";
import { primaryEmail, projects } from "@/constants";
import { Project } from "@/global";
import Link from "next/link";

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
          <h1 className="text-4xl font-medium tracking-tight text-zinc-800 sm:text-5xl">
            I Design & Develop Websites.
          </h1>
          <p className="mt-6 font-normal md:text-xl text-lg text-zinc-600">
            Hello, I&apos;m Talim, a front-end developer. I&apos;m in my final
            year of studying Computer Science Engineering. I focus on creating
            websites that are easy to use and look great. I enjoy paying
            attention to details and always aim to do my best.
          </p>
          <CopyToClipboard text={primaryEmail} />
          <SocialLinks />
        </div>
      </Container>

      <Container className="mt-12">
        <h2 className="text-3xl font-medium tracking-tight text-zinc-800 sm:text-4xl">
          Recent Projects
        </h2>
        <p className="mt-3 md:text-xl text-lg text-zinc-600">
          Projects I&apos;m working on currently.
        </p>
        <div className="mt-8 flex flex-col gap-6">
          {projects.map((project: Project, index) => (
            <>{index < 2 && <ProjectCard key={project.name} {...project} />}</>
          ))}
        </div>
        <Button className="mt-6 flex items-center gap-1">
          <Link href="/projects">
            <p className="lg:text-lg text-base">View all projects</p>
          </Link>
          <ArrowIcon className="h-auto w-2 stroke-zinc-100 group-hover:stroke-zinc-200" />
        </Button>
      </Container>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
};

export default Home;
