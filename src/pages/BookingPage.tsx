import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BookingPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    location: '',
    message: ''
  });

  const services = [
    { id: 'bridal-trial', name: 'Bridal Trial', price: 150 },
    { id: 'wedding-day', name: 'Wedding Day Package', price: 350 },
    { id: 'engagement', name: 'Engagement Makeup', price: 200 },
    { id: 'group-booking', name: 'Group Booking (3+ people)', price: 250 }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.date || !formData.time) {
      toast.error('Please fill in all required fields');
      return;
    }

    toast.success("Booking request submitted! We'll contact you within 24 hours to confirm.");
    
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  const selectedService = services.find(s => s.id === formData.service);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="section-title">Book Your Appointment</h1>
            <p className="section-subtitle">
              Ready to look stunning? Let's schedule your perfect makeup session.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="elegant-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-serif">
                  <Calendar className="h-5 w-5 text-primary" />
                  Booking Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <User className="inline h-4 w-4 mr-1" />
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
                        <Mail className="inline h-4 w-4 mr-1" />
                        Email *
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
                        <Phone className="inline h-4 w-4 mr-1" />
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Service *
                      </label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="form-input">
                          <SelectValue placeholder="Choose a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map(service => (
                            <SelectItem key={service.id} value={service.id}>
                              {service.name} - ${service.price}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <Calendar className="inline h-4 w-4 mr-1" />
                        Preferred Date *
                      </label>
                      <Input
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        className="form-input"
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <Clock className="inline h-4 w-4 mr-1" />
                        Preferred Time *
                      </label>
                      <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                        <SelectTrigger className="form-input">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map(time => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <MapPin className="inline h-4 w-4 mr-1" />
                      Location/Address
                    </label>
                    <Input
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="Where should we meet?"
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Special Requests
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Any special requests or details about your event?"
                      className="form-input min-h-[100px]"
                    />
                  </div>

                  <Button type="submit" className="romantic-button w-full">
                    Submit Booking Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {selectedService && (
                <Card className="elegant-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-serif">Selected Service</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg">{selectedService.name}</h3>
                      <p className="price-tag">${selectedService.price}</p>
                      <div className="text-sm text-muted-foreground">
                        {selectedService.id === 'bridal-trial' && (
                          <p>Perfect for testing your wedding day look. Includes consultation and full makeup application.</p>
                        )}
                        {selectedService.id === 'wedding-day' && (
                          <p>Complete wedding day package including trial, touch-ups, and on-location service.</p>
                        )}
                        {selectedService.id === 'engagement' && (
                          <p>Beautiful makeup for your engagement photos or party. Includes consultation.</p>
                        )}
                        {selectedService.id === 'group-booking' && (
                          <p>Special rate for groups of 3 or more. Perfect for bridal parties or events.</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card className="elegant-card">
                <CardHeader>
                  <CardTitle className="text-xl font-serif">What to Expect</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>We'll contact you within 24 hours to confirm your appointment</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Consultation included to discuss your desired look</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Professional makeup application using high-quality products</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>Touch-up kit provided for special events</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="elegant-card">
                <CardHeader>
                  <CardTitle className="text-xl font-serif">Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>(555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>hello@bridalmakeup.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Serving the Greater Metro Area</span>
                    </div>
                  </div>
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

export default BookingPage;