import ProjectCard from '@/components/ProjectCard';
import { SimpleLayout } from '@/components/SimpleLayout';
import { projects } from '@/constants';
import { Project } from '@/global';

const Page = () => {
  return (
    <SimpleLayout
      title="Projects I've Created to Make My Mark Online"
      intro="Throughout my journey, I've dabbled in numerous pet projects, but these gems shine the brightest in my collection. Many of them embrace an open-source spirit, encouraging you to delve into the codebase. Should anything resonate with you, feel free to contribute your thoughts and ideas to elevate the experience."
    >
      <div className="flex flex-col gap-6">
        {projects.map((project: Project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </SimpleLayout>
  );
};

export default Page;
