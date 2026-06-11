import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Users, Lightbulb, Palette, Search, Server, Database, Languages, Wrench } from "lucide-react";
import { useState, useEffect } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    const element = document.getElementById('skills');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      label: "Frontend",
      icon: Code,
      accent: "primary" as const,
      items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Flutter"],
    },
    {
      label: "Backend",
      icon: Server,
      accent: "accent" as const,
      items: ["Node.js", "REST API Design", "Server-side Logic"],
    },
    {
      label: "Database",
      icon: Database,
      accent: "primary" as const,
      items: ["MongoDB", "Supabase (PostgreSQL)", "Database Schema Design"],
    },
    {
      label: "Languages",
      icon: Languages,
      accent: "accent" as const,
      items: ["Python", "JavaScript", "TypeScript", "Java", "Dart"],
    },
    {
      label: "Tools & Practices",
      icon: Wrench,
      accent: "primary" as const,
      items: ["Git", "Agile/Scrum", "Responsive Design", "Performance Optimisation", "API Integration"],
    },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: Lightbulb },
    { name: "Teamwork", icon: Users },
    { name: "Creativity", icon: Palette },
    { name: "Research", icon: Search },
    { name: "Communication", icon: Users },
    { name: "Critical Thinking", icon: Brain },
  ];

  return (
    <section id="skills" className="py-12 md:py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            A blend of technical expertise and soft skills that drive innovation and collaboration
          </p>
        </div>

        {/* Technical Skills Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 perspective-container mb-8 md:mb-12">
          {skillCategories.map((cat, idx) => {
            const isPrimary = cat.accent === "primary";
            return (
              <Card
                key={cat.label}
                className={`p-5 sm:p-6 card-gradient hover-lift hover-glow ${
                  isPrimary ? "border-primary/20" : "border-accent/20"
                } ${isVisible ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2 sm:p-2.5 rounded-lg icon-3d ${
                      isPrimary ? "bg-primary/10" : "bg-accent/10"
                    }`}
                  >
                    <cat.icon
                      className={`w-5 h-5 ${isPrimary ? "text-primary" : "text-accent"}`}
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground">{cat.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className={`text-xs sm:text-sm ${
                        isPrimary
                          ? "border-primary/30 text-primary"
                          : "border-accent/30 text-accent"
                      }`}
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Soft Skills */}
        <Card className="p-5 sm:p-8 card-gradient border-accent/20 hover-lift hover-glow">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <div className="p-2 sm:p-3 bg-accent/10 rounded-lg">
              <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">Soft Skills</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={`p-3 sm:p-4 bg-gradient-to-br from-card to-card-hover rounded-lg border border-accent/10 hover-lift neu-card transition-all duration-300 ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-1.5 sm:space-y-2">
                  <div className="p-1.5 sm:p-2 bg-accent/10 rounded-full">
                    <skill.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <span className="font-medium text-foreground text-xs sm:text-sm">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Continuous Learning */}
        <div className="mt-10 md:mt-16 text-center">
          <Card className="p-5 sm:p-8 card-gradient border-primary/20 max-w-4xl mx-auto">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center justify-center gap-3">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-lg">
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Continuous Learning</h3>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                As a passionate learner, I'm constantly exploring new technologies and methodologies —
                currently going deeper into advanced AI concepts, modern full-stack frameworks, and
                scalable backend architecture.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
