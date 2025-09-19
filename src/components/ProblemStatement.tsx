import { AlertTriangle, Clock, Network } from "lucide-react";
import emergencyImage from "@/assets/emergency-response.jpg";

const ProblemStatement = () => {
  return (
    <section id="problem" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            The Critical Challenge
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            In emergency medicine, diagnostic delays can be the difference between life and death.
            Current imaging systems face critical bottlenecks that impact patient outcomes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="medical-card p-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-destructive/10 rounded-full">
                  <AlertTriangle className="h-8 w-8 text-destructive" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">
                    Critical Role of Real-Time Imaging in Emergencies
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In emergency and trauma care, every second counts. Quick access to diagnostic 
                    medical images such as X-rays, CT, and MRI scans can significantly improve 
                    patient outcomes. Delays in image transfer, interpretation, and communication 
                    between radiology departments and emergency teams often slow down decision-making.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="medical-card p-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/20 rounded-full">
                  <Network className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">
                    Need for Seamless Integration via PACS-DICOM APIs
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Integrating real-time PACS-DICOM APIs with emergency systems can allow 
                    clinicians to access and analyze images instantly at the point of care—whether 
                    in hospitals, ambulances or remote locations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-scale-in">
            <div className="relative">
              <img
                src={emergencyImage}
                alt="Emergency Medical Response"
                className="rounded-2xl shadow-medical"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;