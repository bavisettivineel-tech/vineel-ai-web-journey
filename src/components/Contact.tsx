import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, Send, MapPin, Clock, MessageCircle, Github, Instagram } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Build WhatsApp message
      const whatsappMessage = `Hello! I'm ${formData.name}.\n\nSubject: ${formData.subject}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/918297458070?text=${encodedMessage}`;
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Opening WhatsApp!",
        description: "Your message has been prepared. Please send it on WhatsApp.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('WhatsApp error:', error);
      toast({
        title: "Failed to Open WhatsApp",
        description: "There was an error. Please try contacting directly via WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vineelbavisettiwork@gmail.com",
      href: "mailto:vineelbavisettiwork@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 82974 58070",
      href: "tel:+918297458070",
      color: "accent"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+91 82974 58070",
      href: "https://wa.me/918297458070",
      color: "primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Vineel Bavisetti",
      href: "https://linkedin.com/in/vineel-bavisetti",
      color: "primary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "bavisettivineel-tech",
      href: "https://github.com/bavisettivineel-tech",
      color: "primary"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@vineel_baviseti_1432",
      href: "https://instagram.com/vineel_baviseti_1432",
      color: "accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Andhra Pradesh, India",
      href: "#",
      color: "accent"
    }
  ];

  return (
    <section id="contact" className="py-12 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Get In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Ready to start your next project? Let's discuss how we can work together 
            to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 perspective-container">
          {/* Contact Form */}
          <Card className="p-5 sm:p-8 card-gradient border-primary/20 hover-lift hover-glow order-2 lg:order-1">
            <div className="space-y-5 md:space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Send a Message</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Fill out the form below and I'll reach out to you on WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or how I can help..."
                    required
                    rows={5}
                    className="border-primary/20 focus:border-primary resize-none"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full group" disabled={isSubmitting}>
                  <MessageCircle className={`w-4 h-4 transition-transform ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1'}`} />
                  {isSubmitting ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
                </Button>
              </form>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-1 lg:order-2">
            {/* Contact Details */}
            <Card className="p-5 sm:p-8 card-gradient border-accent/20 hover-lift">
              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">Contact Information</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Prefer to reach out directly? Here are my contact details.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-accent/10 hover:bg-accent/5 transition-colors group"
                    >
                      <div className={`p-2 sm:p-3 rounded-lg flex-shrink-0 ${
                        contact.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                      }`}>
                        <contact.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          contact.color === 'primary' ? 'text-primary' : 'text-accent'
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">
                          {contact.label}
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground truncate">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-5 sm:p-8 card-gradient border-primary/20 hover-lift">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-lg">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">Availability</h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-foreground text-sm sm:text-base">Response Time</span>
                    <Badge variant="secondary" className="bg-success/10 text-success border-success/20 text-xs sm:text-sm">
                      Within 24 hours
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-foreground text-sm sm:text-base">Freelance Status</span>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
                      Available
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-foreground text-sm sm:text-base">Time Zone</span>
                    <span className="text-muted-foreground text-xs sm:text-sm">IST (UTC +5:30)</span>
                  </div>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-accent/10">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Currently accepting new projects and collaborations. 
                    Let's discuss how we can work together!
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10 md:mt-16">
          <Card className="p-5 sm:p-8 card-gradient border-accent/20 max-w-4xl mx-auto">
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Ready to Start Your Project?
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Whether you need web development, AI integration, or creative content solutions, 
                I'm here to help bring your vision to life. Let's create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => window.open('https://wa.me/918297458070?text=Hi!%20I%20want%20to%20start%20a%20project%20with%20you.', '_blank')}
                >
                  <MessageCircle className="w-4 h-4" />
                  Start on WhatsApp
                </Button>
                <Button 
                  variant="outline-primary" 
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => window.location.href = 'tel:+918297458070'}
                >
                  <Phone className="w-4 h-4" />
                  Schedule a Call
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
