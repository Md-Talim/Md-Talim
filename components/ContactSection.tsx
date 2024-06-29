import { primaryEmail } from "@/constants";
import Container from "./Container";
import CopyToClipboard from "./CopyToClipboard";
import SocialLinks from "./SocialLinks";

const ContactSection = () => {
  return (
    <Container className="mt-20" id="contact">
      <div className="max-w-3xl max-sm:text-center">
        <h2 className="text-3xl font-medium tracking-tight text-zinc-800 sm:text-4xl">
          Let&apos;s Work Together!
        </h2>
        <p className="mt-3 md:text-xl text-lg text-zinc-600">
          Hi there 👋,
          <br />
          Are you looking for a dedicated and skilled front-end developer to
          join your team? Let&apos;s connect and create something exceptional!
          Whether you have questions, need assistance, or want to discuss
          potential opportunities, I&apos;m here and ready to help.
          <br />
          <br />
          P.S. Your feedback is invaluable! If you have any suggestions to
          improve my portfolio, please let me know. Your input is highly
          appreciated! 🙌
        </p>
      </div>
      <div className="mt-4 flex flex-col md:flex-row items-center gap-8">
        <CopyToClipboard variant="secondary" text={primaryEmail} />
        <SocialLinks />
      </div>
    </Container>
  );
};

export default ContactSection;
