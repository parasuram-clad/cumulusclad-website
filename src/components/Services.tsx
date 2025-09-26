import { Link } from "react-router-dom";
import aiSolutionsImg from "@/assets/services/ai-solutions.jpg";
import digitalExperienceImg from "@/assets/services/digital-experience.jpg";
import cloudSolutionsImg from "@/assets/services/cloud-solutions.jpg";
import digitalTransformationImg from "@/assets/services/digital-transformation.jpg";
import iotSolutionsImg from "@/assets/services/iot-solutions.jpg";
import cybersecurityImg from "@/assets/services/cybersecurity.jpg";

const Services = () => {
  const services = [
    {
      id: "ai-solutions",
      image: aiSolutionsImg,
      title: "AI Solutions",
      description:
        "Intelligent systems that learn, adapt, and transform your business operations.",
      gradient: "from-primary to-red-500",
    },
    {
      id: "digital-experience",
      image: digitalExperienceImg,
      title: "Digital Experience",
      description:
        "User-centric design and development that creates meaningful digital interactions.",
      gradient: "from-red-500 to-primary",
    },
    {
      id: "cloud-solutions",
      image: cloudSolutionsImg,
      title: "Cloud Solutions",
      description:
        "Scalable, secure, and cost-effective cloud infrastructure for modern businesses.",
      gradient: "from-primary to-red-600",
    },
    {
      id: "digital-transformation",
      image: digitalTransformationImg,
      title: "Digital Transformation",
      description:
        "Complete business modernization with cutting-edge technology strategies.",
      gradient: "from-red-600 to-primary",
    },
    {
      id: "iot-solutions",
      image: iotSolutionsImg,
      title: "IoT Solutions",
      description:
        "Connected devices and smart systems that bring intelligence to everything.",
      gradient: "from-primary to-red-500",
    },
    {
      id: "cyber-security",
      image: cybersecurityImg,
      title: "Cyber Security",
      description:
        "Comprehensive protection against modern threats with advanced security protocols.",
      gradient: "from-red-500 to-primary",
    },
  ];

  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold heading-luxury mb-6">
            Our <span className="text-gradient-luxury">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your
            business growth and digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={`/services/${service.id}`}
              className="card-luxury2 group cursor-pointer animate-scale-in overflow-hidden w-full p-0 flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative flex flex-col h-full">
                {/* Service Image - Full Width Without Padding */}
                <div className="relative overflow-hidden rounded-t-lg flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm flex-grow">
                    {service.description}
                  </p>

                  {/* Learn More Link - Fixed at bottom */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-primary font-normal text-sm uppercase tracking-wide group-hover:underline transition-all duration-300">
                      Learn More →
                    </span>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
