
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Code,
  Database,
  Brain,
  Rocket,
  GraduationCap,
  Calendar,
  Star,
  Zap,
  Target,
  Send
} from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-slate-900">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-neon-purple rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-neon-pink rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-neon-green rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </div>

      {/* Scroll to top button */}
      <Button 
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/30 hover:bg-primary/30 transition-all duration-300 neon-glow"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Rocket className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default Index;
