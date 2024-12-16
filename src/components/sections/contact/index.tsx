import { MailIcon } from "@/components/icons";
import { Reveal } from "@/components/utils";
import { contact } from "@/data/links";
import Link from "next/link";

export const ContactSection = () => (
  <section className="section-wrapper" id="contact">
    <div className="mx-auto max-w-xl rounded-xl bg-zinc-800 px-8 py-12">
      <Reveal width="w-full">
        <h4 className="text-center text-4xl font-black md:text-5xl">
          Contact<span className="text-indigo-500">.</span>
        </h4>
      </Reveal>
      <Reveal width="w-full">
        <p className="my-8 text-center leading-relaxed text-zinc-300">
          Shoot me an email if you want to connect! You can also find me on{" "}
          <Link
            href={contact["linkedin"]}
            target="_blank"
            className="text-indigo-300 hover:underline"
          >
            Linkedin
          </Link>{" "}
          or{" "}
          <Link
            href={contact["twitter"]}
            target="_blank"
            className="text-indigo-300 hover:underline"
          >
            Twitter
          </Link>{" "}
          if that&apos;s more your speed.
        </p>
      </Reveal>
      <Reveal width="w-full">
        <Link href={contact["gmail"]}>
          <div className="mx-auto flex w-fit items-center justify-center gap-2 whitespace-normal text-lg transition-colors hover:text-indigo-300 md:text-2xl">
            <MailIcon />
            <span>mohd.talim.work@gmail.com</span>
          </div>
        </Link>
      </Reveal>
    </div>
  </section>
);
