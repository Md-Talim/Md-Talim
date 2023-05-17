import { GithubIcon, LinkIcon } from '@/components/icons';
import { projects } from '@/constants';
import Image from 'next/image';

function Work() {
  return (
    <main className='space-y-4 p-8 lg:p-0'>
      <h2 className='text-2xl font-bold'>Projects</h2>
      <section className='mb-8 grid grid-cols-1 gap-8 md:mb-0 md:grid-cols-2'>
        {projects.map((project, index) => (
          <article
            key={index}
            className='flex flex-col gap-2 rounded-xl bg-dark p-4 shadow-xl'
          >
            <Image
              src={project.src}
              alt={project.name}
              className=' rounded-lg'
            />
            <h3 className='text-lg font-bold text-lighter'>{project.name}</h3>
            <p className='flex-1 text-light opacity-80'>
              {project.description}
            </p>
            <div className='mt-4 flex gap-4'>
              <a href={project.codeLink} target='_blank'>
                <GithubIcon />
              </a>
              <a href={project.liveLink} target='_blank'>
                <LinkIcon />
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Work;
