import Layout from "@/components/Layout";
import {
  GraduationCap,
  Building2,
  ShoppingCart,
  Heart,
  Factory,
  Banknote,
  ArrowLeft,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Target,
} from "lucide-react";
import { useParams, Link } from "react-router-dom";
import CTABanner from "@/components/CTABanner";

const Industries = () => {
  const { industryId } = useParams();

  const industries = {
    education: {
      icon: GraduationCap,
      title: "Education",
      description:
        "Revolutionizing learning experiences with cutting-edge educational technology solutions that enhance student engagement, streamline administrative processes, and enable personalized learning paths.",
      heroImage:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop",
      solutions: [
        {
          title: "Learning Management Systems (LMS)",
          description:
            "Comprehensive platforms for course delivery, student tracking, and performance analytics.",
        },
        {
          title: "Student Information Systems",
          description:
            "Centralized student data management with enrollment, grading, and communication tools.",
        },
        {
          title: "Virtual Classrooms",
          description:
            "Interactive online learning environments with video conferencing and collaboration tools.",
        },
        {
          title: "Educational Analytics",
          description:
            "Data-driven insights to improve learning outcomes and institutional performance.",
        },
      ],
      benefits: [
        "Enhanced Student Engagement",
        "Personalized Learning Paths",
        "Improved Administrative Efficiency",
        "Real-time Progress Tracking",
        "Cost-Effective Scalability",
        "Global Learning Access",
      ],
      caseStudies: [
        {
          title: "University Digital Transformation",
          description:
            "Implemented comprehensive LMS serving 25,000+ students with 95% satisfaction rate.",
          stats: [
            { label: "Students", value: "25K+", icon: Users },
            { label: "Satisfaction", value: "95%", icon: Award },
            { label: "Efficiency Gain", value: "40%", icon: TrendingUp },
          ],
        },
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "AWS",
        "WebRTC",
        "Machine Learning",
      ],
    },
    healthcare: {
      icon: Heart,
      title: "Healthcare",
      description:
        "Transforming patient care through innovative healthcare technology solutions that improve outcomes, enhance efficiency, and ensure secure patient data management.",
      heroImage:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop",
      solutions: [
        {
          title: "Electronic Health Records (EHR)",
          description:
            "Comprehensive digital patient records with secure access and interoperability.",
        },
        {
          title: "Telemedicine Platforms",
          description:
            "Remote consultation and monitoring systems for improved patient access.",
        },
        {
          title: "Medical Imaging Solutions",
          description:
            "AI-powered diagnostic imaging analysis and management systems.",
        },
        {
          title: "Patient Management Systems",
          description:
            "Streamlined scheduling, billing, and patient communication platforms.",
        },
      ],
      benefits: [
        "Improved Patient Outcomes",
        "Enhanced Care Coordination",
        "Reduced Administrative Burden",
        "HIPAA Compliance",
        "Cost Reduction",
        "24/7 Patient Access",
      ],
      caseStudies: [
        {
          title: "Telemedicine Platform Implementation",
          description:
            "Deployed telemedicine solution serving 50,000+ patients with 98% uptime.",
          stats: [
            { label: "Patients", value: "50K+", icon: Users },
            { label: "Uptime", value: "98%", icon: Award },
            { label: "Wait Time Reduction", value: "60%", icon: TrendingUp },
          ],
        },
      ],
      technologies: [
        "React",
        "FHIR",
        "HL7",
        "AWS HIPAA",
        "TensorFlow",
        "Blockchain",
      ],
    },
    manufacturing: {
      icon: Factory,
      title: "Manufacturing",
      description:
        "Driving Industry 4.0 transformation with smart manufacturing solutions that optimize production, reduce costs, and improve quality through IoT and AI technologies.",
      heroImage:
        "https://images.unsplash.com/photo-1565794072754-59ad7df8cd7a?w=1200&h=600&fit=crop",
      solutions: [
        {
          title: "Industrial IoT Platforms",
          description:
            "Connected sensor networks for real-time monitoring and control of manufacturing processes.",
        },
        {
          title: "Predictive Maintenance",
          description:
            "AI-powered analytics to predict equipment failures and optimize maintenance schedules.",
        },
        {
          title: "Quality Control Systems",
          description:
            "Automated inspection and quality assurance using computer vision and machine learning.",
        },
        {
          title: "Supply Chain Optimization",
          description:
            "End-to-end visibility and optimization of supply chain operations.",
        },
      ],
      benefits: [
        "Reduced Downtime",
        "Improved Product Quality",
        "Cost Optimization",
        "Enhanced Safety",
        "Real-time Visibility",
        "Predictive Analytics",
      ],
      caseStudies: [
        {
          title: "Smart Factory Implementation",
          description:
            "Deployed IoT solutions across 5 facilities, reducing downtime by 70%.",
          stats: [
            { label: "Facilities", value: "5", icon: Factory },
            { label: "Downtime Reduction", value: "70%", icon: TrendingUp },
            { label: "Cost Savings", value: "$2M", icon: Target },
          ],
        },
      ],
      technologies: [
        "IoT Sensors",
        "Edge Computing",
        "Machine Learning",
        "Azure IoT",
        "SCADA",
        "MES",
      ],
    },
    finance: {
      icon: Banknote,
      title: "Finance",
      description:
        "Secure financial applications, trading platforms, and banking solutions that ensure compliance, enhance security, and deliver exceptional user experiences.",
      heroImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
      solutions: [
        {
          title: "Digital Banking Platforms",
          description:
            "Modern banking solutions with mobile-first design and advanced security features.",
        },
        {
          title: "Trading & Investment Platforms",
          description:
            "Real-time trading systems with advanced analytics and risk management.",
        },
        {
          title: "Payment Processing Systems",
          description:
            "Secure, scalable payment solutions with fraud detection and compliance.",
        },
        {
          title: "Risk Management Solutions",
          description:
            "AI-powered risk assessment and compliance monitoring systems.",
        },
      ],
      benefits: [
        "Enhanced Security",
        "Regulatory Compliance",
        "Real-time Processing",
        "Fraud Prevention",
        "Scalable Architecture",
        "Customer Experience",
      ],
      caseStudies: [
        {
          title: "Digital Banking Transformation",
          description:
            "Launched digital banking platform serving 100K+ customers with 99.9% uptime.",
          stats: [
            { label: "Customers", value: "100K+", icon: Users },
            { label: "Uptime", value: "99.9%", icon: Award },
            { label: "Transaction Volume", value: "$1B+", icon: TrendingUp },
          ],
        },
      ],
      technologies: [
        "React",
        "Microservices",
        "Blockchain",
        "AWS",
        "Encryption",
        "API Gateway",
      ],
    },
    retail: {
      icon: ShoppingCart,
      title: "Retail",
      description:
        "E-commerce platforms, inventory management, and customer experience solutions that drive sales, optimize operations, and enhance customer satisfaction.",
      heroImage:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
      solutions: [
        {
          title: "E-commerce Platforms",
          description:
            "Modern online shopping experiences with personalization and mobile optimization.",
        },
        {
          title: "Inventory Management Systems",
          description:
            "Real-time inventory tracking and automated replenishment systems.",
        },
        {
          title: "Customer Analytics",
          description:
            "Data-driven insights into customer behavior and preferences.",
        },
        {
          title: "Omnichannel Solutions",
          description:
            "Unified customer experience across all sales channels and touchpoints.",
        },
      ],
      benefits: [
        "Increased Sales Revenue",
        "Improved Customer Experience",
        "Inventory Optimization",
        "Personalized Marketing",
        "Operational Efficiency",
        "Data-Driven Decisions",
      ],
      caseStudies: [
        {
          title: "E-commerce Platform Launch",
          description:
            "Built scalable e-commerce solution handling 1M+ monthly visitors.",
          stats: [
            { label: "Monthly Visitors", value: "1M+", icon: Users },
            { label: "Conversion Rate", value: "3.5%", icon: Target },
            { label: "Revenue Growth", value: "250%", icon: TrendingUp },
          ],
        },
      ],
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "Stripe",
        "Elasticsearch",
      ],
    },
    enterprise: {
      icon: Building2,
      title: "Enterprise",
      description:
        "Custom business solutions, workflow automation, and enterprise integrations that streamline operations and drive digital transformation.",
      heroImage:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop",
      solutions: [
        {
          title: "Enterprise Resource Planning (ERP)",
          description:
            "Integrated business management solutions covering all operational areas.",
        },
        {
          title: "Workflow Automation",
          description:
            "Automated business processes to improve efficiency and reduce errors.",
        },
        {
          title: "Business Intelligence",
          description:
            "Advanced analytics and reporting for data-driven decision making.",
        },
        {
          title: "System Integration",
          description:
            "Seamless integration of existing systems and third-party applications.",
        },
      ],
      benefits: [
        "Operational Efficiency",
        "Process Automation",
        "Data Integration",
        "Scalable Architecture",
        "Cost Reduction",
        "Competitive Advantage",
      ],
      caseStudies: [
        {
          title: "Enterprise Digital Transformation",
          description:
            "Modernized legacy systems for Fortune 500 company, improving efficiency by 45%.",
          stats: [
            { label: "Efficiency Gain", value: "45%", icon: TrendingUp },
            { label: "Cost Reduction", value: "30%", icon: Target },
            { label: "User Satisfaction", value: "92%", icon: Award },
          ],
        },
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Oracle",
        "Apache Kafka",
        "Docker",
        "Kubernetes",
      ],
    },
  };

  if (industryId && industries[industryId as keyof typeof industries]) {
    const industry = industries[industryId as keyof typeof industries];

    return (
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-luxury-red/5 to-luxury-red/10" />
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <Link
                  to="/industries"
                  className="inline-flex items-center text-primary hover:text-primary-glow transition-colors duration-300 mb-6"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Industries
                </Link>
                <div className="accent-line mb-6" />
                <h1 className="text-5xl lg:text-6xl font-bold heading-luxury mb-6">
                  {industry.title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
              </div>
              <div className="animate-fade-in-up">
                <div className="relative overflow-hidden rounded-2xl shadow-luxury">
                  <img
                    src={industry.heroImage}
                    alt={industry.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-primary/90 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="text-4xl lg:text-5xl font-bold heading-luxury mb-6">
                Our <span className="text-gradient-luxury">Solutions</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {industry.solutions.map((solution, index) => (
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
                      <h3 className="text-xl font-bold mb-3">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {solution.description}
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
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="text-4xl lg:text-5xl font-bold heading-luxury mb-6">
                Key <span className="text-gradient-luxury">Benefits</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industry.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-6 bg-background rounded-xl border border-border hover:border-primary transition-colors duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="text-4xl lg:text-5xl font-bold heading-luxury mb-6">
                Success <span className="text-gradient-luxury">Story</span>
              </h2>
            </div>
            {industry.caseStudies.map((caseStudy, index) => (
              <div key={index} className="card-luxury">
                <h3 className="text-2xl font-bold mb-4">{caseStudy.title}</h3>
                <p className="text-muted-foreground mb-8">
                  {caseStudy.description}
                </p>
                <div className="grid grid-cols-3 gap-6">
                  {caseStudy.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="text-4xl lg:text-5xl font-bold heading-luxury mb-6">
                Technology <span className="text-gradient-luxury">Stack</span>
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {industry.technologies.map((tech, index) => (
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
  }

  // Industries overview page
  const industriesOverview = [
    {
      id: "education",
      icon: GraduationCap,
      title: "Education",
      description:
        "Learning management systems, student portals, and educational technology platforms.",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop&crop=center",
    },
    {
      id: "finance",
      icon: Banknote,
      title: "Finance",
      description:
        "Secure financial applications, trading platforms, and banking solutions.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
    },
    {
      id: "retail",
      icon: ShoppingCart,
      title: "Retail",
      description:
        "E-commerce platforms, inventory management, and customer experience solutions.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
    },
    {
      id: "healthcare",
      icon: Heart,
      title: "Healthcare",
      description:
        "Patient management systems, telemedicine platforms, and health monitoring apps.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center",
    },
    {
      id: "manufacturing",
      icon: Factory,
      title: "Manufacturing",
      description:
        "Supply chain optimization, IoT integration, and production management systems.",
      image:
        "https://images.unsplash.com/photo-1565794072754-59ad7df8cd7a?w=600&h=400&fit=crop&crop=center",
    },
    {
      id: "enterprise",
      icon: Building2,
      title: "Enterprise",
      description:
        "Custom business solutions, workflow automation, and enterprise integrations.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&crop=center",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="accent-line mx-auto mb-6" />
            <h1 className="text-5xl lg:text-6xl font-bold heading-luxury mb-6">
              Industries <span className="text-gradient-luxury">We Serve</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At CumulusClad, we specialize in crafting custom software
              solutions that meet the real-world demands of businesses across
              multiple industries.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesOverview.map((industry, index) => (
              <Link
                key={industry.id}
                to={`/industries/${industry.id}`}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary transition-all duration-500 hover:shadow-luxury animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card" />
                  <div className="absolute inset-0 bg-luxury-black/60 group-hover:bg-luxury-black/40 transition-colors duration-300" />

                  {/* Icon Overlay */}
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 bg-primary/90 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="mt-6">
                    <span className="text-primary font-semibold text-sm uppercase tracking-wide group-hover:underline transition-all duration-300">
                      Learn More →
                    </span>
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

export default Industries;
