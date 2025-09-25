import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Eye,
  Target,
  Heart,
  Users,
  Award,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import cybersecurityBg from "@/assets/cybersecurity-bg.jpg";

const About = () => {
  const values = [
    {
      icon: Eye,
      title: "Transparency",
      description:
        "Open communication and honest partnerships built on trust and clarity.",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "Uncompromising quality in every solution we deliver to our clients.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Genuine enthusiasm for technology and solving complex business challenges.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working together as one team to achieve extraordinary results.",
    },
    {
      icon: Award,
      title: "Innovation",
      description:
        "Pushing boundaries and exploring new possibilities in technology.",
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description:
        "Always evolving our skills and staying ahead of technology trends.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-red/5 to-luxury-red/10" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="accent-line mx-auto mb-0" />
            <h1 className="text-5xl lg:text-7xl font-bold heading-luxury mt-0">
              Fortify Your Business with{" "}
              <span className="text-gradient-luxury">Trusted IT Security</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're a team of passionate technologists, designers, and
              strategists who believe in the power of technology to transform
              businesses and improve lives.
            </p>
            <div className="pt-4">
              {" "}
              {/* Added padding-top instead of margin */}
              <Link to="/work">
                <Button
                  className="btn-luxury group text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 
             relative overflow-hidden
             transition-all duration-500 ease-out 
             hover:scale-105 hover:shadow-2xl hover:bg-primary/90
             transform-gpu
             before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent 
             before:translate-x-[-100%] before:transition-transform before:duration-500 
             hover:before:translate-x-[100%]"
                >
                  View Our Works
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="accent-line" />
                <h2 className="text-4xl lg:text-5xl font-bold heading-luxury">
                  Our Story
                </h2>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  CumulusClad is a technology-first company dedicated to
                  delivering pioneering solutions in artificial intelligence,
                  digital transformation, cloud computing, IoT, healthcare
                  innovation, and application security. We combine technical
                  expertise with industry insight to help businesses modernize
                  operations, enhance data security, and unlock new digital
                  capabilities. Whether it's transforming patient care with
                  healthcare tech or securing applications in a cloud-first
                  world, our solutions are designed to scale with your vision.
                  At CumulusClad, innovation isn't just a buzzword; it's the
                  core of everything we do.
                </p>
                {/* <p className="text-xl text-muted-foreground leading-relaxed">
                  Founded with a vision to bridge the gap between innovative
                  technology and real-world business challenges, CumulusClad
                  Technologies emerged from a simple belief: every great idea
                  deserves exceptional execution.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Since our inception, we've been dedicated to helping
                  businesses of all sizes harness the power of technology to
                  achieve their goals, streamline operations, and create
                  meaningful connections with their customers.
                </p> */}
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="grid grid-cols-2 gap-6">
                {/* Project Delivered Card */}
                <div className="card-luxury p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    150+
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    Projects Delivered
                  </div>
                </div>

                {/* Happy Clients Card */}
                <div className="card-luxury p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    50+
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    Happy Clients
                  </div>
                </div>

                {/* Industries Served Card */}
                <div className="card-luxury p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">8+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    Industries Served
                  </div>
                </div>

                {/* Years Experience Card */}
                <div className="card-luxury p-6 text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">5</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold heading-luxury">
                  Our Vision
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  To be a global leader in driving intelligent, secure, and
                  transformative digital solutions, empowering industries to
                  innovate, connect, and thrive in an increasingly digital
                  world.
                </p>
              </div>
            </div>

            <div
              className="space-y-8 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold heading-luxury">
                  Our Mission
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Deliver cutting-edge solutions in artificial intelligence,
                  cloud, and IoT to accelerate business transformation.
                  Strengthen industries through secure and scalable application
                  infrastructure. Innovate in healthcare technology to improve
                  outcomes and efficiency. Champion digital transformation with
                  customer-centric, agile, and future-ready technologies. Foster
                  a culture of continuous innovation, collaboration, and ethical
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Culture */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold heading-luxury mb-6">
              Our Values & <span className="text-gradient-luxury">Culture</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do and shape the culture
              that makes CumulusClad Technologies a great place to work and
              partner with.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="card-luxury text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Teaser */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />

        <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold heading-luxury">
              Join Our <span className="text-gradient-luxury">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to be part of something extraordinary? Explore career
              opportunities and help us shape the future of technology.
            </p>
            <Button
              className="btn-luxury group text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 
             relative overflow-hidden
             transition-all duration-500 ease-out 
             hover:scale-105 hover:shadow-2xl hover:bg-primary/90
             transform-gpu
             before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent 
             before:translate-x-[-100%] before:transition-transform before:duration-500 
             hover:before:translate-x-[100%]"
            >
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
