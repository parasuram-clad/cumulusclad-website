import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";
// Import the hook

interface CaseStudyProps {
  title: string | React.ReactNode; // Allow React nodes
  description: string;
  imageUrl: string;
  stats: {
    label: string;
    value: string;
    icon: any;
  }[];
  reverse?: boolean;
  darkBg?: boolean;
  caseStudyId?: string;
}
const CaseStudy = ({
  title,
  description,
  imageUrl,
  stats,
  reverse = false,
  darkBg = false,
  caseStudyId = "1",
}: CaseStudyProps) => {
  // Initialize AOS

  return (
    <section className={`pt-24 ${darkBg ? "bg-card" : "bg-background"}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            reverse ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          {/* Image */}
          <div className={`relative ${reverse ? "lg:col-start-2" : ""}`}>
            <div
              className="relative overflow-hidden rounded-2xl shadow-luxury"
              data-aos={reverse ? "fade-left" : "fade-right"}
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <img
                src={imageUrl}
                className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
            </div>

            {/* Floating Stats */}
            <div
              className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-luxury"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="400"
            >
              <div className="grid grid-cols-1 gap-4">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <stat.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-8 ${reverse ? "lg:col-start-1" : ""}`}>
            <div className="space-y-6">
              <div
                className="accent-line"
                data-aos={reverse ? "fade-right" : "fade-left"}
                data-aos-duration="600"
                data-aos-delay="150"
              />
              <h2
                className="text-4xl lg:text-5xl heading-luxury"
                data-aos={reverse ? "fade-right" : "fade-left"}
                data-aos-duration="600"
                data-aos-delay="200"
                style={{ fontWeight: 100 }}
              >
                {title}
              </h2>
              <p
                className="text-xl text-muted-foreground leading-relaxed"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="300"
                style={{ fontWeight: 100 }}
              >
                {description}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="500"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* <Link to={`/work/case-study-${caseStudyId}`}>
              <Button
                className="btn-luxury group mt-8 transition-all duration-300 ease-out"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="500"
              >
                View Case Study
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
