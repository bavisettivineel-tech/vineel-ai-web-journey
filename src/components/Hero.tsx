import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(139, 69, 19, 0.85), rgba(75, 0, 130, 0.85), rgba(255, 140, 0, 0.85)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-light/10 rounded-full blur-2xl float-animation"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
                🚀 Available for Freelancing
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                <span className="block">Vineel</span>
                <span className="block bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
                  Bavisetti
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 font-medium">
                Exploring AI, Creating Web Experiences
              </p>
              <p className="text-lg text-white/80 max-w-2xl">
                A passionate Computer Engineering student at KIET Group of Institutions, 
                specializing in AI technologies and modern web development.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('portfolio')}
                className="group"
              >
                View My Work
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                variant="outline-primary" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1+</div>
                <div className="text-sm text-white/80">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3+</div>
                <div className="text-sm text-white/80">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1</div>
                <div className="text-sm text-white/80">Major Project</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-70 animate-pulse"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-strong">
                <img 
                  src="/lovable-uploads/vineel-profile-updated.jpg"
                  alt="Vineel Bavisetti - AI & Web Development Enthusiast"
                  className="w-full h-full object-cover object-center scale-110"
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium border border-white/30">
                AI Enthusiast
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium border border-white/30">
                Web Developer
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <ArrowDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;