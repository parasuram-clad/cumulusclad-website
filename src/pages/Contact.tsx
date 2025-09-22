import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const offices = [
    {
      city: 'Mumbai',
      address: 'BKC, Mumbai - 400051',
      phone: '+91 22 4567 8901',
      email: 'mumbai@cumulusclad.com'
    },
    {
      city: 'Bangalore',
      address: 'Koramangala, Bangalore - 560095', 
      phone: '+91 80 4567 8902',
      email: 'bangalore@cumulusclad.com'
    },
    {
      city: 'Delhi NCR',
      address: 'Gurgaon, Haryana - 122018',
      phone: '+91 124 4567 8903', 
      email: 'delhi@cumulusclad.com'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-luxury-red/5 to-luxury-red/10" />
          <div className="container-luxury relative z-10 text-center">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-center space-x-3 text-luxury-red font-medium">
                <MessageSquare className="h-5 w-5" />
                <span className="tracking-wider uppercase text-sm">Get In Touch</span>
              </div>
              
              <h1 className="text-hero text-charcoal">
                Let's Build Something <span className="text-gradient-primary">Amazing Together</span>
              </h1>
              
              <p className="text-xl text-dark-gray max-w-4xl mx-auto leading-relaxed">
                Ready to transform your business with cutting-edge technology? Get in touch with our 
                team and let's discuss how we can help you achieve your digital goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section-padding bg-soft-gray">
          <div className="container-luxury">
            <div className="grid lg:grid-cols-3 gap-16">
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="card-luxury">
                  <CardContent className="p-8">
                    <div className="mb-8">
                      <h2 className="text-2xl font-semibold text-charcoal mb-4 font-space-grotesk">Send Us a Message</h2>
                      <p className="text-dark-gray">Fill out the form below and we'll get back to you within 24 hours.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-2">Full Name</label>
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="input-luxury focus:ring-2 focus:ring-luxury-red/20 focus:border-luxury-red"
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-2">Email Address</label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="input-luxury focus:ring-2 focus:ring-luxury-red/20 focus:border-luxury-red"
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">Company Name</label>
                        <Input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="input-luxury focus:ring-2 focus:ring-luxury-red/20 focus:border-luxury-red"
                          placeholder="Your company name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">Message</label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className="input-luxury focus:ring-2 focus:ring-luxury-red/20 focus:border-luxury-red resize-none"
                          placeholder="Tell us about your project and requirements..."
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="btn-luxury w-full group">
                        Send Message
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-medium" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="card-luxury">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-charcoal mb-4 font-space-grotesk">Quick Contact</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-luxury-red/10 rounded-lg flex items-center justify-center">
                          <Phone className="h-5 w-5 text-luxury-red" />
                        </div>
                        <div>
                          <div className="font-medium text-charcoal">+91 1800 123 4567</div>
                          <div className="text-sm text-dark-gray">24/7 Support Hotline</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-luxury-red/10 rounded-lg flex items-center justify-center">
                          <Mail className="h-5 w-5 text-luxury-red" />
                        </div>
                        <div>
                          <div className="font-medium text-charcoal">hello@cumulusclad.com</div>
                          <div className="text-sm text-dark-gray">General Inquiries</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-luxury-red/10 rounded-lg flex items-center justify-center">
                          <Clock className="h-5 w-5 text-luxury-red" />
                        </div>
                        <div>
                          <div className="font-medium text-charcoal">Mon - Fri, 9AM - 7PM</div>
                          <div className="text-sm text-dark-gray">IST (Indian Standard Time)</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-luxury">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-charcoal mb-4 font-space-grotesk">Follow Us</h3>
                    
                    <div className="flex space-x-4">
                      <div className="w-10 h-10 bg-luxury-red/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-luxury-red/20 transition-colors duration-300">
                        <span className="text-luxury-red font-medium">Li</span>
                      </div>
                      <div className="w-10 h-10 bg-luxury-red/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-luxury-red/20 transition-colors duration-300">
                        <span className="text-luxury-red font-medium">Tw</span>
                      </div>
                      <div className="w-10 h-10 bg-luxury-red/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-luxury-red/20 transition-colors duration-300">
                        <span className="text-luxury-red font-medium">Gh</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="section-padding">
          <div className="container-luxury">
            <div className="text-center mb-16">
              <h2 className="text-section-title text-charcoal mb-6">Our Offices Across India</h2>
              <p className="text-xl text-dark-gray">Visit us at any of our locations across major Indian tech hubs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <Card key={office.city} className="card-luxury text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-luxury-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <MapPin className="h-8 w-8 text-luxury-red" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-charcoal mb-4 font-space-grotesk">{office.city}</h3>
                    
                    <div className="space-y-3 text-sm text-dark-gray">
                      <div>{office.address}</div>
                      <div className="font-medium">{office.phone}</div>
                      <div className="text-luxury-red">{office.email}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-16">
              <Card className="card-luxury overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-r from-luxury-red/10 to-luxury-red/20 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-luxury-red mx-auto mb-4" />
                      <div className="text-xl font-semibold text-charcoal">Interactive Map</div>
                      <div className="text-dark-gray">Find our offices across India</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;