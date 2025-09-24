import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Monitor,
  Cloud,
  Rocket,
  Globe,
  Shield,
  ArrowLeft,
  CheckCircle,
  Star,
  Users,
  Award,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const services = {
    "ai-solutions": {
      icon: Brain,
      title: "AI Solutions",
      description:
        "Transform your business with intelligent systems that learn, adapt, and evolve. Our AI solutions leverage cutting-edge machine learning algorithms to automate processes, predict outcomes, and deliver personalized experiences.",
      heroImage:
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1200&h=600&fit=crop",
      offerings: [
        {
          title: "Machine Learning Models",
          description:
            "Custom ML models tailored to your specific business needs and data patterns.",
        },
        {
          title: "Natural Language Processing",
          description:
            "Extract insights from text data, enable chatbots, and automate content analysis.",
        },
        {
          title: "Computer Vision",
          description:
            "Advanced image and video analysis for quality control, security, and automation.",
        },
        {
          title: "Predictive Analytics",
          description:
            "Forecast trends, customer behavior, and business outcomes with high accuracy.",
        },
      ],
      benefits: [
        "Automated Decision Making",
        "Enhanced Operational Efficiency",
        "Data-Driven Business Insights",
        "Reduced Operational Costs",
        "Improved Customer Experience",
        "Competitive Market Advantage",
      ],
      useCases: [
        {
          title: "Healthcare Diagnostics",
          description:
            "AI-powered medical imaging analysis for early disease detection and treatment planning.",
        },
        {
          title: "Financial Fraud Detection",
          description:
            "Real-time transaction monitoring and anomaly detection to prevent fraudulent activities.",
        },
        {
          title: "Supply Chain Optimization",
          description:
            "Predictive analytics for inventory management and demand forecasting.",
        },
      ],
      techStack: [
        "TensorFlow",
        "PyTorch",
        "OpenAI GPT",
        "AWS SageMaker",
        "Azure AI",
        "Scikit-learn",
        "Pandas",
        "NumPy",
      ],
    },
    "digital-experience": {
      icon: Monitor,
      title: "Digital Experience",
      description:
        "Create exceptional digital experiences that engage users, drive conversions, and build lasting relationships. Our user-centric approach combines cutting-edge design with robust development.",
      heroImage:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=600&fit=crop",
      offerings: [
        {
          title: "UI/UX Design",
          description:
            "Human-centered design that creates intuitive and engaging user interfaces.",
        },
        {
          title: "Web Development",
          description:
            "Modern, responsive websites built with the latest technologies and best practices.",
        },
        {
          title: "Mobile Applications",
          description:
            "Native and cross-platform mobile apps that deliver seamless user experiences.",
        },
        {
          title: "Progressive Web Apps",
          description:
            "Fast, reliable web applications that work offline and feel like native apps.",
        },
      ],
      benefits: [
        "Improved User Engagement",
        "Higher Conversion Rates",
        "Enhanced Brand Recognition",
        "Mobile-First Approach",
        "SEO Optimization",
        "Performance Excellence",
      ],
      useCases: [
        {
          title: "E-commerce Platform",
          description:
            "Complete online shopping experience with personalized recommendations and seamless checkout.",
        },
        {
          title: "Healthcare Portal",
          description:
            "Patient management system with telemedicine capabilities and health tracking.",
        },
        {
          title: "Educational Platform",
          description:
            "Interactive learning management system with virtual classrooms and progress tracking.",
        },
      ],
      techStack: [
        "React",
        "Vue.js",
        "Angular",
        "React Native",
        "Flutter",
        "Node.js",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    "cloud-solutions": {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Harness the power of cloud computing to scale your business, reduce costs, and improve reliability. Our cloud solutions provide secure, scalable, and cost-effective infrastructure.",
      heroImage:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
      offerings: [
        {
          title: "Cloud Migration",
          description:
            "Seamless migration of your existing infrastructure to cloud platforms with minimal downtime.",
        },
        {
          title: "Infrastructure as Code",
          description:
            "Automated infrastructure provisioning and management using modern DevOps practices.",
        },
        {
          title: "Serverless Architecture",
          description:
            "Event-driven computing that automatically scales and reduces operational overhead.",
        },
        {
          title: "DevOps & CI/CD",
          description:
            "Streamlined development workflows with automated testing and deployment pipelines.",
        },
      ],
      benefits: [
        "Infinite Scalability",
        "Cost Optimization",
        "Enhanced Security",
        "Improved Reliability",
        "Global Availability",
        "Automated Backups",
      ],
      useCases: [
        {
          title: "Enterprise Modernization",
          description:
            "Legacy system migration to modern cloud-native architecture for improved performance.",
        },
        {
          title: "Startup Infrastructure",
          description:
            "Scalable cloud foundation that grows with your business without upfront investment.",
        },
        {
          title: "Disaster Recovery",
          description:
            "Robust backup and recovery solutions ensuring business continuity.",
        },
      ],
      techStack: [
        "AWS",
        "Microsoft Azure",
        "Google Cloud",
        "Kubernetes",
        "Docker",
        "Terraform",
        "Jenkins",
        "Prometheus",
      ],
    },
    "digital-transformation": {
      icon: Rocket,
      title: "Digital Transformation",
      description:
        "Revolutionize your business operations with comprehensive digital transformation strategies. We help organizations modernize processes, adopt new technologies, and drive innovation.",
      heroImage:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=600&fit=crop",
      offerings: [
        {
          title: "Process Automation",
          description:
            "Streamline operations with intelligent automation and workflow optimization.",
        },
        {
          title: "Legacy System Modernization",
          description:
            "Transform outdated systems into modern, efficient, and scalable solutions.",
        },
        {
          title: "Digital Strategy Consulting",
          description:
            "Strategic planning and roadmap development for successful digital transformation.",
        },
        {
          title: "Change Management",
          description:
            "Organizational change support to ensure smooth adoption of new technologies.",
        },
      ],
      benefits: [
        "Operational Excellence",
        "Competitive Advantage",
        "Future-Ready Infrastructure",
        "Enhanced Customer Experience",
        "Data-Driven Decision Making",
        "Improved Agility",
      ],
      useCases: [
        {
          title: "Manufacturing 4.0",
          description:
            "Smart factory implementation with IoT sensors, AI analytics, and automated processes.",
        },
        {
          title: "Digital Banking",
          description:
            "Complete banking ecosystem transformation with mobile-first approach and AI-powered services.",
        },
        {
          title: "Smart Retail",
          description:
            "Omnichannel retail experience with personalization and inventory optimization.",
        },
      ],
      techStack: [
        "Microservices",
        "API Gateway",
        "Event-Driven Architecture",
        "Blockchain",
        "RPA",
        "Low-Code Platforms",
      ],
    },
    "iot-solutions": {
      icon: Globe,
      title: "IoT Solutions",
      description:
        "Connect the physical and digital worlds with intelligent IoT solutions. Our comprehensive IoT platform enables real-time monitoring, control, and optimization of connected devices.",
      heroImage:
        "https://research.aimultiple.com/wp-content/uploads/2021/11/smart-factory-concept-2020-724x432-1.jpg",
      offerings: [
        {
          title: "IoT Platform Development",
          description:
            "End-to-end IoT platforms for device management, data collection, and analytics.",
        },
        {
          title: "Sensor Integration",
          description:
            "Smart sensor networks for environmental monitoring and industrial automation.",
        },
        {
          title: "Edge Computing",
          description:
            "Local data processing and real-time decision making at the edge of your network.",
        },
        {
          title: "Data Analytics",
          description:
            "Advanced analytics and machine learning on IoT data for actionable insights.",
        },
      ],
      benefits: [
        "Real-time Monitoring",
        "Predictive Maintenance",
        "Energy Efficiency",
        "Remote Management",
        "Cost Reduction",
        "Improved Safety",
      ],
      useCases: [
        {
          title: "Smart Cities",
          description:
            "Connected infrastructure for traffic management, environmental monitoring, and public safety.",
        },
        {
          title: "Industrial IoT",
          description:
            "Manufacturing equipment monitoring and predictive maintenance systems.",
        },
        {
          title: "Smart Agriculture",
          description:
            "Precision farming with soil sensors, weather monitoring, and automated irrigation.",
        },
      ],
      techStack: [
        "Arduino",
        "Raspberry Pi",
        "MQTT",
        "LoRaWAN",
        "AWS IoT",
        "Azure IoT",
        "ThingSpeak",
        "Node-RED",
      ],
    },
    cybersecurity: {
      icon: Shield,
      title: "Cyber Security",
      description:
        "Protect your digital assets with comprehensive cybersecurity solutions. Our multi-layered security approach ensures your business stays protected against evolving threats.",
      heroImage:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop",
      offerings: [
        {
          title: "Security Assessments",
          description:
            "Comprehensive security audits to identify vulnerabilities and compliance gaps.",
        },
        {
          title: "Penetration Testing",
          description:
            "Ethical hacking to test your systems' defenses against real-world attacks.",
        },
        {
          title: "Identity Management",
          description:
            "Secure access control and user authentication systems with multi-factor authentication.",
        },
        {
          title: "Compliance Solutions",
          description:
            "Ensure regulatory compliance with GDPR, HIPAA, SOX, and other standards.",
        },
      ],
      benefits: [
        "Risk Mitigation",
        "Regulatory Compliance",
        "Business Continuity",
        "Trust & Reputation",
        "Data Protection",
        "Incident Prevention",
      ],
      useCases: [
        {
          title: "Financial Security",
          description:
            "Banking-grade security for financial institutions and fintech companies.",
        },
        {
          title: "Healthcare Protection",
          description:
            "HIPAA-compliant security solutions for healthcare organizations and patient data.",
        },
        {
          title: "Enterprise Security",
          description:
            "Comprehensive security framework for large organizations with complex IT infrastructure.",
        },
      ],
      techStack: [
        "SIEM",
        "Zero Trust",
        "Multi-Factor Authentication",
        "Encryption",
        "Firewall",
        "VPN",
        "PKI",
        "SOAR",
      ],
    },
  };

  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return (
      <Layout>
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Service Not Found
          </h1>
          <Link to="/services" className="text-primary hover:underline">
            Back to Services
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-red/5 to-luxury-red/10" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Link
                to="/services"
                className="inline-flex items-center text-primary hover:text-primary-glow transition-colors duration-300 mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
              <div className="accent-line mb-6" />
              <h1 className="text-5xl lg:text-6xl font-bold heading-luxury mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
            <div className="animate-fade-in-up">
              <div className="relative overflow-hidden rounded-2xl shadow-luxury">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
                <div className="absolute top-6 left-6">
                  <div className="w-16 h-16 bg-primary/90 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold heading-luxury mb-6">
              Our <span className="text-gradient-luxury">Offerings</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {service.offerings.map((offering, index) => (
              <div
                key={index}
                className="card-luxury animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{offering.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {offering.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-card">
        <div className="container max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold heading-luxury mb-6">
              Key <span className="text-gradient-luxury">Benefits</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-6 bg-background rounded-xl border border-border hover:border-primary transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Star className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold heading-luxury mb-6">
              Real-World{" "}
              <span className="text-gradient-luxury">Applications</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {service.useCases.map((useCase, index) => (
              <div
                key={index}
                className="card-luxury group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold heading-luxury mb-6">
              Technology <span className="text-gradient-luxury">Stack</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We leverage cutting-edge technologies to deliver exceptional
              results
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {service.techStack.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-background rounded-xl border border-border hover:border-primary hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="font-medium text-foreground">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default ServiceDetail;
