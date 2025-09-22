import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Users, Target, Award, Rocket, Globe, Eye, Heart, Zap, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const About = () => {
  const values = [
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We embrace cutting-edge technologies to solve complex business challenges.'
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'Your success is our success. We partner with you for long-term growth.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Excellence',
      description: 'We deliver solutions that exceed expectations with rigorous quality standards.'
    },
    {
      icon: Globe,
      title: 'Global Vision',
      description: 'Bringing world-class technology solutions to the Indian market and beyond.'
    }
  ];

  const milestones = [
    { year: '2018', event: 'Founded in Bangalore with a vision to transform Indian businesses' },
    { year: '2019', event: 'Expanded to Mumbai and Delhi, served first 50 clients' },
    { year: '2020', event: 'Pivoted to cloud-first solutions during the pandemic' },
    { year: '2021', event: 'Reached 500+ clients across 15 Indian states' },
    { year: '2022', event: 'Launched AI/ML division, partnered with global tech giants' },
    { year: '2023', event: 'Achieved ISO certifications and expanded to international markets' },
    { year: '2024', event: 'Serving 2000+ clients with 200+ team members across India' }
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
                <Shield className="h-5 w-5" />
                <span className="tracking-wider uppercase text-sm">About CumulusClad</span>
              </div>
              
              <h1 className="text-hero text-charcoal">
                Empowering India's <span className="text-gradient-primary">Digital Revolution</span>
              </h1>
              
              <p className="text-xl text-dark-gray max-w-4xl mx-auto leading-relaxed">
                At CumulusClad Technologies, we're not just building software – we're architecting 
                the future of Indian business. From Mumbai's financial districts to Bangalore's 
                innovation hubs, we're transforming how enterprises operate in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding bg-soft-gray">
          <div className="container-luxury">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-section-title text-charcoal">
                  Our <span className="text-gradient-primary">Story</span>
                </h2>
                
                <p className="text-lg text-dark-gray leading-relaxed">
                  Founded in 2018 by a team of passionate technologists in Bangalore, CumulusClad 
                  emerged from a simple belief: every Indian business deserves access to world-class 
                  technology solutions.
                </p>
                
                <p className="text-lg text-dark-gray leading-relaxed">
                  What started as a small team of 5 engineers has grown into a 200+ member organization 
                  serving over 2000 clients across India. We've helped everyone from startups in Hyderabad 
                  to Fortune 500 companies in Mumbai achieve their digital transformation goals.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-luxury-red">6+</div>
                    <div className="text-sm text-dark-gray">Years of Excellence</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-luxury-red">2000+</div>
                    <div className="text-sm text-dark-gray">Happy Clients</div>
                  </div>
                </div>
              </div>

              <div className="relative animate-slide-up">
                <div className="aspect-[4/3] bg-gradient-to-br from-luxury-red/10 to-luxury-red/30 rounded-3xl flex items-center justify-center shadow-luxury">
                  <div className="text-center space-y-4 p-8">
                    <Rocket className="h-24 w-24 text-luxury-red mx-auto" />
                    <h3 className="text-2xl font-bold text-charcoal">Innovation Hub</h3>
                    <p className="text-dark-gray">Building tomorrow's solutions today</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="section-padding">
          <div className="container-luxury">
            <div className="grid lg:grid-cols-2 gap-16">
              <Card className="card-luxury animate-slide-up">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-luxury-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Eye className="h-8 w-8 text-luxury-red" />
                  </div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-4 font-space-grotesk">Our Vision</h3>
                  <p className="text-dark-gray leading-relaxed">
                    To become India's most trusted technology partner, enabling businesses to thrive 
                    in the digital economy while contributing to the nation's technological advancement 
                    and global competitiveness.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-luxury animate-slide-up delay-200">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-luxury-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 text-luxury-red" />
                  </div>
                  <h3 className="text-2xl font-semibold text-charcoal mb-4 font-space-grotesk">Our Mission</h3>
                  <p className="text-dark-gray leading-relaxed">
                    To democratize access to cutting-edge technology solutions across India, helping 
                    businesses of all sizes harness the power of AI, cloud computing, and digital 
                    transformation to achieve unprecedented growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values & Culture */}
        <section className="section-padding bg-soft-gray">
          <div className="container-luxury">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-section-title text-charcoal mb-6">Our Values & Culture</h2>
              <p className="text-xl text-dark-gray max-w-3xl mx-auto">
                The principles that guide everything we do and the culture that makes us who we are.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {values.map((value, index) => (
                <Card key={value.title} className="card-luxury text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <value.icon className="h-12 w-12 text-luxury-red mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-charcoal mb-3 font-space-grotesk">{value.title}</h3>
                    <p className="text-dark-gray text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Team Image */}
            <Card className="card-luxury overflow-hidden animate-fade-in">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-r from-luxury-red/20 via-luxury-red/10 to-luxury-red/20 flex items-center justify-center relative">
                  <div className="text-center space-y-4">
                    <Users className="h-16 w-16 text-luxury-red mx-auto" />
                    <h3 className="text-2xl font-bold text-charcoal">Our Amazing Team</h3>
                    <p className="text-dark-gray">200+ passionate professionals across India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding">
          <div className="container-luxury">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-section-title text-charcoal mb-6">Our Journey</h2>
              <p className="text-xl text-dark-gray">Milestones that shaped our path to becoming India's trusted tech partner</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-luxury-red/20" />
                
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={milestone.year} className="relative flex items-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="absolute left-6 w-4 h-4 bg-luxury-red rounded-full z-10" />
                      <div className="ml-16 flex items-center space-x-6">
                        <div className="text-2xl font-bold text-luxury-red min-w-[80px]">{milestone.year}</div>
                        <div className="text-dark-gray">{milestone.event}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Careers Teaser */}
        <section className="section-padding bg-luxury-red relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="container-luxury relative z-10 text-center">
            <div className="space-y-6 animate-fade-in">
              <Users className="h-16 w-16 text-white mx-auto" />
              <h2 className="text-4xl font-bold text-white">Join Our Mission</h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Be part of India's digital transformation story. We're always looking for 
                passionate individuals who want to make a difference.
              </p>
              <Button size="lg" className="bg-white text-luxury-red hover:bg-white/90">
                Explore Careers
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;