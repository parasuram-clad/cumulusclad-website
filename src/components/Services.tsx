import { Link } from "react-router-dom";
import aiSolutionsImg from "@/assets/services/page-image/ai.jpeg";
import digitalExperienceImg from "@/assets/services/page-image/digital-experience.jpeg";
import cloudSolutionsImg from "@/assets/services/page-image/cloud.jpeg";
import digitalTransformationImg from "@/assets/services/page-image/digital-transformation.jpeg";
import iotSolutionsImg from "@/assets/services/page-image/iot.jpeg";
import cybersecurityImg from "@/assets/services/page-image/cyber.jpeg";

const Services = () => {
  const services = [
    {
      id: "ai-solutions",
      image: aiSolutionsImg,
      title: "AI Solutions",
      description:
        "Intelligent systems that analyze, learn, and optimize to accelerate business growth with smarter decisions.",
      gradient: "from-primary to-red-500",
    },
    {
      id: "digital-experience",
      image: digitalExperienceImg,
      title: "Digital Experience",
      description:
        "Seamless designs, engaging platforms that redefine customer journeys through innovation and creativity.",
      gradient: "from-red-500 to-primary",
    },
    {
      id: "cloud-solutions",
      image: cloudSolutionsImg,
      title: "Cloud Solutions",
      description:
        "Future-ready cloud infrastructure that scales with your business while ensuring security and efficiency.",
      gradient: "from-primary to-red-600",
    },
    {
      id: "digital-transformation",
      image: digitalTransformationImg,
      title: "Digital Transformation",
      description:
        "Reimagining processes with technology to unlock opportunities, enhance agility, and drive innovation.",
      gradient: "from-red-600 to-primary",
    },
    {
      id: "iot-solutions",
      image: iotSolutionsImg,
      title: "IoT Solutions",
      description:
        "Smart connectivity that transforms devices into data-driven assets, enabling automation and insights.",
      gradient: "from-primary to-red-500",
    },
    {
      id: "cybersecurity",
      image: cybersecurityImg,
      title: "Cyber Security",
      description:
        "Advanced protection that secures your digital ecosystem against evolving threats with proactive defense.",
      gradient: "from-red-500 to-primary",
    },
  ];

  // Function to calculate delay based on screen size
  const getCardDelay = (index: number) => {
    if (typeof window !== "undefined") {
      // Check if mobile screen (tailwind md breakpoint is 768px)
      if (window.innerWidth < 768) {
        return 100 + index * 20; // Much faster delays for mobile
      }
    }
    return 200 + index * 50; // Original delays for desktop
  };

  return (
    <section className="pt-24 bg-gradient-hero">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Title Section - Faster animations */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="400" // Faster: 400ms instead of 800ms
          data-aos-delay="50" // Shorter delay
        >
          <div
            className="accent-line mx-auto mb-6"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay="100"
          />
          <h2
            className="text-4xl lg:text-5xl  heading-luxury mb-6"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay="150"
            style={{ fontWeight: 100 }}
          >
            Our <span className="text-gradient-luxury">Services</span>
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay="200"
          >
            Comprehensive solutions that blend innovation and intelligence to
            transform your business.
          </p>
        </div>

        {/* Services Grid - Faster card animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={`/services/${service.id}`}
              className="card-luxury2 group cursor-pointer overflow-hidden w-full p-0 flex flex-col h-full"
              data-aos="fade-up"
              data-aos-duration="400" // Faster: 400ms instead of 800ms
              data-aos-delay={getCardDelay(index)} // Dynamic delay based on screen size
              data-aos-easing="ease-out" // Faster easing
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
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm flex-grow">
                    {service.description}
                  </p>

                  {/* Learn More Link - Fixed at bottom */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-primary font-normal text-2sm capitalize tracking-wide leading-snug group-hover:underline transition-all duration-300">
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
