import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Freelancing from "@/components/Freelancing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatAssistant from "@/components/ChatAssistant";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Certifications />
      <Freelancing />
      <Contact />
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Index;
