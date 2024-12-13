import { Header } from "@/components/navigation";
import { HeroSection } from "@/components/sections/hero";

const HomePage = () => {
  return (
    <main>
      <Header />
      <div className="mx-auto max-w-5xl space-y-32 px-4 pb-24 md:px-8">
        <HeroSection />
      </div>
    </main>
  );
};

export default HomePage;
