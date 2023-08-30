'use client';

import { Project } from '@/global';
import Image from 'next/image';
import Button from './Button';

const ProjectCard = ({
  name,
  description,
  codeLink,
  liveLink,
  imageSrc,
}: Project) => {
  return (
    <article className="bg-zinc-50 ring-1 ring-zinc-100 lg:px-8 px-6 max-sm:px-4 py-8 rounded-2xl justify-between flex flex-col-reverse md:flex-row gap-8">
      <div className="flex flex-col max-md:gap-8 justify-between flex-1">
        <div className="flex flex-col gap-1">
          <h2 className="lg:text-3xl text-zinc-800 font-medium text-2xl">
            {name}
          </h2>
          <p className="xl:text-2xl lg:text-xl md:text-base text-lg text-zinc-600 max-w-[50ch]">
            {description}
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            variant="primary"
            onClick={() => window.open(liveLink, '_blank')}
          >
            <p className="lg:text-lg text-base">Live Site</p>
          </Button>
          <Button
            variant="secondary"
            onClick={() => window.open(codeLink, '_blank')}
          >
            <p className="lg:text-lg text-base text-zinc-600">View Code</p>
          </Button>
        </div>
      </div>
      <div className="rounded-xl md:w-[50%]">
        <Image
          src={imageSrc}
          alt={name}
          className="w-full object-contain rounded-xl"
        />
      </div>
    </article>
  );
};

export default ProjectCard;
