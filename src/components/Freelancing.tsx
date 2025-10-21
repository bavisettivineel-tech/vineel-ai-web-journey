import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Smartphone, Database, Zap, CheckCircle2, ArrowRight } from "lucide-react";

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

  const whyChooseMe = [
    "Quick turnaround time",
    "Clean and maintainable code",
    "Regular project updates",
    "Post-delivery support",
    "Affordable pricing",
    "Quality guaranteed"
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        <div className="grid md:grid-cols-3 gap-6 mb-12">
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
              
              <ul className="space-y-2 mb-4">
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

        {/* Why Choose Me Section */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Why Choose Me?</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {whyChooseMe.map((reason, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{reason}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="inline-block p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <h3 className="text-2xl font-bold mb-3 text-foreground">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl">
              Have a project in mind? Let's discuss how I can help bring it to reality.
              Contact me today for a free consultation!
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Freelancing;
