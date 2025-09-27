import { Heart, Users, Palette, Search, Zap, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const WhyChooseUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initially
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const features = [
    {
      icon: Heart, // Represents "understanding" and personal connection
      title: "Tech that Understands You",
      description:
        "No two businesses are the same. That's why our digital strategy begins with understanding your DNA and ends with building a tech backbone that's truly yours.",
    },
    {
      icon: Users, // Perfect for human-centered approach
      title: "Human-Centered Digital Thinking",
      description:
        "Tech without empathy is just noise. At CumulusClad, every experience we build is made for people first — not platforms.",
    },
    {
      icon: Palette, // Represents the combination of art and engineering
      title: "We Design Like Artists. We Think Like Engineers.",
      description: "Logic and beauty don't compete here they collaborate.",
    },
    {
      icon: Search, // Represents decoding, analyzing, and insight
      title: "We Don't Guess. We Decode",
      description:
        "We don't operate on assumptions. Every solution we create is backed by insight, intent, and intelligent architecture.",
    },
    {
      icon: Zap, // Represents speed, energy, and personalized tech
      title: "Tech that Understands You",
      description:
        "No two businesses are the same. That's why our digital strategy begins with understanding your DNA and ends with building a tech backbone that's truly yours.",
    },
    {
      icon: Sparkles, // Represents innovation and magical, invisible tech
      title: "Invisible Innovation, Visible Impact",
      description:
        "When tech works right, it becomes invisible. We focus on making things effortlessly intuitive so the results speak louder than the interface.",
    },
  ];

  // Calculate delay based on device type
  const getCardDelay = (index: number) => {
    return isMobile ? 150 + index * 50 : 300 + index * 100;
  };

  return (
    <section className="pt-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay={isMobile ? "50" : "100"}
        >
          <div
            className="accent-line mx-auto mb-6"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay={isMobile ? "75" : "150"}
          />
          <h2
            className="text-4xl lg:text-5xl font-bold heading-luxury mb-6"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay={isMobile ? "100" : "200"}
          >
            Why <span className="text-gradient-luxury">Choose Us?</span>
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay={isMobile ? "125" : "250"}
          >
            We combine innovation with reliability to deliver solutions that
            last. At CumulusClad, Your growth is not our goal, it's our
            guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-luxury"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={getCardDelay(index)}
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
