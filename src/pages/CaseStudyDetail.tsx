import { useParams, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Users,
  TrendingUp,
  Target,
  Award,
  Zap,
  Clock,
  ArrowLeft,
  CheckCircle,
  CheckCircleIcon,
  ShieldCheckIcon,
  BoltIcon,
  Server,
  Globe,
  Shield,
  DollarSign,
  ShoppingCart,
  RefreshCw,
  Video,
  TrendingDown,
  Heart,
  Activity,
  FileText,
  Package,
} from "lucide-react";
import { Link } from "react-router-dom";
import DynamicIcon from "../components/DynamicIcon";
import healthcare from "@/assets/works/projects/healthcare-platform-hero.jpg";
import trading from "@/assets/works/projects/trading-platform.jpeg";
import manufacturing from "@/assets/works/projects/manufacturing-iot-hero.jpg";
import education from "@/assets/works/projects/education-platform-hero.jpg";
import retail from "@/assets/works/projects/inventory-management.jpeg";
import smartCity from "@/assets/works/smart-city-infrastructure.jpeg";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import automationBot from "@/assets/works/projects/ai-bot.jpeg";
import hospitalManagement from "@/assets/works/projects/hms.jpeg";
const TechCard = ({ tech, index }: { tech: string; index: number }) => (
  <div className="group relative flex items-center justify-center" title={tech}>
    {/* Icon */}
    <DynamicIcon
      iconName={tech}
      alt={tech}
      size="xl" // base mobile size
      className="sm:size-md md:size-lg lg:size-xl" // responsive growth
    />

    {/* Tooltip - hidden on mobile, visible on md+ */}
    <div className="hidden md:block absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
      <span className="bg-foreground text-background text-xs px-2 py-1 rounded-md whitespace-nowrap">
        {tech}
      </span>
    </div>
  </div>
);

