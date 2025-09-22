import React from 'react';
import { ArrowRight, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CaseStudySection2 = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Red highlight background */}
              <div className="absolute inset-0 bg-luxury-red/20 rounded-3xl blur-2xl animate-glow" />
              
              {/* Case study image */}
              <div className="relative z-10 bg-white rounded-3xl shadow-luxury overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-luxury-red/10 to-luxury-red/30 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <Award className="h-16 w-16 text-luxury-red mx-auto" />
                    <h3 className="text-2xl font-bold text-charcoal">TechMahindra Digital Transformation</h3>
                    <p className="text-dark-gray">Automated 80% of manual processes using AI-powered solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8 animate-fade-in delay-300">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-luxury-red font-medium">
                <Award className="h-5 w-5" />
                <span className="tracking-wider uppercase text-sm">Success Story</span>
              </div>
              
              <h2 className="text-section-title text-charcoal">
                Transforming India's <span className="text-gradient-primary">Leading Enterprises</span>
              </h2>
              
              <p className="text-xl text-dark-gray leading-relaxed">
                We helped TechMahindra streamline their operations with intelligent automation, 
                reducing processing time by 75% and increasing accuracy to 99.2%.
              </p>
            </div>

            {/* Key Results */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="card-luxury">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-luxury-red mb-2">80%</div>
                  <div className="text-sm text-dark-gray">Process Automation</div>
                </CardContent>
              </Card>
              <Card className="card-luxury">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-luxury-red mb-2">75%</div>
                  <div className="text-sm text-dark-gray">Time Reduction</div>
                </CardContent>
              </Card>
              <Card className="card-luxury">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-luxury-red mb-2">99.2%</div>
                  <div className="text-sm text-dark-gray">Accuracy Rate</div>
                </CardContent>
              </Card>
              <Card className="card-luxury">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-luxury-red mb-2">₹50M</div>
                  <div className="text-sm text-dark-gray">Annual Savings</div>
                </CardContent>
              </Card>
            </div>

            <Button size="lg" className="btn-luxury group">
              View Full Case Study
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-medium" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudySection2;