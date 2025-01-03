import { Header } from "@/components/navigation";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectsSection,
} from "@/components/sections";

const HomePage = () => {
  return (
    <main>
      <Header />
      <div className="mx-auto max-w-5xl space-y-32 px-4 pb-24 md:px-8">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
};

export default HomePage;
