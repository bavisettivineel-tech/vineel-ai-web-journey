import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Plane, Train, Car, Plus } from "lucide-react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my projects and achievements in web development and AI technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Project */}
          <Card className="lg:col-span-2 p-8 card-gradient border-primary/20 hover-lift relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-primary text-white">
                Featured Project
              </Badge>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Vineel Services
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A comprehensive travel service booking webpage that integrates multiple 
                    transportation options including RTC, railway, and airway booking functionalities. 
                    Built with modern web technologies to provide a seamless user experience.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    HTML
                  </Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    CSS
                  </Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    JavaScript
                  </Badge>
                  <Badge variant="outline" className="border-accent/30 text-accent">
                    Responsive Design
                  </Badge>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Features:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-primary" />
                      RTC Bus Booking System
                    </li>
                    <li className="flex items-center gap-2">
                      <Train className="w-4 h-4 text-primary" />
                      Railway Ticket Booking
                    </li>
                    <li className="flex items-center gap-2">
                      <Plane className="w-4 h-4 text-primary" />
                      Airline Ticket Services
                    </li>
                  </ul>
                </div>

                <div className="flex gap-4">
                  <Button variant="hero" size="sm">
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </Button>
                  <Button variant="outline-primary" size="sm">
                    <Github className="w-4 h-4" />
                    Source Code
                  </Button>
                </div>
              </div>

              {/* Project Preview */}
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-8 text-center">
                  <div className="space-y-4">
                    <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                      <Plane className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground">
                      Travel Booking Hub
                    </h4>
                    <p className="text-muted-foreground">
                      Integrated platform for all travel needs
                    </p>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center float-animation">
                  <Car className="w-6 h-6 text-accent" />
                </div>
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center float-animation delay-1000">
                  <Train className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
          </Card>

          {/* Upcoming Projects Placeholder */}
          <Card className="p-8 card-gradient border-accent/20 hover-lift text-center">
            <div className="space-y-6">
              <div className="w-20 h-20 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                <Plus className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  AI Chat Assistant
                </h3>
                <p className="text-muted-foreground">
                  Currently developing an intelligent chatbot using Python and machine learning 
                  libraries to provide automated customer support.
                </p>
              </div>
              <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                In Development
              </Badge>
            </div>
          </Card>

          <Card className="p-8 card-gradient border-primary/20 hover-lift text-center">
            <div className="space-y-6">
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Plus className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Portfolio Dashboard
                </h3>
                <p className="text-muted-foreground">
                  Planning to create an interactive dashboard for project management 
                  and client communication using React and modern web technologies.
                </p>
              </div>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                Planned
              </Badge>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in collaborating or want to see more of my work?
          </p>
          <Button variant="hero" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;