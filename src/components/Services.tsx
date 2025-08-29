import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Users, Camera, Sparkles, Clock, MapPin, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'bridal-trial',
      icon: Heart,
      title: 'Bridal Trial',
      price: 150,
      duration: '2 hours',
      description: 'Perfect your wedding day look with a complete trial session including consultation and styling.',
      features: [
        'In-depth consultation',
        'Full makeup application',
        'Professional photos',
        'Look notes for wedding day',
        'Touch-up recommendations'
      ],
      popular: false,
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop'
    },
    {
      id: 'wedding-day',
      icon: Sparkles,
      title: 'Wedding Day Package',
      price: 350,
      duration: '4-5 hours',
      description: 'Complete wedding day makeup service including trial, application, and touch-ups throughout your special day.',
      features: [
        'Complimentary bridal trial',
        'Wedding day application',
        'On-location service',
        'Touch-up kit included',
        'Photography-ready finish',
        'Stress-free experience'
      ],
      popular: true,
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop'
    },
    {
      id: 'engagement',
      icon: Camera,
      title: 'Engagement Session',
      price: 200,
      duration: '1.5 hours',
      description: 'Look stunning for your engagement photos with makeup designed to photograph beautifully.',
      features: [
        'Photo-ready makeup',
        'Natural or glam options',
        'Long-lasting formula',
        'Quick consultation',
        'Touch-up tips'
      ],
      popular: false,
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=300&fit=crop'
    },
    {
      id: 'group-booking',
      icon: Users,
      title: 'Group Booking',
      price: 250,
      duration: '3-4 hours',
      description: 'Special rates for bridal parties, bridesmaids, or groups of 3 or more people.',
      features: [
        'Group discount rates',
        'Coordinated looks',
        'Efficient scheduling',
        'On-location service',
        'Individual consultations',
        'Group photos included'
      ],
      popular: false,
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop'
    }
  ];

  const additionalServices = [
    { name: 'Hair Styling Add-on', price: 100 },
    { name: 'False Lashes', price: 25 },
    { name: 'Airbrush Makeup', price: 50 },
    { name: 'Travel Fee (30+ miles)', price: 75 },
    { name: 'Early Morning Fee (before 7AM)', price: 50 },
    { name: 'Additional Touch-up Kit', price: 35 }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            From intimate trials to full wedding day experiences, we offer comprehensive makeup services tailored to your special moments.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className={`service-card relative overflow-hidden ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <div className="aspect-video relative overflow-hidden rounded-t-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3 text-xl font-serif">
                      <div className="bg-primary-100 p-2 rounded-full">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      {service.title}
                    </CardTitle>
                    <div className="text-right">
                      <div className="price-tag">${service.price}</div>
                      <div className="text-sm text-muted-foreground">starting at</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-sm uppercase tracking-wide">What's Included:</h4>
                    <div className="grid gap-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      onClick={() => navigate('/booking')}
                      className={service.popular ? 'romantic-button flex-1' : 'luxury-button flex-1'}
                    >
                      Book Now
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => navigate('/contact')}
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-semibold mb-4">Additional Services & Add-ons</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enhance your experience with our premium add-on services. Perfect for creating your complete look.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((addon, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{addon.name}</span>
                    <span className="text-secondary font-semibold">+${addon.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground mb-4">
              All services include professional consultation and can be customized to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/booking')}
                className="romantic-button"
              >
                Book Your Service
              </Button>
              <Button 
                variant="outline"
                onClick={() => navigate('/contact')}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Custom Quote
              </Button>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-16 text-center">
          <Card className="elegant-card p-8 bg-gradient-to-r from-accent-50 to-primary-50">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-accent" />
              <h3 className="text-xl font-serif font-semibold">Service Areas</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              We provide on-location makeup services throughout the greater metro area and surrounding regions.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {['Downtown', 'Suburbs', 'Beach Areas', 'Wine Country', 'Mountain Venues', 'Historic Districts'].map((area, index) => (
                <Badge key={index} variant="secondary" className="bg-white/80 text-accent-700">
                  {area}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;