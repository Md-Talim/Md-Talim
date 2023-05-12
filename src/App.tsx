import Button from './components/Button';
import { contacts } from './constants';

const App = () => {
  return (
    <main className='mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-4 px-8'>
      <h1 className='font-serif text-3xl font-bold'>Mohammad Talim</h1>
      <p>
        Hey, I'm Talim. A Computer Science Student at a{' '}
        <span className='text- font-bold'>
          Govt. Polytechnic College, Indri
        </span>
        .
        <br />I am a beginner front-end engineer with experience in{' '}
        <span className='text- font-bold'>React</span> and
        <span className='text- font-bold'>TailwindCSS</span>. I have a passion
        for creating beautiful and functional user interfaces and am eager to
        continue learning and growing in the field.
      </p>

      <ul className='mt-4 flex gap-4'>
        {contacts.map((contact, index) => (
          <li key={index}>
            <Button {...contact} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default App;
