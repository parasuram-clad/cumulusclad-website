import Layout from "@/components/Layout";
import { useState } from "react";
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
import CTABanner from "@/components/CTABanner";
import SimpleEnquiryModal from "@/components/EnquiryModal";
import heroBackground from "@/assets/about-bg.png";
const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleButtonClick = () => {
    console.log("Button clicked");
    setIsModalOpen(true);
  };
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
      {" "}
      <SimpleEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroBackground})` }} // Replace with your image path
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-red/5 to-luxury-red/10" />
        <div className="absolute inset-0 bg-gradient-hero" />

        <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="accent-line mx-auto mb-0" />
            <h1 className="text-4xl lg:text-7xl font-bold heading-luxury mt-0">
              Building Resilient, Future-Ready Enterprises with&nbsp;
              <span className="text-gradient-luxury">AI and IT Expertise</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-thin">
              We're a team of passionate technologists, designers, and
              strategists who believe in the power of technology to transform
              businesses and improve lives.
            </p>
            <div className="pt-4">
              {" "}
              {/* Added padding-top instead of margin */}
              <Button
                className="btn-luxury group transition-all duration-300 ease-out hover:bg-primary/90 
        
       tracking-wide uppercase text-sm sm:text-base md:text-base 
       w-auto mx-auto sm:mx-0 sm:w-auto max-w-[150px] sm:max-w-none"
                onClick={handleButtonClick}
              >
                <span className="relative z-10 capitalize ">Let's Speak</span>
                <svg
                  className="ml-2 h-4 w-4 sm:h-5 sm:w-5 relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Our Story */}
      <section className="pt-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content - Our Story */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div
                  className="accent-line"
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-delay="100"
                />
                <h2
                  className="text-4xl lg:text-5xl font-bold heading-luxury"
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-delay="150"
                >
                  Our Story
                </h2>

                <p
                  className="text-xl text-muted-foreground leading-relaxed font-thin"
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-delay="200"
                >
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
              </div>
            </div>

            {/* Right Content - Stats Cards */}
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
                {/* Project Delivered Card */}
                <div
                  className="card-luxury p-6 text-center flex flex-col items-center justify-center w-full sm:w-64 min-h-[200px]"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    50+
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    Projects Delivered
                  </div>
                </div>

                {/* Happy Clients Card */}
                <div
                  className="card-luxury p-6 text-center flex flex-col items-center justify-center w-full sm:w-64 min-h-[200px]"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="400"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    10+
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    Happy Clients
                  </div>
                </div>

                {/* Industries Served Card */}
                <div
                  className="card-luxury p-6 text-center flex flex-col items-center justify-center w-full sm:w-64 min-h-[200px]"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="500"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">8+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    Industries Served
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Vision & Mission */}
      <section className="pt-24 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Vision */}
            <div
              className="space-y-8"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="space-y-6">
                <div
                  className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center"
                  data-aos="zoom-in"
                  data-aos-duration="400"
                  data-aos-delay="150"
                  data-aos-once="true"
                >
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold heading-luxury">
                  Our Vision
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed font-thin">
                  To build a digitally empowered society where intelligent,
                  secure, and sustainable technologies drive inclusive growth,
                  elevate quality of life, and shape a better future for all.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div
              className="space-y-8"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="space-y-6">
                <div
                  className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center"
                  data-aos="zoom-in"
                  data-aos-duration="400"
                  data-aos-delay="350"
                  data-aos-once="true"
                >
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold heading-luxury">
                  Our Mission
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed font-thin">
                  We innovate responsibly to deliver digital solutions that
                  enhance human experiences, foster trust and security, and help
                  build a more connected, equitable, and sustainable world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Values & Culture */}
      <section className="py-24 bg-background">
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
            <h2 className="text-4xl lg:text-5xl font-bold heading-luxury mb-6">
              Our Values & <span className="text-gradient-luxury">Culture</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-thin">
              These core values guide everything we do and shape the culture
              that makes CumulusClad Technologies a great place to work and
              partner with.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="card-luxury text-center"
                data-aos="fade-up"
                data-aos-delay={`${100 + index * 100}`}
                data-aos-duration="400"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                <div
                  className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-6"
                  data-aos="zoom-in"
                  data-aos-delay={`${200 + index * 100}`}
                  data-aos-duration="400"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                >
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
      {/* <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />

        <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
          <div
            className="max-w-3xl mx-auto space-y-8"
            data-aos="fade-in"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-easing="ease-out"
            data-aos-once="true"
          >
            <h2
              className="text-4xl lg:text-5xl font-bold heading-luxury"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-easing="ease-out"
              data-aos-once="true"
            >
              Join Our <span className="text-gradient-luxury">Team</span>
            </h2>
            <p
              className="text-xl text-muted-foreground leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-easing="ease-out"
              data-aos-once="true"
            >
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
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-easing="ease-out"
              data-aos-once="true"
            >
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section> */}
      <CTABanner />
    </Layout>
  );
};

export default About;
