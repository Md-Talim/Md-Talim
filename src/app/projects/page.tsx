import ContactSection from '@/components/ContactSection';
import ProjectCard from '@/components/ProjectCard';
import { SimpleLayout } from '@/components/SimpleLayout';
import { projects } from '@/constants';
import { Project } from '@/global';

const Page = () => {
  return (
    <>
      <SimpleLayout
        title="Projects I've Created"
        intro="Throughout my journey, I've dabbled in numerous pet projects, but these gems shine the brightest in my collection."
      >
        <div className="flex flex-col gap-6">
          {projects.map((project: Project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </SimpleLayout>
      <ContactSection />
    </>
  );
};

export default Page;
