"use client";

import { ExternalLinkIcon, GitHubIcon } from "@/components/icons";
import { Reveal, Tag } from "@/components/utils";
import { Project } from "@/types/Project";
import { motion, useAnimation, useInView } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ProjectModal } from "./project-modal";

interface Props extends Project {}

export const ProjectCard = (project: Props) => {
  const { codeLink, description, imgSrc, projectLink, tags, title } = project;

  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-lg bg-zinc-700"
        >
          <Image
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            width={400}
            height={100}
            style={{
              width: hovered ? "90%" : "85%",
              rotate: hovered ? "2deg" : "0deg",
            }}
            className="absolute bottom-0 left-1/2 w-[85%] -translate-x-1/2 translate-y-1/4 rounded transition-all"
          />
        </div>
        <div className="mt-6 space-y-4">
          <Reveal width="w-fll">
            <div className="flex w-full items-center gap-3">
              <h4 className="max-w-[calc(100%_-_150px)] shrink-0 text-lg font-bold">
                {title}
              </h4>

              <div className="h-[1px] w-full bg-zinc-600" />

              <Link href={codeLink} target="_blank" rel="nofollow">
                <GitHubIcon />
              </Link>

              <Link href={projectLink} target="_blank" rel="nofollow">
                <ExternalLinkIcon />
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              {description}{" "}
              <span className="text-indigo-500" onClick={() => setIsOpen(true)}>
                Learn more
              </span>
            </p>
          </Reveal>
        </div>
      </motion.div>
      <ProjectModal setIsOpen={setIsOpen} isOpen={isOpen} {...project} />
    </>
  );
};
