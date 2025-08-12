import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, Github, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:vineelbavisettiwork@gmail.com",
      label: "Email"
    },
    {
      icon: Phone,
      href: "tel:+919553190459",
      label: "Phone"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/vineel-bavisetti",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/vineelbavisetti",
      label: "GitHub"
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                Vineel Bavisetti
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                A passionate Computer Engineering student exploring AI technologies 
                and creating innovative web experiences. Ready to bring your ideas to life.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  💼 Available for Freelancing
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                  🎓 CME Student at KIET
                </Badge>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 bg-card hover:bg-card-hover border border-border rounded-lg hover:border-primary/30 transition-all hover-lift group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-foreground mb-1">Email</p>
                <a 
                  href="mailto:vineelbavisettiwork@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  vineelbavisettiwork@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground mb-1">Phone</p>
                <a 
                  href="tel:+919553190459"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +91 95531 90459
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground mb-1">Location</p>
                <p className="text-muted-foreground text-sm">
                  Andhra Pradesh, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Vineel Bavisetti. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and passion for innovation.</span>
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="group"
              >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
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