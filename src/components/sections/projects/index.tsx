import { SectionHeader } from "@/components/utils";
import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";

export const ProjectsSection = () => (
  <section id="projects" className="section-wrapper">
    <SectionHeader title="Projects" dir="r" />

    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </section>
);
