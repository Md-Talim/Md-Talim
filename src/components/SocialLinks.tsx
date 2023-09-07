import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons';
import Link from 'next/link';

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
      <SocialLink
        href="https://www.linkedin.com/in/md-talim/"
        label="Follow on Twitter"
      >
        <LinkedInIcon className="h-8 w-8 fill-zinc-500 transition group-hover:fill-zinc-600" />
      </SocialLink>
      <SocialLink href="https://github.com/md-talim" label="Follow on Twitter">
        <GitHubIcon className="h-8 w-8 fill-zinc-500 transition group-hover:fill-zinc-600" />
      </SocialLink>
    </div>
  );
};

export default SocialLinks;
