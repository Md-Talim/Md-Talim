import { Reveal, SectionHeader } from "@/components/utils";
import { Stats } from "./stats";

export const AboutSection = () => (
  <section id="about" className="section-wrapper">
    <SectionHeader title="About" dir="l" />
    <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_300px]">
      <div className="space-y-4 text-zinc-300">
        <Reveal>
          <p className="leading-relaxed">
            <span className="float-left mr-1 rounded bg-indigo-500 px-3 py-2 text-2xl font-bold text-white">
              H
            </span>
            ey, I'm Talim, a software engineer with a strong foundation in
            Computer Science Engineering. Currently, in my second year (4th
            semester) of B.Tech, I specialize in creating full-stack
            applications and exploring the depths of core computer science
            concepts.
          </p>
        </Reveal>
        <Reveal>
          <p className="leading-relaxed">
            I love building projects that not only solve real-world problems but
            also challenge me to grow as a developer. My portfolio showcases:
          </p>
        </Reveal>
        <Reveal>
          <div>
            <ul className="ml-5 list-outside list-disc leading-relaxed">
              <li>
                <span className="font-bold">Web Development Projects:</span>{" "}
                From responsive and visually appealing frontend designs to
                complete full-stack applications with robust backends.
              </li>
              <li>
                <span className="font-bold">Implementation Projects:</span> Deep
                dive into essential topics like Operating Systems, Databases,
                and System Design, with fun projects like "Build Your Own
                Shell", "Build Your Own Git", and more.
              </li>
            </ul>
          </div>
        </Reveal>
        <Reveal>
          <p className="leading-relaxed">
            I am on a journey to master backend development, system design, and
            foundational computer science subjects in order to build innovative
            and efficient solutions.
            <br />
            Let&apos;s create something remarkable together!
          </p>
        </Reveal>
      </div>
      <Stats />
    </div>
  </section>
);
