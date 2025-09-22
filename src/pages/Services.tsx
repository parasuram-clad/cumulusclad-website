import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesGrid from '@/components/ServicesGrid';
import { Rocket } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding particles-bg">
          <div className="container-luxury text-center">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-center space-x-3 text-luxury-red font-medium">
                <Rocket className="h-5 w-5" />
                <span className="tracking-wider uppercase text-sm">Our Services</span>
              </div>
              
              <h1 className="text-hero text-charcoal">
                Comprehensive <span className="text-gradient-primary">Technology Solutions</span>
              </h1>
              
              <p className="text-xl text-dark-gray max-w-4xl mx-auto leading-relaxed">
                From AI-powered automation to enterprise cloud solutions, we deliver 
                cutting-edge technology services that transform businesses and drive innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <ServicesGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Services;