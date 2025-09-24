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
import aiSolutionsImg from "@/assets/services/ai-solutions.jpg";
import digitalExperienceImg from "@/assets/services/digital-experience.jpg";
import cloudSolutionsImg from "@/assets/services/cloud-solutions.jpg";
import digitalTransformationImg from "@/assets/services/digital-transformation.jpg";
import iotSolutionsImg from "@/assets/services/iot-solutions.jpg";
import cybersecurityImg from "@/assets/services/cybersecurity.jpg";
import CTABanner from "@/components/CTABanner";
const Services = () => {
  const services = [
    {
      id: "ai-solutions",
      icon: Brain,
      image: aiSolutionsImg,
      title: "AI Solutions",
      description:
        "Intelligent systems that learn, adapt, and transform your business operations.",
      offerings: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "AI Chatbots & Virtual Assistants",
      ],
      benefits: [
        "Automated Decision Making",
        "Enhanced Efficiency",
        "Data-Driven Insights",
        "Reduced Operational Costs",
      ],
      techStack: [
        "TensorFlow",
        "PyTorch",
        "OpenAI",
        "AWS SageMaker",
        "Azure AI",
      ],
    },
    {
      id: "digital-experience",
      icon: Monitor,
      image: digitalExperienceImg,
      title: "Digital Experience",
      description:
        "User-centric design and development that creates meaningful digital interactions.",
      offerings: [
        "UI/UX Design",
        "Web Development",
        "Mobile Applications",
        "Progressive Web Apps",
        "Digital Strategy",
      ],
      benefits: [
        "Improved User Engagement",
        "Higher Conversion Rates",
        "Brand Differentiation",
        "Mobile-First Approach",
      ],
      techStack: ["React", "Vue.js", "React Native", "Flutter", "Figma"],
    },
    {
      id: "cloud-solutions",
      icon: Cloud,
      image: cloudSolutionsImg,
      title: "Cloud Solutions",
      description:
        "Scalable, secure, and cost-effective cloud infrastructure for modern businesses.",
      offerings: [
        "Cloud Migration",
        "Infrastructure as Code",
        "Serverless Architecture",
        "DevOps & CI/CD",
        "Cloud Security",
      ],
      benefits: [
        "Scalability & Flexibility",
        "Cost Optimization",
        "Enhanced Security",
        "Improved Reliability",
      ],
      techStack: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker"],
    },
    {
      id: "digital-transformation",
      icon: Rocket,
      image: digitalTransformationImg,

      title: "Digital Transformation",
      description:
        "Complete business modernization with cutting-edge technology strategies.",
      offerings: [
        "Process Automation",
        "Legacy System Modernization",
        "Digital Strategy Consulting",
        "Change Management",
        "Technology Roadmapping",
      ],
      benefits: [
        "Operational Efficiency",
        "Competitive Advantage",
        "Future-Ready Infrastructure",
        "Enhanced Customer Experience",
      ],
      techStack: [
        "Microservices",
        "API Gateway",
        "Event-Driven Architecture",
        "Blockchain",
      ],
    },
    {
      id: "iot-solutions",
      icon: Globe,
      image: iotSolutionsImg,

      title: "IoT Solutions",
      description:
        "Connected devices and smart systems that bring intelligence to everything.",
      offerings: [
        "IoT Platform Development",
        "Sensor Integration",
        "Edge Computing",
        "Data Analytics",
        "Smart Device Management",
      ],
      benefits: [
        "Real-time Monitoring",
        "Predictive Maintenance",
        "Energy Efficiency",
        "Remote Management",
      ],
      techStack: ["Arduino", "Raspberry Pi", "MQTT", "LoRaWAN", "AWS IoT"],
    },
    {
      id: "cybersecurity",
      icon: Shield,
      image: cybersecurityImg,

      title: "Cyber Security",
      description:
        "Comprehensive protection against modern threats with advanced security protocols.",
      offerings: [
        "Security Assessments",
        "Penetration Testing",
        "Identity Management",
        "Compliance Solutions",
        "Incident Response",
      ],
      benefits: [
        "Risk Mitigation",
        "Regulatory Compliance",
        "Business Continuity",
        "Trust & Reputation",
      ],
      techStack: [
        "SIEM",
        "Zero Trust",
        "Multi-Factor Authentication",
        "Encryption",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-red/5 to-luxury-red/10" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="accent-line mx-auto mb-6" />
            <h1 className="text-5xl lg:text-6xl font-bold heading-luxury mb-6">
              Our <span className="text-gradient-luxury">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive technology solutions designed to accelerate your
              business growth and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={`/services/${service.id}`}
              className="card-luxury2 group cursor-pointer animate-scale-in overflow-hidden w-full max-w-sm mx-auto p-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                {/* Service Image - Full Width Without Padding */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="mt-4">
                    <span className="text-primary font-semibold text-sm uppercase tracking-wide group-hover:underline transition-all duration-300">
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
