import { StaticImageData } from "next/image";

export interface Project {
  name: string;
  imageSrc: StaticImageData;
  codeLink: string;
  liveLink: string;
  description: string;
}

export interface SocialLink {
  label: string;
  link: string;
  icon: (props: { className: string }) => JSX.Element;
}
