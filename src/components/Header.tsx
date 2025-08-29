import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', href: '/', type: 'link' },
    { name: 'Services', href: '#services', type: 'scroll' },
    { name: 'About', href: '#about', type: 'scroll' },
    { name: 'Gallery', href: '/gallery', type: 'link' },
    { name: 'Testimonials', href: '#testimonials', type: 'scroll' },
    { name: 'Contact', href: '/contact', type: 'link' }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <span className="text-white font-serif font-bold text-sm">B</span>
            </div>
            <span className="font-serif text-xl font-semibold text-foreground">Bridal Makeup</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.replace('#', ''))}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              )
            ))}
          </nav>

          {/* Desktop CTA & Social */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="p-2">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
            <Button 
              onClick={() => navigate('/booking')}
              className="romantic-button"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <nav className="py-4 space-y-4">
              {navItems.map((item) => (
                item.type === 'link' ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-2 text-foreground hover:text-primary hover:bg-primary-50 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href.replace('#', ''))}
                    className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-primary-50 transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                )
              ))}
              <div className="px-4 py-2 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-4567</span>
                </div>
                <Button 
                  onClick={() => {
                    navigate('/booking');
                    setIsMenuOpen(false);
                  }}
                  className="romantic-button w-full"
                >
                  Book Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;