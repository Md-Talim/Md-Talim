import Container from './Container';
import SocialLinks from './SocialLinks';

const ContactSection = () => {
  return (
    <Container className="mt-20" id="contact">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold text-zinc-800 sm:text-4xl">
          Let&apos;s Connect and Collaborate
        </h2>
        <p className="mt-3 text-2xl text-zinc-600">
          Hey friend 👋,
          <br />
          Let&apos;s connect and make something awesome together! If you need
          help, have questions, or just want to chat, I&apos;m here for you.
          Feel free to drop me a line anytime!
        </p>
      </div>
      <SocialLinks />
    </Container>
  );
};

export default ContactSection;
