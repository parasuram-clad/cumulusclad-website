import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import {
  ExternalLink,
  Calendar,
  Users,
  TrendingUp,
  Target,
  Award,
  Zap,
  Clock,
  Globe,
  Server,
  DollarSign,
  Shield,
  ShoppingCart,
  RefreshCw,
  Video,
  TrendingDown,
  Heart,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import healthcare from "@/assets/works/ai-powered-healthcare-platform.jpeg";
import trading from "@/assets/works/real-time-trading.jpeg";
import manufacturing from "@/assets/works/smart-manufacturing-IoT-system.jpeg";
import education from "@/assets/works/interactive-e-learning -platform.jpg";
import retail from "@/assets/works/inventory-management.jpeg";
import smartCity from "@/assets/works/smart-city-infrastructure.jpeg";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";

const Work = () => {
  const [searchParams, setSearchParams] = useSearchParams(); // Use setSearchParams instead of navigate
  const categoryFromUrl = searchParams.get("category");
  const navigate = useNavigate();
  const projects = [
    {
      id: "nextgen-learning-ecosystem",
      title: "NextGen Learning Ecosystem",
      category: "Education",
      image: education,
      description:
        "Unified digital learning environment with AI-powered personalization for global university network.",
      fullDescription:
        "A global university network sought a unified digital learning environment that could adapt to individual student needs and support real-time analytics across multiple campuses. We built a cloud-based learning ecosystem with intelligent course recommendations, virtual classrooms, and adaptive assessments. Educators could track performance in real-time, and students received dynamic content tailored to their learning pace and style.",
      technologies: [
        "React",
        "TensorFlow",
        "Scikit-Learn",
        "WebRTC",
        "AWS EduStack",
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
      id: "quantum-risk-analytics",
      title: "Quantum Risk Analytics Suite",
      category: "FinTech",
      image: trading,
      description:
        "Futuristic risk management tool with quantum-inspired modeling for real-time high-risk scenario prediction.",
      fullDescription:
        "A multinational investment firm needed a futuristic risk management tool capable of scanning global data sources and predicting high-risk scenarios with minimal latency. We developed a hybrid quantum-classical system that scanned financial news, social sentiment, and portfolio data in real time. AI flagged risk patterns and visualized alerts in a compliance-friendly dashboard with full traceability.",
      technologies: [
        "React",
        "WebSocket",
        "Python",
        "Redis",
        "PostgreSQL",
        "AWS",
      ],
      stats: [
        { label: "Risk Identification", value: "30% faster", icon: TrendingUp },
        { label: "Compliance Review", value: "60% reduction", icon: Award },
        { label: "Cost Savings", value: "$2M/year", icon: DollarSign },
        {
          label: "Model Transparency",
          value: "Regulator Approved",
          icon: Shield,
        },
      ],
      results: [
        "30% faster identification of high-risk events",
        "60% reduction in manual compliance review time",
        "$2M/year in cost savings from early risk intervention",
        "Enhanced trust from regulators through transparent AI models",
      ],
      challenges: [
        "Inability to process large-scale unstructured data in real time",
        "Poor visibility into systemic risks across portfolios",
        "Compliance requirements for model transparency",
        "Delays in risk mitigation due to manual reviews",
      ],
      solution:
        "We developed a hybrid quantum-classical system that scanned financial news, social sentiment, and portfolio data in real time. AI flagged risk patterns and visualized alerts in a compliance-friendly dashboard with full traceability, addressing compliance requirements while providing unprecedented risk visibility.",
      year: "2024",
      duration: "4.5 months",
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
      id: "smart-city-infrastructure",
      title: "Smart City Infrastructure",
      category: "Government",
      image: smartCity,

      description:
        "Comprehensive smart city solution with traffic management and environmental monitoring.",
      fullDescription:
        "Implemented a city-wide smart infrastructure system including intelligent traffic management, environmental monitoring, waste management optimization, and citizen services portal.",
      technologies: ["IoT", "Edge Computing", "React", "Node.js", "PostgreSQL"],
      stats: [
        { label: "Traffic Efficiency", value: "+40%", icon: TrendingUp },
        { label: "Energy Savings", value: "25%", icon: Award },
        { label: "Citizen Satisfaction", value: "92%", icon: Users },
      ],
      results: [
        "Improved traffic flow by 40%",
        "Reduced energy consumption by 25%",
        "Enhanced public safety response time",
        "Increased citizen engagement by 60%",
      ],
      year: "2024",
      duration: "14 months",
    },
    {
      id: "real-world-impact-through-smart-software-engineering",
      title: "Real-World Impact Through Smart Software Engineering",
      category: "Government",
      image: caseStudy1,
      description:
        "Helping organizations solve complex challenges and innovate faster through custom technology solutions",
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
      category: "FinTech",
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

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  // Initialize activeCategory with category from URL or "All"
  const [activeCategory, setActiveCategory] = useState(
    categoryFromUrl && categories.includes(categoryFromUrl)
      ? categoryFromUrl
      : "All"
  );

  // Update activeCategory when URL parameter changes
  useEffect(() => {
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setActiveCategory(categoryFromUrl);
    } else if (!categoryFromUrl) {
      setActiveCategory("All");
    }
  }, [categoryFromUrl, categories]);

  // Function to handle category filter click
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);

    if (category === "All") {
      // Remove category parameter from URL
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.delete("category");
      setSearchParams(newSearchParams);
    } else {
      // Update URL with new category
      setSearchParams({ category });
    }
  };

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-red/5 to-luxury-red/10" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            {" "}
            <div className="accent-line mx-auto mb-6" />
            <h1 className="text-5xl lg:text-6xl font-bold heading-luxury mb-6">
              Our <span className="text-gradient-luxury">Work</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transforming businesses through innovative technology solutions.
              Explore our portfolio of successful projects across various
              industries.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pt-12 sm:pt-14 md:pt-16 bg-background">
        <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
          {/* Mobile Select Dropdown (only on small screens) */}
          <div className="block md:hidden mb-6 sm:mb-8">
            <div className="relative">
              <select
                value={activeCategory}
                onChange={(e) => handleCategoryClick(e.target.value)}
                className="w-full px-4 py-3 bg-background border-2 border-primary/20 rounded-xl text-foreground font-medium focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 appearance-none transition-all duration-200 text-base"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "All" ? "All Categories" : category}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Tablet & Desktop Tabs */}
          <div className="hidden md:flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6 xl:gap-8 mb-10 md:mb-14 lg:mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`group relative px-3 md:px-4 py-3 md:py-3 font-medium transition-all duration-300 text-base md:text-lg lg:text-lg ${
                  activeCategory === category
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-primary/80"
                }`}
              >
                {category}
                <span
                  className={`absolute bottom-2 md:bottom-2.5 left-0 w-full h-0.5 bg-primary transition-all duration-300 ${
                    activeCategory === category
                      ? "scale-100 opacity-100"
                      : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-50"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Projects Grid */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                to={`/work/${project.id}`}
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary transition-all duration-500 hover:shadow-luxury cursor-pointer block flex flex-col h-full"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay={index * 100} // Staggered delay: 0ms, 100ms, 200ms, etc.
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card" />
                  <div className="absolute inset-0 bg-luxury-black/60 group-hover:bg-luxury-black/40 transition-colors duration-300" />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-white text-sm font-medium rounded-lg backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  {/* Year */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-background/90 text-foreground text-sm font-medium rounded-lg backdrop-blur-sm">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  {/* View Project Link - Now consistently positioned at bottom */}
                  <div className="mt-auto pt-4 border-t border-border">
                    <div className="flex items-center text-primary font-semibold text-sm group-hover:underline transition-all duration-300">
                      View Case Study
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
