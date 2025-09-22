import React from 'react';
import { GraduationCap, Building2, ShoppingCart, Heart, Factory, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const IndustriesSection = () => {
  const industries = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Digital learning platforms for Indian universities and institutions',
      image: 'bg-gradient-to-br from-blue-100 to-blue-200',
      stats: '200+ Institutions'
    },
    {
      icon: Building2,
      title: 'Finance',
      description: 'Fintech solutions for banking and financial services across India',
      image: 'bg-gradient-to-br from-green-100 to-green-200',
      stats: '50+ Banks'
    },
    {
      icon: ShoppingCart,
      title: 'Retail',
      description: 'E-commerce and omnichannel retail solutions for Indian markets',
      image: 'bg-gradient-to-br from-purple-100 to-purple-200',
      stats: '1000+ Stores'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Telemedicine and healthcare management systems',
      image: 'bg-gradient-to-br from-red-100 to-red-200',
      stats: '500+ Hospitals'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Industry 4.0 solutions for Indian manufacturing giants',
      image: 'bg-gradient-to-br from-orange-100 to-orange-200',
      stats: '100+ Factories'
    },
    {
      icon: Globe,
      title: 'Government',
      description: 'Digital India initiatives and government digitization projects',
      image: 'bg-gradient-to-br from-indigo-100 to-indigo-200',
      stats: '25+ States'
    },
  ];

  return (
    <section className="section-padding bg-soft-gray">
      <div className="container-luxury">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-3 text-luxury-red font-medium">
            <Globe className="h-5 w-5" />
            <span className="tracking-wider uppercase text-sm">Industries We Serve</span>
          </div>
          
          <h2 className="text-section-title text-charcoal">
            Powering India's <span className="text-gradient-primary">Digital Future</span>
          </h2>
          
          <p className="text-xl text-dark-gray max-w-3xl mx-auto leading-relaxed">
            From Mumbai's financial district to Bangalore's tech corridors, we're helping 
            Indian enterprises across all sectors embrace digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card 
              key={industry.title} 
              className="card-luxury group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0 overflow-hidden">
                {/* Image Area */}
                <div className={`h-48 ${industry.image} flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                  <industry.icon className="h-16 w-16 text-white drop-shadow-lg" />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-charcoal">{industry.stats}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-charcoal font-space-grotesk">
                    {industry.title}
                  </h3>
                  
                  <p className="text-dark-gray leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="pt-2">
                    <div className="w-12 h-0.5 bg-luxury-red rounded-full group-hover:w-20 transition-all duration-300" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics Bar */}
        <div className="mt-16 p-8 bg-white rounded-2xl shadow-elegant animate-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-luxury-red mb-2">6</div>
              <div className="text-sm text-dark-gray font-medium">Key Industries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-luxury-red mb-2">1875+</div>
              <div className="text-sm text-dark-gray font-medium">Clients Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-luxury-red mb-2">28</div>
              <div className="text-sm text-dark-gray font-medium">States Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-luxury-red mb-2">₹500Cr</div>
              <div className="text-sm text-dark-gray font-medium">Value Generated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;