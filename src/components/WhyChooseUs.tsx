import { 
  Zap, 
  Users, 
  Eye, 
  Target, 
  Award, 
  Clock 
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Zap,
      title: "Agile Sprints",
      description: "Fast, iterative development cycles that deliver results quickly and efficiently.",
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "We work side-by-side with your team, ensuring seamless integration and knowledge transfer.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "You're always in the loop with real-time updates and clear communication channels.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every solution is designed with your business goals and ROI in mind.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control ensure robust, reliable solutions.",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We respect your timeline and consistently deliver projects on schedule.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold heading-luxury mb-6">
            Why <span className="text-gradient-luxury">Choose Us?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We work side-by-side with your team through agile sprints and iterative feedback. 
            You're always in the loop, and your input shapes the final product.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-luxury animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
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