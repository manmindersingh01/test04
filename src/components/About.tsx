import React from 'react';
import { Award, Heart, Users, Star, Palette, Camera } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Certified Professional',
      description: 'Licensed makeup artist with advanced certifications'
    },
    {
      icon: Users,
      title: '500+ Happy Brides',
      description: 'Trusted by brides across the region'
    },
    {
      icon: Star,
      title: '4.9/5 Star Rating',
      description: 'Consistently rated excellent by clients'
    },
    {
      icon: Heart,
      title: '8 Years Experience',
      description: 'Perfecting bridal beauty since 2016'
    }
  ];

  const skills = [
    { name: 'Bridal Makeup', level: 98 },
    { name: 'Airbrush Techniques', level: 95 },
    { name: 'Color Theory', level: 92 },
    { name: 'Photography Makeup', level: 96 },
    { name: 'Special Effects', level: 88 },
    { name: 'Skin Care Consultation', level: 94 }
  ];

  const certifications = [
    'Professional Makeup Artistry Certification',
    'Airbrush Makeup Specialist',
    'Bridal Beauty Specialist',
    'Color Theory & Application',
    'Sanitation & Safety Certified',
    'Photography Makeup Techniques'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">About Sarah</h2>
          <p className="section-subtitle">
            Meet the artist behind the magic. Passionate about enhancing natural beauty and creating unforgettable looks for life's most precious moments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Artist Photo & Info */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616c9c0e6b4?w=500&h=600&fit=crop&crop=face"
                alt="Sarah - Professional Makeup Artist"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Achievement Card */}
              <Card className="absolute -right-4 top-20 bg-white/95 backdrop-blur-sm p-4 shadow-lg max-w-[180px]">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Award Winner</div>
                      <div className="text-xs text-muted-foreground">Best Bridal Artist 2023</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating Stats Card */}
              <Card className="absolute -left-4 bottom-20 bg-white/95 backdrop-blur-sm p-4 shadow-lg max-w-[180px]">
                <CardContent className="p-0">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Beautiful Brides</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-secondary to-primary rounded-full opacity-20 blur-xl"></div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif font-semibold mb-4">Hi, I'm Sarah!</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With over 8 years of experience in the beauty industry, I've had the incredible privilege of being part of more than 500 weddings and special occasions. My passion lies in enhancing each client's natural beauty while creating looks that photograph beautifully and last throughout your special day.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I believe that makeup should not only make you look stunning but also make you feel confident and radiant. Every bride deserves to feel like the most beautiful version of herself, and that's exactly what I strive to achieve with every application.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not creating bridal magic, you can find me staying up-to-date with the latest beauty trends, attending workshops, and continuously perfecting my craft to bring you the very best in makeup artistry.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className="text-center p-4 bg-white/60 rounded-lg">
                      <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="font-semibold text-sm">{achievement.title}</div>
                      <div className="text-xs text-muted-foreground">{achievement.description}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Expertise */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Skills */}
          <Card className="elegant-card">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <Palette className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-serif font-semibold">Expertise & Skills</h3>
              </div>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="elegant-card">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <Camera className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-serif font-semibold">Certifications & Training</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Continuing Education:</strong> I regularly attend workshops and masterclasses to stay current with the latest techniques and trends in bridal makeup artistry.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Philosophy */}
        <Card className="elegant-card bg-gradient-to-r from-white to-primary-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-serif font-semibold mb-4">My Philosophy</h3>
            <blockquote className="text-lg text-muted-foreground italic max-w-3xl mx-auto leading-relaxed">
              "Every bride has a unique beauty that deserves to be celebrated. My role is not to change who you are, but to enhance your natural radiance and help you feel absolutely stunning on your special day. When you look in the mirror, I want you to see the most beautiful, confident version of yourself."
            </blockquote>
            <div className="mt-6">
              <Badge className="bg-secondary text-secondary-foreground px-6 py-2">
                - Sarah, Lead Makeup Artist
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;