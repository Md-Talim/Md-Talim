import { JSX } from "react";

export interface Project {
  codeLink: string;
  description: string;
  imgSrc: string;
  modalContent: JSX.Element;
  projectLink: string;
  tags: string[];
  title: string;
}
