import Button from './components/Button';
import NavBar from './components/NavBar';
import { contacts } from './constants';

const App = () => {
  return (
    <>
      <main className='absolute left-1/2 top-1/2 mx-auto flex max-w-3xl -translate-x-1/2 -translate-y-1/2 gap-8 px-8 lg:px-0'>
        <NavBar />
        <section className='space-y-6 py-4'>
          <header className='space-y-2'>
            <h1 className='font-serif text-3xl font-bold'>Mohammad Talim</h1>
            <p className=''>CSE Student, Front-end Engineer.</p>
          </header>
          <p className='max-w-[60ch] tracking-wider text-dark'>
            Hey, I'm Talim. A Computer Science Student at a{' '}
            <span className='font-bold'>Govt. Polytechnic College, Indri</span>
            .
            <br />I am a beginner front-end engineer with experience in{' '}
            <span className='font-bold'>React</span> and
            <span className='font-bold'> TailwindCSS</span>. I have a passion
            for creating beautiful and functional user interfaces and am eager
            to continue learning and growing in the field.
          </p>
          <ul className='mt-6 flex gap-4'>
            {contacts.map((contact, index) => (
              <li key={index}>
                <Button {...contact} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default App;
