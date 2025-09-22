import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Cloud, Server, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CloudSolutions = () => {
  const offerings = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration from on-premises to cloud infrastructure'
    },
    {
      icon: Server,
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure management'
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Enterprise-grade security for your cloud environments'
    }
  ];

  const benefits = [
    'Reduce infrastructure costs by up to 40%',
    'Scale automatically based on demand',
    'Improve application performance and reliability',
    'Enable remote work capabilities'
  ];

  const techStack = [
    { name: 'AWS', logo: '☁️' },
    { name: 'Microsoft Azure', logo: '🔷' },
    { name: 'Google Cloud', logo: '🌟' },
    { name: 'Kubernetes', logo: '⚙️' },
    { name: 'Docker', logo: '🐋' },
    { name: 'Terraform', logo: '🏗️' }
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
                <Cloud className="h-5 w-5" />
                <span className="tracking-wider uppercase text-sm">Cloud Solutions</span>
              </div>
              
              <h1 className="text-hero text-charcoal">
                Scalable <span className="text-gradient-primary">Cloud Infrastructure</span> for India
              </h1>
              
              <p className="text-xl text-dark-gray max-w-4xl mx-auto leading-relaxed">
                Transform your business with enterprise-grade cloud solutions. From migration to 
                optimization, we help Indian companies leverage the full power of cloud computing.
              </p>

              <div className="pt-6">
                <Button size="lg" className="btn-luxury">
                  Plan Your Cloud Migration
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Offerings Grid */}
        <section className="section-padding bg-soft-gray">
          <div className="container-luxury">
            <h2 className="text-section-title text-charcoal text-center mb-16">Cloud Services</h2>
            
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
              <div className="space-y-6">
                <h2 className="text-section-title text-charcoal">
                  Cloud <span className="text-gradient-primary">Advantages</span>
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

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-luxury-red/10 to-luxury-red/30 rounded-3xl flex items-center justify-center">
                  <Cloud className="h-32 w-32 text-luxury-red" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="section-padding bg-soft-gray">
          <div className="container-luxury">
            <h2 className="text-section-title text-charcoal text-center mb-16">Cloud Success Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="card-luxury">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-3">ICICI Bank</h3>
                  <p className="text-dark-gray">Migrated core banking systems to cloud, reducing costs by 35% while improving reliability.</p>
                </CardContent>
              </Card>
              
              <Card className="card-luxury">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-3">Reliance Retail</h3>
                  <p className="text-dark-gray">Scaled e-commerce platform to handle 10x traffic spikes during festive seasons.</p>
                </CardContent>
              </Card>
              
              <Card className="card-luxury">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-3">Ola Cabs</h3>
                  <p className="text-dark-gray">Built scalable ride-sharing platform serving millions of rides daily across India.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="section-padding">
          <div className="container-luxury text-center">
            <h2 className="text-section-title text-charcoal mb-16">Cloud Platforms & Tools</h2>
            
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

export default CloudSolutions;