import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Users, Target, Award, Rocket, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding particles-bg">
          <div className="container-luxury text-center">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-center space-x-3 text-luxury-red font-medium">
                <Shield className="h-5 w-5" />
                <span className="tracking-wider uppercase text-sm">About CumulusClad</span>
              </div>
              
              <h1 className="text-hero text-charcoal">
                Fortify Your Business with <span className="text-gradient-primary">Trusted IT Security</span>
              </h1>
              
              <p className="text-xl text-dark-gray max-w-4xl mx-auto leading-relaxed">
                At CumulusClad Technologies, we don't just build software; we solve problems. 
                From early-stage startups to large-scale enterprises, we've helped our clients 
                streamline operations, launch innovative products, and accelerate growth.
              </p>
            </div>
          </div>
        </section>

        {/* Coming Soon Content */}
        <section className="section-padding bg-soft-gray">
          <div className="container-luxury text-center">
            <div className="space-y-8">
              <div className="w-24 h-24 bg-luxury-red/10 rounded-3xl flex items-center justify-center mx-auto">
                <Rocket className="h-12 w-12 text-luxury-red" />
              </div>
              
              <h2 className="text-section-title text-charcoal">
                More About Us Coming Soon
              </h2>
              
              <p className="text-xl text-dark-gray max-w-2xl mx-auto">
                We're crafting an amazing About page that will showcase our story, 
                team, values, and mission. Stay tuned for the full experience.
              </p>
              
              <div className="flex justify-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-luxury-red/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-luxury-red" />
                  </div>
                  <div className="font-semibold text-charcoal">Our Team</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-luxury-red/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Target className="h-8 w-8 text-luxury-red" />
                  </div>
                  <div className="font-semibold text-charcoal">Our Mission</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-luxury-red/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Award className="h-8 w-8 text-luxury-red" />
                  </div>
                  <div className="font-semibold text-charcoal">Our Values</div>
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

export default About;