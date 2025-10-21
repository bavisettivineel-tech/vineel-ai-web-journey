import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Database, Zap, CheckCircle2 } from "lucide-react";

const Freelancing = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["Responsive Design", "React & Tailwind CSS", "Fast Performance", "SEO Optimized"]
    },
    {
      icon: Code,
      title: "Python Development",
      description: "Python applications, automation scripts, and backend solutions",
      features: ["Custom Scripts", "Data Management", "API Integration", "Automation Tools"]
    },
    {
      icon: Database,
      title: "Full Stack Projects",
      description: "End-to-end application development with frontend and backend",
      features: ["Database Design", "User Authentication", "API Development", "Deployment Support"]
    }
  ];

  return (
    <section id="freelancing" className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4" variant="secondary">
            <Zap className="w-3 h-3 mr-1" />
            Available for Hire
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Freelancing Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Let's bring your ideas to life! I offer professional web and Python development services
            tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/10"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Freelancing;
