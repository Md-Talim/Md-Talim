import Container from '@/components/Container';

interface Props {
  title: string;
  intro: string;
  children: React.ReactNode;
}

export function SimpleLayout({ title, intro, children }: Props) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-3xl max-sm:text-center">
        <h1 className="text-4xl font-medium tracking-tight text-zinc-800 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 md:text-xl text-lg text-zinc-600">{intro}</p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  );
}
