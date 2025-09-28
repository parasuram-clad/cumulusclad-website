import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import StackIcon from "tech-stack-icons";
import { FC } from "react";
import DynamicIcon from "../components/DynamicIcon";
import { useState } from "react";
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
  TrendingUp,
  Eye,
  Smartphone,
  Search,
  Zap,
  Infinity,
  Server,
  HardDrive,
  Settings,
  Trophy,
  Calendar,
  Activity,
  Wrench,
  Battery,
  MonitorCheck,
  FileCheck,
  RefreshCw,
  ThumbsUp,
  Lock,
  AlertTriangle,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";
import ai from "@/assets/services/page-image/ai.jpeg";
import digitalExperience from "@/assets/services/page-image/digital-experience.jpeg";
import cyberimage from "@/assets/services/page-image/cyber.jpeg";
import cloud from "@/assets/services/page-image/cloud.jpeg";
import iot from "@/assets/services/page-image/iot.jpeg";
import digitalTransformation from "@/assets/services/page-image/digital-transformation.jpeg";
import aiSolutionsImg from "@/assets/services/ai-solutions.jpg";
import digitalExperienceImg from "@/assets/services/digital-experience.jpg";
import cloudSolutionsImg from "@/assets/services/cloud-solutions.jpg";
import digitalTransformationImg from "@/assets/services/digital-transformation.jpg";
import iotSolutionsImg from "@/assets/services/iot-solutions.jpg";
import cybersecurityImg from "@/assets/services/cybersecurity.jpg";

//cards images
import machineLearningModelsImg from "@/assets/services/ai-offerings/Machine-Learning-Models.png";
import naturalLanguageProcessingImg from "@/assets/services/ai-offerings/natural-language processing.jpeg";
import computerVisionImg from "@/assets/services/ai-offerings/computer-vision.jpeg";
import predictiveAnalyticsImg from "@/assets/services/ai-offerings/predictive-analytics.jpeg";
import aiConsultingStrategyImg from "@/assets/services/ai-offerings/ai-consulting-strategy.jpeg";
import aiIntegrationDeploymentImg from "@/assets/services/ai-offerings/ai-integration-deployment.jpeg";
import uiUxImg from "@/assets/services/digital-experience/ui-ux.jpeg";
import webAppImg from "@/assets/services/digital-experience/webs-app.jpeg";
import mobileAppImg from "@/assets/services/digital-experience/mobile-app.jpeg";
import progressiveWebAppImg from "@/assets/services/digital-experience/progressive-web-apps.jpeg";
import eCommercesImg from "@/assets/services/digital-experience/e-commerces.jpeg";
import digitalStrategyImg from "@/assets/services/digital-experience/digital-strategy.jpeg";

import cloudMigrationImg from "@/assets/services/cloud/cloud-migration.jpeg";
import infrastructureCodeImg from "@/assets/services/cloud/infrastructure-code.jpeg";
import serverlessArchitectureImg from "@/assets/services/cloud/serverless architecture.jpeg";
import devopsImg from "@/assets/services/cloud/devops.jpeg";
import cloudSecurityImg from "@/assets/services/cloud/cloud-security.jpeg";
import cloudOptimizationImg from "@/assets/services/cloud/cloud-optimization.jpeg";

import processAutomationImg from "@/assets/services/digital-transformation/process-automation.jpeg";
import legacySystemImg from "@/assets/services/digital-transformation/legacy-system.jpeg";
import digitalStrategy from "@/assets/services/digital-transformation/digital-strategy .jpeg";
import changeManagementImg from "@/assets/services/digital-transformation/change-management.jpeg";
import cloudTransformationImg from "@/assets/services/digital-transformation/cloud-transformation.jpeg";

import iotPlatformImg from "@/assets/services/iot/iot-platform.jpeg";
import sensorIntegrationImg from "@/assets/services/iot/sensor-integration.jpeg";
import edgeComputingImg from "@/assets/services/iot/edge-computing.jpeg";
import dataAnalyticsImg from "@/assets/services/iot/data-analytics.jpeg";
import predictiveMaintenanceImg from "@/assets/services/iot/predictive-maintenance.jpeg";
import iotSecurityImg from "@/assets/services/iot/iot-sec.jpeg";

