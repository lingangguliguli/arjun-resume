
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      institution: 'Scaler School of Technology',
      degree: 'Computer Science Program',
      period: '2025 - 2029',
      status: 'Future Student',
      location: 'Bangalore, India',
      description: 'Intensive, industry-focused computer science program with emphasis on practical skills and real-world projects.',
      highlights: ['Industry-Relevant Curriculum', 'Hands-on Projects', 'Mentorship Program'],
      color: 'neon-purple'
    },
    {
      institution: 'BITS Pilani',
      degree: 'Bachelor of Science in Computer Science',
      period: '2025 - 2029',
      status: 'Future Student',
      location: 'Pilani, Rajasthan',
      description: 'Pursuing a comprehensive CS degree from one of India\'s premier technical institutions.',
      highlights: ['Core Computer Science Curriculum', 'Research Opportunities', 'Industry Partnerships'],
      color: 'neon-blue'
    }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="education">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Academic Journey</h2>
        <p className="text-xl text-muted-foreground">My educational path and continuous learning</p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-transparent transform md:-translate-x-0.5"></div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div 
              key={edu.institution} 
              className={`flex flex-col md:flex-row gap-8 animate-slide-up ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full transform -translate-x-1.5 md:-translate-x-1.5 mt-8 neon-glow"></div>

              {/* Content */}
              <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <Card className="glass-card hover:neon-glow transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-${edu.color}/20 flex items-center justify-center group-hover:animate-pulse-glow`}>
                        <GraduationCap className={`w-6 h-6 text-${edu.color}`} />
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`bg-${edu.color}/10 text-${edu.color} border-${edu.color}/30`}
                      >
                        {edu.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">{edu.institution}</CardTitle>
                    <CardDescription className="text-lg font-medium text-foreground mb-4">
                      {edu.degree}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {edu.description}
                    </p>
                    
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-semibold mb-3">
                        <Award className={`w-4 h-4 text-${edu.color}`} />
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className={`w-1.5 h-1.5 bg-${edu.color} rounded-full`}></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Status */}
      <div className="mt-16 text-center">
        <Card className="glass-card max-w-2xl mx-auto">
          <CardContent className="pt-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-neon-green/20 flex items-center justify-center animate-pulse-glow">
                <GraduationCap className="w-6 h-6 text-neon-green" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Preparing for Journey</h3>
                <p className="text-sm text-muted-foreground">Future CS Student</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Excited to begin my journey in computer science, preparing to dive deep into 
              cutting-edge technologies and build innovative solutions.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EducationSection;
