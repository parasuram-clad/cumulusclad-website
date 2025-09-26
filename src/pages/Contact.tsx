import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Linkedin,
  Twitter,
  Github,
  Globe,
  MessageSquare,
  Users,
  Headphones,
  Instagram,
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9944553287", "+91 44-6688777"],
      description: "Mon-Fri 9AM-6PM IST",
      links: ["tel:+919944553287", "tel:+91446688777"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["global@cumulusclad.com", "info@cumulusclad.com"],
      description: "We'll respond within 24 hours",
      links: ["mailto:global@cumulusclad.com", "mailto:info@cumulusclad.com"],
    },
    {
      icon: MapPin,
      title: "CumulusClad Technologies LLP.",
      details: [
        "No. 39B, 2nd Floor, Kongunadu Trust, 1st Street, Chakrapani Colony, North Parade Road, St.Thomas Mount, Chennai - 600 016",
      ],
      description: "Visit our main office",
      links: ["https://maps.app.goo.gl/Jevnhvux4z9Nbf9W8"],
    },
  ];

  const socialMedia = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/company/cumulusclad",
      handle: "@cumulusclad",
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/cumulusclad/",
      handle: "@cumulusclad",
    },
    {
      icon: Globe,
      name: "Website",
      url: "https://cumulusclad.com",
      handle: "cumulusclad.com",
    },
  ];

  const inquiryTypes = [
    {
      icon: MessageSquare,
      title: "General Inquiry",
      description: "Questions about our services or company",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Interested in partnering with us",
    },
    {
      icon: Headphones,
      title: "Support",
      description: "Technical support or existing project help",
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
              Simplifying IT,{" "}
              <span className="text-gradient-luxury">Amplifying Success</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-2">
              Ready to transform your business with cutting-edge technology?
              Let's start a conversation about your vision and how we can help
              bring it to life.
            </p>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="mb-6 md:mb-8">
                <div className="accent-line mb-4 md:mb-6" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold heading-luxury mb-3 md:mb-4">
                  Get in <span className="text-gradient-luxury">Touch</span>
                </h2>
                <p className="text-muted-foreground text-sm md:text-base">
                  Tell us about your project and we'll get back to you within 24
                  hours.
                </p>
              </div>

              {/* Inquiry Type Selection */}
              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-lg font-semibold mb-3 md:mb-4">
                  What can we help you with?
                </h3>
                <div className="grid grid-cols-1 gap-2 md:gap-3">
                  {inquiryTypes.map((type, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-1 md:p-4   "
                    >
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <type.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-lg md:text-lg">
                          {type.title}
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground truncate">
                          {type.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@company.com"
                      required
                      className="focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                      className="focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Brief subject line"
                      required
                      className="focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                    rows={4}
                    className="focus:ring-primary min-h-[120px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="btn-luxury w-full transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg text-sm md:text-base"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in-up">
              <div className="space-y-6 md:space-y-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="card-luxury p-4 md:p-6"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        {info.title === "CumulusClad Technologies." ? (
                          <a
                            href={info.links?.[0] || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-lg md:text-lg mb-1 md:mb-2 hover:text-primary hover:underline transition-all duration-300 cursor-pointer block break-words"
                          >
                            {info.title}
                          </a>
                        ) : (
                          <h3 className="font-bold text-lg md:text-lg mb-1 md:mb-2">
                            {info.title}
                          </h3>
                        )}
                        {info.details.map((detail, idx) => (
                          <div key={idx} className="mb-1">
                            {info.title === "Phone" ||
                            info.title === "Email" ? (
                              <a
                                href={info.links?.[idx] || "#"}
                                className="text-muted-foreground text-xs md:text-sm hover:text-primary hover:underline transition-all duration-300 cursor-pointer block break-words"
                              >
                                {detail}
                              </a>
                            ) : (
                              <p className="text-muted-foreground text-xs md:text-sm break-words">
                                {detail}
                              </p>
                            )}
                          </div>
                        ))}
                        <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8 md:mt-12">
                <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">
                  Follow Us
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 md:p-4 bg-card rounded-lg md:rounded-xl border border-border hover:border-primary hover:shadow-md transition-all duration-300"
                    >
                      <social.icon className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="font-medium text-sm md:text-lg truncate">
                          {social.name}
                        </div>
                        <div className="text-xs text-muted-foreground truncate">
                          {social.handle}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-8 md:py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
            <div className="accent-line mx-auto mb-4 md:mb-6" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold heading-luxury mb-3 md:mb-4">
              Visit Our <span className="text-gradient-luxury">Office</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg px-2">
              Come see us at our main headquarters in Chennai. We'd love to meet
              you in person and discuss how we can help your business thrive.
            </p>
          </div>

          <div className="bg-card rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-border">
            <div className="aspect-video w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4539074212375!2d80.19774327489361!3d13.0067413873119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b9b1f2258ba00f%3A0x9ff63e961b67ee17!2sCumulusClad%20Technologies!5e0!3m2!1sen!2sin!4v1758619260665!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
            <div className="p-4 md:p-6 lg:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                CumulusClad Technologies
              </h3>
              <p className="text-muted-foreground text-sm md:text-lg mb-2">
                No. 39B, 2nd Floor, Kongunadu Trust, 1st Street, Chakrapani
                Colony,
              </p>
              <p className="text-muted-foreground text-sm md:text-lg">
                North Parade Road, St.Thomas Mount, Chennai - 600 016
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
