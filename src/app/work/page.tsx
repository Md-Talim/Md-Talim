import { GithubIcon, LinkIcon } from '@/components/icons';
import { projects } from '@/constants';
import Image from 'next/image';

function Work() {
  return (
    <main className="mb-8 px-8 lg:px-16">
      <section className="space-y-8">
        <h2 className="font text-4xl font-medium">Things I have build</h2>
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={index}
              className="space-y-8 rounded-xl bg-light p-4 shadow-lg md:p-6 lg:p-8"
            >
              <Image
                src={project.src}
                alt={project.name}
                className="rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold">{project.name}</h3>
                <p className="opacity-80">{project.description}</p>
                <div className="mt-4 flex gap-4">
                  <a href={project.codeLink} target="_blank">
                    <GithubIcon />
                  </a>
                  <a href={project.liveLink} target="_blank">
                    <LinkIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}

export default Work;
