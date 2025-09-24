import Layout from "@/components/Layout";
import { useState } from "react";
import {
  ExternalLink,
  Calendar,
  Users,
  TrendingUp,
  Target,
  Award,
  Zap,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import education from "../assets/industries/education.png";
import healthcare from "../assets/industries/healthcare.jpg";
import manufacturing from "../assets/industries/manufacturing.jpg";
import smartCity from "../assets/industries/smart-city.jpg";

const Work = () => {
  const projects = [
    {
      id: "healthcare-platform",
      title: "AI-Powered Healthcare Platform",
      category: "Healthcare",
      image: healthcare,
      description:
        "Revolutionary telemedicine platform with AI diagnostics and patient management system.",
      fullDescription:
        "We developed a comprehensive healthcare platform that combines telemedicine, AI-powered diagnostics, and patient management into a single, intuitive system. The platform serves over 50,000 patients and has improved diagnostic accuracy by 40%.",
      technologies: ["React", "Node.js", "TensorFlow", "AWS", "MongoDB"],
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
      year: "2023",
      duration: "8 months",
    },
    {
      id: "fintech-trading-platform",
      title: "Real-Time Trading Platform",
      category: "FinTech",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      description:
        "High-frequency trading platform with real-time analytics and risk management.",
      fullDescription:
        "Built a cutting-edge trading platform capable of processing millions of transactions per second with real-time market analytics, automated risk management, and compliance monitoring.",
      technologies: ["React", "WebSocket", "Python", "Redis", "PostgreSQL"],
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
      year: "2023",
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
        "Implemented a comprehensive IoT solution for smart manufacturing, including sensor networks, predictive maintenance algorithms, and real-time production monitoring across multiple facilities.",
      technologies: [
        "IoT Sensors",
        "Edge Computing",
        "Machine Learning",
        "Azure IoT",
        "Power BI",
      ],
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
      year: "2022",
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
        "Created an innovative e-learning platform that personalizes education through AI, offering virtual classrooms, adaptive learning paths, and comprehensive progress analytics for educators and students.",
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
      year: "2023",
      duration: "6 months",
    },
    {
      id: "retail-analytics",
      title: "Retail Analytics & Inventory Management",
      category: "Retail",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      description:
        "AI-driven retail analytics platform with demand forecasting and inventory optimization.",
      fullDescription:
        "Developed a sophisticated retail analytics platform that combines customer behavior analysis, demand forecasting, and automated inventory management to optimize retail operations and increase profitability.",
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
      year: "2022",
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
      year: "2023",
      duration: "14 months",
    },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];
  const [activeCategory, setActiveCategory] = useState("All");

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
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-luxury"
                    : "bg-card text-foreground hover:bg-primary/10 hover:text-primary border border-border"
                }`}
              >
                {category}
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
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary transition-all duration-500 hover:shadow-luxury animate-scale-in cursor-pointer block"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
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
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
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

                  {/* View Project Link */}
                  <div className="flex items-center text-primary font-semibold text-sm group-hover:underline transition-all duration-300">
                    View Case Study
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
