import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';
import heroIllustration from '@/assets/hero-ai-illustration.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center particles-bg overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-luxury-red/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-luxury-red/3 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-luxury-red/10 rounded-full blur-2xl animate-bounce" />
      </div>

      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-luxury-red font-medium">
                <Sparkles className="h-5 w-5" />
                <span className="tracking-wider uppercase text-sm">Innovation Delivered</span>
              </div>
              
              <h1 className="text-hero text-charcoal leading-tight">
                From <span className="text-gradient-primary">Idea to Execution</span>, 
                We're Your Tech Team
              </h1>
              
              <p className="text-xl md:text-2xl text-dark-gray leading-relaxed max-w-2xl">
                Transform your business with cutting-edge AI solutions, cloud infrastructure, 
                and digital experiences that drive real results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-luxury group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-medium" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-luxury-outline"
              >
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-medium-gray/30">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-luxury-red">200+</div>
                <div className="text-sm text-dark-gray font-medium">Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-luxury-red">50+</div>
                <div className="text-sm text-dark-gray font-medium">Happy Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-luxury-red">8</div>
                <div className="text-sm text-dark-gray font-medium">Industries Served</div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative animate-slide-up delay-500">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-luxury-red/20 rounded-3xl blur-3xl animate-glow" />
              
              {/* Main image */}
              <img 
                src={heroIllustration}
                alt="AI and Cloud Solutions"
                className="relative z-10 w-full h-auto rounded-3xl shadow-luxury hover-lift"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-2xl shadow-elegant flex items-center justify-center animate-bounce delay-1000">
                <Sparkles className="h-8 w-8 text-luxury-red" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;