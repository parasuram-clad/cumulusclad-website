import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Heart,
  Coffee,
  Laptop,
  Rocket,
  ChevronDown,
  ChevronUp,
  Send,
} from "lucide-react";
import { useState } from "react";

const Careers = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const jobOpenings = [
    {
      id: "ai-developer",
      title: "AI Developer",
      department: "Engineering",
      location: "Chennai",
      type: "Full-time",
      salary: "₹12L - ₹18L",
      description:
        "Develop cutting-edge AI solutions and machine learning models for enterprise applications.",
      requirements: [
        "3+ years of experience in AI/ML development",
        "Strong proficiency in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Bachelor's/Master's in Computer Science, AI, or related field",
      ],
      responsibilities: [
        "Design and implement AI/ML algorithms and models",
        "Develop and optimize machine learning pipelines",
        "Collaborate with data scientists and engineers",
        "Deploy AI solutions in production environments",
      ],
    },
    {
      id: "fullstack-developer",
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Chennai",
      type: "Full-time",
      salary: "₹8L - ₹14L",
      description:
        "Build scalable web applications using modern technologies and frameworks for our clients.",
      requirements: [
        "2+ years of full-stack development experience",
        "Proficiency in React, Node.js, TypeScript",
        "Experience with databases (PostgreSQL, MongoDB)",
        "Knowledge of cloud services and DevOps practices",
      ],
      responsibilities: [
        "Develop and maintain web applications using React and Node.js",
        "Design and implement RESTful APIs and GraphQL endpoints",
        "Collaborate with designers to implement responsive UIs",
        "Optimize application performance and scalability",
      ],
    },
    {
      id: "ux-designer",
      title: "UI/UX Designer",
      department: "Design",
      location: "Chennai",
      type: "Full-time",
      salary: "₹6L - ₹12L",
      description:
        "Create intuitive and beautiful user experiences for our digital products and client projects.",
      requirements: [
        "2+ years of UX/UI design experience",
        "Proficiency in Figma, Adobe Creative Suite",
        "Experience with user research and testing methodologies",
        "Portfolio demonstrating web and mobile applications",
      ],
      responsibilities: [
        "Design user-centered interfaces and experiences",
        "Conduct user research and usability testing",
        "Create wireframes, prototypes, and design systems",
        "Collaborate with development teams on implementation",
      ],
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance, dental, vision, and wellness programs",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description:
        "Flexible working hours, unlimited PTO, and remote work options",
      image:
        "https://images.unsplash.com/photo-1495465798138-718f86d1a4f1?w=400&h=300&fit=crop&crop=center",
    },
    {
      icon: Laptop,
      title: "Equipment & Setup",
      description:
        "Latest tech equipment, home office stipend, and co-working space access",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center",
    },
    {
      icon: Rocket,
      title: "Growth & Learning",
      description:
        "Professional development budget, conference attendance, and mentorship programs",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop&crop=center",
    },
  ];

  const cultureImages = [
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      title: "Collaborative Teamwork",
      description: "Working together to solve complex challenges",
    },
    {
      url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
      title: "Innovation Hub",
      description: "Modern office spaces designed for creativity",
    },
    {
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
      title: "Team Events",
      description: "Regular team building and social activities",
    },
    {
      url: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
      title: "Learning & Development",
      description: "Continuous learning and skill development",
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
              Smarter IT Infrastructure for a{" "}
              <span className="text-gradient-luxury">Smarter Future</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We don't just develop technology; we pioneer solutions that shape
              the future. From AI and digital transformation to cloud computing,
              IoT, healthcare, and application security, we are at the forefront
              of a technological revolution.
            </p>
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 md:mt-12">
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-1 sm:mb-2">
                  50+
                </div>
                <div className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Team Members
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-1 sm:mb-2">
                  15+
                </div>
                <div className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Countries
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-1 sm:mb-2">
                  98%
                </div>
                <div className="text-xs sm:text-sm md:text-base text-muted-foreground leading-tight">
                  Employee Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life at CumulusClad */}
      <section className="pt-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div
            className="text-center mb-16"
            data-aos="fade-in"
            data-aos-delay="100"
            data-aos-duration="400"
            data-aos-easing="ease-out"
            data-aos-once="true"
          >
            <div
              className="accent-line mx-auto mb-6"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="400"
              data-aos-easing="ease-out"
              data-aos-once="true"
            />
            <h2
              className="text-4xl lg:text-5xl font-bold heading-luxury mb-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="400"
              data-aos-easing="ease-out"
              data-aos-once="true"
            >
              Life at <span className="text-gradient-luxury">CumulusClad</span>
            </h2>
            <p
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="400"
              data-aos-easing="ease-out"
              data-aos-once="true"
            >
              Join a culture of innovation, collaboration, and continuous
              growth. We believe in empowering our team members to do their best
              work while maintaining a healthy work-life balance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {cultureImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl"
                data-aos="fade-up"
                data-aos-delay={`${100 + index * 100}`}
                data-aos-duration="500"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />

                {/* Enhanced Text Container */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="font-bold text-lg mb-2 text-white drop-shadow-2xl">
                    {image.title}
                  </h3>
                  <p className="text-sm text-white/95 drop-shadow-lg leading-tight">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Culture Images Carousel */}

          {/* Benefits with Images */}
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="card-luxury group overflow-hidden animate-fade-in p-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
              
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                 
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-primary/90 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Current Job Openings */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div
            className="text-center mb-16"
            data-aos="fade-in"
            data-aos-delay="100"
            data-aos-duration="400"
            data-aos-easing="ease-out"
            data-aos-once="true"
          >
            <div
              className="accent-line mx-auto mb-6"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="400"
              data-aos-easing="ease-out"
              data-aos-once="true"
            />
            <h2
              className="text-4xl lg:text-5xl font-bold heading-luxury mb-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="400"
              data-aos-easing="ease-out"
              data-aos-once="true"
            >
              Current <span className="text-gradient-luxury">Openings</span>
            </h2>
            <p
              className="text-xl text-muted-foreground"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="400"
              data-aos-easing="ease-out"
              data-aos-once="true"
            >
              Join our team of innovators and help shape the future of
              technology
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div
                key={job.id}
                className="bg-background rounded-2xl border border-border hover:border-primary transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={`${100 + index * 100}`}
                data-aos-duration="500"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                {/* Job Header */}
                <div
                  className="p-6 cursor-pointer"
                  onClick={() =>
                    setExpandedJob(expandedJob === job.id ? null : job.id)
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      {/* Title and Department - Stack on mobile */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:space-x-4 mb-2">
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-lg w-fit">
                          {job.department}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground mb-4">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">{job.salary}</div>
                      </div>
                    </div>
                    <div className="ml-6">
                      {expandedJob === job.id ? (
                        <ChevronUp className="w-6 h-6 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Job Details */}
                {expandedJob === job.id && (
                  <div
                    className="px-6 pb-6 border-t border-border"
                    data-aos="fade-in"
                    data-aos-delay="100"
                    data-aos-duration="400"
                    data-aos-easing="ease-out"
                  >
                    <div className="grid md:grid-cols-2 gap-8 pt-6">
                      <div>
                        <h4 className="font-semibold mb-4">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-muted-foreground">
                                {req}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-muted-foreground">
                                {resp}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-border flex justify-end">
                      <Button
                        className="btn-luxury transition-all duration-300 ease-out"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                        data-aos-duration="400"
                        data-aos-easing="ease-out"
                      >
                        Apply Now
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div
            className="text-center mt-16"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="500"
            data-aos-easing="ease-out"
            data-aos-once="true"
          >
            <div
              className="card-luxury max-w-2xl mx-auto"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-easing="ease-out"
              data-aos-once="true"
            >
              <h3 className="text-2xl font-bold mb-4">
                Don't see the right role?
              </h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for talented individuals to join our team.
                Send us your resume and let us know how you'd like to
                contribute.
              </p>
              <Button
                className="btn-luxury transition-all duration-300 ease-out"
                data-aos="zoom-in"
                data-aos-delay="400"
                data-aos-duration="500"
                data-aos-easing="ease-out"
                data-aos-once="true"
                onClick={() => {
                  window.location.href =
                    "mailto:hr@cumulusclad.com?subject=General Application - CumulusClad Careers";
                }}
              >
                Send Your Resume
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
