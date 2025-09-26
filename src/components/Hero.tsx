import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import { useState, useEffect } from "react";
import SimpleEnquiryModal from "./EnquiryModal";
import { Link } from "react-router-dom";
// Import the hook
const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

      <section className="relative w-full flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />

        {/* Background Elements - animations removed */}
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

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 mt-0">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Content - animations removed */}
            <div className="space-y-6 sm:space-y-8 w-full">
              <div className="space-y-4 sm:space-y-6">
                {/* Main Title */}
                <div className="space-y-3 sm:space-y-4 md:space-y-5">
                  {" "}
                  <h1
                    className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 "
                    style={{ fontWeight: 100 }}
                  >
                    <span
                      data-aos="fade-right"
                      data-aos-delay="200"
                      data-aos-duration="800"
                      data-aos-easing="ease-out-cubic"
                      className="text-3xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-thin heading-luxury leading-tight whitespace-nowrap"
                    >
                      Think Deep
                    </span>

                    {/* Separator bar - hidden on mobile, visible on tablet and desktop */}
                    <span
                      className="hidden sm:inline text-3xl md:text-6xl text-black"
                      style={{ fontWeight: 100 }}
                    >
                      |
                    </span>

                    <span
                      style={{ fontWeight: 100 }}
                      data-aos="fade-left"
                      data-aos-delay="200"
                      data-aos-duration="800"
                      data-aos-easing="ease-out-cubic"
                      className="text-3xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl  heading-luxury leading-tight whitespace-nowrap"
                    >
                      <span className="text-gradient-luxury">Make Impact</span>
                    </span>
                  </h1>
                  {/* Description */}
                  <p
                    data-aos="fade-up"
                    data-aos-delay="800"
                    data-aos-duration="600"
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold heading-luxury leading-tight whitespace-normal mt-4 sm:mt-6"
                  >
                    Progress Thrive Where Knowledge{" "}
                    <span
                      data-aos="fade-up"
                      data-aos-delay="1000"
                      data-aos-duration="600"
                      className="text-gradient-luxury inline-block sm:inline"
                    >
                      And Technology Converge
                    </span>
                  </p>
                </div>
              </div>

              {/* Buttons - animations removed */}
              <div
                data-aos="fade-up"
                data-aos-delay="1200"
                data-aos-duration="600"
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center w-full max-w-xs sm:max-w-md mx-auto"
              >
                <Button
                  className="btn-luxury group transition-all duration-300 ease-out hover:bg-primary/90 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 tracking-wide uppercase text-sm sm:text-base md:text-base w-full sm:w-auto"
                  onClick={handleButtonClick}
                >
                  <span className="relative z-10">We’re Always Open</span>
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

                <Link to="/work" className="flex w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="border-luxury-red text-luxury-red hover:bg-luxury-red/10 hover:text-red hover:[scale:1.05] transition-all ease-out duration-300 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 tracking-wide uppercase text-sm sm:text-base md:text-base w-full"
                  >
                    Take a Tour
                  </Button>
                </Link>
              </div>

              {/* Stats - come from bottom */}
              <div
                data-aos="fade-up"
                data-aos-delay="1400"
                data-aos-duration="600"
                className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 pt-4 sm:pt-6 md:pt-8 border-t border-border max-w-xs sm:max-w-md mx-auto"
              >
                <div
                  data-aos="fade-up"
                  data-aos-delay="1600"
                  data-aos-duration="600"
                  className="text-center"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                    150+
                  </div>
                  <div className="text-xs text-muted-foreground text-black/60 uppercase tracking-wide mt-1">
                    Projects
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="1800"
                  data-aos-duration="600"
                  className="text-center"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                    50+
                  </div>
                  <div className="text-xs text-muted-foreground text-black/60 uppercase tracking-wide mt-1">
                    Clients
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="2000"
                  data-aos-duration="600"
                  className="text-center"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                    8+
                  </div>
                  <div className="text-xs text-muted-foreground text-black/60 uppercase tracking-wide mt-1">
                    Industries
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
