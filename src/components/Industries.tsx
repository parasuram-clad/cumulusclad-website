import {
  GraduationCap,
  Building2,
  ShoppingCart,
  Heart,
  Factory,
  Banknote,
} from "lucide-react";
import education from "../assets/industries/education.jpeg";
import healthcare from "../assets/industries/healthcare.jpeg";
import manufacturing from "../assets/industries/manufacturing.jpeg";
import enterprise from "../assets/industries/enterprise.jpeg";
import finance from "../assets/industries/finances.jpeg";
import retail from "../assets/industries/retail.jpeg";
import { useNavigate } from "react-router-dom";

const Industries = () => {
  const navigate = useNavigate();

  const industries = [
    {
      icon: GraduationCap,
      title: "Education",
      description:
        "We revolutionize learning by creating immersive digital ecosystems that empower educators and students to connect, collaborate, and grow beyond traditional boundaries.",
      image: education,
      category: "Education",
    },
    {
      icon: Banknote,
      title: "FinTech",
      description:
        "Our intelligent, secure platforms provide real-time insights and transform complex financial data into actionable strategies, enabling faster and smarter decision-making.",
      image: finance,
      category: "FinTech",
    },
    {
      icon: ShoppingCart,
      title: "Retail",
      description:
        "We craft personalized omnichannel experiences powered by AI-driven insights to help brands anticipate customer needs and optimize every touchpoint.",
      image: retail,
      category: "Retail",
    },
    {
      icon: Heart,
      title: "Healthcare",
      description:
        "We design technology-enabled care solutions that bridge distance and time, delivering seamless patient experiences while using data to drive smarter and more proactive treatments.",
      image: healthcare,
      category: "Healthcare",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description:
        "By integrating IoT, AI, and automation, we transform factories into dynamic hubs of efficiency, precision, and sustainable innovation.",
      image: manufacturing,
      category: "Manufacturing",
    },
    {
      icon: Building2,
      title: "Logistics & Transportation",
      description:
        "We build adaptive real-time supply chain networks that ensure goods move smarter, faster, and with greater environmental responsibility.",
      image: enterprise,
      category: "Logistics & Transportation",
    },
  ];
  // const industries = [
  //   {
  //     icon: GraduationCap,
  //     title: "Education",
  //     description:
  //       "Learning management systems, student portals, and educational technology platforms.",
  //     image: education,
  //     category: "Education",
  //   },
  //   {
  //     icon: Banknote,
  //     title: "Finance",
  //     description:
  //       "Secure financial applications, trading platforms, and banking solutions.",
  //     image: finance,
  //     category: "FinTech",
  //   },
  //   {
  //     icon: ShoppingCart,
  //     title: "Retail",
  //     description:
  //       "E-commerce platforms, inventory management, and customer experience solutions.",
  //     image: retail,
  //     category: "Retail",
  //   },
  //   {
  //     icon: Heart,
  //     title: "Healthcare",
  //     description:
  //       "Patient management systems, telemedicine platforms, and health monitoring apps.",
  //     image: healthcare,
  //     category: "Healthcare",
  //   },
  //   {
  //     icon: Factory,
  //     title: "Manufacturing",
  //     description:
  //       "Supply chain optimization, IoT integration, and production management systems.",
  //     image: manufacturing,
  //     category: "Manufacturing",
  //   },
  //   {
  //     icon: Building2,
  //     title: "Enterprise",
  //     description:
  //       "Custom business solutions, workflow automation, and enterprise integrations.",
  //     image: enterprise,
  //     category: "Enterprise",
  //   },
  // ];

  const handleIndustryClick = (category: string) => {
    navigate(`/work?category=${encodeURIComponent(category)}`);
  };

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className="accent-line mx-auto mb-6"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
          />
          <h2
            className="text-4xl lg:text-5xl font-bold heading-luxury mb-6"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="150"
          >
            Industries <span className="text-gradient-luxury">We Serve</span>
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            Driving innovation beyond limits, we craft transformative technology
            that empowers businesses to lead, evolve, and redefine the future.
            At CumulusClad, your vision becomes the next breakthrough.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              onClick={() => handleIndustryClick(industry.category)}
              className="group relative overflow-hidden rounded-2xl bg-background border border-border hover:border-primary transition-all duration-500 hover:shadow-luxury cursor-pointer flex flex-col h-full"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={300 + index * 100} // Staggered delay: 300ms, 400ms, 500ms, etc.
            >
              {/* Background Image */}
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
                <div className="absolute inset-0 bg-luxury-black/60 group-hover:bg-luxury-black/40 transition-colors duration-300" />
                {/* Icon Overlay */}
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 bg-primary/90 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {industry.description}
                </p>
                {/* Learn More Link - Now consistently positioned at bottom */}
                <div className="mt-6 pt-4 border-t border-border">
                  <span className="text-primary font-semibold text-sm uppercase tracking-wide group-hover:underline transition-all duration-300">
                    View Projects →
                  </span>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
