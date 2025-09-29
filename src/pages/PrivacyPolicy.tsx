// PrivacyPolicy.tsx
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Shield,
  Lock,
  Eye,
  Mail,
  User,
  Database,
  Globe,
  Cookie,
  Key,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const lastUpdated = "December 1, 2024";

  const sections = [
    {
      icon: Shield,
      title: "1. Information We Collect",
      content: `We collect information that you provide directly to us, including:
- Personal identification information (Name, email address, phone number)
- Company information (Company name, job title)
- Project details and requirements
- Communication records and correspondence`,
    },
    {
      icon: Database,
      title: "2. How We Use Your Information",
      content: `We use the information we collect to:
- Provide, maintain, and improve our services
- Communicate with you about projects and services
- Send technical updates and security alerts
- Respond to your comments and questions
- Protect against fraudulent or unauthorized activity`,
    },
    {
      icon: Lock,
      title: "3. Data Protection & Security",
      content: `We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes encryption, access controls, and regular security assessments.`,
    },
    {
      icon: Globe,
      title: "4. Data Sharing & Disclosure",
      content: `We do not sell, trade, or rent your personal information to third parties. We may share information with:
- Service providers who assist in our operations
- Legal authorities when required by law
- Business partners with your explicit consent`,
    },
    {
      icon: Cookie,
      title: "5. Cookies & Tracking Technologies",
      content: `We use cookies and similar tracking technologies to analyze trends, administer the website, track users' movements around the site, and to gather demographic information about our user base. You can control cookie preferences through your browser settings.`,
    },
    {
      icon: User,
      title: "6. Your Rights & Choices",
      content: `You have the right to:
- Access and receive a copy of your personal data
- Rectify or update your information
- Request deletion of your data
- Object to processing of your data
- Data portability
- Withdraw consent at any time`,
    },
    {
      icon: Eye,
      title: "7. Data Retention",
      content: `We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. We regularly review our data retention practices.`,
    },
    {
      icon: Key,
      title: "8. International Data Transfers",
      content: `Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with this privacy policy.`,
    },
    {
      icon: Shield,
      title: "9. Children's Privacy",
      content: `Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take steps to delete such information.`,
    },
    {
      icon: Mail,
      title: "10. Contact Us",
      jsx: (
        <>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <div className="space-y-2 mt-4">
            <p>
              <strong>CumulusClad Technologies LLP</strong>
            </p>
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
        </>
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
              Privacy <span className="text-gradient-luxury">Policy</span>
            </h1>
            {/* <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-2">
              Last updated: {lastUpdated}
            </p> */}
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-12 md:py-15 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your privacy is important to us. This policy explains how we
                collect, use, and protect your personal information when you use
                our services.
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
          </div>
        </div>
      </section>

      {/* Data Protection Principles */}
      <section className="py-8 md:py-10 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <div className="accent-line mx-auto mb-4 md:mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold heading-luxury mb-4">
                Our Data Protection Principles
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">
                    Lawfulness & Transparency
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    We process data lawfully and transparently, ensuring you
                    understand how your information is used.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Purpose Limitation</h4>
                  <p className="text-muted-foreground text-sm">
                    We collect data for specified, explicit, and legitimate
                    purposes only.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Data Minimization</h4>
                  <p className="text-muted-foreground text-sm">
                    We only collect data that is adequate, relevant, and
                    necessary for our purposes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Accuracy</h4>
                  <p className="text-muted-foreground text-sm">
                    We keep personal data accurate and up-to-date, with
                    processes for rectification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 md:py-10 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold heading-luxury mb-8">
              Related Information
            </h2>{" "}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <Link to="/terms" className="group">
                <div className="card-luxury p-6 text-center hover:border-primary hover:shadow-lg transition-all duration-300">
                  <Lock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2">Terms of Service</h3>
                  <p className="text-base text-black/60 ">
                    Legal terms governing service usage
                  </p>
                </div>
              </Link>

              <Link to="/contact" className="group">
                <div className="card-luxury p-6 text-center hover:border-primary hover:shadow-lg transition-all duration-300">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2">Contact Us</h3>
                  <p className="text-base text-black/60 ">
                    Get in touch with our team
                  </p>
                </div>
              </Link>

              <Link to="/about" className="group">
                <div className="card-luxury p-6 text-center hover:border-primary hover:shadow-lg transition-all duration-300">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2">About Us</h3>
                  <p className="text-base text-black/60 ">
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

export default PrivacyPolicy;
