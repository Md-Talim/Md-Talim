import { projects } from '../constants';

const Work = () => {
  return (
    <section className='space-y-4'>
      <h2 className='text-2xl font-bold'>Projects</h2>
      <section className='grid grid-cols-2 gap-8'>
        {projects.map((project, index) => (
          <article
            key={index}
            className='flex flex-col gap-2 rounded-xl bg-white p-4 shadow-xl'
          >
            <img src={project.src} alt={project.name} className=' rounded-lg' />
            <h3 className='text-lg'>{project.name}</h3>
            <p className='text-dark opacity-80'>{project.description}</p>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Work;
