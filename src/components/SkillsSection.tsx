
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Settings, Brain } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'neon-blue',
      skills: ['React', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design']
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'neon-purple',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Database Design']
    },
    {
      title: 'Tools & Platforms',
      icon: Settings,
      color: 'neon-pink',
      skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'npm/yarn']
    },
    {
      title: 'AI Tools',
      icon: Brain,
      color: 'neon-green',
      skills: ['ChatGPT', 'GitHub Copilot', 'Claude', 'AI-Assisted Development']
    }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="skills">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Skills & Technologies</h2>
        <p className="text-xl text-muted-foreground">My technical toolkit for building amazing applications</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <Card 
              key={category.title} 
              className="glass-card hover:neon-glow transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${category.color}/20 flex items-center justify-center group-hover:animate-pulse-glow`}>
                  <IconComponent className={`w-8 h-8 text-${category.color}`} />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className={`bg-${category.color}/10 text-${category.color} border-${category.color}/30 hover:bg-${category.color}/20 transition-colors text-xs`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
