import {
  WelcomeSection,
  AboutSection,
  PortfolioSection,
} from "@/components/sections";

const Homepage = () => {
  return (
    <main className="min-h-screen">
      <WelcomeSection />
      <AboutSection />
      <PortfolioSection />
    </main>
  );
};

export default Homepage;
