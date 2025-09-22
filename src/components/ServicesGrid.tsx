import React from 'react';
import { Bot, Palette, Cloud, Rocket, Globe, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesGrid = () => {
  const services = [
    {
      icon: Bot,
      title: 'AI Solutions',
      description: 'Intelligent automation and machine learning solutions that transform your business processes.',
      features: ['Machine Learning', 'NLP & Computer Vision', 'Predictive Analytics'],
      href: '/services/ai-solutions'
    },
    {
      icon: Palette,
      title: 'Digital Experience',
      description: 'User-centric design and development that creates engaging digital experiences.',
      features: ['UI/UX Design', 'Web & Mobile Apps', 'User Research'],
      href: '/services/digital-experience'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: ['AWS & Azure', 'DevOps & CI/CD', 'Cloud Migration'],
      href: '/services/cloud-solutions'
    },
    {
      icon: Rocket,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation to modernize your entire business operation.',
      features: ['Process Automation', 'Legacy Modernization', 'Digital Strategy'],
      href: '/services/digital-transformation'
    },
    {
      icon: Globe,
      title: 'IoT Solutions',
      description: 'Connected device ecosystems that provide real-time insights and control.',
      features: ['Smart Devices', 'Real-time Analytics', 'Edge Computing'],
      href: '/services/iot-solutions'
    },
    {
      icon: Shield,
      title: 'Cyber Security',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      features: ['Security Audits', 'Threat Detection', 'Compliance'],
      href: '/services/cyber-security'
    },
  ];

  return (
    <section className="section-padding bg-soft-gray">
      <div className="container-luxury">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-3 text-luxury-red font-medium">
            <Rocket className="h-5 w-5" />
            <span className="tracking-wider uppercase text-sm">Our Services</span>
          </div>
          
          <h2 className="text-section-title text-charcoal">
            Innovative Solutions for <span className="text-gradient-primary">Every Challenge</span>
          </h2>
          
          <p className="text-xl text-dark-gray max-w-3xl mx-auto leading-relaxed">
            From AI-powered automation to cloud infrastructure, we deliver cutting-edge 
            technology solutions that drive growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="card-luxury group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 h-full flex flex-col">
                <div className="space-y-6 flex-1">
                  {/* Icon */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-luxury-red/10 rounded-2xl flex items-center justify-center group-hover:bg-luxury-red/20 transition-colors duration-medium">
                      <service.icon className="h-8 w-8 text-luxury-red" />
                    </div>
                    <div className="absolute inset-0 w-16 h-16 bg-luxury-red/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-medium" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-charcoal font-space-grotesk">
                      {service.title}
                    </h3>
                    
                    <p className="text-dark-gray leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-dark-gray">
                          <div className="w-1.5 h-1.5 bg-luxury-red rounded-full" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 mt-auto">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between group/btn text-luxury-red hover:text-luxury-red hover:bg-luxury-red/5"
                  >
                    Learn More
                    <Rocket className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-medium" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Button size="lg" className="btn-luxury">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;