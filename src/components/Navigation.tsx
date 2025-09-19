import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Problem Statement", href: "#problem" },
    { name: "Research Objectives", href: "#objectives" },
    { name: "Scope", href: "#scope" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-medical-gradient rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">MI</span>
            </div>
            <span className="text-xl font-bold text-primary">MedImaging Research</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <Button variant="default" className="medical-button">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;