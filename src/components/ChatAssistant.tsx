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
  const [apiKey, setApiKey] = useState("");
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const portfolioContext = `
    You are an AI assistant for Vineel Bavisetti's portfolio website. Here's information about Vineel:
    
    ABOUT VINEEL:
    - Computer Engineering student at MVGR College of Engineering
    - Passionate about web development and AI technologies
    - Building modern web applications and exploring AI solutions
    
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
    
    Please answer questions about Vineel's background, projects, skills, and experience in a helpful and professional manner. Keep responses concise but informative.
  `;

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    if (!apiKey && !showApiKeyInput) {
      toast({
        title: "API Key Required",
        description: "Please set your Perplexity API key to use the chat assistant.",
        variant: "destructive"
      });
      setShowApiKeyInput(true);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-sonar-small-128k-online',
          messages: [
            {
              role: 'system',
              content: portfolioContext
            },
            {
              role: 'user',
              content: inputMessage
            }
          ],
          temperature: 0.2,
          top_p: 0.9,
          max_tokens: 500,
          return_images: false,
          return_related_questions: false,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: data.choices[0].message.content,
        role: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to get AI response. Please check your API key and try again.",
        variant: "destructive"
      });
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I'm having trouble connecting right now. Please try again later or check your API key.",
        role: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
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
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowApiKeyInput(!showApiKeyInput)}
              className="w-8 h-8 p-0"
            >
              <Settings className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* API Key Input */}
        {showApiKeyInput && (
          <div className="p-3 border-b border-border bg-muted/50">
            <Input
              type="password"
              placeholder="Enter Perplexity API Key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="text-sm"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Get your free API key from <a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">perplexity.ai</a>
            </p>
          </div>
        )}

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