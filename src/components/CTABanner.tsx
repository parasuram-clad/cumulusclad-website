import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SimpleEnquiryModal from "./EnquiryModal"; // Change this import

const CTABanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add this to debug
  const handleButtonClick = () => {
    console.log("Button clicked");
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-24 bg-gradient-luxury relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in">
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
              <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Let's Build Something{" "}
                <span className="text-transparent bg-gradient-to-r from-white to-red-200 bg-clip-text">
                  Great Together
                </span>
              </h2>

              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Ready to bring your idea to life? Whether you need a custom
                platform, mobile app, or a complete digital solution, we're here
                to make it happen.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-6 sm:pt-8 w-full max-w-md mx-auto sm:max-w-none">
              <Button
                size="lg"
                onClick={handleButtonClick}
                className="bg-white text-[hsl(0_100%_27%)] hover:bg-white/90 
               px-6 sm:px-8 py-3 sm:py-4 
               text-base sm:text-lg 
               group shadow-2xl relative z-10
               w-full sm:w-auto text-center hover:[scale:1.05] transition-all duration-300 ease-out"
              >
                Connect With Us
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Link to="/work" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white 
                 hover:bg-white/20 hover:text-white 
                 px-6 sm:px-8 py-3 sm:py-4 
                 text-base sm:text-lg 
                 relative z-10 w-full text-center hover:[scale:1.05] transition-all duration-300 ease-out"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl" />
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
