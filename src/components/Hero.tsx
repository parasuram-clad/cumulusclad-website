import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import aiAbstract from "@/assets/ai-abstract.jpg";
import { useState } from "react";
import SimpleEnquiryModal from "./EnquiryModal"; // Change this import
import { Link } from "react-router-dom";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add this to debug
  const handleButtonClick = () => {
    console.log("Button clicked");
    setIsModalOpen(true);
  };

  return (
    <>
      <SimpleEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-luxury-red/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-luxury-red/3 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-luxury-red/10 rounded-full blur-2xl animate-bounce" />
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full opacity-30 animate-particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <div className="accent-line" />
                <h1 className="text-5xl lg:text-7xl font-bold heading-luxury leading-tight">
                  From Idea to{" "}
                  <span className="text-gradient-luxury">Execution</span>, We're
                  Your Tech Team
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  Transform your vision into reality with cutting-edge
                  technology solutions. We build the future, one innovation at a
                  time.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  className="btn-luxury group"
                  onClick={handleButtonClick}
                >
                  Start Your Project
                  <svg
                    className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
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
                <Link to={`/work`}>
                  <Button
                    variant="outline"
                    className="border-luxury-red text-luxury-red hover:bg-luxury-red hover:text-white transition-all duration-300 px-8 py-4 rounded-lg  tracking-wide uppercase text-sm"
                  >
                    View Our Work
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary">
                    150+
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    Projects
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary">
                    50+
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    Clients
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary">
                    8+
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    Industries
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Abstract Image */}
            <div className="relative animate-slide-in-right">
              <div className="relative">
                <img
                  src={aiAbstract}
                  alt="AI and Cloud Technology"
                  className="w-full h-auto rounded-2xl shadow-luxury animate-float"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-glow-pulse" />
                <div
                  className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-glow-pulse"
                  style={{ animationDelay: "1s" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>{" "}
    </>
  );
};

export default Hero;
