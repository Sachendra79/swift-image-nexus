import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="animate-fade-up">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">MI</span>
              </div>
              <span className="text-2xl font-bold">MedImaging Research</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Advancing emergency healthcare through innovative real-time medical imaging 
              integration solutions and PACS-DICOM API development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="animate-fade-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-xl font-bold mb-6">Research Areas</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>PACS-DICOM Integration</li>
              <li>Emergency Medical Systems</li>
              <li>Healthcare Interoperability</li>
              <li>Real-Time Image Processing</li>
              <li>Clinical Decision Support</li>
              <li>Medical Data Standards</li>
            </ul>
          </div>
          
          <div className="animate-fade-up" style={{animationDelay: '0.4s'}}>
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4 text-primary-foreground/80">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span>research@medimaging.edu</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span>Medical Research Institute<br />123 Healthcare Blvd</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 MedImaging Research. All rights reserved. | Healthcare Innovation for Emergency Medicine</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;