import securityAssessmentsImg from "@/assets/services/cyber/security-assessments.jpeg";
import penetrationTestingImg from "@/assets/services/cyber/penetration-testing.jpeg";
import identityManagementImg from "@/assets/services/cyber/identity-management.jpeg";
import complianceSolutionsImg from "@/assets/services/cyber/compliance-solutions.jpeg";
import managedDetectionImg from "@/assets/services/cyber/managed-detection.jpeg";
import cloudSecurityArchitectureImg from "@/assets/services/cyber/cloud-security-architecture.jpeg";
const ServiceDetail = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const getFilteredTechStack = (techStack: any, activeCategory: string) => {
    if (!techStack || typeof techStack !== "object") return [];

    if (activeCategory === "All") {
      return Object.entries(techStack).flatMap(([category, technologies]) =>
        Array.isArray(technologies)
          ? technologies.map((tech: string) => ({ tech, category }))
          : []
      );
    }

    return Array.isArray(techStack[activeCategory])
      ? techStack[activeCategory].map((tech: string) => ({
          tech,
          category: activeCategory,
        }))
      : [];
  };

  // Move the TechCard component outside the main component or fix the scope
  const TechCard = ({
    tech,
    category,
    index,
  }: {
    tech: string;
    category: string;
    index: number;
  }) => (
    <div
      className="group relative bg-card/50 rounded-2xl p-4 border border-border/50 hover:border-primary/40 hover:bg-card hover:shadow-lg transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 0.03}s` }}
      title={tech}
    >
      <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
        <DynamicIcon iconName={tech} size="xl" alt={tech} />
      </div>

      {/* Tech name tooltip */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
        <span className="bg-foreground text-background text-xs px-2 py-1 rounded-md whitespace-nowrap">
          {tech}
        </span>
      </div>
    </div>
  );

  const getBenefitIcon = (iconName: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      Brain: <Brain className="w-6 h-6 text-white" />,
      Rocket: <Rocket className="w-6 h-6 text-white" />,
      BarChart3: <BarChart3 className="w-6 h-6 text-white" />,
      DollarSign: <DollarSign className="w-6 h-6 text-white" />,
      Users: <Users className="w-6 h-6 text-white" />,
      Award: <Award className="w-6 h-6 text-white" />,
      TrendingUp: <TrendingUp className="w-6 h-6 text-white" />,
      Eye: <Eye className="w-6 h-6 text-white" />,
      Smartphone: <Smartphone className="w-6 h-6 text-white" />,
      Search: <Search className="w-6 h-6 text-white" />,
      Zap: <Zap className="w-6 h-6 text-white" />,
      Infinity: <Infinity className="w-6 h-6 text-white" />,
      Shield: <Shield className="w-6 h-6 text-white" />,
      Server: <Server className="w-6 h-6 text-white" />,
      Globe: <Globe className="w-6 h-6 text-white" />,
      HardDrive: <HardDrive className="w-6 h-6 text-white" />,
      Settings: <Settings className="w-6 h-6 text-white" />,
      Trophy: <Trophy className="w-6 h-6 text-white" />,
      Calendar: <Calendar className="w-6 h-6 text-white" />,
      Activity: <Activity className="w-6 h-6 text-white" />,
      Monitor: <Monitor className="w-6 h-6 text-white" />,
      Wrench: <Wrench className="w-6 h-6 text-white" />,
      Battery: <Battery className="w-6 h-6 text-white" />,
      MonitorCheck: <MonitorCheck className="w-6 h-6 text-white" />,
      FileCheck: <FileCheck className="w-6 h-6 text-white" />,
      RefreshCw: <RefreshCw className="w-6 h-6 text-white" />,
      ThumbsUp: <ThumbsUp className="w-6 h-6 text-white" />,
      Lock: <Lock className="w-6 h-6 text-white" />,
      AlertTriangle: <AlertTriangle className="w-6 h-6 text-white" />,
    };

    return iconMap[iconName] || <Star className="w-6 h-6 text-white" />;
  };
  const { serviceId } = useParams();

  const services = {
    "ai-solutions": {
      icon: Brain,
      title: "AI Solutions",
      description:
        "We design intelligent systems that learn, adapt, and grow with your business. From automation to predictive analytics, our AI solutions empower smarter decisions and unlock future-ready capabilities across your operations.",
      heroImage: ai,
      offerings: [
        {
          title: "Machine Learning Models",
          description:
            "Custom ML models tailored to your specific business needs and data patterns. Our expert team designs and implements sophisticated algorithms that learn from your data to make intelligent predictions and automate complex decision-making processes.",
          image: machineLearningModelsImg,
        },
        {
          title: "Natural Language Processing",
          description:
            "Extract insights from text data, enable chatbots, and automate content analysis. Transform unstructured text into actionable intelligence with advanced NLP techniques including sentiment analysis, entity recognition, and language translation capabilities.",
          image: naturalLanguageProcessingImg,
        },
        {
          title: "Computer Vision",
          description:
            "Advanced image and video analysis for quality control, security, and automation. Implement intelligent visual recognition systems that can identify objects, detect anomalies, and provide real-time insights for industrial and commercial applications.",
          image: computerVisionImg,
        },
        {
          title: "Predictive Analytics",
          description:
            "Forecast trends, customer behavior, and business outcomes with high accuracy. Leverage statistical modeling and machine learning to anticipate future scenarios, optimize resource allocation, and make data-driven strategic decisions.",
          image: predictiveAnalyticsImg,
        },
        {
          title: "AI Consulting & Strategy",
          description:
            "Comprehensive AI roadmap development and implementation guidance. Our experts help you identify high-impact AI opportunities, build business cases, and create sustainable AI strategies aligned with your organizational goals.",
          image: aiConsultingStrategyImg,
        },
        {
          title: "AI Integration & Deployment",
          description:
            "Seamless integration of AI solutions into your existing workflows and systems. We ensure smooth deployment, provide comprehensive training, and establish monitoring frameworks for continuous AI performance optimization.",
          image: aiIntegrationDeploymentImg,
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
            "AI-powered medical imaging analysis for early disease detection and treatment planning. Leverages deep learning algorithms to analyze MRI, CT scans, and X-rays with radiologist-level accuracy.",
        },
        {
          title: "Financial Fraud Detection",
          description:
            "Real-time transaction monitoring and anomaly detection to prevent fraudulent activities. Uses machine learning models to identify suspicious patterns and reduce false positives by 70%.",
        },
        {
          title: "Supply Chain Optimization",
          description:
            "Predictive analytics for inventory management and demand forecasting. Implements AI algorithms to optimize logistics, reduce costs, and improve delivery efficiency by 40%.",
        },
      ],
      techStack: {
        "AI Frameworks": [
          "TensorFlow",
          "PyTorch",
          "Scikit-learn",
          "Keras",

          "JAX",
          "ONNX",
        ],
        "Computer Vision": ["OpenCV", "MediaPipe"],
        "Data Science": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "SciPy"],
        "Language Models": [
          "OpenAI GPT",
          "Anthropic Claude",
          "Google PaLM",
          "Meta Llama",
        ],
      },
    },
    "digital-experience": {
      icon: Monitor,
      title: "Digital Experience",
      description:
        "Exceptional digital experiences are born where design meets purpose. We create intuitive, responsive, and emotionally engaging interfaces that turn every customer touchpoint into a powerful brand connection.",
      heroImage: digitalExperience,
      offerings: [
        {
          title: "UI/UX Design",
          description:
            "Human-centered design that creates intuitive and engaging user interfaces. We craft digital experiences that delight users through thoughtful design patterns, accessibility standards, and conversion-focused user journeys.",
          image: uiUxImg,
        },
        {
          title: "Web Development",
          description:
            "Modern, responsive websites built with the latest technologies and best practices. From corporate websites to complex web applications, we deliver high-performance solutions that scale with your business needs.",
          image: webAppImg,
        },
        {
          title: "Mobile Applications",
          description:
            "Native and cross-platform mobile apps that deliver seamless user experiences. Build engaging mobile solutions for iOS and Android that leverage device capabilities and provide offline functionality.",
          image: mobileAppImg,
        },
        {
          title: "Progressive Web Apps",
          description:
            "Fast, reliable web applications that work offline and feel like native apps. Combine the best of web and mobile experiences with progressive enhancement, service workers, and responsive design principles.",
          image: progressiveWebAppImg,
        },
        {
          title: "E-commerce Solutions",
          description:
            "Complete online store development with secure payment gateways, inventory management, and customer analytics. Create seamless shopping experiences that drive conversions and customer loyalty.",
          image: eCommercesImg,
        },
        {
          title: "Digital Strategy & Consulting",
          description:
            "Comprehensive digital transformation guidance to maximize your online presence. We analyze your business objectives, target audience, and market trends to create data-driven digital strategies.",
          image: digitalStrategyImg,
        },
      ],
      benefits: [
        {
          text: "Improved User Engagement",
          icon: "Users",
        },
        {
          text: "Higher Conversion Rates",
          icon: "TrendingUp",
        },
        {
          text: "Enhanced Brand Recognition",
          icon: "Eye",
        },
        {
          text: "Mobile-First Approach",
          icon: "Smartphone",
        },
        {
          text: "SEO Optimization",
          icon: "Search",
        },
        {
          text: "Performance Excellence",
          icon: "Zap",
        },
      ],
      useCases: [
        {
          title: "E-commerce Platform",
          description:
            "Complete online shopping experience with personalized recommendations and seamless checkout. Advanced AI-driven product discovery and omnichannel customer journey integration.",
        },
        {
          title: "Healthcare Portal",
          description:
            "Patient management system with telemedicine capabilities and health tracking. Secure patient-provider communication with real-time health monitoring and automated appointment scheduling.",
        },
        {
          title: "Educational Platform",
          description:
            "Interactive learning management system with virtual classrooms and progress tracking. Personalized learning paths with AI-powered assessments and collaborative tools for remote education.",
        },
      ],
      techStack: {
        "Frontend Frameworks": [
          "React",
          "Vue.js",
          "Angular",
          "Svelte",
          "Next.js",
          "Nuxt.js",
        ],
        "Content Management": [
          "Contentful",
          "Sanity",
          "Strapi",
          "WordPress (Headless)",
          "Storybook",
          "Prismic",
        ],
        "Mobile Development": [
          "React Native",
          "Flutter",
          "Ionic",
          "Swift",
          "Kotlin",
        ],
        Analytics: ["Google Analytics", , "Mixpanel", "Amplitude", "Hotjar"],
      },
    },
    "cloud-solutions": {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Fuel innovation with cloud strategies engineered for dynamic growth, seamless performance, and enterprise-grade security. From seamless migrations to cloud-native innovations, we help you accelerate transformation and operate with freedom and confidence.",
      heroImage: cloud,
      offerings: [
        {
          title: "Cloud Migration",
          description:
            "Seamless migration of your existing infrastructure to cloud platforms with minimal downtime. Our comprehensive migration strategy ensures data integrity, security compliance, and optimal performance throughout the transition process.",
          image: cloud,
        },
        {
          title: "Infrastructure as Code",
          description:
            "Automated infrastructure provisioning and management using modern DevOps practices. Implement version-controlled, repeatable infrastructure deployment with tools like Terraform, CloudFormation, and Kubernetes for consistent environments.",
          image: infrastructureCodeImg,
        },
        {
          title: "Serverless Architecture",
          description:
            "Event-driven computing that automatically scales and reduces operational overhead. Build cost-effective applications that scale to zero when not in use and handle massive spikes in traffic without infrastructure management.",
          image: serverlessArchitectureImg,
        },
        {
          title: "DevOps & CI/CD",
          description:
            "Streamlined development workflows with automated testing and deployment pipelines. Accelerate software delivery with continuous integration, automated quality gates, and zero-downtime deployment strategies.",
          image: devopsImg,
        },
        {
          title: "Cloud Security & Compliance",
          description:
            "Comprehensive security frameworks and compliance management for cloud environments. Implement multi-layered security controls, identity management, and regulatory compliance for GDPR, HIPAA, SOC2, and other standards.",
          image: cloudSecurityImg,
        },
        {
          title: "Cloud Cost Optimization",
          description:
            "Strategic cost management and optimization for cloud resources. Analyze usage patterns, implement cost-saving measures, and establish monitoring systems to ensure optimal cloud spending without compromising performance.",
          image: cloudOptimizationImg,
        },
      ],
      benefits: [
        {
          text: "Infinite Scalability",
          icon: "Infinity",
        },
        {
          text: "Cost Optimization",
          icon: "DollarSign",
        },
        {
          text: "Enhanced Security",
          icon: "Shield",
        },
        {
          text: "Improved Reliability",
          icon: "Server",
        },
        {
          text: "Global Availability",
          icon: "Globe",
        },
        {
          text: "Automated Backups",
          icon: "HardDrive",
        },
      ],
      useCases: [
        {
          title: "Enterprise Modernization",
          description:
            "Legacy system migration to modern cloud-native architecture for improved performance. Containerized applications with microservices architecture and automated CI/CD pipelines for faster deployment.",
        },
        {
          title: "Startup Infrastructure",
          description:
            "Scalable cloud foundation that grows with your business without upfront investment. Pay-as-you-go model with auto-scaling capabilities and built-in high availability for rapid growth.",
        },
        {
          title: "Disaster Recovery",
          description:
            "Robust backup and recovery solutions ensuring business continuity. Automated failover systems with geo-redundant storage and recovery time objectives under 15 minutes.",
        },
      ],
      techStack: {
        "Compute Services": [
          "AWS EC2",
          "Azure VMs",
          "Google Compute Engine",
          "AWS Lambda",
          "Azure Functions",
        ],
        "Data & Storage": [
          "Amazon S3",
          "Azure Blob Storage",
          "Google Cloud Storage",
          "Amazon RDS",
          "MongoDB Atlas",
        ],
        "Networking & CDN": [
          "AWS CloudFront",
          "Azure CDN",
          "Cloudflare",
          "AWS Route 53",
        ],
        "Management & DevOps": [
          "AWS CloudWatch",
          "Azure Monitor",
          "Datadog",
          "Terraform",
          "Ansible",
        ],
        Security: [
          "AWS IAM",
          "Azure Active Directory",
          "Google Cloud IAM",
          "Cloudflare Security",
        ],
        Containers: ["Docker", "Kubernetes", "AWS EKS", "Azure AKS"],
      },
    },
    "digital-transformation": {
      icon: Rocket,
      title: "Digital Transformation",
      description:
        "Transformation is more than going digital—it’s about reimagining how your business works and evolves. We help you modernize core systems, adopt new technologies, and align digital strategy with real-world impact.",
      heroImage: digitalTransformation,
      offerings: [
        {
          title: "Process Automation",
          description:
            "Streamline operations with intelligent automation and workflow optimization. Eliminate manual processes through robotic process automation, AI-powered decision making, and integrated business process management systems.",
          image: processAutomationImg,
        },
        {
          title: "Legacy System Modernization",
          description:
            "Transform outdated systems into modern, efficient, and scalable solutions. Migrate from monolithic architectures to microservices, update technology stacks, and improve system performance while maintaining business continuity.",
          image: legacySystemImg,
        },
        {
          title: "Digital Strategy Consulting",
          description:
            "Strategic planning and roadmap development for successful digital transformation. Assess current capabilities, define target architecture, and create actionable plans that align technology initiatives with business objectives.",
          image: digitalStrategy,
        },
        {
          title: "Change Management",
          description:
            "Organizational change support to ensure smooth adoption of new technologies. Provide training programs, communication strategies, and stakeholder engagement to maximize user adoption and transformation success.",
          image: changeManagementImg,
        },
        {
          title: "Cloud Transformation",
          description:
            "Accelerate innovation with secure and scalable cloud solutions. Implement cloud-native architectures, optimize cloud infrastructure, and enable flexible, cost-effective digital operations across hybrid and multi-cloud environments.",
          image: cloudTransformationImg,
        },
        {
          title: "Data Analytics & AI Integration",
          description:
            "Harness the power of data to drive intelligent decision-making. Implement advanced analytics platforms, machine learning models, and business intelligence tools that transform raw data into actionable insights and predictive capabilities.",
          image: dataAnalyticsImg,
        },
      ],
      benefits: [
        {
          text: "Operational Excellence",
          icon: "Settings",
        },
        {
          text: "Competitive Advantage",
          icon: "Trophy",
        },
        {
          text: "Future-Ready Infrastructure",
          icon: "Calendar",
        },
        {
          text: "Enhanced Customer Experience",
          icon: "Users",
        },
        {
          text: "Data-Driven Decision Making",
          icon: "BarChart3",
        },
        {
          text: "Improved Agility",
          icon: "Activity",
        },
      ],
      useCases: [
        {
          title: "Manufacturing 4.0",
          description:
            "Smart factory implementation with IoT sensors, AI analytics, and automated processes. Real-time production monitoring with predictive maintenance and digital twin technology for optimized operations.",
        },
        {
          title: "Digital Banking",
          description:
            "Complete banking ecosystem transformation with mobile-first approach and AI-powered services. Automated customer onboarding with blockchain security and personalized financial advisory through machine learning.",
        },
        {
          title: "Smart Retail",
          description:
            "Omnichannel retail experience with personalization and inventory optimization. AI-driven customer behavior analysis with automated supply chain management and augmented reality shopping experiences.",
        },
      ],
      techStack: {
        "Core Platforms": [
          "Salesforce",
          "ServiceNow",
          "Microsoft Dynamics 365",
        ],
        "Process Automation": ["UiPath", "Microsoft Power Automate"],
        "Data & Analytics": ["Tableau", "Power BI", "Databricks", "Alteryx"],
        Collaboration: ["Microsoft 365", "Slack", "Teams", "Asana"],
        "Customer Experience": ["Adobe Experience Cloud", "HubSpot"],
        Integration: ["MuleSoft", "Dell Boomi", "Azure API Management"],
      },
    },
    "iot-solutions": {
      icon: Globe,
      title: "IoT Solutions",
      description:
        "In an interconnected world, data is power. Our IoT solutions transform physical environments into intelligent ecosystems—enabling smarter operations, real-time insights, and automated control at scale.",
      heroImage: iot,
      offerings: [
        {
          title: "IoT Platform Development",
          description:
            "End-to-end IoT platforms for device management, data collection, and analytics. Build scalable IoT ecosystems that connect millions of devices, process real-time data streams, and provide actionable insights through advanced dashboards.",
          image: iotPlatformImg,
        },
        {
          title: "Sensor Integration",
          description:
            "Smart sensor networks for environmental monitoring and industrial automation. Deploy wireless sensor networks that collect environmental data, monitor equipment health, and trigger automated responses based on predefined conditions.",
          image: sensorIntegrationImg,
        },
        {
          title: "Edge Computing",
          description:
            "Local data processing and real-time decision making at the edge of your network. Reduce latency and bandwidth costs by processing data closer to the source, enabling real-time analytics and autonomous device behavior.",
          image: edgeComputingImg,
        },
        {
          title: "Data Analytics",
          description:
            "Advanced analytics and machine learning on IoT data for actionable insights. Transform raw sensor data into valuable business intelligence with predictive maintenance, anomaly detection, and performance optimization algorithms.",
          image: dataAnalyticsImg,
        },
        {
          title: "Predictive Maintenance Solutions",
          description:
            "AI-driven maintenance systems that anticipate equipment failures before they occur. Reduce downtime and maintenance costs by analyzing sensor data to predict component failures and schedule proactive repairs.",
          image: predictiveMaintenanceImg,
        },
        {
          title: "IoT Security & Compliance",
          description:
            "End-to-end security frameworks for protecting connected devices and data. Implement robust security protocols, device authentication, data encryption, and compliance measures to safeguard your IoT ecosystem from cyber threats.",
          image: iotSecurityImg,
        },
      ],
      benefits: [
        {
          text: "Real-time Monitoring",
          icon: "Monitor",
        },
        {
          text: "Predictive Maintenance",
          icon: "Wrench",
        },
        {
          text: "Energy Efficiency",
          icon: "Battery",
        },
        {
          text: "Remote Management",
          icon: "monitor-check",
        },
        {
          text: "Cost Reduction",
          icon: "DollarSign",
        },
        {
          text: "Improved Safety",
          icon: "Shield",
        },
      ],
      useCases: [
        {
          title: "Smart Cities",
          description:
            "Connected infrastructure for traffic management, environmental monitoring, and public safety. Real-time data collection from sensors and cameras enables optimized resource allocation and emergency response coordination.",
        },
        {
          title: "Industrial IoT",
          description:
            "Manufacturing equipment monitoring and predictive maintenance systems. Continuous sensor data analysis prevents downtime through early fault detection and automated maintenance scheduling.",
        },
        {
          title: "Smart Agriculture",
          description:
            "Precision farming with soil sensors, weather monitoring, and automated irrigation. Data-driven insights optimize water usage, crop health monitoring, and yield prediction for sustainable farming.",
        },
      ],
      techStack: {
        "IoT Platforms": [
          "AWS IoT Core",
          "Azure IoT Hub",
          "Google Cloud IoT Core",
        ],
        "Hardware & Devices": ["Arduino", "Raspberry Pi", "ESP32"],
        Connectivity: ["MQTT", "LoRaWAN", "Bluetooth LE"],
        "Edge Computing": [
          "AWS IoT Greengrass",
          "Azure IoT Edge",
          "NVIDIA Jetson",
        ],
        "Data & Analytics": [
          "InfluxDB",
          "Grafana",
          "Azure Time Series Insights",
        ],
        Security: ["Azure Sphere", "AWS IoT Device Defender", ,],
      },
    },
    cybersecurity: {
      icon: Shield,
      title: "Cyber Security",
      description:
        "Your digital trust is only as strong as your security. We deliver advanced cybersecurity frameworks that protect against evolving threats, ensuring your data, systems, and reputation remain uncompromised.",
      heroImage: cyberimage,
      offerings: [
        {
          title: "Security Assessments",
          description:
            "Comprehensive security audits to identify vulnerabilities and compliance gaps. Conduct thorough penetration testing, code reviews, and infrastructure assessments to uncover potential security risks and provide actionable remediation strategies.",
          image: securityAssessmentsImg,
        },
        {
          title: "Penetration Testing",
          description:
            "Ethical hacking to test your systems' defenses against real-world attacks. Simulate sophisticated cyber attacks to identify weaknesses in your security posture and validate the effectiveness of your security controls.",
          image: penetrationTestingImg,
        },
        {
          title: "Identity Management",
          description:
            "Secure access control and user authentication systems with multi-factor authentication. Implement zero-trust security models with advanced identity verification, privileged access management, and single sign-on solutions.",
          image: identityManagementImg,
        },
        {
          title: "Compliance Solutions",
          description:
            "Ensure regulatory compliance with GDPR, HIPAA, SOX, and other standards. Implement comprehensive compliance frameworks that meet industry regulations while maintaining operational efficiency and user experience.",
          image: complianceSolutionsImg,
        },
        {
          title: "Managed Detection & Response",
          description:
            "24/7 security monitoring and incident response services to protect against advanced threats. Leverage advanced SIEM systems, threat intelligence, and security automation to detect and respond to cyber threats in real-time.",
          image: managedDetectionImg,
        },
        {
          title: "Cloud Security Architecture",
          description:
            "Secure cloud infrastructure design and implementation for multi-cloud environments. Build robust security frameworks for AWS, Azure, and GCP with proper network segmentation, data encryption, and cloud-native security controls.",
          image: cloudSecurityArchitectureImg,
        },
      ],
      benefits: [
        {
          text: "Risk Mitigation",
          icon: "Shield",
        },
        {
          text: "Regulatory Compliance",
          icon: "FileCheck",
        },
        {
          text: "Business Continuity",
          icon: "RefreshCw",
        },
        {
          text: "Trust & Reputation",
          icon: "ThumbsUp",
        },
        {
          text: "Data Protection",
          icon: "Lock",
        },
        {
          text: "Incident Prevention",
          icon: "AlertTriangle",
        },
      ],
      useCases: [
        {
          title: "Financial Security",
          description:
            "Banking-grade security for financial institutions and fintech companies. Advanced threat detection with real-time transaction monitoring and regulatory compliance for PCI DSS and SOX requirements.",
        },
        {
          title: "Healthcare Protection",
          description:
            "HIPAA-compliant security solutions for healthcare organizations and patient data. Encrypted medical records with access controls and audit trails to protect sensitive health information.",
        },
        {
          title: "Enterprise Security",
          description:
            "Comprehensive security framework for large organizations with complex IT infrastructure. Zero-trust architecture with identity management and advanced endpoint protection across distributed networks.",
        },
      ],
      techStack: {
        "Prevention & Perimeter": [
          "Palo Alto Networks",
          "CrowdStrike",

          "Zscaler",
        ],
        "Identity & Access": [
          "Okta",
          "Azure AD",
          "Duo Security",
          "Ping Identity",
        ],
        "Detection & Response": [
          "Splunk",
          "Microsoft Sentinel",
          "Cortex XSOAR",
          "Varonis",
        ],
        "Governance & Compliance": [
          "Tenable",
          "Prisma Cloud",
          "SailPoint",
          "RSA Archer",
        ],
      },
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
              <p className="text-xl text-muted-foreground leading-relaxed font-thin">
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
      <section className="py-24 bg-background" data-aos="fade-up">
        <div className="container mx-auto px-6 lg:px-8">
          <div
            className="text-center mb-16"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div
              className="accent-line mx-auto mb-6"
              data-aos="fade-right"
              data-aos-delay="200"
            />
            <h2
              className="text-4xl lg:text-5xl font-bold heading-luxury mb-6"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Our <span className="text-gradient-luxury">Offerings</span>
            </h2>
            <p
              className="text-xl text-muted-foreground max-w-3xl mx-auto font-thin"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Comprehensive solutions designed to address your unique business
              challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {service.offerings.map((offering, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden shadow-luxury hover:shadow-2xl transition-all duration-500 animate-scale-in border border-border hover:border-primary/20"
                data-aos="fade-up"
                data-aos-delay={300 + index * 100}
                data-aos-duration="500"
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
      <section className="py-24 bg-card" data-aos="fade-up">
        <div className="container max-w-6xl mx-auto px-6 lg:px-8">
          <div
            className="text-center mb-16"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div
              className="accent-line mx-auto mb-6"
              data-aos="fade-right"
              data-aos-delay="200"
            />
            <h2
              className="text-4xl lg:text-5xl font-bold heading-luxury mb-6"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Key <span className="text-gradient-luxury">Benefits</span>
            </h2>
            <p
              className="text-xl text-muted-foreground max-w-3xl mx-auto font-thin"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Measurable advantages that drive your business forward
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Benefits Cards - Left Side */}
            <div className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-background rounded-xl transition-all duration-300"
                  data-aos="fade-right"
                  data-aos-delay={300 + index * 100}
                  data-aos-duration="500"
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
            <div
              className="relative overflow-hidden rounded-2xl shadow-luxury"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="600"
            >
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
                  <div className="text-xs text-muted-foreground">
                    Reliability
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-background" data-aos="fade-up">
        <div className="container mx-auto px-6 lg:px-8">
          <div
            className="text-center mb-16"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div
              className="accent-line mx-auto mb-6"
              data-aos="fade-right"
              data-aos-delay="200"
            />
            <h2
              className="text-4xl lg:text-5xl font-bold heading-luxury mb-6"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Real-World{" "}
              <span className="text-gradient-luxury">Applications</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {service.useCases.map((useCase, index) => (
              <div
                key={index}
                className="card-luxury group"
                data-aos="fade-up"
                data-aos-delay={300 + index * 100}
                data-aos-duration="500"
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
          <div
            className="text-center mb-16"
            data-aos="zoom-in"
            data-aos-delay="50"
          >
            <div
              className="accent-line mx-auto mb-6"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="300"
            />
            <h2
              className="text-4xl lg:text-5xl font-bold heading-luxury mb-6"
              data-aos="fade-up"
              data-aos-delay="75"
              data-aos-duration="300"
            >
              Technology <span className="text-gradient-luxury">Stack</span>
            </h2>
            <p
              className="text-xl text-muted-foreground max-w-3xl mx-auto font-thin"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="300"
            >
              We leverage cutting-edge technologies and industry-leading tools
              to deliver exceptional results
            </p>
          </div>

          {/* Category Filter Tabs - FIXED */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === "All"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card/50 text-foreground/80 hover:bg-card hover:text-foreground border border-border/50"
              }`}
            >
              All Technologies
            </button>

            {service.techStack &&
              Object.keys(service.techStack).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-card/50 text-foreground/80 hover:bg-card hover:text-foreground border border-border/50"
                  }`}
                >
                  {category}
                </button>
              ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {getFilteredTechStack(service.techStack, activeCategory).map(
              ({ tech, category }, index) => (
                <TechCard
                  key={`${category}-${tech}-${index}`}
                  tech={tech}
                  category={category}
                  index={index}
                />
              )
            )}
          </div>
        </div>
      </section>
      <CTABanner />
    </Layout>
  );
};

export default ServiceDetail;
