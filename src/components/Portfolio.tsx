import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Sprout, GraduationCap, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Portfolio = () => {
  const { toast } = useToast();

  const projects = [
    {
      icon: Sprout,
      title: "AI AgriGold – AI-Powered Smart Farming Assistant",
      period: "Jan 2026 – Present",
      description:
        "Developed a full-stack AI-powered farming platform that detects crop diseases from uploaded images, provides instant prevention methods, delivers daily weather updates, recommends suitable crops based on soil type, previous crop history, and land area, and displays nearby market prices to help farmers make data-driven decisions.",
      stack: ["React (Vite)", "MongoDB", "REST APIs", "AI Image Analysis", "Weather API", "Market Price API"],
      accent: "primary" as const,
    },
    {
      icon: GraduationCap,
      title: "VRK Solutions – AI-Powered Education Platform",
      period: "Dec 2025 – Jan 2026",
      description:
        "Engineered a full-stack learning platform supporting curriculum from primary through degree level; integrated an AI summarisation layer that reduces average study material length by 65%.",
      stack: ["React", "TypeScript", "Node.js", "Supabase", "Tailwind CSS"],
      accent: "accent" as const,
    },
  ];

  return (
    <section id="portfolio" className="py-12 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 px-2">
            A selection of full-stack projects I've designed and built
          </p>

          <div className="flex justify-center">
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold px-6 sm:px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                fetch('/resume.pdf', { method: 'HEAD' })
                  .then((response) => {
                    if (response.ok) {
                      const link = document.createElement('a');
                      link.href = '/resume.pdf';
                      link.download = 'Vineel_Bavisetti_Resume.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                      toast({
                        title: "Resume Downloaded",
                        description: "Thanks for your interest! My resume has been downloaded.",
                      });
                    } else {
                      throw new Error('Resume file not found');
                    }
                  })
                  .catch(() => {
                    toast({
                      title: "Resume Not Available",
                      description: "Please add your resume.pdf file to the public folder to enable downloads.",
                      variant: "destructive",
                    });
                  });
              }}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 perspective-container">
          {projects.map((project, idx) => {
            const isPrimary = project.accent === "primary";
            return (
              <Card
                key={idx}
                className={`p-5 sm:p-8 card-gradient hover-lift hover-glow ${
                  isPrimary ? "border-primary/20" : "border-accent/20"
                }`}
              >
                <div className="space-y-4 sm:space-y-5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className={`p-2.5 sm:p-3 rounded-lg flex-shrink-0 icon-3d ${
                        isPrimary ? "bg-primary/10" : "bg-accent/10"
                      }`}
                    >
                      <project.icon
                        className={`w-5 h-5 sm:w-6 sm:h-6 ${
                          isPrimary ? "text-primary" : "text-accent"
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground leading-snug">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-1.5 text-xs sm:text-sm text-muted-foreground italic">
                        <Calendar className="w-3.5 h-3.5" />
                        {project.period}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                      Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className={`text-xs sm:text-sm ${
                            isPrimary
                              ? "border-primary/30 text-primary"
                              : "border-accent/30 text-accent"
                          }`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
            Interested in collaborating or want to see more of my work?
          </p>
          <Button
            variant="hero"
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
