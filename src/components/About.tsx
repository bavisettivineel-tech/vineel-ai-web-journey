import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Target, Users, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-primary/5 to-accent/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A driven student passionate about AI technologies and web development, 
            currently pursuing Computer Engineering at KIET Group of Institutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Full Name: Bavisetti Veera Ramakrishna Jogiyya
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate student driven by curiosity in AI technologies and web development. 
                Currently pursuing a Diploma in Computer Engineering (CME) at KIET Group of Institutions, 
                I'm a proactive learner who believes in continuous growth and innovation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I work as an editor, thumbnail designer, and AI tools researcher for X-Factor Company, 
                founded by Rajesh Adapa. This role has enhanced my technical skills while providing 
                valuable teamwork experience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My goal is to transition into freelancing in the future, offering innovative and 
                impactful tech solutions to clients worldwide.
              </p>
            </div>

            {/* Key Qualities */}
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <Lightbulb className="w-3 h-3 mr-1" />
                Curious Learner
              </Badge>
              <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                <Users className="w-3 h-3 mr-1" />
                Team Player
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <Target className="w-3 h-3 mr-1" />
                Problem Solver
              </Badge>
            </div>
          </div>

          {/* Education & Experience Cards */}
          <div className="space-y-6">
            {/* Education Card */}
            <Card className="p-6 card-gradient border-primary/20 hover-lift">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-foreground mb-2">Education</h4>
                  <div className="space-y-3">
                    <div className="border-l-2 border-primary/30 pl-4">
                      <h5 className="font-medium text-foreground">
                        Diploma in Computer Engineering (CME)
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        KIET Group of Institutions • 1st Year
                      </p>
                    </div>
                    <div className="border-l-2 border-accent/30 pl-4">
                      <h5 className="font-medium text-foreground">
                        10th Grade
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        Completed with 65%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Experience Card */}
            <Card className="p-6 card-gradient border-accent/20 hover-lift">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-foreground mb-2">Experience</h4>
                  <div className="space-y-2">
                    <h5 className="font-medium text-foreground">
                      Editor, Thumbnail Designer & AI Tools Researcher
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      X-Factor Company • Founded by Rajesh Adapa
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Working on creative content, visual design, and researching AI tools 
                      to enhance company operations and client solutions.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Aspirations Card */}
            <Card className="p-6 card-gradient border-primary/20 hover-lift">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-foreground mb-2">Future Goals</h4>
                  <p className="text-sm text-muted-foreground">
                    Transitioning into freelancing to offer innovative and impactful 
                    tech solutions, leveraging my skills in AI and web development 
                    to help businesses grow and succeed.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;