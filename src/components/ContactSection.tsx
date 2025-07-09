
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  MessageCircle,
  User,
  FileText
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="contact">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Let's Connect</h2>
        <p className="text-xl text-muted-foreground">Ready to build something amazing together?</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <Card className="glass-card hover:neon-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Get In Touch</CardTitle>
              <CardDescription>
                I'm always excited to discuss new opportunities, collaborations, or just chat about technology!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-neon-blue/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-neon-blue" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:arjun.saxena2020@gmail.com" className="text-neon-blue hover:underline">
                    arjun.saxena2020@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-neon-purple/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-neon-purple" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+917470326963" className="text-neon-purple hover:underline">
                    +91 7470326963
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-neon-pink/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-neon-pink" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Bangalore, India</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4">
            <Button 
              className="h-16 bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink transition-all duration-300 neon-glow"
              onClick={() => window.open('https://github.com')}
            >
              <Github className="w-6 h-6 mb-2" />
              <span className="text-sm">GitHub</span>
            </Button>
            <Button 
              className="h-16 bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-green transition-all duration-300 neon-glow"
              onClick={() => window.open('https://linkedin.com')}
            >
              <Linkedin className="w-6 h-6 mb-2" />
              <span className="text-sm">LinkedIn</span>
            </Button>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-neon-blue" />
              Send Message
            </CardTitle>
            <CardDescription>
              Drop me a message and I'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10 glass-card border-white/10 focus:border-neon-blue"
                    required
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 glass-card border-white/10 focus:border-neon-blue"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="pl-10 glass-card border-white/10 focus:border-neon-blue"
                  required
                />
              </div>

              <Textarea
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                className="glass-card border-white/10 focus:border-neon-blue min-h-32 resize-none"
                required
              />

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink transition-all duration-300 neon-glow"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border/50 text-center">
        <p className="text-muted-foreground mb-4">
          Built with ❤️ using React, Tailwind CSS, and modern web technologies
        </p>
        <div className="gradient-text font-semibold">
          Arjun Saxena © 2024 - Building the future, one line of code at a time
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
