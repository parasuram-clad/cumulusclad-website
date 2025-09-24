import {
  GraduationCap,
  Building2,
  ShoppingCart,
  Heart,
  Factory,
  Banknote,
} from "lucide-react";
import education from "../assets/industries/education.png";
import healthcare from "../assets/industries/healthcare.jpg";
import manufacturing from "../assets/industries/manufacturing.jpg";
const Industries = () => {
  const industries = [
    {
      icon: GraduationCap,
      title: "Education",
      description:
        "Learning management systems, student portals, and educational technology platforms.",
      image: education,
    },
    {
      icon: Banknote,
      title: "Finance",
      description:
        "Secure financial applications, trading platforms, and banking solutions.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
    },
    {
      icon: ShoppingCart,
      title: "Retail",
      description:
        "E-commerce platforms, inventory management, and customer experience solutions.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
    },
    {
      icon: Heart,
      title: "Healthcare",
      description:
        "Patient management systems, telemedicine platforms, and health monitoring apps.",
      image: healthcare,
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description:
        "Supply chain optimization, IoT integration, and production management systems.",
      image: manufacturing,
    },
    {
      icon: Building2,
      title: "Enterprise",
      description:
        "Custom business solutions, workflow automation, and enterprise integrations.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&crop=center",
    },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold heading-luxury mb-6">
            Industries <span className="text-gradient-luxury">We Serve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At CumulusClad, we specialize in crafting custom software solutions
            that meet the real-world demands of businesses across multiple
            industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className="group relative overflow-hidden rounded-2xl bg-background border border-border hover:border-primary transition-all duration-500 hover:shadow-luxury animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <div className="relative h-48 overflow-hidden">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
