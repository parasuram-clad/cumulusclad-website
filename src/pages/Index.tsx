import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import CaseStudySection from '@/components/CaseStudySection';
import WhyChooseUs from '@/components/WhyChooseUs';
import Statistics from '@/components/Statistics';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <CaseStudySection />
        <WhyChooseUs />
        <Statistics />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
