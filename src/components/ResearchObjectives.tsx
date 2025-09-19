import { Target, Lightbulb, BarChart3 } from "lucide-react";
import pacsImage from "@/assets/pacs-system.jpg";

const ResearchObjectives = () => {
  return (
    <section id="objectives" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-scale-in">
            <div className="relative">
              <img
                src={pacsImage}
                alt="PACS System Interface"
                className="rounded-2xl shadow-medical"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl"></div>
            </div>
          </div>
          
          <div className="space-y-8 animate-fade-up">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Research Direction & Objectives
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Advancing emergency healthcare through innovative imaging integration solutions.
              </p>
            </div>
            
            <div className="medical-card p-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-full animate-pulse-glow">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">
                    Framework Design & Evaluation
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This research focuses on designing and evaluating a framework for real-time 
                    medical imaging integration using PACS-DICOM APIs to accelerate emergency 
                    diagnostics.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="medical-card p-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/20 rounded-full">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">
                    Healthcare Standards Compliance
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Addressing challenges in interoperability, latency, and accessibility while 
                    ensuring compliance with healthcare standards such as HIPAA, HL7, and FHIR.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="medical-card p-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/20 rounded-full">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">
                    Enhanced Decision Support
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    By enabling faster image availability and analysis, the system can enhance 
                    decision support for physicians, reduce diagnostic delays, and improve 
                    survival rates in critical cases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchObjectives;