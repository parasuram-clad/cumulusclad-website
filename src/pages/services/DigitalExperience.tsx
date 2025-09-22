import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Palette, Smartphone, Monitor, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const DigitalExperience = () => {
  const offerings = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that delight Indian users'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform apps for iOS and Android'
    },
    {
      icon: Monitor,
      title: 'Web Applications',
      description: 'Responsive web apps built with modern technologies'
    }
  ];

  const benefits = [
    'Increase user engagement by up to 300%',
    'Reduce bounce rates and improve conversions',
    'Create memorable brand experiences',
    'Optimize for Indian mobile-first users'
  ];

  const techStack = [
    { name: 'React', logo: '⚛️' },
    { name: 'React Native', logo: '📱' },
    { name: 'Flutter', logo: '🦋' },
    { name: 'Figma', logo: '🎨' },
    { name: 'TypeScript', logo: '📘' },
    { name: 'Next.js', logo: '▲' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding particles-bg">
          <div className="container-luxury text-center">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-center space-x-3 text-luxury-red font-medium">
                <Palette className="h-5 w-5" />
                <span className="tracking-wider uppercase text-sm">Digital Experience</span>
              </div>
              
              <h1 className="text-hero text-charcoal">
                Crafting <span className="text-gradient-primary">Digital Experiences</span> That Captivate
              </h1>
              
              <p className="text-xl text-dark-gray max-w-4xl mx-auto leading-relaxed">
                Create stunning digital experiences that resonate with Indian audiences. From intuitive 
                mobile apps to engaging web platforms, we design and build solutions that users love.
              </p>

              <div className="pt-6">
                <Button size="lg" className="btn-luxury">
                  Start Your Design Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Offerings Grid */}
        <section className="section-padding bg-soft-gray">
          <div className="container-luxury">
            <h2 className="text-section-title text-charcoal text-center mb-16">Our Design Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offerings.map((offering, index) => (
                <Card key={offering.title} className="card-luxury animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-8 text-center">
                    <offering.icon className="h-12 w-12 text-luxury-red mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-charcoal mb-3">{offering.title}</h3>
                    <p className="text-dark-gray">{offering.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding">
          <div className="container-luxury">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-luxury-red/10 to-luxury-red/30 rounded-3xl flex items-center justify-center">
                  <Palette className="h-32 w-32 text-luxury-red" />
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-section-title text-charcoal">
                  Why Our <span className="text-gradient-primary">Design Matters</span>
                </h2>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-luxury-red flex-shrink-0" />
                      <span className="text-dark-gray">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="section-padding bg-soft-gray">
          <div className="container-luxury">
            <h2 className="text-section-title text-charcoal text-center mb-16">Design Success Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="card-luxury">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-3">Zomato Redesign</h3>
                  <p className="text-dark-gray">Improved food ordering experience for 100M+ Indian users with intuitive navigation.</p>
                </CardContent>
              </Card>
              
              <Card className="card-luxury">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-3">Paytm Wallet</h3>
                  <p className="text-dark-gray">Simplified digital payments interface serving millions of daily transactions.</p>
                </CardContent>
              </Card>
              
              <Card className="card-luxury">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-3">BookMyShow</h3>
                  <p className="text-dark-gray">Enhanced movie booking experience with personalized recommendations.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="section-padding">
          <div className="container-luxury text-center">
            <h2 className="text-section-title text-charcoal mb-16">Design & Development Tools</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {techStack.map((tech, index) => (
                <Card key={tech.name} className="card-luxury hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{tech.logo}</div>
                    <div className="font-medium text-charcoal">{tech.name}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DigitalExperience;