import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Heart, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '/', type: 'link' },
    { name: 'Services', href: '#services', type: 'scroll' },
    { name: 'About', href: '#about', type: 'scroll' },
    { name: 'Gallery', href: '/gallery', type: 'link' },
    { name: 'Testimonials', href: '#testimonials', type: 'scroll' },
    { name: 'Contact', href: '/contact', type: 'link' }
  ];

  const services = [
    'Bridal Trial',
    'Wedding Day Package',
    'Engagement Session',
    'Group Booking',
    'Special Events',
    'Makeup Lessons'
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 8:00 PM' },
    { day: 'Sunday', hours: 'By Appointment' }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-900 to-accent-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-serif font-bold">B</span>
              </div>
              <span className="font-serif text-2xl font-semibold">Bridal Makeup</span>
            </div>
            
            <p className="text-primary-100 leading-relaxed">
              Creating stunning bridal looks that enhance your natural beauty and capture your unique style. Professional makeup artistry for your most precious moments.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Award className="h-4 w-4 text-secondary" />
                <span className="text-primary-100">Licensed & Certified</span>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.type === 'link' ? (
                    <Link
                      to={link.href}
                      className="text-primary-100 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => scrollToSection(link.href.replace('#', ''))}
                      className="text-primary-100 hover:text-white transition-colors duration-200 text-sm text-left"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-100 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">(555) 123-4567</p>
                  <p className="text-primary-100 text-sm">Available Mon-Sat</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">hello@bridalmakeup.com</p>
                  <p className="text-primary-100 text-sm">24hr response time</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Greater Metro Area</p>
                  <p className="text-primary-100 text-sm">On-location services</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-secondary" />
                <h3 className="font-serif text-lg font-semibold">Business Hours</h3>
              </div>
              <div className="space-y-2">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-primary-100 text-sm">{schedule.day}</span>
                    <span className="text-white text-sm font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-primary-100 mb-4">Ready to book your perfect look?</p>
              <Link to="/booking">
                <Button className="bg-secondary hover:bg-secondary-600 text-secondary-foreground px-6 py-3">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-primary-100">
            <span>© 2024 Bridal Makeup Services. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-primary-100">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-secondary fill-current" />
            <span>for beautiful brides</span>
          </div>
          
          <div className="flex gap-6 text-sm text-primary-100">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;