const icons = ShieldCheckIcon;
const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();

  const projects = [
    {
      id: "nextgen-learning-ecosystem",
      title: "NextGen Learning Ecosystem",
      category: "Education",
      image: healthcare,
      description:
        "Unified digital learning environment with AI-powered personalization for global university network.",
      fullDescription:
        "A global university network sought a unified digital learning environment that could adapt to individual student needs and support real-time analytics across multiple campuses. We built a cloud-based learning ecosystem with intelligent course recommendations, virtual classrooms, and adaptive assessments. Educators could track performance in real-time, and students received dynamic content tailored to their learning pace and style.",
      technologies: [
        "React",
        "TensorFlow",
        "Scikit-Learn",

        "Node.js",
        "Power BI",
      ],
      stats: [
        { label: "Student Engagement", value: "45%", icon: TrendingUp },
        { label: "Course Completion", value: "30% faster", icon: Target },
        { label: "Countries Deployed", value: "9+", icon: Globe },
        { label: "Platform Uptime", value: "99.98%", icon: Server },
      ],
      results: [
        "45% improvement in student engagement",
        "30% faster course completion rates",
        "Used in 9+ countries across global campuses",
        "Platform uptime exceeded 99.98% in first year",
      ],
      challenges: [
        "Fragmented systems with no centralized content delivery",
        "Limited real-time tracking of student engagement",
        "Poor accessibility for students in remote regions",
        "Lack of personalization in the learning journey",
      ],
      solution:
        "We developed a comprehensive learning ecosystem featuring AI-powered learning paths, virtual classrooms using WebRTC, and cloud-native infrastructure. The platform provides real-time analytics dashboards for educators and personalized learning experiences for students, addressing accessibility and engagement challenges across diverse geographical locations.",
      year: "2024",
      duration: "6.5 months",
    },
    {
      id: "enterprise-automation-bot",
      title: "Enterprise Automation Bot",
      category: "Enterprise",
      image: automationBot,
      description:
        "Intelligent automation solution for cross-portal file handling with secure data transfer and compliance tracking.",
      fullDescription:
        "The Automation Bot was designed to streamline file handling and data transfers between enterprise portals. The solution automates scheduled logins, file downloads, metadata extraction, CSV generation, and secure uploads into a secondary portal — reducing manual intervention, increasing accuracy, and ensuring compliance with organizational policies.",
      technologies: [
        "Python",

        "PostgreSQL",
        "Redis",
        "Docker",

        "Pandas",

        "Amazon S3",
        "CloudWatch",
      ],
      stats: [
        {
          label: "Manual Effort Reduction",
          value: "70%",
          icon: TrendingDown,
        },
        {
          label: "Processing Accuracy",
          value: "90% improvement",
          icon: Target,
        },
        { label: "Turnaround Time", value: "60% faster", icon: Clock },
        { label: "Cost Savings", value: "Significant ROI", icon: DollarSign },
      ],
      results: [
        "70% reduction in manual data handling effort",
        "90% improvement in processing accuracy",
        "60% faster turnaround time for file transfers and reporting",
        "Enhanced compliance with secure logging and audit trails",
        "Scalable design enabling quick extension to new portals",
        "Significant cost savings by reducing repetitive manual labour",
      ],
      challenges: [
        "Manual file downloads and uploads were time-consuming and error-prone",
        "Lack of structured data extraction and validation slowed reporting",
        "Compliance risks due to missing audit trails and weak authentication practices",
        "High dependency on manual staff intervention, increasing turnaround times",
        "Inefficient collaboration due to delayed availability of processed data",
      ],
      solution:
        "We delivered a secure, fully automated bot that executes cross-portal file handling with minimal human intervention. The system dynamically extracts and validates data, generates structured CSV files, and uploads them into the target portal with error handling and retry logic. Comprehensive logs, audit reports, and monitoring ensure compliance and traceability.",
      year: "2024",
      duration: "3 months",
    },

    {
      id: "smart-factory-automation",
      title: "Smart Factory Automation",
      category: "Manufacturing",
      image: manufacturing,
      description:
        "Industry 4.0 smart factory transformation with real-time machine monitoring and predictive maintenance.",
      fullDescription:
        "A legacy manufacturer wanted to modernize its plants into Industry 4.0-ready smart factories with real-time machine monitoring and predictive maintenance. We equipped production lines with IoT sensors and built edge AI systems to detect anomalies before breakdowns. The central dashboard visualized real-time KPIs across plants and recommended energy-saving adjustments.",
      technologies: ["Arduino", "Docker", "PyTorch", "Azure IoT", "Power BI"],
      stats: [
        {
          label: "Unplanned Downtime",
          value: "35% reduction",
          icon: TrendingDown,
        },
        { label: "Energy Usage", value: "25% drop", icon: Zap },
        { label: "Equipment Uptime", value: "98%", icon: Activity },
        { label: "ROI Period", value: "7 months", icon: DollarSign },
      ],
      results: [
        "35% reduction in unplanned downtime",
        "25% drop in energy usage",
        "98% equipment uptime maintained across 3 global sites",
        "ROI achieved within 7 months through cost savings and efficiency gains",
      ],
      challenges: [
        "Manual workflows prone to human error",
        "Unexpected machine failures causing delays",
        "No visibility into production line efficiency",
        "Inconsistent energy usage across sites",
      ],
      solution:
        "We equipped production lines with IoT sensors and built edge AI systems to detect anomalies before breakdowns. The central dashboard visualized real-time KPIs across plants and recommended energy-saving adjustments, transforming legacy manufacturing into data-driven smart factories.",
      year: "2025",
      duration: "4 months",
    },

    {
      id: "e-learning-platform",
      title: "Interactive E-Learning Platform",
      category: "Education",
      image: education,
      description:
        "AI-powered personalized learning platform with virtual classrooms and progress tracking.",
      fullDescription:
        "Created an innovative e-learning platform that personalizes education through AI, offering virtual classrooms, adaptive learning paths, and comprehensive progress analytics for educators and students. The platform revolutionizes online education with interactive content and personalized learning experiences.",
      technologies: ["React", "GraphQL", "Python", "TensorFlow", "AWS"],
      stats: [
        { label: "Active Students", value: "25K+", icon: Users },
        { label: "Course Completion", value: "85%", icon: Award },
        { label: "Learning Improvement", value: "60%", icon: TrendingUp },
      ],
      results: [
        "Increased course completion rates by 45%",
        "Improved learning outcomes by 60%",
        "Reduced instructor workload by 30%",
        "Expanded global reach to 50+ countries",
      ],
      challenges: [
        "Personalized learning at scale",
        "Real-time virtual classroom interactions",
        "Content recommendation algorithms",
        "Multi-device accessibility",
      ],
      solution:
        "We developed an AI-driven platform that adapts to individual learning styles and pace. Our solution includes interactive virtual classrooms, intelligent content recommendations, and comprehensive analytics for both students and instructors.",
      year: "2024",
      duration: "6 months",
    },
    {
      id: "personalized-shopper-experience",
      title: "Hyper-Personalized Shopper Experience",
      category: "Retail",
      image: retail,
      description:
        "AI-driven omnichannel personalization platform for global fashion retailer boosting customer loyalty and conversion.",
      fullDescription:
        "A global fashion retailer wanted to elevate customer loyalty and boost conversion by delivering personalized content and product recommendations across web, mobile, and physical stores. We unified all customer touchpoints into a real-time engagement engine, delivering smart recommendations and personalized campaigns. In-store kiosks recognized repeat visitors and showed tailored promotions using edge AI and facial analytics (privacy-compliant).",

      technologies: [
        "React",
        "Python",
        "Scikit-learn",
        "PostgreSQL",
        "Apache Kafka",
      ],
      stats: [
        { label: "Conversion Rate", value: "50% increase", icon: TrendingUp },
        { label: "Customer Retention", value: "35% boost", icon: Users },
        {
          label: "In-Store Engagement",
          value: "40% increase",
          icon: ShoppingCart,
        },
        { label: "Product Returns", value: "20% decrease", icon: RefreshCw },
      ],
      results: [
        "50% increase in conversion rates",
        "35% boost in customer retention",
        "40% increase in in-store engagement via smart kiosks",
        "20% decrease in product return rates thanks to AR try-ons",
      ],
      challenges: [
        "Data silos between online and offline systems",
        "Poor personalization across devices",
        "Static promotions with low engagement",
        "No real-time behavioral segmentation",
      ],
      solution:
        "We unified all customer touchpoints into a real-time engagement engine, delivering smart recommendations and personalized campaigns. In-store kiosks recognized repeat visitors and showed tailored promotions using edge AI and facial analytics (privacy-compliant), creating seamless omnichannel experiences.",
      year: "2024",
      duration: "4.5 months",
    },
    {
      id: "ai-telehealth-network",
      title: "AI-Driven Telehealth Network",
      category: "Healthcare",
      image: healthcare,
      description:
        "Scalable virtual care platform with AI diagnostics and IoT integration for hospital group serving remote patients.",
      fullDescription:
        "A hospital group needed a scalable virtual care platform to serve patients remotely, automate diagnostics, and reduce pressure on emergency departments. We launched a digital care platform with virtual consultations, AI-powered symptom triage, and IoT-based patient monitoring. The system auto-updated EMRs and alerted doctors when critical thresholds were crossed.",
      technologies: ["React", "GraphQL", "Python", "TensorFlow", "AWS"],
      stats: [
        { label: "Virtual Consultations", value: "60% increase", icon: Video },
        {
          label: "ER Overflow Reduction",
          value: "50% reduction",
          icon: TrendingDown,
        },
        { label: "Patient Satisfaction", value: "92%", icon: Heart },
        { label: "Patients Monitored", value: "20K+", icon: Users },
      ],
      results: [
        "60% increase in virtual patient consultations",
        "50% reduction in ER overflow visits",
        "92% patient satisfaction score",
        "Real-time vitals tracking enabled proactive care for 20,000+ patients",
      ],
      challenges: [
        "Overburdened in-person clinics",
        "Delayed access to diagnostics",
        "Low digital literacy among patients",
        "Strict healthcare compliance requirements",
      ],
      solution:
        "We launched a digital care platform with virtual consultations, AI-powered symptom triage, and IoT-based patient monitoring. The system auto-updated EMRs and alerted doctors when critical thresholds were crossed, ensuring compliance while improving accessibility and care quality.",
      year: "2024",
      duration: "4.5 months",
    },

    {
      id: "hospital-management-system",
      title: "Hospital Management System",
      category: "Healthcare",
      image: hospitalManagement,
      description:
        "Comprehensive healthcare platform streamlining patient care, digital records, financial management, and inventory control.",
      fullDescription:
        "A comprehensive Hospital Management System was developed to streamline patient care, reduce waiting times, ensure transparent financial management, digitize medical records, and manage hospital stock inventory efficiently. The solution aimed to improve both patient experience and hospital operational efficiency.",
      technologies: ["React", "Node.js", "MongoDB", "Redis", "Docker", "AWS"],
      stats: [
        {
          label: "Patient Waiting Time",
          value: "40% reduction",
          icon: Clock,
        },
        {
          label: "Recordkeeping Efficiency",
          value: "85% reduction",
          icon: FileText,
        },
        {
          label: "Scheduling Efficiency",
          value: "25% improvement",
          icon: Calendar,
        },
        { label: "Stock Shortages", value: "30% fewer", icon: Package },
      ],
      results: [
        "40% reduction in average patient waiting times",
        "100% transparency in payments and revenue reporting",
        "85% reduction in paper-based recordkeeping",
        "25% improvement in appointment scheduling efficiency",
        "30% fewer stock shortages due to real-time inventory alerts",
        "Higher patient satisfaction through accessible digital services",
      ],
      challenges: [
        "Manual appointment scheduling caused longer patient waiting times",
        "Lack of transparency in financial tracking and reporting",
        "Paper-based medical recordkeeping made history retrieval difficult",
        "Stock mismanagement led to shortages and over-purchasing",
        "Limited integration across departments (patients, doctors, receptionists, inventory, and finance)",
      ],
      solution:
        "We delivered a secure, scalable, and user-friendly HMS platform with integrated patient management, digital records, financial tracking, and real-time inventory control. Patients could easily book appointments, access prescriptions, and view history online, while doctors and admins benefitted from centralized records and analytics. The system provided real-time financial reports and stock alerts, ensuring smooth operations across all hospital departments.",
      year: "2024",
      duration: "5 months",
    },

    {
      id: "real-world-impact-through-smart-software-engineering",
      title: "Real-World Impact Through Smart Software Engineering",
      category: "Government",
      image: caseStudy1,
      description:
        "From education to enterprise, we've helped organizations of all sizes solve complex challenges, streamline operations, and innovate faster through custom-built technology solutions.",
      fullDescription:
        "This comprehensive enterprise solution transformed how organizations manage their operations, leveraging cutting-edge technology to drive efficiency and innovation. The platform was designed to scale with growing business needs while maintaining optimal performance. Our team delivered a robust system that handles complex workflows, integrates with existing infrastructure, and provides actionable insights through advanced analytics.",
      technologies: [
        "React",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "AWS",
        "Docker",
        "Kubernetes",
        "Redis",
      ],
      stats: [
        { label: "Users", value: "50K+", icon: Users },
        { label: "Growth", value: "300%", icon: TrendingUp },
        { label: "Time Saved", value: "40%", icon: Clock },
      ],
      results: [
        "Achieved 300% user growth within first year",
        "Reduced operational time by 40% through automation",
        "Improved system reliability to 99.9% uptime",
        "Scaled to support 50,000+ concurrent users",
        "Reduced operational costs by 35%",
      ],
      challenges: [
        "Legacy system integration and migration",
        "Ensuring scalability for rapid user growth",
        "Maintaining data security and compliance",
        "Real-time data processing and analytics",
        "Cross-platform compatibility requirements",
      ],
      solution:
        "We engineered a modern, cloud-native architecture that seamlessly integrated with existing legacy systems while providing a scalable foundation for future growth. The solution included automated workflows, real-time analytics dashboard, and a responsive interface that works across all devices. Our agile approach allowed for continuous delivery and rapid iteration based on user feedback.",
      year: "2024",
      duration: "12 months",
      client: "Enterprise Solutions Inc.",
      industry: "Technology & Enterprise Software",
      teamSize: "15 professionals",
      methodology: "Agile Scrum",
      keyFeatures: [
        "Real-time analytics dashboard",
        "Automated workflow management",
        "Multi-tenant architecture",
        "Advanced reporting system",
        "Mobile-responsive design",
        "API-first development approach",
      ],

      nextCaseStudy: {
        id: "2",
        title: "Next Case Study Title",
        category: "Next Category",
      },
    },
    {
      id: "accelerating-growth-through-digital-innovation",
      title: "Accelerating Growth Through Digital Innovation",
      category: "Digital Transformation",
      image: caseStudy2,
      description:
        "Helping businesses streamline operations, launch products, and accelerate growth through smart, scalable software solutions",
      fullDescription:
        "This digital transformation initiative revolutionized how businesses approach growth and operational efficiency. CumulusClad partnered with multiple organizations across different industries to implement cutting-edge software solutions that drive measurable results. Our comprehensive approach combined strategic planning with technical excellence to deliver solutions that not only meet current needs but also scale for future growth.",
      technologies: [
        "React",
        "Node.js",
        "Python",
        "AWS Cloud",
        "Machine Learning",
        "Docker",
        "Kubernetes",
        "Microservices Architecture",
      ],
      stats: [
        { label: "Efficiency", value: "85%", icon: TrendingUp },
        { label: "Accuracy", value: "99.9%", icon: Target },
        { label: "Performance", value: "5x", icon: Zap },
      ],
      results: [
        "Increased operational efficiency by 85%",
        "Achieved 99.9% system accuracy and reliability",
        "Improved application performance by 5x",
        "Reduced time-to-market for new features by 60%",
        "Scaled to support 100,000+ daily active users",
        "Decreased operational costs by 45%",
      ],
      challenges: [
        "Legacy systems hindering growth and innovation",
        "Inconsistent data accuracy across multiple platforms",
        "Poor performance affecting user experience",
        "Lack of scalability for increasing user demand",
        "Integration complexities with existing infrastructure",
      ],
      solution:
        "CumulusClad designed and implemented a comprehensive digital innovation framework that modernized legacy systems, introduced AI-powered automation, and established a scalable cloud infrastructure. Our solution focused on creating a unified platform that seamlessly integrates with existing systems while providing robust APIs for future expansion. We employed agile methodologies to ensure rapid delivery and continuous improvement.",
      year: "2024",
      duration: "10 months",
      client: "Multiple Enterprise Clients",
      industry: "Cross-Industry Digital Transformation",
      teamSize: "20+ experts across domains",
      methodology: "Agile & DevOps",
      keyFeatures: [
        "AI-powered automation systems",
        "Real-time analytics and reporting",
        "Scalable cloud-native architecture",
        "Advanced data validation and accuracy engines",
        "Performance optimization modules",
        "Cross-platform compatibility",
        "Secure API gateway",
      ],
      clientQuote: {
        text: "CumulusClad's digital innovation approach transformed our growth trajectory. The 85% efficiency gain and 5x performance improvement exceeded our expectations.",
        author: "Michael Chen",
        position: "Digital Transformation Lead",
        company: "Global Enterprise Client",
      },
      servicesProvided: [
        "Digital Strategy Consulting",
        "Custom Software Development",
        "Cloud Migration & Optimization",
        "Performance Engineering",
        "AI & Machine Learning Integration",
        "DevOps Implementation",
      ],
      impactMetrics: [
        {
          metric: "Revenue Growth",
          value: "2.3x",
          description: "Increase in client revenue",
        },
        {
          metric: "User Satisfaction",
          value: "4.8/5",
          description: "Average rating across platforms",
        },
        {
          metric: "System Uptime",
          value: "99.99%",
          description: "Production environment reliability",
        },
      ],
    },
  ];

  // Handle case study routes (case-study-1, case-study-2)
  if (id === "case-study-1") {
    const project = projects.find(
      (p) => p.id === "real-world-impact-through-smart-software-engineering"
    );
    if (!project) return <Navigate to="/work" replace />;

    return (
      <Layout>
        <CaseStudyContent project={project} />
      </Layout>
    );
  }

  if (id === "case-study-2") {
    const project = projects.find(
      (p) => p.id === "accelerating-growth-through-digital-innovation"
    );
    if (!project) return <Navigate to="/work" replace />;

    return (
      <Layout>
        <CaseStudyContent project={project} />
      </Layout>
    );
  }

  // Handle individual project routes
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  return (
    <Layout>
      <CaseStudyContent project={project} />
    </Layout>
  );
};

