import Button from '@/components/Button';
import { contacts } from '@/constants';

export default function Home() {
  return (
    <section className='space-y-6 py-4'>
      <header className='space-y-1'>
        <p className='text-sm'>Hi, my name is</p>
        <h1 className='text-4xl font-bold leading-snug'>
          Mohammad Talim.
          <br /> I build things for the web.
        </h1>
        <p>CSE Student, Front-end Engineer.</p>
      </header>
      <p className='max-w-[60ch] tracking-wide text-dark'>
        Hey, I&apos;m Talim. A Computer Science Student at{' '}
        <span className='font-bold'>Govt. Polytechnic College, Indri</span>
        .
        <br />I am a beginner front-end engineer with experience in{' '}
        <span className='bg-primary font-bold text-lighter'>
          React
        </span> and{' '}
        <span className='bg-primary font-bold text-lighter'>TailwindCSS</span>.
        I have a passion for creating beautiful and functional user interfaces
        and am eager to continue learning and growing in the field.
      </p>
      <ul className='mt-6 flex flex-col gap-4 md:flex-row'>
        {contacts.map((contact, index) => (
          <li key={index} className='w-fit'>
            <Button {...contact} />
          </li>
        ))}
      </ul>
    </section>
  );
}
