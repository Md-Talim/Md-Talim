import Container from './Container';
import CopyToClipboard from './CopyToClipboard';
import SocialLinks from './SocialLinks';

const ContactSection = () => {
  return (
    <Container className="mt-20" id="contact">
      <div className="max-w-3xl max-sm:text-center">
        <h2 className="text-3xl font-medium tracking-tight text-zinc-800 sm:text-4xl">
          Let&apos;s Connect and Collaborate
        </h2>
        <p className="mt-3 md:text-xl text-lg text-zinc-600">
          Hey friend 👋,
          <br />
          Let&apos;s connect and make something awesome together! If you need
          help, have questions, or just want to chat, I&apos;m here for you.
          Feel free to drop me a line anytime!
          <br />
          <br />
          P.S. Do you like my portfolio? If not, please let me know what I can
          do to improve it. Your input is highly appreciated! 🙌
        </p>
      </div>
      <div className="mt-4 flex flex-col md:flex-row items-center gap-8">
        <CopyToClipboard variant="secondary" text="md.talim@skiff.com" />
        <SocialLinks />
      </div>
    </Container>
  );
};

export default ContactSection;
