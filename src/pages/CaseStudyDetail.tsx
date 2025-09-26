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

const TechCard = ({ tech, index }: { tech: string; index: number }) => (
  <div className="group relative flex items-center justify-center" title={tech}>
    <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
      <DynamicIcon iconName={tech} alt={tech} />
    </div>
    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
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
      id: "healthcare-platform",
      title: "AI-Powered Healthcare Platform",
      category: "Healthcare",
      image: healthcare,
      description:
        "Revolutionary telemedicine platform with AI diagnostics and patient management system.",
      fullDescription:
        "We developed a comprehensive healthcare platform that combines telemedicine, AI-powered diagnostics, and patient management into a single, intuitive system. The platform serves over 50,000 patients and has improved diagnostic accuracy by 40%. Our solution addresses critical healthcare challenges including accessibility, efficiency, and quality of care delivery.",
      technologies: [
        "React",
        "Node.js",
        "Python",
        "TensorFlow",
        "AWS",
        "MongoDB",
      ],

      stats: [
        { label: "Patients Served", value: "50K+", icon: Users },
        { label: "Diagnostic Accuracy", value: "95%", icon: Target },
        { label: "Response Time", value: "2s", icon: Zap },
      ],
      results: [
        "Reduced patient wait times by 60%",
        "Improved diagnostic accuracy by 40%",
        "Increased patient satisfaction to 98%",
        "Expanded healthcare access to rural areas",
      ],
      challenges: [
        "Integration with existing healthcare systems",
        "Ensuring HIPAA compliance and data security",
        "Real-time processing of medical data",
        "Scalability across multiple healthcare facilities",
      ],
      solution:
        "Our team developed a modular, cloud-native platform that seamlessly integrates with existing healthcare infrastructure while maintaining the highest security standards. We implemented advanced AI algorithms for diagnostic assistance and created an intuitive interface for both healthcare providers and patients.",
      year: "2024",
      duration: "8 months",
    },
    {
      id: "fintech-trading-platform",
      title: "Real-Time Trading Platform",
      category: "FinTech",
      image: trading,
      description:
        "High-frequency trading platform with real-time analytics and risk management.",
      fullDescription:
        "Built a cutting-edge trading platform capable of processing millions of transactions per second with real-time market analytics, automated risk management, and compliance monitoring. The platform handles high-frequency trading while ensuring regulatory compliance and risk mitigation.",
      technologies: [
        "React",
        "WebSocket",
        "Python",
        "Redis",
        "PostgreSQL",
        "AWS",
      ],
      stats: [
        { label: "Transactions/Second", value: "100K+", icon: TrendingUp },
        { label: "Uptime", value: "99.99%", icon: Award },
        { label: "Latency", value: "<1ms", icon: Clock },
      ],
      results: [
        "Processed $2B+ in trading volume",
        "Achieved 99.99% uptime",
        "Reduced trading latency by 80%",
        "Improved risk management accuracy",
      ],
      challenges: [
        "Ultra-low latency requirements",
        "High-frequency data processing",
        "Regulatory compliance across multiple jurisdictions",
        "Real-time risk assessment and management",
      ],
      solution:
        "We architected a distributed system using cutting-edge technology stack optimized for speed and reliability. Our solution includes advanced caching mechanisms, real-time data pipelines, and sophisticated risk management algorithms.",
      year: "2024",
      duration: "12 months",
    },
    {
      id: "smart-manufacturing",
      title: "Smart Manufacturing IoT System",
      category: "Manufacturing",
      image: manufacturing,
      description:
        "Industrial IoT platform for predictive maintenance and production optimization.",
      fullDescription:
        "Implemented a comprehensive IoT solution for smart manufacturing, including sensor networks, predictive maintenance algorithms, and real-time production monitoring across multiple facilities. The system transformed traditional manufacturing operations into data-driven, efficient processes.",
      technologies: ["Arduino", "Docker", "PyTorch", "Azure IoT", "Power BI"],
      stats: [
        { label: "Equipment Monitored", value: "500+", icon: Users },
        { label: "Downtime Reduction", value: "70%", icon: TrendingUp },
        { label: "Cost Savings", value: "$2M", icon: Target },
      ],
      results: [
        "Reduced unplanned downtime by 70%",
        "Improved production efficiency by 25%",
        "Saved $2M annually in maintenance costs",
        "Enhanced equipment lifespan by 30%",
      ],
      challenges: [
        "Legacy equipment integration",
        "Industrial environment networking",
        "Real-time data processing at scale",
        "Predictive maintenance accuracy",
      ],
      solution:
        "Our IoT platform bridges the gap between legacy industrial equipment and modern analytics. We deployed edge computing nodes for real-time processing and implemented machine learning models for predictive maintenance.",
      year: "2025",
      duration: "10 months",
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
      id: "retail-analytics",
      title: "Retail Analytics & Inventory Management",
      category: "Retail",
      image: retail,
      description:
        "AI-driven retail analytics platform with demand forecasting and inventory optimization.",
      fullDescription:
        "Developed a sophisticated retail analytics platform that combines customer behavior analysis, demand forecasting, and automated inventory management to optimize retail operations and increase profitability. The platform provides actionable insights for strategic decision-making.",
      technologies: [
        "React",
        "Python",
        "Scikit-learn",
        "PostgreSQL",
        "Apache Kafka",
      ],
      stats: [
        { label: "Inventory Accuracy", value: "98%", icon: Target },
        { label: "Sales Increase", value: "35%", icon: TrendingUp },
        { label: "Waste Reduction", value: "50%", icon: Award },
      ],
      results: [
        "Increased sales revenue by 35%",
        "Reduced inventory waste by 50%",
        "Improved customer satisfaction by 40%",
        "Optimized supply chain efficiency",
      ],
      challenges: [
        "Complex demand forecasting",
        "Real-time inventory tracking",
        "Multi-channel sales integration",
        "Customer behavior analysis",
      ],
      solution:
        "Our analytics platform leverages machine learning for accurate demand forecasting and provides real-time insights into inventory levels, customer behavior, and market trends.",
      year: "2025",
      duration: "8 months",
    },
    {
      id: "smart-city-infrastructure",
      title: "Smart City Infrastructure",
      category: "Government",
      image: smartCity,
      description:
        "Comprehensive smart city solution with traffic management and environmental monitoring.",
      fullDescription:
        "Implemented a city-wide smart infrastructure system including intelligent traffic management, environmental monitoring, waste management optimization, and citizen services portal. The solution transforms urban management through data-driven insights and automation.",
      technologies: ["IoT", "Docker", "React", "Node.js", "PostgreSQL"],
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
      challenges: [
        "City-wide infrastructure integration",
        "Real-time data processing from multiple sources",
        "Citizen privacy and data security",
        "Scalable IoT network deployment",
      ],
      solution:
        "We designed a comprehensive smart city platform that integrates various urban systems into a unified dashboard. Our solution includes IoT sensors, data analytics, and citizen engagement tools.",
      year: "2024",
      duration: "14 months",
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
    const project = projects.find((p) => p.id === "retail-analytics");
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
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-red/5 to-luxury-red/10" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Back to Work link - left aligned */}
            <Link
              to="/work"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 mb-12"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Work
            </Link>

            <div className="animate-fade-in">
              {/* Centered title and description */}
              <div className="text-center mb-5">
                <h1 className="text-5xl lg:text-6xl font-bold heading-luxury mb-6">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  {project.description}
                </p>
              </div>

              {/* Category and date at the bottom */}
              <div className="flex flex-col items-center justify-center gap-4 mt-2">
                <p className="px-4 py-2 bg-primary/20 text-primary rounded-lg font-medium">
                  {project.category}
                </p>
                {/* <p className="text-muted-foreground">
                  Year: {project.year} • Duration: {project.duration}
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl shadow-luxury animate-fade-in">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 lg:h-[800px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            {project.stats.map((stat: any, index: number) => (
              <div
                key={index}
                className="text-center p-8 bg-background rounded-2xl border border-border hover:border-primary transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Overview */}
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {project.fullDescription}
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-primary" />
                      Project Timeline
                    </h3>
                    <div className="text-muted-foreground">
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
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">
                      Key Challenges
                    </h3>
                    <ul className="space-y-3">
                      {project.challenges.map(
                        (challenge: string, index: number) => {
                          const Icon = icons; // Cycle through icons
                          return (
                            <li key={index} className="flex items-center">
                              <Icon className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                              <span className="text-muted-foreground">
                                {challenge}
                              </span>
                            </li>
                          );
                        }
                      )}
                    </ul>
                  </div>
                )}

                <h2 className="text-xl font-semibold mb-4">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <TechCard key={tech} tech={tech} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution & Results */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Solution */}
              {project.solution && (
                <div className="animate-fade-in">
                  <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}

              {/* Results */}
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6">Key Results</h2>
                <div className="flex flex-col gap-2">
                  {project.results.map((result: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-center bg-transparent m-0 p-0"
                    >
                      {/* ✅ Tick icon */}
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="ml-2 text-muted-foreground text-base sm:text-lg">
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
      <section className="py-24 bg-gradient-luxury relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-4">
              Let's discuss how we can help transform your business with
              cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-[hsl(0_100%_27%)] hover:bg-white/90 px-8 py-4 text-lg  group shadow-2xl relative z-10">
                  {" "}
                  Connect With Us
                </Button>
              </Link>
              {/* <Link to="/work">
                <Button variant="outline" className="btn-ghost-luxury">
                  View More Projects
                </Button>
              </Link> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyDetail;
