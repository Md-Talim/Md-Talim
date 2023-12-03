import { StaticImageData } from 'next/image';

export interface Project {
  name: string;
  imageSrc: StaticImageData;
  codeLink: string;
  liveLink: string;
  description: string;
}
