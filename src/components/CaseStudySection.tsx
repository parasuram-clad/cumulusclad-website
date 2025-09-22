import React from 'react';
import { ArrowRight, Users, TrendingUp, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CaseStudySection = () => {
  const caseStudy = {
    title: "Transforming Education Through Smart Software Engineering",
    subtitle: "Real-World Impact Through Innovation",
    description: "From education to enterprise, we've helped organizations of all sizes solve complex challenges, streamline operations, and innovate faster through custom-built technology solutions.",
    results: [
      { icon: Users, metric: "500K+", label: "Students Impacted" },
      { icon: TrendingUp, metric: "300%", label: "Efficiency Increase" },
      { icon: Award, metric: "98%", label: "Client Satisfaction" }
    ],
    challenges: [
      "Legacy system modernization",
      "Scalable architecture design", 
      "Real-time data processing"
    ],
    solutions: [
      "Cloud-native microservices",
      "AI-powered analytics",
      "Automated deployment pipeline"
    ]
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-luxury-red font-medium">
                <Award className="h-5 w-5" />
                <span className="tracking-wider uppercase text-sm">Case Study</span>
              </div>
              
              <h2 className="text-section-title text-charcoal leading-tight">
                {caseStudy.title}
              </h2>
              
              <p className="text-xl text-dark-gray leading-relaxed">
                {caseStudy.description}
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-charcoal mb-3 font-space-grotesk">
                    Challenges
                  </h4>
                  <ul className="space-y-2">
                    {caseStudy.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-dark-gray">
                        <div className="w-1.5 h-1.5 bg-luxury-red rounded-full mt-2 flex-shrink-0" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-charcoal mb-3 font-space-grotesk">
                    Solutions
                  </h4>
                  <ul className="space-y-2">
                    {caseStudy.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-dark-gray">
                        <div className="w-1.5 h-1.5 bg-luxury-red rounded-full mt-2 flex-shrink-0" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <Button className="btn-luxury-outline">
                View Full Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Results */}
          <div className="space-y-8 animate-slide-up">
            <div className="grid gap-6">
              {caseStudy.results.map((result, idx) => (
                <Card key={idx} className="card-luxury">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-luxury-red/10 rounded-xl flex items-center justify-center">
                        <result.icon className="h-6 w-6 text-luxury-red" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-luxury-red font-space-grotesk">
                          {result.metric}
                        </div>
                        <div className="text-sm text-dark-gray font-medium">
                          {result.label}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quote */}
            <Card className="card-glow">
              <CardContent className="p-8 relative">
                <div className="absolute top-4 left-4 text-luxury-red/20 text-6xl font-serif">
                  "
                </div>
                <blockquote className="text-lg text-dark-gray italic leading-relaxed pl-8">
                  CumulusClad transformed our entire educational platform. 
                  The results exceeded our expectations in every metric.
                </blockquote>
                <div className="mt-6 pt-6 border-t border-medium-gray/30">
                  <div className="font-semibold text-charcoal">Sarah Johnson</div>
                  <div className="text-sm text-dark-gray">CTO, EduTech Solutions</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;