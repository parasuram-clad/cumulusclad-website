import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SimpleEnquiryModal from "./EnquiryModal";
import { useAos } from "@/hooks/useAos"; // Import the hook

const CTABanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useAos(); // Initialize AOS

  const handleButtonClick = () => {
    console.log("Button clicked");
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-24 bg-gradient-luxury relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Floating Icons */}
            <div className="relative">
              <div className="absolute -top-8 left-1/4 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center animate-float">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div
                className="absolute -top-12 right-1/4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="space-y-6 max-w-4xl mx-auto">
              <h2
                className="text-4xl lg:text-5xl heading-luxury text-white"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="100"
                style={{ fontWeight: 100 }}
              >
                Dream It. Design It.&nbsp;
                <span className="text-transparent bg-gradient-to-r from-white to-red-200 bg-clip-text">
                  Dominate the&nbsp;
                  <span className="text-transparent bg-gradient-to-r from-white to-red-200 bg-clip-text">
                    AI&nbsp;
                  </span>
                  and&nbsp;
                  <span className="text-transparent bg-gradient-to-r from-white to-red-200 bg-clip-text">
                    Digital World
                  </span>
                  .
                </span>
              </h2>

              <p
                className="text-xl  text-white/90 leading-relaxed"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="200"
                style={{ fontWeight: 100 }}
              >
                Break free from the ordinary. We transform your wildest ideas
                into stunning, high-performance digital experiences — custom
                platforms, apps, and solutions built to captivate and conquer.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-6 sm:pt-8 w-full max-w-md mx-auto sm:max-w-none"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="300"
            >
              <Button
                onClick={handleButtonClick}
                className="bg-white text-[hsl(0_100%_27%)] hover:bg-white/90 
             tracking-wide uppercase text-sm sm:text-base md:text-base 
             w-auto mx-auto sm:mx-0 sm:w-auto max-w-[150px] sm:max-w-none
             group shadow-2xl relative z-10
             hover:[scale:1.05] transition-all duration-300 ease-out"
              >
                <span className="relative z-10 capitalize">Let's Speak</span>
                <svg
                  className="ml-2 h-4 w-4 sm:h-5 sm:w-5 relative z-10 transition-transform group-hover:translate-x-1"
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
              {/* 
              <Link to="/work" className="mx-auto sm:mx-0">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white 
                 hover:bg-white/20 hover:text-white 
                 px-6 sm:px-8 py-3 sm:py-4 
                 text-base sm:text-lg 
                 relative z-10 w-auto text-center 
                 hover:[scale:1.05] transition-all duration-300 ease-out"
                >
                  View Our Work
                </Button>
              </Link> */}
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="400"
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="500"
          />
        </div>
      </section>

      <SimpleEnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default CTABanner;
