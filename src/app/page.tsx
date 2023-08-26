import Container from '@/components/Container';
import CopyToClipboard from '@/components/CopyToClipboard';
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

const Home = () => {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-3xl">
          <h1 className="text-4xl text-zinc-800 sm:text-5xl">
            Frontend developer, UI designer, and programmer.
          </h1>
          <p className="mt-6 text-lg text-zinc-600">
            I’m Talim, a Frontend developer and user interface designer. I’m
            final year student of Diploma in Computer Science Engineering.
          </p>
          <CopyToClipboard text="mohd.talim.work@gmail.com" />
          <div className="mt-6 flex gap-4">
            <SocialLink
              href="https://github.com/md-talim"
              label="Follow on Twitter"
            >
              <GitHubIcon className="h-8 w-8 fill-zinc-500 transition group-hover:fill-zinc-600" />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/md-talim/"
              label="Follow on Twitter"
            >
              <LinkedInIcon className="h-8 w-8 fill-zinc-500 transition group-hover:fill-zinc-600" />
            </SocialLink>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
