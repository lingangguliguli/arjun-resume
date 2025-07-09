
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ShoppingCart } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Comparit',
      description: 'A web application that helps users compare food prices across all delivery apps, making it easier to find the best deals and save money on food orders.',
      tags: ['React', 'Node.js', 'API Integration', 'Tailwind CSS'],
      features: ['Price Comparison', 'Multiple App Support', 'Real-time Data', 'User-friendly Interface'],
      icon: ShoppingCart,
      color: 'neon-blue'
    }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="projects">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
        <p className="text-xl text-muted-foreground">Building solutions that make a difference</p>
      </div>

      <div className="grid lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
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
