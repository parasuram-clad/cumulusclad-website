import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import CaseStudySection from '@/components/CaseStudySection';
import CaseStudySection2 from '@/components/CaseStudySection2';
import IndustriesSection from '@/components/IndustriesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import Statistics from '@/components/Statistics';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <CaseStudySection />
        <CaseStudySection2 />
        <IndustriesSection />
        <WhyChooseUs />
        <Statistics />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
