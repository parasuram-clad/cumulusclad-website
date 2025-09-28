import Layout from "@/components/Layout";
import {
  Brain,
  Monitor,
  Cloud,
  Rocket,
  Globe,
  Shield,
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  Smartphone,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aiSolutionsImg from "@/assets/services/page-image/ai.jpeg";
import digitalExperienceImg from "@/assets/services/page-image/digital-experience.jpeg";
import cloudSolutionsImg from "@/assets/services/page-image/cloud.jpeg";
import digitalTransformationImg from "@/assets/services/page-image/digital-transformation.jpeg";
import iotSolutionsImg from "@/assets/services/page-image/iot.jpeg";
import cybersecurityImg from "@/assets/services/page-image/cyber.jpeg";
import heroBackground from "@/assets/services-bg.png"; // Replace with your image path
import CTABanner from "@/components/CTABanner";
const Services = () => {
  const services = [
    {
      id: "ai-solutions",
      image: aiSolutionsImg,
      title: "AI Solutions",
      description:
        "Intelligent systems that analyze, learn, and optimize to accelerate business growth with smarter decisions.",
      gradient: "from-primary to-red-500",
    },
    {
      id: "digital-experience",
      image: digitalExperienceImg,
      title: "Digital Experience",
      description:
        "Seamless designs, engaging platforms that redefine customer journeys through innovation and creativity.",
      gradient: "from-red-500 to-primary",
    },
    {
      id: "cloud-solutions",
      image: cloudSolutionsImg,
      title: "Cloud Solutions",
      description:
        "Future-ready cloud infrastructure that scales with your business while ensuring security and efficiency.",
      gradient: "from-primary to-red-600",
    },
    {
      id: "digital-transformation",
      image: digitalTransformationImg,
      title: "Digital Transformation",
      description:
        "Reimagining processes with technology to unlock opportunities, enhance agility, and drive innovation.",
      gradient: "from-red-600 to-primary",
    },
    {
      id: "iot-solutions",
      image: iotSolutionsImg,
      title: "IoT Solutions",
      description:
        "Smart connectivity that transforms devices into data-driven assets, enabling automation and insights.",
      gradient: "from-primary to-red-500",
    },
    {
      id: "cybersecurity",
      image: cybersecurityImg,
      title: "Cyber Security",
      description:
        "Advanced protection that secures your digital ecosystem against evolving threats with proactive defense.",
      gradient: "from-red-500 to-primary",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroBackground})` }} // Replace with your image path
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-red/5 to-luxury-red/10" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="accent-line mx-auto mb-6" />
            <h1 className="text-5xl lg:text-6xl font-bold heading-luxury mb-6">
              Our <span className="text-gradient-luxury">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              Comprehensive technology solutions designed to accelerate your
              business growth and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto container px-6 lg:px-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={`/services/${service.id}`}
              className="card-luxury2 group cursor-pointer overflow-hidden w-full p-0 flex flex-col h-full"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay={
                window.innerWidth < 768 ? 100 + index * 20 : 200 + index * 50
              }
              data-aos-easing="ease-out"
            >
              <div className="relative flex flex-col h-full">
                {/* Service Image - Full Width Without Padding */}
                <div className="relative overflow-hidden rounded-t-lg flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm flex-grow">
                    {service.description}
                  </p>

                  {/* Learn More Link - Fixed at bottom */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-primary font-normal text-2sm capitalize tracking-wide leading-snug group-hover:underline transition-all duration-300">
                      Learn More →
                    </span>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CTABanner />
    </Layout>
  );
};

export default Services;
