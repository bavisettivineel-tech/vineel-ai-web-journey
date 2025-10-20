import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Send, X, Bot, User, Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm Vineel's AI assistant. I can help you learn more about his projects, skills, and experience. What would you like to know?",
      role: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const portfolioContext = `
    You are an AI assistant for Vineel Bavisetti's portfolio website. Here's information about Vineel:
    
    ABOUT VINEEL:
    - Computer Engineering student at KIET Group of Institutions, pursuing Diploma in Computer Engineering (CME)
    - Passionate about web development and AI technologies
    - Building modern web applications and exploring AI solutions
    - Available for freelance work
    
    SKILLS:
    - Frontend: HTML, CSS, React, Tailwind CSS
    - Programming: Python, C
    - Currently learning modern web technologies and AI/ML
    
    PROJECTS:
    Web Development:
    - Vineel Services: A comprehensive travel service booking webpage with RTC, railway, and airway booking functionalities built with HTML, CSS, and JavaScript
    
    Python Projects:
    1. Bus Ticket Reservation System - Interactive booking system with multiple destinations and pricing
    2. Simple Chatbot - Conversational bot with pattern matching
    3. Contact Book Manager - CRUD operations for contact management
    4. Electricity Bill Calculator - Utility bill calculator with tiered pricing
    5. Rock Paper Scissors Game - Classic game with score tracking
    6. Stock Portfolio Tracker - Investment portfolio manager with value calculation
    
    FREELANCING SERVICES:
    1. Web Development - Starting at ₹5,000
       - Responsive Design, React & Tailwind CSS, Fast Performance, SEO Optimized
    2. Python Development - Starting at ₹3,000
       - Custom Scripts, Data Management, API Integration, Automation Tools
    3. Full Stack Projects - Starting at ₹8,000
       - Database Design, User Authentication, API Development, Deployment Support
    
    Why Choose Vineel:
    - Quick turnaround time
    - Clean and maintainable code
    - Regular project updates
    - Post-delivery support
    - Affordable pricing
    - Quality guaranteed
    
    Please answer questions about Vineel's background, projects, skills, experience, and freelancing services in a helpful and professional manner. Keep responses concise but informative.
  `;

  const getLocalResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Simple greetings
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello! I'm here to help you learn more about Vineel Bavisetti's work and experience. Feel free to ask about his projects, skills, education, or anything else you'd like to know!";
    }
    
    // How are you
    if (input.includes('how are you') || input.includes('how r u') || input.includes('how do you do')) {
      return "I'm doing great, thank you for asking! I'm here to help answer your questions about Vineel's portfolio. How can I assist you today?";
    }
    
    // What's up / casual greetings
    if (input.includes("what's up") || input.includes('whats up') || input.includes('wassup') || input.includes('sup')) {
      return "Not much! Just here to help you learn about Vineel's awesome projects and skills. What would you like to know?";
    }
    
    // Good morning/afternoon/evening
    if (input.includes('good morning') || input.includes('good afternoon') || input.includes('good evening')) {
      return "Good day to you! How can I help you explore Vineel's portfolio today?";
    }
    
    // Thank you
    if (input.includes('thank') || input.includes('thanks')) {
      return "You're welcome! Feel free to ask if you have any other questions about Vineel's work!";
    }
    
    // Goodbye
    if (input.includes('bye') || input.includes('goodbye') || input.includes('see you') || input.includes('see ya')) {
      return "Goodbye! Thanks for checking out Vineel's portfolio. Feel free to come back anytime!";
    }
    
    // Who are you
    if (input.includes('who are you') || input.includes('what are you')) {
      return "I'm an AI assistant designed to help you learn about Vineel Bavisetti - his projects, skills, and experience. Think of me as your guide to exploring his portfolio!";
    }
    
    // What can you do
    if (input.includes('what can you do') || input.includes('how can you help') || input.includes('can you help')) {
      return "I can tell you all about Vineel's projects, technical skills, educational background, and help you get in touch with him. Just ask me anything you'd like to know!";
    }
    
    // Nice to meet you
    if (input.includes('nice to meet') || input.includes('pleasure to meet')) {
      return "Nice to meet you too! I'm excited to tell you about Vineel's work. What would you like to know?";
    }
    
    if (input.includes('skill') || input.includes('technology') || input.includes('tech')) {
      return "Vineel's core skills include HTML, CSS, React, Tailwind CSS, Python, and C programming. He's currently learning modern web technologies and exploring AI/ML development. He has experience building responsive web applications and interactive Python projects.";
    }
    
    if (input.includes('project') || input.includes('work') || input.includes('portfolio')) {
      return "Vineel has worked on several impressive projects:\n\n• Vineel Services - A comprehensive travel booking webpage with RTC, railway, and airway booking functionalities\n• Bus Ticket Reservation System - Interactive booking with multiple destinations\n• Simple Chatbot - Pattern-matching conversational bot\n• Contact Book Manager - Full CRUD operations for contact management\n• Electricity Bill Calculator - Utility calculator with tiered pricing\n• Rock Paper Scissors Game - Classic game with score tracking\n• Stock Portfolio Tracker - Investment portfolio manager\n\nAll projects showcase his web development and Python programming skills.";
    }
    
    if (input.includes('education') || input.includes('college') || input.includes('study')) {
      return "Vineel is currently pursuing a Diploma in Computer Engineering (CME) at KIET Group of Institutions. He's passionate about web development and AI technologies, constantly learning and building modern applications.";
    }
    
    if (input.includes('contact') || input.includes('reach') || input.includes('email')) {
      return "You can reach out to Vineel through the contact section on this website. He's always open to discussing new opportunities, collaborations, or answering questions about his projects!";
    }
    
    if (input.includes('experience') || input.includes('background') || input.includes('internship')) {
      return "Vineel has completed internships at both CodSoft and CodeAlpha in Python programming domain. He's an aspiring Computer Engineering student with hands-on experience in web development and Python programming. He has built multiple projects ranging from travel booking systems to AI chatbots, showcasing his versatility in both frontend and backend development.";
    }
    
    if (input.includes('freelance') || input.includes('freelancing') || input.includes('hire') || input.includes('services') || input.includes('pricing') || input.includes('cost')) {
      return "Vineel offers professional freelancing services:\n\n💻 Web Development (₹5,000+): Responsive design, React & Tailwind CSS, SEO optimized\n🐍 Python Development (₹3,000+): Custom scripts, automation, API integration\n🚀 Full Stack Projects (₹8,000+): Database design, authentication, deployment\n\nWhy choose Vineel? Quick turnaround, clean code, regular updates, post-delivery support, affordable pricing, and quality guaranteed!\n\nReady to start? Contact him through the contact section!";
    }
    
    if (input.includes('python')) {
      return "Vineel has extensive Python experience with projects like Bus Ticket Reservation System, Contact Book Manager, Electricity Bill Calculator, Rock Paper Scissors Game, and Stock Portfolio Tracker. His Python projects demonstrate skills in GUI development, data management, and interactive applications.";
    }
    
    if (input.includes('web') || input.includes('html') || input.includes('css') || input.includes('react')) {
      return "Vineel specializes in modern web development using HTML, CSS, React, and Tailwind CSS. His flagship project 'Vineel Services' is a comprehensive travel booking webpage that demonstrates his frontend development skills and user experience design.";
    }
    
    if (input.includes('github') || input.includes('repository') || input.includes('code')) {
      return "Vineel maintains an active GitHub profile with multiple repositories showcasing his projects. You can find his work on GitHub, including the Vineel Services project and various Python applications. His repositories demonstrate clean code practices and project documentation.";
    }
    
    return "That's a great question! I can tell you about Vineel's projects (like Vineel Services and his Python applications), his technical skills (HTML, CSS, React, Python), his education at KIET Group of Institutions, or help you get in touch with him. What specifically would you like to know more about?";
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage("");
    setIsLoading(true);

    // Simulate a brief delay for more natural conversation feel
    setTimeout(() => {
      const response = getLocalResponse(currentInput);
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary text-white hover:bg-primary/90"
        >
          <MessageSquare className="w-6 h-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="w-80 h-96 flex flex-col shadow-2xl border-primary/20">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">AI Assistant</h3>
              <p className="text-xs text-muted-foreground">Ask about Vineel's work</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 p-0"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>


        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-2 ${
                message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.role === 'user' 
                  ? 'bg-accent/10' 
                  : 'bg-primary/10'
              }`}>
                {message.role === 'user' ? (
                  <User className="w-3 h-3 text-accent" />
                ) : (
                  <Bot className="w-3 h-3 text-primary" />
                )}
              </div>
              <div className={`max-w-[75%] ${
                message.role === 'user' ? 'text-right' : 'text-left'
              }`}>
                <div className={`p-3 rounded-lg text-sm ${
                  message.role === 'user'
                    ? 'bg-accent text-white'
                    : 'bg-muted text-foreground'
                }`}>
                  {message.content}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Bot className="w-3 h-3 text-primary" />
              </div>
              <div className="bg-muted p-3 rounded-lg">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <div className="flex gap-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about Vineel's projects..."
              disabled={isLoading}
              className="flex-1"
            />
            <Button
              onClick={sendMessage}
              disabled={isLoading || !inputMessage.trim()}
              size="sm"
              className="px-3"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ChatAssistant;