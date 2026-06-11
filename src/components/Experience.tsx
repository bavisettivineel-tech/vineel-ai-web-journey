import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Globe, Smartphone, Cloud, Building2, Megaphone, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Founder of VRK Solutions",
      company: "VRK Solutions — Digital Services Company",
      period: "Present",
      description:
        "As the founder of VRK Solutions, I lead a team dedicated to transforming businesses through innovative digital solutions. We specialize in end-to-end technology services — from building stunning websites and powerful mobile apps to deploying scalable SaaS platforms, custom ERP systems, and result-driven digital marketing strategies.",
      services: [
        { icon: Globe, title: "Website Development", description: "Custom, responsive websites built with modern frameworks and best practices" },
        { icon: Smartphone, title: "App Development", description: "Native and cross-platform mobile applications for iOS and Android" },
        { icon: Cloud, title: "SaaS Applications", description: "Scalable cloud-based software solutions with subscription models" },
        { icon: Building2, title: "ERP Systems", description: "Enterprise resource planning systems to streamline business operations" },
        { icon: Megaphone, title: "Digital Marketing", description: "SEO, social media, and targeted campaigns to grow your online presence" }
      ],
      highlights: [
        "Custom solutions tailored to client needs",
        "End-to-end project management & support",
        "Modern tech stack with scalable architecture",
        "Dedicated team with agile development practices"
      ]
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

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto perspective-container">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-primary/20 to-transparent hidden sm:block" />

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-8 sm:mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-8 top-6 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary border-2 border-background shadow-md hidden sm:block z-10" />

                <div className="sm:ml-16">
                  <Card className="p-5 sm:p-7 md:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-primary/10 hover-glow gradient-border relative overflow-hidden">
                    {/* Background accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full -ml-12 -mb-12 blur-2xl" />

                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium mt-0.5 text-sm sm:text-base">
                            {exp.company}
                          </p>
                        </div>
                        <Badge variant="outline" className="self-start sm:self-auto text-xs sm:text-sm px-3 py-1 shrink-0">
                          {exp.period}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
                        {exp.description}
                      </p>

                      {/* Services Grid */}
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-5 sm:mb-6">
                        {exp.services.map((service, sIndex) => (
                          <div
                            key={sIndex}
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
                      <div className="pt-5 sm:pt-6 border-t border-border/50">
                        <h4 className="text-sm sm:text-base font-semibold text-foreground mb-3 sm:mb-4">What We Deliver</h4>
                        <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                          {exp.highlights.map((item, hIdx) => (
                            <div key={hIdx} className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
