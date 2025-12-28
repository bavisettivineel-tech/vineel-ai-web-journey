import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Users, Lightbulb, Palette, Search } from "lucide-react";
import { useState, useEffect } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    { name: "Python", level: 60, icon: Code },
    { name: "HTML", level: 60, icon: Code },
    { name: "CSS", level: 60, icon: Palette },
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

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Technical Skills */}
          <Card className="p-5 sm:p-8 card-gradient border-primary/20 hover-lift">
            <div className="space-y-5 md:space-y-6">
              <div className="flex items-center gap-3 mb-4 sm:mb-8">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-lg">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Technical Skills</h3>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-4 h-4 text-primary" />
                        <span className="font-medium text-foreground text-sm sm:text-base">{skill.name}</span>
                      </div>
                      <span className="text-xs sm:text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`skill-bar h-2 rounded-full transition-all duration-1000 ease-out ${
                          isVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 sm:pt-4">
                <h4 className="font-semibold text-foreground mb-3 text-sm sm:text-base">Additional Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-primary/30 text-primary text-xs sm:text-sm">
                    Git
                  </Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary text-xs sm:text-sm">
                    AI Tools
                  </Badge>
                  <Badge variant="outline" className="border-accent/30 text-accent text-xs sm:text-sm">
                    Responsive Design
                  </Badge>
                  <Badge variant="outline" className="border-accent/30 text-accent text-xs sm:text-sm">
                    Web Development
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Soft Skills */}
          <Card className="p-5 sm:p-8 card-gradient border-accent/20 hover-lift">
            <div className="space-y-5 md:space-y-6">
              <div className="flex items-center gap-3 mb-4 sm:mb-8">
                <div className="p-2 sm:p-3 bg-accent/10 rounded-lg">
                  <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Soft Skills</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 sm:gap-4">
                {softSkills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className={`p-3 sm:p-4 bg-gradient-to-br from-card to-card-hover rounded-lg border border-accent/10 hover-lift transition-all duration-300 ${
                      isVisible ? 'animate-fade-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col items-center text-center space-y-1 sm:space-y-2">
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

              <div className="pt-3 sm:pt-4">
                <h4 className="font-semibold text-foreground mb-3 text-sm sm:text-base">Professional Experience</h4>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Palette className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Thumbnail Design & Visual Content Creation</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Search className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>AI Tools Research & Implementation</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Users className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>Content Editing & Team Collaboration</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Learning Journey */}
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
                As a passionate learner, I'm constantly exploring new technologies and methodologies. 
                Currently focusing on advanced AI concepts, modern web frameworks, and expanding 
                my skills in Python for machine learning applications.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
                  Machine Learning
                </Badge>
                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 text-xs sm:text-sm">
                  React.js
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
                  Data Science
                </Badge>
                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 text-xs sm:text-sm">
                  Node.js
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;