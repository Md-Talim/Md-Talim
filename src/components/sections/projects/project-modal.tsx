import { CloseIcon, ExternalLinkIcon, GitHubIcon } from "@/components/icons";
import { Tag } from "@/components/utils";
import { Project } from "@/types/Project";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import ReactDOM from "react-dom";

interface Props extends Project {
  isOpen: boolean;
  setIsOpen: Function;
}

export const ProjectModal = ({ isOpen, setIsOpen, ...project }: Props) => {
  const { codeLink, modalContent, imgSrc, projectLink, tags, title } = project;

  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      body!.style.overflowY = "hidden";
    } else {
      body!.style.overflowY = "scroll";
    }
  }, [isOpen]);

  const content = (
    <div
      className="fixed inset-0 z-50 flex cursor-pointer justify-center overflow-y-scroll bg-zinc-950/50 px-4 py-12 backdrop-blur"
      onClick={() => setIsOpen(false)}
    >
      <button
        className="absolute right-4 top-4 text-xl md:top-6"
        onClick={() => setIsOpen(false)}
      >
        <CloseIcon />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="relative h-fit w-full max-w-2xl cursor-auto overflow-hidden rounded-lg bg-zinc-900 shadow-lg"
      >
        <Image
          src={imgSrc}
          alt={`An image of the ${title} project.`}
          width={600}
          height={200}
          className="aspect-video h-auto w-full"
        />

        <div className="space-y-4 p-8">
          <h3 className="text-3xl font-bold">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <div className="my-6 space-y-4 text-sm leading-relaxed text-zinc-300">
            {modalContent}
          </div>

          <div>
            <p className="mb-2 text-xl font-bold">
              Project Links<span className="text-indigo-500">.</span>
            </p>

            <div className="flex items-center gap-4 text-sm">
              <Link
                href={codeLink}
                rel="nofollow"
                target="_blank"
                className="flex items-center gap-1 text-zinc-300 transition-colors hover:text-indigo-300"
              >
                <GitHubIcon /> Source Code
              </Link>
              <Link
                href={projectLink}
                rel="nofollow"
                target="_blank"
                className="flex items-center gap-1 text-zinc-300 transition-colors hover:text-indigo-300"
              >
                <ExternalLinkIcon /> Live Project
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  return ReactDOM.createPortal(
    content,
    document.getElementById("root") as Element,
  );
};
