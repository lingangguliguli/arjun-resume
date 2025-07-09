
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Zap, Code, Brain } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI-Powered Task Manager',
      description: 'A smart task management application that uses AI to prioritize tasks, suggest optimal scheduling, and provide productivity insights.',
      tags: ['React', 'Node.js', 'OpenAI API', 'Tailwind CSS'],
      features: ['AI Task Prioritization', 'Smart Scheduling', 'Productivity Analytics'],
      icon: Brain,
      color: 'neon-blue'
    },
    {
      title: 'Modern Portfolio Website',
      description: 'A responsive, 3D interactive portfolio website built with modern web technologies and smooth animations.',
      tags: ['React', 'Three.js', 'Tailwind CSS', 'Vercel'],
      features: ['3D Animations', 'Responsive Design', 'Performance Optimized'],
      icon: Code,
      color: 'neon-purple'
    },
    {
      title: 'AI Code Assistant',
      description: 'A VS Code extension that enhances development workflow by providing AI-powered code suggestions and documentation.',
      tags: ['TypeScript', 'VS Code API', 'AI Integration'],
      features: ['Smart Code Completion', 'Auto Documentation', 'Error Detection'],
      icon: Zap,
      color: 'neon-pink'
    }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="projects">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
        <p className="text-xl text-muted-foreground">AI-enhanced and modern web applications</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const IconComponent = project.icon;
          return (
            <Card 
              key={project.title} 
              className="glass-card hover:neon-glow transition-all duration-300 group animate-slide-up flex flex-col"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 mb-4 rounded-lg bg-${project.color}/20 flex items-center justify-center group-hover:animate-pulse-glow`}>
                  <IconComponent className={`w-6 h-6 text-${project.color}`} />
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-4 flex-1">
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-neon-blue">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-neon-blue rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className={`bg-${project.color}/10 text-${project.color} border-${project.color}/30 text-xs`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-6 pt-4 border-t border-border/50">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-6">Want to see more of my work?</p>
        <Button 
          variant="outline" 
          className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background transition-all duration-300"
        >
          <Github className="w-4 h-4 mr-2" />
          View All Projects on GitHub
        </Button>
      </div>
    </section>
  );
};

export default ProjectsSection;
