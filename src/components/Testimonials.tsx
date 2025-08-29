import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Emily Johnson',
      role: 'Bride',
      location: 'Downtown Wedding',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616c9c0e6b4?w=100&h=100&fit=crop&crop=face',
      text: "Sarah made me feel absolutely stunning on my wedding day! Her attention to detail and ability to enhance my natural features was incredible. The makeup lasted all day and looked perfect in every photo. I couldn't have asked for a better experience!",
      service: 'Wedding Day Package',
      date: 'September 2024'
    },
    {
      id: 2,
      name: 'Jessica Martinez',
      role: 'Bride',
      location: 'Beach Wedding',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      text: "Working with Sarah was a dream! She listened to exactly what I wanted and created the perfect romantic look for my beach wedding. Despite the humidity and ocean breeze, my makeup stayed flawless throughout the entire celebration.",
      service: 'Bridal Trial + Wedding Day',
      date: 'August 2024'
    },
    {
      id: 3,
      name: 'Amanda Chen',
      role: 'Bride',
      location: 'Garden Wedding',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      text: "Sarah is incredibly talented and professional. She made my entire bridal party look absolutely gorgeous! Her calm demeanor helped keep everyone relaxed on the morning of the wedding. The photos turned out amazing thanks to her expertise.",
      service: 'Group Booking',
      date: 'July 2024'
    },
    {
      id: 4,
      name: 'Rachel Thompson',
      role: 'Bride',
      location: 'Vineyard Wedding',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      text: "I was nervous about my makeup for the big day, but Sarah put me completely at ease. She created exactly the look I envisioned - elegant, timeless, and perfectly me. I felt like a princess! Highly recommend her to any bride.",
      service: 'Wedding Day Package',
      date: 'June 2024'
    },
    {
      id: 5,
      name: 'Sophia Williams',
      role: 'Bride',
      location: 'Historic Venue',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
      text: "Sarah's work is absolutely phenomenal! She has such an eye for detail and knows exactly how to make makeup photograph beautifully. My engagement photos were stunning, and I knew I had to book her for my wedding too!",
      service: 'Engagement + Wedding',
      date: 'May 2024'
    },
    {
      id: 6,
      name: 'Lauren Davis',
      role: 'Bride',
      location: 'Mountain Wedding',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop&crop=face',
      text: "From the trial to the wedding day, Sarah exceeded all my expectations. She's not just incredibly skilled, but also so sweet and calming to be around. My makeup was flawless and I felt absolutely radiant. Thank you, Sarah!",
      service: 'Bridal Trial + Wedding Day',
      date: 'October 2024'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentReview = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Brides Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our beautiful brides have to say about their experience with us.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="elegant-card overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Testimonial Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <Quote className="h-8 w-8 text-primary mb-4" />
                    <p className="text-lg text-muted-foreground leading-relaxed italic mb-6">
                      "{currentReview.text}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={currentReview.image}
                      alt={currentReview.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{currentReview.name}</h4>
                      <p className="text-sm text-muted-foreground">{currentReview.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(currentReview.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="bg-primary-100 text-primary-800">
                      {currentReview.service}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{currentReview.date}</p>
                </div>

                {/* Image */}
                <div className="relative aspect-square lg:aspect-auto">
                  <img
                    src={`https://images.unsplash.com/photo-${1594736797933 + currentReview.id}?w=500&h=600&fit=crop`}
                    alt="Beautiful bride"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentTestimonial ? 'bg-primary w-8' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <Card key={testimonial.id} className="testimonial-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  "{testimonial.text.substring(0, 120)}..."
                </p>
                
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats & Social Proof */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="elegant-card text-center p-8 bg-gradient-to-br from-primary-50 to-primary-100">
            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
            <div className="text-xs text-muted-foreground mt-1">From 200+ Reviews</div>
          </Card>

          <Card className="elegant-card text-center p-8 bg-gradient-to-br from-secondary-50 to-secondary-100">
            <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-secondary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Happy Brides</div>
            <div className="text-xs text-muted-foreground mt-1">Since 2016</div>
          </Card>

          <Card className="elegant-card text-center p-8 bg-gradient-to-br from-accent-50 to-accent-100">
            <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Quote className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-accent mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Recommend Us</div>
            <div className="text-xs text-muted-foreground mt-1">To Friends & Family</div>
          </Card>
        </div>

        {/* CTA */}
        <Card className="elegant-card bg-gradient-to-r from-primary-50 to-secondary-50 text-center p-8">
          <h3 className="text-2xl font-serif font-semibold mb-4">Ready to Join Our Happy Brides?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Experience the same exceptional service and stunning results that our clients rave about. Book your consultation today!
          </p>
          <Button className="romantic-button">
            Start Your Beauty Journey
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default Testimonials;