const CaseStudyContent = ({ project }: { project: any }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-red/5 to-luxury-red/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Back to Work link - left aligned */}
            <Link
              to="/work"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 mb-8 md:mb-12"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Work
            </Link>

            <div className="animate-fade-in">
              {/* Centered title and description */}
              <div className="text-center mb-4 md:mb-5">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold heading-luxury mb-4 md:mb-6">
                  {project.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-2">
                  {project.description}
                </p>
              </div>

              {/* Category and date at the bottom */}
              <div className="flex flex-col items-center justify-center gap-3 md:gap-4 mt-2">
                <p className="px-3 py-1 md:px-4 md:py-2 bg-primary/20 text-primary rounded-lg font-medium text-sm md:text-base">
                  {project.category}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-8 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-luxury animate-fade-in">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] 2xl:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 bg-card">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">
          <div
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8 animate-fade-in justify-center"
            data-aos="fade-up"
          >
            {project.stats.map((stat: any, index: number) => (
              <div
                key={index}
                className="w-full text-center p-3 sm:p-4 md:p-6 lg:p-8 bg-background rounded-lg md:rounded-xl lg:rounded-2xl border border-border hover:border-primary transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                data-aos-duration="400"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-primary/20 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <stat.icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" />
                </div>
                <div className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-primary mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-muted-foreground leading-tight px-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="pt-8 md:pt-12 lg:pt-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
              {/* Overview */}
              <div className="animate-fade-in">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6">
                  Project Overview
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                  {project.fullDescription}
                </p>

                <div className="space-y-3 md:space-y-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2 flex items-center">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary" />
                      Project Timeline
                    </h3>
                    <div className="text-muted-foreground text-sm sm:text-base">
                      <p>
                        <strong>Year:</strong> {project.year}
                      </p>
                      <p>
                        <strong>Duration:</strong> {project.duration}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="animate-fade-in">
                {project.challenges?.length > 0 && (
                  <div className="mb-6 md:mb-8">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4">
                      Key Challenges
                    </h3>
                    <ul className="space-y-2 md:space-y-3">
                      {project.challenges.map(
                        (challenge: string, index: number) => {
                          const Icon = icons;
                          return (
                            <li key={index} className="flex items-start">
                              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                                {challenge}
                              </span>
                            </li>
                          );
                        }
                      )}
                    </ul>
                  </div>
                )}

                <h2 className="text-2xl sm:text-3xl font-semibold mb-4 md:mb-6">
                  Technologies Used
                </h2>

                <div
                  className="
    flex flex-wrap 
    gap-3 sm:gap-4 md:gap-5 
    justify-start 
  "
                >
                  {project.technologies.map((tech, index) => (
                    <TechCard key={tech} tech={tech} index={index} />
                  ))}
                </div>

                {/* Alternative: Flex layout if grid doesn't work well */}
                {/* <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 justify-center">
    {project.technologies.map((tech, index) => (
      <TechCard key={tech} tech={tech} index={index} />
    ))}
  </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution & Results */}
      <section className="py-8 md:py-12 lg:py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
              {/* Solution */}
              {project.solution && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6">
                    Our Solution
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}

              {/* Results */}
              <div className="animate-fade-in">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6">
                  Key Results
                </h2>
                <div className="flex flex-col gap-2 md:gap-3">
                  {project.results.map((result: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start bg-transparent m-0 p-0"
                    >
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="ml-2 text-muted-foreground text-sm sm:text-base md:text-lg">
                        {result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-luxury relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3 md:mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed mb-4 md:mb-6">
              Let's discuss how we can help transform your business with
              cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-[hsl(0_100%_27%)] hover:bg-white/90 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg group shadow-2xl relative z-10 w-full sm:w-auto">
                  Connect With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyDetail;
