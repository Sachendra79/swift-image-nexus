import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemStatement from "@/components/ProblemStatement";
import ResearchObjectives from "@/components/ResearchObjectives";
import ScopeSection from "@/components/ScopeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProblemStatement />
      <ResearchObjectives />
      <ScopeSection />
      <Footer />
    </div>
  );
};

export default Index;
