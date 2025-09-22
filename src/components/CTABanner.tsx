import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTABanner = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Deep red gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-luxury-red via-luxury-red-dark to-luxury-red" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-bounce" />
      </div>

      <div className="container-luxury relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-3 text-white/90 font-medium">
              <Zap className="h-5 w-5" />
              <span className="tracking-wider uppercase text-sm">Ready to Transform?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Let's Build the Future of <br />
              <span className="text-white/90">Indian Technology</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join 2000+ Indian enterprises who trust CumulusClad to power their digital transformation journey.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-luxury-red hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-glow group px-10 py-6 text-lg font-semibold"
            >
              Start Your Project Today
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-medium" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-luxury-red transition-all duration-300 px-10 py-6 text-lg font-semibold"
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-12 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm text-white/80 font-medium">Support Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">15 Days</div>
                <div className="text-sm text-white/80 font-medium">Average Delivery</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-sm text-white/80 font-medium">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">ISO 27001</div>
                <div className="text-sm text-white/80 font-medium">Certified Security</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;