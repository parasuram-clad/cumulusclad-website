import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudy from "@/components/CaseStudy";
import WhyChooseUs from "@/components/WhyChooseUs";
import Industries from "@/components/Industries";
import CTABanner from "@/components/CTABanner";
import TrustedCompanies from "@/components/TrustedCompanies";
import { Users, TrendingUp, Clock, Award, Target, Zap } from "lucide-react";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import EnquiryModal from "@/components/EnquiryModal";
const Index = () => {
  const caseStudy1Stats = [
    { label: "Users", value: "50K+", icon: Users },
    { label: "Growth", value: "300%", icon: TrendingUp },
    { label: "Time Saved", value: "40%", icon: Clock },
  ];

  const caseStudy2Stats = [
    { label: "Efficiency", value: "85%", icon: Award },
    { label: "Accuracy", value: "99.9%", icon: Target },
    { label: "Performance", value: "5x", icon: Zap },
  ];

  return (
    <Layout>
      <Hero />
      <Services />

      <CaseStudy
        title={
          <>
            Unlocking Impact with&nbsp;
            <span className="text-gradient-luxury inline-block sm:inline">
              AI Innovation
            </span>
            &nbsp; and&nbsp;
            <span className="text-gradient-luxury inline-block sm:inline">
              Next-Gen Software Engineering
            </span>
          </>
        }
        description="From education to enterprise, we've helped organizations of all sizes solve complex challenges, streamline operations, and innovate faster through custom-built technology solutions."
        imageUrl={caseStudy1}
        stats={caseStudy1Stats}
        caseStudyId="1"
      />
      <WhyChooseUs />

      {/* <TrustedCompanies /> */}

      <CaseStudy
        title="Accelerating growth through digital innovation"
        description="At CumulusClad, we don't just build software; we solve problems. From early-stage startups to large-scale enterprises, we've helped our clients streamline operations, launch innovative products, and accelerate growth through smart, scalable, and secure custom software solutions."
        imageUrl={caseStudy2}
        stats={caseStudy2Stats}
        reverse={true}
        darkBg={true}
        caseStudyId="2"
      />

      <Industries />
      <CTABanner />
    </Layout>
  );
};

export default Index;
