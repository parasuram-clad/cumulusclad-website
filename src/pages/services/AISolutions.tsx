import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Bot, Brain, Eye, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AISolutions = () => {
  const offerings = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Custom ML models for predictive analytics and automation'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Image recognition and video analytics solutions'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Data-driven insights for better decision making'
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 60%',
    'Automate repetitive tasks and processes',
    'Improve accuracy and reduce human errors',
    'Scale operations without proportional cost increases'
  ];

  const techStack = [
    { name: 'TensorFlow', logo: '🔥' },
    { name: 'PyTorch', logo: '⚡' },
    { name: 'OpenAI', logo: '🤖' },
    { name: 'AWS SageMaker', logo: '☁️' },
    { name: 'Azure ML', logo: '🔷' },
    { name: 'Google AI', logo: '🎯' }
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
                <Bot className="h-5 w-5" />
                <span className="tracking-wider uppercase text-sm">AI Solutions</span>
              </div>
              
              <h1 className="text-hero text-charcoal">
                Intelligent <span className="text-gradient-primary">AI Solutions</span> for Modern India
              </h1>
              
              <p className="text-xl text-dark-gray max-w-4xl mx-auto leading-relaxed">
                Harness the power of artificial intelligence to transform your business processes, 
                automate operations, and unlock insights from your data with our cutting-edge AI solutions.
              </p>

              <div className="pt-6">
                <Button size="lg" className="btn-luxury">
                  Get AI Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Offerings Grid */}
        <section className="section-padding bg-soft-gray">
          <div className="container-luxury">
            <h2 className="text-section-title text-charcoal text-center mb-16">Our AI Offerings</h2>
            
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
                  Why Choose Our <span className="text-gradient-primary">AI Solutions</span>
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
                  <Bot className="h-32 w-32 text-luxury-red" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="section-padding bg-soft-gray">
          <div className="container-luxury">
            <h2 className="text-section-title text-charcoal text-center mb-16">Real-World Applications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="card-luxury">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-3">Banking & Finance</h3>
                  <p className="text-dark-gray">Fraud detection, risk assessment, and algorithmic trading solutions for Indian banks.</p>
                </CardContent>
              </Card>
              
              <Card className="card-luxury">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-3">Healthcare</h3>
                  <p className="text-dark-gray">Medical image analysis, patient diagnosis assistance, and treatment recommendations.</p>
                </CardContent>
              </Card>
              
              <Card className="card-luxury">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-3">Retail & E-commerce</h3>
                  <p className="text-dark-gray">Personalized recommendations, inventory optimization, and demand forecasting.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="section-padding">
          <div className="container-luxury text-center">
            <h2 className="text-section-title text-charcoal mb-16">Technologies We Use</h2>
            
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

export default AISolutions;