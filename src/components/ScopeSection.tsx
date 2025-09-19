import { Cpu, Link, Activity, Heart } from "lucide-react";
import integrationImage from "@/assets/healthcare-integration.jpg";

const ScopeSection = () => {
  const scopeItems = [
    {
      icon: Cpu,
      title: "Real-Time Imaging Framework Development",
      description: "Creating a system architecture that integrates PACS repositories with DICOM-compliant APIs to enable seamless, real-time retrieval and sharing of medical images across emergency care environments."
    },
    {
      icon: Link,
      title: "Healthcare IT Systems Interoperability", 
      description: "Exploring integration with existing hospital systems such as Electronic Health Records (EHRs), Radiology Information Systems (RIS), and Emergency Department Information Systems (EDIS), ensuring standardized communication using DICOM, HL7, and FHIR protocols."
    },
    {
      icon: Activity,
      title: "Performance & Usability Evaluation",
      description: "Testing the proposed system for its ability to reduce image transfer latency, maintain diagnostic accuracy, and provide a user-friendly interface for physicians, radiologists, and emergency responders."
    },
    {
      icon: Heart,
      title: "Impact Assessment on Patient Care",
      description: "Assessing how real-time imaging access affects decision-making speed, patient triage, treatment outcomes, and overall efficiency in emergency departments and pre-hospital care (e.g., ambulances and telemedicine)."
    }
  ];

  return (
    <section id="scope" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Research Scope
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive evaluation framework spanning technical development, system integration, 
            performance optimization, and clinical impact assessment.
          </p>
        </div>
        
        <div className="mb-16 animate-scale-in">
          <div className="relative max-w-4xl mx-auto">
            <img
              src={integrationImage}
              alt="Healthcare Integration Network"
              className="w-full rounded-2xl shadow-medical"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scopeItems.map((item, index) => (
            <div 
              key={index}
              className="medical-card p-8 hover:medical-glow transition-all duration-300 animate-fade-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-medical-gradient rounded-full flex-shrink-0">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 animate-fade-up">
          <div className="medical-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Expected Impact
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              This comprehensive research framework aims to revolutionize emergency medical imaging 
              by reducing diagnostic delays, improving patient outcomes, and establishing new 
              standards for real-time medical image accessibility in critical care environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScopeSection;