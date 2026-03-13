import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemStatement from "@/components/ProblemStatement";
import ResearchObjectives from "@/components/ResearchObjectives";
import ScopeSection from "@/components/ScopeSection";
import Footer from "@/components/Footer";
import Demo from "@/pages/Demo"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
     <Demo/>
      <ProblemStatement />
      <ResearchObjectives />
      <ScopeSection />
      <Footer />
    </div>
  );
};

export default Index;
