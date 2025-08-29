import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Star, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: Users, label: 'Happy Brides', value: '500+' },
    { icon: Star, label: 'Five Star Reviews', value: '4.9/5' },
    { icon: Award, label: 'Years Experience', value: '8+' },
    { icon: Calendar, label: 'Weddings This Year', value: '150+' }
  ];

  return (
    <section className="hero-section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F8E8E8' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <Badge className="bg-secondary text-secondary-foreground px-4 py-2 text-sm font-medium">
                ✨ Award-Winning Makeup Artist
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                Perfect Bridal
                <span className="text-primary block">Makeup</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Creating your dream look for your special day. Professional makeup artistry that enhances your natural beauty and captures your unique style.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => navigate('/booking')}
                className="romantic-button text-lg px-8 py-4 h-auto"
              >
                Book Consultation
              </Button>
              <Button 
                onClick={() => navigate('/gallery')}
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 h-auto"
              >
                View Portfolio
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="font-bold text-lg text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative slide-in-left">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=800&fit=crop&crop=face"
                alt="Beautiful bride with professional makeup"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Cards */}
              <Card className="absolute -left-4 top-20 bg-white/95 backdrop-blur-sm p-4 shadow-lg max-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">5-Star Rated</div>
                    <div className="text-xs text-muted-foreground">200+ Reviews</div>
                  </div>
                </div>
              </Card>

              <Card className="absolute -right-4 bottom-20 bg-white/95 backdrop-blur-sm p-4 shadow-lg max-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Certified Artist</div>
                    <div className="text-xs text-muted-foreground">8+ Years Experience</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-secondary to-accent rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-secondary rounded-full"></div>
            <span>Professional Products</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>On-Location Service</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;