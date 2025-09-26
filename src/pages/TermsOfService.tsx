// TermsOfService.tsx
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Shield, Lock, Globe, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  const lastUpdated = "December 1, 2024";

  const sections = [
    {
      icon: FileText,
      title: "1. Acceptance of Terms",
      content: `By accessing and using CumulusClad Technologies' website and services, you accept and agree to be bound by the terms and provisions of this agreement.`,
    },
    {
      icon: Shield,
      title: "2. Intellectual Property",
      content: `All content, including but not limited to text, graphics, logos, and software, is the property of CumulusClad Technologies LLP and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.`,
    },
    {
      icon: Lock,
      title: "3. User Responsibilities",
      content: `You agree not to use our services for any unlawful purpose or to violate any laws in your jurisdiction. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.`,
    },
    {
      icon: Globe,
      title: "4. Service Modifications",
      content: `CumulusClad Technologies reserves the right to modify or discontinue, temporarily or permanently, any service with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.`,
    },
    {
      icon: Mail,
      title: "5. Privacy Policy",
      content: `Your use of our services is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. Please review our Privacy Policy to understand our practices.`,
    },
    {
      icon: FileText,
      title: "6. Limitation of Liability",
      content: `CumulusClad Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.`,
    },
    {
      icon: Shield,
      title: "7. Indemnification",
      content: `You agree to indemnify and hold harmless CumulusClad Technologies, its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of our services or violation of these terms.`,
    },
    {
      icon: Lock,
      title: "8. Governing Law",
      content: `These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.`,
    },
    {
      icon: Globe,
      title: "9. Changes to Terms",
      content: `We reserve the right to update these terms at any time. We will notify users of significant changes through our website or via email. Continued use of our services after changes constitutes acceptance of the new terms.`,
    },
    {
      icon: Mail,
      title: "10. Contact Information",
      content: `For questions about these Terms of Service, please contact us at:`,
      jsx: (
        <div className="space-y-2 mt-3">
          <p>CumulusClad Technologies LLP</p>
          <p>No. 39B, 2nd Floor, Kongunadu Trust, 1st Street</p>
          <p>Chakrapani Colony, North Parade Road</p>
          <p>St.Thomas Mount, Chennai - 600 016</p>
          <p className="text-black">
            Email:{" "}
            <a
              href="mailto:info@cumulusclad.com"
              className="text-black/60 hover:underline hover:text-primary"
            >
              info@cumulusclad.com
            </a>
          </p>
          <p className="text-black">
            Phone:{" "}
            <a
              href="tel:+91446688777"
              className="text-black/60 hover:underline hover:text-primary"
            >
              +91 44-6688777
            </a>
          </p>
        </div>
      ),
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-red/5 to-luxury-red/10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="accent-line mx-auto mb-4 md:mb-6" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold heading-luxury mb-4 md:mb-6">
              Terms of <span className="text-gradient-luxury">Service</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-2">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12 md:py-15 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Please read these Terms of Service carefully before using our
                website and services.
              </p>
            </div>

            <div className="space-y-8 md:space-y-12">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4 md:space-x-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl md:text-2xl font-bold heading-luxury mb-3 md:mb-4">
                        {section.title}
                      </h3>
                      <div className="text-muted-foreground leading-relaxed space-y-3">
                        {section.jsx
                          ? section.jsx
                          : section.content
                              .split("\n")
                              .map((paragraph, idx) => (
                                <p key={idx} className={paragraph ? "" : "h-4"}>
                                  {paragraph}
                                </p>
                              ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Agreement Section */}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 md:py-10 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold heading-luxury mb-8">
              Related Documents
            </h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <Link to="/privacy-policy" className="group">
                <div className="card-luxury p-6 text-center hover:border-primary hover:shadow-lg transition-all duration-300">
                  <Lock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2">Privacy Policy</h3>
                  <p className="text-base text-black/60 ">
                    {" "}
                    How we protect and use your data
                  </p>
                </div>
              </Link>

              <Link to="/contact" className="group">
                <div className="card-luxury p-6 text-center hover:border-primary hover:shadow-lg transition-all duration-300">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2">Contact Us</h3>
                  <p className="text-base text-black/60 ">
                    {" "}
                    Get in touch with our team
                  </p>
                </div>
              </Link>

              <Link to="/about" className="group">
                <div className="card-luxury p-6 text-center hover:border-primary hover:shadow-lg transition-all duration-300">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2">About Us</h3>
                  <p className="text-base text-black/60 ">
                    {" "}
                    Learn more about our company
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService;
