import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-medical-imaging.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Medical Imaging Technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Real-Time Medical Imaging
            <span className="block bg-gradient-to-r from-accent to-primary-foreground bg-clip-text text-transparent">
              Integration
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
            Revolutionizing emergency diagnostics through PACS-DICOM API integration.
            Enabling instant access to critical medical imaging for life-saving decisions.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="medical-button group">
              Explore Research
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="medical-card animate-scale-in p-6 text-center">
              <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Real-Time Access</h3>
              <p className="text-muted-foreground">Instant image retrieval and analysis</p>
            </div>
            <div className="medical-card animate-scale-in p-6 text-center" style={{animationDelay: '0.2s'}}>
              <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-2">HIPAA Compliant</h3>
              <p className="text-muted-foreground">Secure healthcare standard protocols</p>
            </div>
            <div className="medical-card animate-scale-in p-6 text-center" style={{animationDelay: '0.4s'}}>
              <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Reduced Latency</h3>
              <p className="text-muted-foreground">Optimized for emergency response</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;