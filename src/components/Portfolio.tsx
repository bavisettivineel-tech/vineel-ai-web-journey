import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Plane, Train, Car, Plus, MessageSquare, Users, Calculator, Gamepad2, TrendingUp, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Portfolio = () => {
  const { toast } = useToast();
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

          {/* Python Projects Section */}
          <div className="lg:col-span-2 mt-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Python <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Console-based applications demonstrating Python programming fundamentals and practical solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Bus Ticket Reservation */}
              <Card className="p-6 card-gradient border-primary/20 hover-lift">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Car className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      Bus Ticket Reservation
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Interactive booking system for bus tickets with multiple destinations and seat types
                    </p>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div>✓ Multiple destinations (Hyderabad, Chennai, Bangalore, Tirupati)</div>
                      <div>✓ Different bus types with dynamic pricing</div>
                      <div>✓ Ticket calculation and receipt generation</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Python
                    </Badge>
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      CLI
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm" className="w-full text-primary hover:bg-primary/10">
                    <Download className="w-4 h-4" />
                    View Code
                  </Button>
                </div>
              </Card>

              {/* Chatbot */}
              <Card className="p-6 card-gradient border-accent/20 hover-lift">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      Simple Chatbot
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Interactive conversational bot with pattern matching and response generation
                    </p>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div>✓ Natural language processing basics</div>
                      <div>✓ Pattern recognition for user inputs</div>
                      <div>✓ Continuous conversation loop</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      Python
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      NLP
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm" className="w-full text-accent hover:bg-accent/10">
                    <Download className="w-4 h-4" />
                    View Code
                  </Button>
                </div>
              </Card>

              {/* Contact Book */}
              <Card className="p-6 card-gradient border-primary/20 hover-lift">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      Contact Book Manager
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Complete contact management system with CRUD operations
                    </p>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div>✓ Add, view, update, delete contacts</div>
                      <div>✓ Search functionality by name/phone</div>
                      <div>✓ Data persistence during session</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Python
                    </Badge>
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      CRUD
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm" className="w-full text-primary hover:bg-primary/10">
                    <Download className="w-4 h-4" />
                    View Code
                  </Button>
                </div>
              </Card>

              {/* Electricity Bill Calculator */}
              <Card className="p-6 card-gradient border-accent/20 hover-lift">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      Electricity Bill Calculator
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Utility bill calculator with tiered pricing structure
                    </p>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div>✓ Tiered rate calculation system</div>
                      <div>✓ Customer details management</div>
                      <div>✓ Bill receipt generation</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      Python
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Math
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm" className="w-full text-accent hover:bg-accent/10">
                    <Download className="w-4 h-4" />
                    View Code
                  </Button>
                </div>
              </Card>

              {/* Rock Paper Scissors */}
              <Card className="p-6 card-gradient border-primary/20 hover-lift">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Gamepad2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      Rock Paper Scissors
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Classic game implementation with score tracking and multiple rounds
                    </p>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div>✓ Random computer opponent</div>
                      <div>✓ Score tracking system</div>
                      <div>✓ Multiple rounds with final score</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Python
                    </Badge>
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      Game
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm" className="w-full text-primary hover:bg-primary/10">
                    <Download className="w-4 h-4" />
                    View Code
                  </Button>
                </div>
              </Card>

              {/* Stock Portfolio Tracker */}
              <Card className="p-6 card-gradient border-accent/20 hover-lift">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      Stock Portfolio Tracker
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Investment portfolio manager with real-time value calculation
                    </p>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div>✓ Multiple stock tracking (AAPL, TSLA, GOOGL)</div>
                      <div>✓ Portfolio value calculation</div>
                      <div>✓ File export functionality</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      Python
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Finance
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm" className="w-full text-accent hover:bg-accent/10">
                    <Download className="w-4 h-4" />
                    View Code
                  </Button>
                </div>
              </Card>
            </div>
          </div>

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

        {/* GitHub Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">GitHub</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my code repositories and contributions to open source projects
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* GitHub Profile Card */}
            <Card className="lg:col-span-1 p-6 card-gradient border-primary/20 hover-lift text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Github className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    @vineelbavisetti
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Computer Engineering Student | AI Enthusiast
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-xs text-muted-foreground">Repositories</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">10+</div>
                    <div className="text-xs text-muted-foreground">Commits</div>
                  </div>
                </div>
                <Button 
                  variant="outline-primary" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open('https://github.com/', '_blank')}
                >
                  <Github className="w-4 h-4" />
                  View Profile
                </Button>
              </div>
            </Card>

            {/* Featured Repository 1 */}
            <Card className="p-6 card-gradient border-accent/20 hover-lift">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <Github className="w-5 h-5 text-accent" />
                    <h4 className="font-semibold text-foreground">vineel-services</h4>
                  </div>
                  <Badge variant="outline" className="border-accent/30 text-accent text-xs">
                    Public
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Travel service booking webpage with integrated transportation options
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    JavaScript
                  </div>
                  <div className="flex items-center gap-1">
                    <Github className="w-3 h-3" />
                    15 commits
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full text-accent hover:bg-accent/10"
                  onClick={() => {
                    toast({
                      title: "Repository Coming Soon",
                      description: "This project will be available on GitHub soon!",
                    });
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Repository
                </Button>
              </div>
            </Card>

            {/* Featured Repository 2 */}
            <Card className="p-6 card-gradient border-primary/20 hover-lift">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <Github className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-foreground">ai-chat-assistant</h4>
                  </div>
                  <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                    Public
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  AI-powered chatbot using Python and machine learning libraries
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    Python
                  </div>
                  <div className="flex items-center gap-1">
                    <Github className="w-3 h-3" />
                    8 commits
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full text-primary hover:bg-primary/10"
                  onClick={() => {
                    toast({
                      title: "Repository Coming Soon", 
                      description: "This project will be available on GitHub soon!",
                    });
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Repository
                </Button>
              </div>
            </Card>
          </div>

          {/* GitHub Activity */}
          <Card className="mt-8 p-6 card-gradient border-primary/10 hover-lift">
            <div className="text-center space-y-4">
              <h4 className="text-xl font-bold text-foreground">
                Recent GitHub Activity
              </h4>
              <p className="text-muted-foreground">
                Building projects, learning new technologies, and contributing to the developer community
              </p>
              <div className="flex justify-center gap-8 text-sm">
                <div className="text-center">
                  <div className="text-lg font-semibold text-primary">HTML/CSS</div>
                  <div className="text-muted-foreground">Most Used</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-accent">Python</div>
                  <div className="text-muted-foreground">Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-primary">JavaScript</div>
                  <div className="text-muted-foreground">Exploring</div>
                </div>
              </div>
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