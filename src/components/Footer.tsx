import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, Github, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:vineelbavisettiwork@gmail.com",
      label: "Email"
    },
    {
      icon: Phone,
      href: "tel:+918297458070",
      label: "Phone"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/vineel-bavisetti",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/bavisettivineel-tech",
      label: "GitHub"
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 space-y-4 md:space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3 sm:mb-4">
                Vineel Bavisetti
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
                A passionate Computer Engineering student exploring AI technologies 
                and creating innovative web experiences. Ready to bring your ideas to life.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 sm:space-y-0">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
                💼 Available for Freelancing
              </Badge>
              <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 text-xs sm:text-sm">
                🎓 CME Student at KIET
              </Badge>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2.5 sm:p-3 bg-card hover:bg-card-hover border border-border rounded-lg hover:border-primary/30 transition-all hover-lift group" 
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-lg sm:text-xl font-semibold text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:space-y-3">
              {quickLinks.map(link => (
                <button 
                  key={link.name} 
                  onClick={() => scrollToSection(link.href)} 
                  className="text-left text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-lg sm:text-xl font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <p className="text-xs sm:text-sm font-medium text-foreground mb-1">Email</p>
                <a 
                  href="mailto:vineelbavisettiwork@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm break-all"
                >
                  vineelbavisettiwork@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-foreground mb-1">Phone</p>
                <a 
                  href="tel:+918297458070" 
                  className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                >
                  +91 8297458070
                </a>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-foreground mb-1">Location</p>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Andhra Pradesh, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-1 text-xs sm:text-sm text-muted-foreground text-center md:text-left">
              <span>© 2025 Vineel Bavisetti. All rights reserved. Made with</span>
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 animate-pulse" />
              <span>and passion for innovation.</span>
            </div>
            
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={scrollToTop} 
                className="group text-xs sm:text-sm"
              >
                <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-translate-y-1 transition-transform" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;