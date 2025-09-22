import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Eye, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Work = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'HDFC Bank Digital Transformation',
      category: 'Financial Services',
      description: 'Complete digital banking platform serving 50M+ customers across India',
      image: 'bg-gradient-to-br from-blue-500 to-blue-700',
      tags: ['AI/ML', 'Cloud', 'Mobile App'],
      results: '40% increase in digital transactions'
    },
    {
      id: 2,
      title: 'Flipkart Logistics Optimization',
      category: 'E-commerce',
      description: 'AI-powered supply chain management for India\'s largest e-commerce platform',
      image: 'bg-gradient-to-br from-orange-500 to-red-600',
      tags: ['AI/ML', 'IoT', 'Analytics'],
      results: '30% reduction in delivery time'
    },
    {
      id: 3,
      title: 'AIIMS Telemedicine Platform',
      category: 'Healthcare',
      description: 'National telemedicine network connecting rural areas to specialist doctors',
      image: 'bg-gradient-to-br from-green-500 to-teal-600',
      tags: ['Web App', 'Mobile', 'Security'],
      results: '1M+ patients served annually'
    },
    {
      id: 4,
      title: 'Tata Motors Industry 4.0',
      category: 'Manufacturing',
      description: 'Smart factory automation and predictive maintenance system',
      image: 'bg-gradient-to-br from-gray-600 to-gray-800',
      tags: ['IoT', 'AI/ML', 'Cloud'],
      results: '25% increase in production efficiency'
    },
    {
      id: 5,
      title: 'BYJU\'S Learning Analytics',
      category: 'Education',
      description: 'Personalized learning platform with adaptive content delivery',
      image: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      tags: ['AI/ML', 'Mobile App', 'Analytics'],
      results: '20M+ students engaged'
    },
    {
      id: 6,
      title: 'Digital India Portal',
      category: 'Government',
      description: 'Unified citizen services platform for government digital initiatives',
      image: 'bg-gradient-to-br from-amber-500 to-orange-600',
      tags: ['Web App', 'Security', 'Cloud'],
      results: '500M+ citizen interactions'
    }
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
                <Eye className="h-5 w-5" />
                <span className="tracking-wider uppercase text-sm">Our Work</span>
              </div>
              
              <h1 className="text-hero text-charcoal">
                Transforming <span className="text-gradient-primary">India's Digital Landscape</span>
              </h1>
              
              <p className="text-xl text-dark-gray max-w-4xl mx-auto leading-relaxed">
                Explore our portfolio of successful digital transformation projects across various 
                industries, from startups to Fortune 500 companies across India.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding bg-soft-gray">
          <div className="container-luxury">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={project.id}
                  className="card-luxury group cursor-pointer overflow-hidden animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <CardContent className="p-0">
                    {/* Project Image */}
                    <div className={`h-48 ${project.image} relative overflow-hidden`}>
                      {/* Light Overlay */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                      
                      {/* Hover Content */}
                      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                        hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}>
                        <div className="text-center space-y-3">
                          <ExternalLink className="h-8 w-8 text-white mx-auto animate-bounce" />
                          <div className="text-white font-semibold">View Project Details</div>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-sm font-medium text-charcoal">{project.category}</span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-charcoal mb-2 font-space-grotesk">
                          {project.title}
                        </h3>
                        <p className="text-dark-gray text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="px-3 py-1 bg-luxury-red/10 text-luxury-red text-xs rounded-full font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Results */}
                      <div className="pt-3 border-t border-medium-gray/30">
                        <div className="text-sm font-medium text-luxury-red">{project.results}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-16">
              <Button size="lg" className="btn-luxury">
                View All Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding">
          <div className="container-luxury">
            <div className="bg-white rounded-3xl shadow-luxury p-12">
              <div className="text-center mb-12">
                <h2 className="text-section-title text-charcoal">Our Impact Across India</h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-luxury-red mb-2">200+</div>
                  <div className="text-dark-gray font-medium">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-luxury-red mb-2">₹1000Cr+</div>
                  <div className="text-dark-gray font-medium">Value Generated</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-luxury-red mb-2">100M+</div>
                  <div className="text-dark-gray font-medium">Users Impacted</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-luxury-red mb-2">99.9%</div>
                  <div className="text-dark-gray font-medium">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Work;