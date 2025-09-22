import React, { useState, useEffect, useRef } from 'react';
import { Users, Briefcase, Globe, Trophy, Clock, Star } from 'lucide-react';

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { 
      icon: Users, 
      value: 150, 
      label: 'Happy Clients', 
      suffix: '+',
      description: 'Satisfied customers worldwide'
    },
    { 
      icon: Briefcase, 
      value: 500, 
      label: 'Projects Completed', 
      suffix: '+',
      description: 'Successfully delivered solutions'
    },
    { 
      icon: Globe, 
      value: 25, 
      label: 'Countries Served', 
      suffix: '+',
      description: 'Global reach and impact'
    },
    { 
      icon: Trophy, 
      value: 98, 
      label: 'Success Rate', 
      suffix: '%',
      description: 'Project completion rate'
    },
    { 
      icon: Clock, 
      value: 5, 
      label: 'Years Experience', 
      suffix: '+',
      description: 'In cutting-edge technology'
    },
    { 
      icon: Star, 
      value: 4.9, 
      label: 'Client Rating', 
      suffix: '/5',
      description: 'Average client satisfaction'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Counter = ({ value, isVisible, suffix = '' }: { value: number; isVisible: boolean; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
      <span className="text-4xl lg:text-5xl font-bold text-luxury-red font-space-grotesk">
        {typeof value === 'number' && value % 1 !== 0 ? count.toFixed(1) : count}{suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-luxury">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-3 text-luxury-red font-medium">
            <Trophy className="h-5 w-5" />
            <span className="tracking-wider uppercase text-sm">Our Impact</span>
          </div>
          
          <h2 className="text-section-title text-charcoal">
            Delivering <span className="text-gradient-primary">Measurable Results</span>
          </h2>
          
          <p className="text-xl text-dark-gray max-w-3xl mx-auto leading-relaxed">
            Numbers that speak to our commitment to excellence and our track record 
            of delivering transformative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center space-y-4 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="relative mx-auto">
                <div className="w-16 h-16 bg-luxury-red/10 rounded-2xl flex items-center justify-center mx-auto hover:bg-luxury-red/20 transition-colors duration-medium">
                  <stat.icon className="h-8 w-8 text-luxury-red" />
                </div>
                <div className="absolute inset-0 w-16 h-16 bg-luxury-red/20 rounded-2xl blur-lg opacity-50 animate-pulse" />
              </div>

              {/* Counter */}
              <div>
                <Counter 
                  value={stat.value} 
                  isVisible={isVisible} 
                  suffix={stat.suffix}
                />
                <div className="text-lg font-semibold text-charcoal mt-1 font-space-grotesk">
                  {stat.label}
                </div>
                <div className="text-sm text-dark-gray">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Highlights */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-soft-gray rounded-2xl">
            <div className="text-3xl font-bold text-luxury-red mb-2">2024</div>
            <div className="text-lg font-semibold text-charcoal mb-2">Tech Innovation Award</div>
            <div className="text-sm text-dark-gray">Recognized for outstanding AI solutions</div>
          </div>
          
          <div className="text-center p-8 bg-soft-gray rounded-2xl">
            <div className="text-3xl font-bold text-luxury-red mb-2">ISO</div>
            <div className="text-lg font-semibold text-charcoal mb-2">27001 Certified</div>
            <div className="text-sm text-dark-gray">Information security management</div>
          </div>
          
          <div className="text-center p-8 bg-soft-gray rounded-2xl">
            <div className="text-3xl font-bold text-luxury-red mb-2">24/7</div>
            <div className="text-lg font-semibold text-charcoal mb-2">Support Available</div>
            <div className="text-sm text-dark-gray">Round-the-clock technical assistance</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;