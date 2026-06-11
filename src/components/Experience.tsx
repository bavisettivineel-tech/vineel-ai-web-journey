import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Globe, Smartphone, Cloud, Building2, Megaphone, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom, responsive websites built with modern frameworks and best practices"
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android"
    },
    {
      icon: Cloud,
      title: "SaaS Applications",
      description: "Scalable cloud-based software solutions with subscription models"
    },
    {
      icon: Building2,
      title: "ERP Systems",
      description: "Enterprise resource planning systems to streamline business operations"
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "SEO, social media, and targeted campaigns to grow your online presence"
    }
  ];

  return (
    <section id="experience" className="py-12 md:py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <Badge className="mb-3 md:mb-4" variant="secondary">
            <Briefcase className="w-3 h-3 mr-1" />
            Professional Journey
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg px-2">
            Leading VRK Solutions to deliver cutting-edge digital services across multiple domains
          </p>
        </div>

        {/* Founder Card */}
        <div className="max-w-4xl mx-auto mb-10 md:mb-14 perspective-container">
          <Card className="p-6 sm:p-8 md:p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-primary/10 hover-glow gradient-border relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full -ml-12 -mb-12 blur-2xl" />
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    Founder of VRK Solutions
                  </h3>
                  <p className="text-primary font-medium mt-1 text-sm sm:text-base">
                    Digital Services Company
                  </p>
                </div>
                <Badge variant="outline" className="self-start sm:self-auto text-xs sm:text-sm px-3 py-1">
                  Present
                </Badge>
              </div>
              
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                As the founder of VRK Solutions, I lead a team dedicated to transforming businesses through innovative digital solutions. 
                We specialize in end-to-end technology services — from building stunning websites and powerful mobile apps to deploying 
                scalable SaaS platforms, custom ERP systems, and result-driven digital marketing strategies.
              </p>

              {/* Services Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="group flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/20"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 icon-3d group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm sm:text-base mb-0.5">{service.title}</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-snug">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Highlights */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border/50">
                <h4 className="text-sm sm:text-base font-semibold text-foreground mb-3 sm:mb-4">What We Deliver</h4>
                <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                  {[
                    "Custom solutions tailored to client needs",
                    "End-to-end project management & support",
                    "Modern tech stack with scalable architecture",
                    "Dedicated team with agile development practices"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
