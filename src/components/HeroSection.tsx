
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  MapPin, 
  Code,
  Rocket,
  Zap,
  Brain,
  Star,
  ArrowDown
} from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* 3D Floating Elements */}
      <div className="absolute inset-0">
        <div className="floating-icon top-20 left-20 text-neon-blue">
          <Code className="w-8 h-8 animate-float" style={{animationDelay: '0s'}} />
        </div>
        <div className="floating-icon top-32 right-32 text-neon-purple">
          <Brain className="w-6 h-6 animate-float" style={{animationDelay: '2s'}} />
        </div>
        <div className="floating-icon bottom-40 left-32 text-neon-pink">
          <Rocket className="w-7 h-7 animate-float" style={{animationDelay: '4s'}} />
        </div>
        <div className="floating-icon bottom-32 right-20 text-neon-green">
          <Zap className="w-5 h-5 animate-float" style={{animationDelay: '1s'}} />
        </div>
        <div className="floating-icon top-1/2 left-10 text-neon-blue">
          <Star className="w-4 h-4 animate-float" style={{animationDelay: '3s'}} />
        </div>
      </div>

      {/* Main 3D Avatar/Cube */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 hidden lg:block">
        <div className="w-full h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl animate-rotate-3d opacity-20 neon-glow"></div>
      </div>

      {/* Hero Content */}
      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            Arjun Saxena
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-4">
            Aspiring Full Stack Developer
          </div>
          <p className="text-lg md:text-xl text-neon-blue font-medium mb-8 animate-pulse-glow">
            "Building smarter, faster with AI"
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up" style={{animationDelay: '0.2s'}}>
          <div className="flex items-center gap-2 glass-card px-4 py-2">
            <MapPin className="w-4 h-4 text-neon-blue" />
            <span>Bangalore, India</span>
          </div>
          <div className="flex items-center gap-2 glass-card px-4 py-2">
            <Mail className="w-4 h-4 text-neon-purple" />
            <span>arjun.saxena2020@gmail.com</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
          <Button 
            className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink transition-all duration-300 neon-glow"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
            <Mail className="w-4 h-4 ml-2" />
          </Button>
          <Button 
            variant="outline" 
            className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background transition-all duration-300"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
            <Rocket className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-neon-blue" />
      </div>
    </section>
  );
};

export default HeroSection;
