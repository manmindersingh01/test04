import React, { useState } from 'react';
import { ArrowLeft, Phone, Mail, MapPin, Clock, Instagram, Facebook, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    toast.success("Message sent successfully! We'll get back to you soon.");
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </div>

          <div className="text-center mb-12">
            <h1 className="section-title">Get In Touch</h1>
            <p className="section-subtitle">
              Have questions about our services? Ready to book your appointment? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="elegant-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-serif">
                  <Send className="h-5 w-5 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your@email.com"
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="What's this about?"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your event, questions, or how we can help..."
                      className="form-input min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="romantic-button w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="elegant-card">
                <CardHeader>
                  <CardTitle className="text-xl font-serif">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Available Mon-Sat, 9AM-7PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">hello@bridalmakeup.com</p>
                      <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Service Area</h3>
                      <p className="text-muted-foreground">Greater Metro Area</p>
                      <p className="text-sm text-muted-foreground">On-location services available</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 p-3 rounded-full">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <div className="text-muted-foreground text-sm space-y-1">
                        <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                        <p>Saturday: 8:00 AM - 8:00 PM</p>
                        <p>Sunday: By appointment only</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="elegant-card">
                <CardHeader>
                  <CardTitle className="text-xl font-serif">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button variant="outline" size="lg" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Instagram className="h-5 w-5 mr-2" />
                      Instagram
                    </Button>
                    <Button variant="outline" size="lg" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Facebook className="h-5 w-5 mr-2" />
                      Facebook
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    Follow us for daily inspiration, behind-the-scenes content, and client transformations!
                  </p>
                </CardContent>
              </Card>

              <Card className="elegant-card bg-gradient-to-r from-primary-50 to-secondary-50">
                <CardContent className="p-6">
                  <h3 className="font-serif text-lg font-semibold mb-3">Ready to Book?</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Skip the contact form and book your appointment directly. We'll confirm your session within 24 hours.
                  </p>
                  <Button 
                    onClick={() => navigate('/booking')}
                    className="romantic-button w-full"
                  >
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Quick answers to common questions about our services and booking process.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="elegant-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">How far in advance should I book?</h3>
                  <p className="text-muted-foreground text-sm">
                    For weddings, we recommend booking 3-6 months in advance. For other events, 2-4 weeks is usually sufficient.
                  </p>
                </CardContent>
              </Card>

              <Card className="elegant-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Do you travel for appointments?</h3>
                  <p className="text-muted-foreground text-sm">
                    Yes! We offer on-location services throughout the greater metro area. Travel fees may apply for locations over 30 miles.
                  </p>
                </CardContent>
              </Card>

              <Card className="elegant-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">What's included in a bridal trial?</h3>
                  <p className="text-muted-foreground text-sm">
                    A bridal trial includes consultation, full makeup application, photos, and notes for your wedding day look.
                  </p>
                </CardContent>
              </Card>

              <Card className="elegant-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">What products do you use?</h3>
                  <p className="text-muted-foreground text-sm">
                    We use professional, high-quality makeup from brands like MAC, Urban Decay, and Charlotte Tilbury for long-lasting results.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;