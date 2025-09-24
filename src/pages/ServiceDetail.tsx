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
  BarChart3,
  DollarSign,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";

const ServiceDetail = () => {
  const getBenefitIcon = (iconName: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      Brain: <Brain className="w-6 h-6 text-white" />,
      Rocket: <Rocket className="w-6 h-6 text-white" />,
      BarChart3: <BarChart3 className="w-6 h-6 text-white" />,
      DollarSign: <DollarSign className="w-6 h-6 text-white" />,
      Users: <Users className="w-6 h-6 text-white" />,
      Award: <Award className="w-6 h-6 text-white" />,
    };

    return iconMap[iconName] || <Star className="w-5 h-5 text-primary" />;
  };
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
            "Custom ML models tailored to your specific business needs and data patterns. Our expert team designs and implements sophisticated algorithms that learn from your data to make intelligent predictions and automate complex decision-making processes.",
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
        },
        {
          title: "Natural Language Processing",
          description:
            "Extract insights from text data, enable chatbots, and automate content analysis. Transform unstructured text into actionable intelligence with advanced NLP techniques including sentiment analysis, entity recognition, and language translation capabilities.",
          image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=400&h=250&fit=crop",
        },
        {
          title: "Computer Vision",
          description:
            "Advanced image and video analysis for quality control, security, and automation. Implement intelligent visual recognition systems that can identify objects, detect anomalies, and provide real-time insights for industrial and commercial applications.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
        },
        {
          title: "Predictive Analytics",
          description:
            "Forecast trends, customer behavior, and business outcomes with high accuracy. Leverage statistical modeling and machine learning to anticipate future scenarios, optimize resource allocation, and make data-driven strategic decisions.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        },
      ],
      benefits: [
        {
          text: "Automated Decision Making",
          icon: "Brain",
        },
        {
          text: "Enhanced Operational Efficiency",
          icon: "Rocket",
        },
        {
          text: "Data-Driven Business Insights",
          icon: "BarChart3",
        },
        {
          text: "Reduced Operational Costs",
          icon: "DollarSign",
        },
        {
          text: "Improved Customer Experience",
          icon: "Users",
        },
        {
          text: "Competitive Market Advantage",
          icon: "Award",
        },
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
            "Human-centered design that creates intuitive and engaging user interfaces. We craft digital experiences that delight users through thoughtful design patterns, accessibility standards, and conversion-focused user journeys.",
          image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
        },
        {
          title: "Web Development",
          description:
            "Modern, responsive websites built with the latest technologies and best practices. From corporate websites to complex web applications, we deliver high-performance solutions that scale with your business needs.",
          image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
        },
        {
          title: "Mobile Applications",
          description:
            "Native and cross-platform mobile apps that deliver seamless user experiences. Build engaging mobile solutions for iOS and Android that leverage device capabilities and provide offline functionality.",
          image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
        },
        {
          title: "Progressive Web Apps",
          description:
            "Fast, reliable web applications that work offline and feel like native apps. Combine the best of web and mobile experiences with progressive enhancement, service workers, and responsive design principles.",
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
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
            "Seamless migration of your existing infrastructure to cloud platforms with minimal downtime. Our comprehensive migration strategy ensures data integrity, security compliance, and optimal performance throughout the transition process.",
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
        },
        {
          title: "Infrastructure as Code",
          description:
            "Automated infrastructure provisioning and management using modern DevOps practices. Implement version-controlled, repeatable infrastructure deployment with tools like Terraform, CloudFormation, and Kubernetes for consistent environments.",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
        },
        {
          title: "Serverless Architecture",
          description:
            "Event-driven computing that automatically scales and reduces operational overhead. Build cost-effective applications that scale to zero when not in use and handle massive spikes in traffic without infrastructure management.",
          image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop",
        },
        {
          title: "DevOps & CI/CD",
          description:
            "Streamlined development workflows with automated testing and deployment pipelines. Accelerate software delivery with continuous integration, automated quality gates, and zero-downtime deployment strategies.",
          image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop",
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
            "Streamline operations with intelligent automation and workflow optimization. Eliminate manual processes through robotic process automation, AI-powered decision making, and integrated business process management systems.",
          image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
        },
        {
          title: "Legacy System Modernization",
          description:
            "Transform outdated systems into modern, efficient, and scalable solutions. Migrate from monolithic architectures to microservices, update technology stacks, and improve system performance while maintaining business continuity.",
          image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
        },
        {
          title: "Digital Strategy Consulting",
          description:
            "Strategic planning and roadmap development for successful digital transformation. Assess current capabilities, define target architecture, and create actionable plans that align technology initiatives with business objectives.",
          image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=250&fit=crop",
        },
        {
          title: "Change Management",
          description:
            "Organizational change support to ensure smooth adoption of new technologies. Provide training programs, communication strategies, and stakeholder engagement to maximize user adoption and transformation success.",
          image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
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
            "End-to-end IoT platforms for device management, data collection, and analytics. Build scalable IoT ecosystems that connect millions of devices, process real-time data streams, and provide actionable insights through advanced dashboards.",
          image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
        },
        {
          title: "Sensor Integration",
          description:
            "Smart sensor networks for environmental monitoring and industrial automation. Deploy wireless sensor networks that collect environmental data, monitor equipment health, and trigger automated responses based on predefined conditions.",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
        },
        {
          title: "Edge Computing",
          description:
            "Local data processing and real-time decision making at the edge of your network. Reduce latency and bandwidth costs by processing data closer to the source, enabling real-time analytics and autonomous device behavior.",
          image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=250&fit=crop",
        },
        {
          title: "Data Analytics",
          description:
            "Advanced analytics and machine learning on IoT data for actionable insights. Transform raw sensor data into valuable business intelligence with predictive maintenance, anomaly detection, and performance optimization algorithms.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
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
            "Comprehensive security audits to identify vulnerabilities and compliance gaps. Conduct thorough penetration testing, code reviews, and infrastructure assessments to uncover potential security risks and provide actionable remediation strategies.",
          image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
        },
        {
          title: "Penetration Testing",
          description:
            "Ethical hacking to test your systems' defenses against real-world attacks. Simulate sophisticated cyber attacks to identify weaknesses in your security posture and validate the effectiveness of your security controls.",
          image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
        },
        {
          title: "Identity Management",
          description:
            "Secure access control and user authentication systems with multi-factor authentication. Implement zero-trust security models with advanced identity verification, privileged access management, and single sign-on solutions.",
          image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=250&fit=crop",
        },
        {
          title: "Compliance Solutions",
          description:
            "Ensure regulatory compliance with GDPR, HIPAA, SOX, and other standards. Implement comprehensive compliance frameworks that meet industry regulations while maintaining operational efficiency and user experience.",
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop",
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions designed to address your unique business challenges
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8">
            {service.offerings.map((offering, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden shadow-luxury hover:shadow-2xl transition-all duration-500 animate-scale-in border border-border hover:border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Thumbnail Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={offering.image}
                    alt={offering.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-primary/90 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {offering.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {offering.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-card">
        <div className="container max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold heading-luxury mb-6">
              Key <span className="text-gradient-luxury">Benefits</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable advantages that drive your business forward
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Benefits Cards - Left Side */}
            <div className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-background rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-primary/90 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {getBenefitIcon(benefit.icon)}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                        {benefit.text}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Benefits Illustration - Right Side */}
            <div className="animate-fade-in-up">
              <div className="relative overflow-hidden rounded-2xl shadow-luxury">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
                  alt="Benefits Illustration"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="w-16 h-16 bg-primary/90 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                {/* Floating Stats */}
                <div className="absolute top-6 right-6">
                  <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4 border border-border">
                    <div className="text-2xl font-bold text-primary">99.9%</div>
                    <div className="text-xs text-muted-foreground">Reliability</div>
                  </div>
                </div>
              </div>
            </div>
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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold heading-luxury mb-6">
              Technology <span className="text-gradient-luxury">Stack</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We leverage cutting-edge technologies and industry-leading tools to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {service.techStack.map((tech, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in flex flex-col items-center text-center"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <div className="w-8 h-8 bg-primary/80 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {tech.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                </div>
                <span className="font-medium text-foreground text-sm group-hover:text-primary transition-colors duration-300">
                  {tech}
                </span>
              </div>
            ))}
          </div>
          
          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-card rounded-full px-6 py-3 border border-border">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">
                Always staying updated with the latest technologies
              </span>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default ServiceDetail;
