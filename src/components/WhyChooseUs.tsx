import React from 'react';
import { Zap, Users, Shield, Rocket, Clock, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Zap,
      title: 'Agile Development',
      description: 'We work side-by-side with your team through agile sprints and iterative feedback. You\'re always in the loop, and your input shapes the final product.'
    },
    {
      icon: Users,
      title: 'Collaborative Partnership',
      description: 'Your success is our success. We don\'t just build software; we become an extension of your team, deeply understanding your business goals.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built-in security from day one with enterprise-grade practices, compliance standards, and robust data protection protocols.'
    },
    {
      icon: Rocket,
      title: 'Scalable Solutions',
      description: 'Future-proof architecture that grows with your business. Our solutions are designed to handle scale from startup to enterprise.'
    },
    {
      icon: Clock,
      title: 'Rapid Delivery',
      description: 'Fast time-to-market without compromising quality. Our streamlined processes ensure efficient delivery of robust solutions.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We measure success by your business outcomes. Every solution is designed to deliver measurable value and ROI.'
    }
  ];

  return (
    <section className="section-padding bg-soft-gray">
      <div className="container-luxury">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-3 text-luxury-red font-medium">
            <Target className="h-5 w-5" />
            <span className="tracking-wider uppercase text-sm">Why Choose Us</span>
          </div>
          
          <h2 className="text-section-title text-charcoal">
            Your <span className="text-gradient-primary">Trusted Technology Partner</span>
          </h2>
          
          <p className="text-xl text-dark-gray max-w-3xl mx-auto leading-relaxed">
            We combine technical excellence with business acumen to deliver solutions 
            that don't just work—they drive real business transformation.
          </p>
        </div>

        <div className="grid-luxury gap-8">
          {advantages.map((advantage, index) => (
            <Card 
              key={advantage.title} 
              className="card-luxury group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center space-y-6">
                {/* Icon */}
                <div className="relative mx-auto">
                  <div className="w-20 h-20 bg-luxury-red/10 rounded-3xl flex items-center justify-center group-hover:bg-luxury-red/20 transition-all duration-medium mx-auto">
                    <advantage.icon className="h-10 w-10 text-luxury-red" />
                  </div>
                  <div className="absolute inset-0 w-20 h-20 bg-luxury-red/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-medium mx-auto" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-charcoal font-space-grotesk">
                    {advantage.title}
                  </h3>
                  
                  <p className="text-dark-gray leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex items-center space-x-4 p-8 bg-white rounded-2xl shadow-elegant">
            <div className="w-16 h-16 bg-luxury-red/10 rounded-2xl flex items-center justify-center">
              <Rocket className="h-8 w-8 text-luxury-red" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-charcoal font-space-grotesk">
                Ready to Transform Your Business?
              </h3>
              <p className="text-dark-gray">
                Let's discuss how we can help you achieve your technology goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;