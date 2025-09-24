import { useEffect, useRef } from "react";

const TrustedCompanies = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 50);
    return () => clearInterval(interval);
  }, []);

  const companies = [
    { name: "TechCorp", logo: "TC" },
    { name: "InnovateLab", logo: "IL" },
    { name: "DataFlow Systems", logo: "DFS" },
    { name: "CloudVision", logo: "CV" },
    { name: "NextGen Solutions", logo: "NGS" },
    { name: "DigitalEdge", logo: "DE" },
    { name: "SmartTech", logo: "ST" },
    { name: "FutureTech", logo: "FT" },
  ];

  // Duplicate array for seamless scrolling
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-muted-foreground">
            Join hundreds of companies that trust us with their digital transformation
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-hidden gap-12 items-center"
            style={{ scrollBehavior: "smooth" }}
          >
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-20 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                    {company.logo}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {company.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;