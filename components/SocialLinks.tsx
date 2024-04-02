import { socialLinks } from "@/constants";
import Link from "next/link";

const SocialLink = ({
  children,
  href,
  label,
}: {
  children: React.ReactNode;
  href: string;
  label: string;
}) => {
  return (
    <Link className="group -m-1 p-1" href={href} aria-label={label}>
      {children}
    </Link>
  );
};

const SocialLinks = () => {
  return (
    <div className="mt-6 flex gap-4 max-sm:justify-center">
      {socialLinks.map(({ label, link, icon: Icon }) => (
        <SocialLink key={link} href={link} label={label}>
          <Icon className="h-8 w-8 fill-zinc-500 transition group-hover:fill-zinc-600" />
        </SocialLink>
      ))}
    </div>
  );
};

export default SocialLinks;
