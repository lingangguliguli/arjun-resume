
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Target, Zap, Code } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="about">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
        <p className="text-xl text-muted-foreground">Young, enthusiastic, and AI-powered</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="glass-card hover:neon-glow transition-all duration-300 group">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <User className="w-6 h-6 text-neon-blue" />
              <CardTitle className="text-xl">Who I Am</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              I'm a 1st Year Computer Science student at Scaler School of Technology, 
              pursuing my Bachelor's from BITS Pilani. As a young and enthusiastic developer, 
              I'm passionate about building modern, scalable applications and leveraging AI 
              tools to enhance productivity.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              <Badge variant="secondary" className="bg-neon-blue/20 text-neon-blue border-neon-blue/30">
                Student
              </Badge>
              <Badge variant="secondary" className="bg-neon-purple/20 text-neon-purple border-neon-purple/30">
                Developer
              </Badge>
              <Badge variant="secondary" className="bg-neon-pink/20 text-neon-pink border-neon-pink/30">
                AI Enthusiast
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card hover:neon-glow transition-all duration-300 group">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Target className="w-6 h-6 text-neon-purple" />
              <CardTitle className="text-xl">Career Goals</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Code className="w-4 h-4 mt-1 text-neon-blue flex-shrink-0" />
                <span>Seeking opportunities in Software Engineering and Full Stack Development</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 mt-1 text-neon-purple flex-shrink-0" />
                <span>Passionate about AI-assisted development and modern web technologies</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="w-4 h-4 mt-1 text-neon-pink flex-shrink-0" />
                <span>Building scalable, full-stack web apps and AI-powered tools</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="glass-card hover:neon-glow transition-all duration-300 md:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-6 h-6 text-neon-green" />
              <CardTitle className="text-xl">My Unique Selling Point</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-blue/20 flex items-center justify-center">
                  <User className="w-8 h-8 text-neon-blue" />
                </div>
                <h4 className="font-semibold mb-2">Young & Adaptive</h4>
                <p className="text-sm text-muted-foreground">Quick to learn and adapt to new technologies and methodologies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-purple/20 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-neon-purple" />
                </div>
                <h4 className="font-semibold mb-2">AI-Powered</h4>
                <p className="text-sm text-muted-foreground">Leverages AI tools to improve productivity and code quality</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-pink/20 flex items-center justify-center">
                  <Code className="w-8 h-8 text-neon-pink" />
                </div>
                <h4 className="font-semibold mb-2">Tech Enthusiast</h4>
                <p className="text-sm text-muted-foreground">Deep interest in modern software and web technologies</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
