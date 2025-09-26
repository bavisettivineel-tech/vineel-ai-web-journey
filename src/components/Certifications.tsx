import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Calendar, Award, Building2, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Certifications = () => {
  const { toast } = useToast();

  const downloadCertificate = (fileName: string, displayName: string) => {
    const link = document.createElement('a');
    link.href = `/certificates/${fileName}`;
    link.download = displayName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Certificate Downloaded",
      description: `${displayName} has been downloaded successfully.`,
    });
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and achievements that showcase my expertise and continuous learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* CodSoft Python Programming Certificate */}
          <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                Completed
              </Badge>
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-2">
              Python Programming Internship
            </h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-muted-foreground">
                <Building2 className="w-4 h-4 mr-2" />
                <span className="text-sm">CodSoft</span>
              </div>
              
              <div className="flex items-center text-muted-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm">Aug 20, 2025 - Sep 20, 2025</span>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <strong>Certificate ID:</strong> 26efef0
              </div>
              
              <div className="text-sm text-muted-foreground">
                <strong>Duration:</strong> 4 weeks virtual internship
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Successfully completed a comprehensive 4-week virtual internship program in Python Programming, 
              demonstrating exceptional skills and making valuable contributions to assigned tasks and projects.
            </p>

            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1"
                onClick={() => downloadCertificate('codealpha-internship-certificate.pdf', 'CodSoft_Python_Programming_Certificate.pdf')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.open('https://www.codsoft.in', '_blank')}
              >
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </Card>

          {/* Placeholder for future certificates */}
          <Card className="p-6 border-dashed border-2 border-muted-foreground/30 bg-muted/20">
            <div className="text-center py-8">
              <Award className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                More Certifications Coming Soon
              </h3>
              <p className="text-sm text-muted-foreground">
                Currently working on additional certifications and professional development courses.
              </p>
            </div>
          </Card>

          {/* Skills Showcase */}
          <Card className="p-6 bg-gradient-to-br from-accent/10 to-card border-accent/20">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-accent/10">
                <Building2 className="w-8 h-8 text-accent" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-bold text-foreground">Skills Verified</h3>
                <p className="text-sm text-muted-foreground">Through internships & projects</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <Badge variant="outline" className="mr-2 mb-2">Python Programming</Badge>
              <Badge variant="outline" className="mr-2 mb-2">Problem Solving</Badge>
              <Badge variant="outline" className="mr-2 mb-2">Software Development</Badge>
              <Badge variant="outline" className="mr-2 mb-2">Project Management</Badge>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm committed to continuous learning and professional development. 
              Stay tuned for more certifications and achievements as I expand my skill set.
            </p>
            <Button 
              variant="default" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;