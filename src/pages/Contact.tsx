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
import { useState, useEffect } from "react";

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Calculate delay based on device type
  const getDelay = (
    baseDelay: number,
    index: number = 0,
    multiplier: number = 100
  ) => {
    return isMobile
      ? baseDelay / 2 + index * (multiplier / 2)
      : baseDelay + index * multiplier;
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    service: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      title: "CumulusClad Technologies",
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
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-red/5 to-luxury-red/10" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="accent-line mx-auto mb-6" />
            <h1 className="text-5xl lg:text-6xl font-bold heading-luxury mb-6">
              Simplifying IT,{" "}
              <span className="text-gradient-luxury">Amplifying Success</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              Ready to transform your business with cutting-edge technology?
              Let's start a conversation about your vision and how we can help
              bring it to life.
            </p>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div
              data-aos="fade-right"
              data-aos-delay={getDelay(50)}
              data-aos-duration="400"
              data-aos-easing="ease-out"
              data-aos-once="true"
            >
              <div className="mb-8">
                <div
                  className="accent-line mb-6"
                  data-aos="zoom-in"
                  data-aos-delay={getDelay(75)}
                  data-aos-duration="300"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                />
                <h2
                  className="text-4xl font-bold heading-luxury mb-4"
                  data-aos="fade-up"
                  data-aos-delay={getDelay(100)}
                  data-aos-duration="400"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                >
                  Get in <span className="text-gradient-luxury">Touch</span>
                </h2>
                <p
                  className="text-muted-foreground"
                  data-aos="fade-up"
                  data-aos-delay={getDelay(125)}
                  data-aos-duration="400"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                >
                  Tell us about your project and we'll get back to you within 24
                  hours.
                </p>
              </div>

              {/* Inquiry Type Selection */}
              <div className="mb-8">
                <h3
                  className="text-lg font-semibold mb-4"
                  data-aos="fade-up"
                  data-aos-delay={getDelay(150)}
                  data-aos-duration="300"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                >
                  What can we help you with?
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {inquiryTypes.map((type, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4 bg-card rounded-xl border border-border"
                      data-aos="fade-up"
                      data-aos-delay={getDelay(200, index, 50)}
                      data-aos-duration="300"
                      data-aos-easing="ease-out"
                      data-aos-once="true"
                    >
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                        <type.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{type.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {type.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                data-aos="fade-up"
                data-aos-delay={getDelay(300)}
                data-aos-duration="400"
              >
                <div className="grid md:grid-cols-2 gap-6">
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

                <div className="grid md:grid-cols-2 gap-6">
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
                  <label className="block text-sm font-medium mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded border border-border bg-background focus:ring-primary focus:border-primary"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="ai">AI Solutions</option>
                    <option value="digital-experience">
                      Digital Experience
                    </option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="digital-transformation">
                      Digital Transformation
                    </option>
                    <option value="iot">IoT Solutions</option>
                    <option value="cybersecurity">Cyber Security</option>
                    <option value="other">Other</option>
                  </select>
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
                    rows={6}
                    required
                    className="focus:ring-primary"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="btn-luxury w-auto max-w-[220px] mx-auto sm:mx-0 
             transition-all duration-300 ease-out capitalize"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div
              data-aos="fade-left"
              data-aos-delay={getDelay(100)}
              data-aos-duration="400"
              data-aos-easing="ease-out"
              data-aos-once="true"
              className="w-full max-w-full overflow-hidden"
            >
              <div className="space-y-6 md:space-y-8 w-full">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-background border border-border rounded-lg p-4 md:p-6 w-full max-w-full"
                    data-aos="fade-up"
                    data-aos-delay={getDelay(200, index, 75)}
                    data-aos-duration="300"
                    data-aos-easing="ease-out"
                    data-aos-once="true"
                  >
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div
                        className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0"
                        data-aos="zoom-in"
                        data-aos-delay={getDelay(250, index, 75)}
                        data-aos-duration="300"
                        data-aos-easing="ease-out"
                        data-aos-once="true"
                      >
                        <info.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0 overflow-hidden">
                        {info.title === "CumulusClad Technologies LLP." ? (
                          <a
                            href={info.links?.[0] || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold mb-2 hover:text-primary hover:underline transition-all duration-300 cursor-pointer block text-sm md:text-base break-words"
                          >
                            {info.title}
                          </a>
                        ) : (
                          <h3 className="font-bold mb-2 text-sm md:text-base break-words">
                            {info.title}
                          </h3>
                        )}
                        {info.details.map((detail, idx) => (
                          <div key={idx} className="break-words">
                            {info.title === "Phone" ||
                            info.title === "Email" ? (
                              <a
                                href={info.links?.[idx] || "#"}
                                className="text-muted-foreground mb-1 hover:text-primary hover:underline transition-all duration-300 cursor-pointer block text-xs md:text-sm break-words leading-relaxed"
                              >
                                {detail}
                              </a>
                            ) : (
                              <p className="text-muted-foreground mb-1 text-xs md:text-sm break-words leading-relaxed">
                                {detail}
                              </p>
                            )}
                          </div>
                        ))}
                        <p className="text-xs md:text-sm text-muted-foreground mt-2">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div
                className="mt-6 md:mt-12 w-full max-w-full"
                data-aos="fade-up"
                data-aos-delay={getDelay(400)}
                data-aos-duration="300"
                data-aos-easing="ease-out"
                data-aos-once="true"
              >
                <h3
                  className="text-lg md:text-xl font-bold mb-4 md:mb-6"
                  data-aos="fade-up"
                  data-aos-delay={getDelay(450)}
                  data-aos-duration="300"
                  data-aos-easing="ease-out"
                  data-aos-once="true"
                >
                  Follow Us
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 w-full max-w-full">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 md:p-4 bg-card rounded-lg md:rounded-xl border border-border hover:border-primary hover:shadow-md transition-all duration-300 w-full max-w-full"
                      data-aos="zoom-in"
                      data-aos-delay={getDelay(500, index, 75)}
                      data-aos-duration="300"
                      data-aos-easing="ease-out"
                      data-aos-once="true"
                    >
                      <social.icon className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                      <div className="min-w-0 flex-1 overflow-hidden">
                        <div className="font-medium text-xs md:text-sm truncate">
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
      <section
        className="py-6 bg-muted/20"
        data-aos="fade-up"
        data-aos-delay={getDelay(50)}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div
            className="text-center max-w-3xl mx-auto mb-16"
            data-aos="zoom-in"
            data-aos-delay={getDelay(75)}
          >
            <div
              className="accent-line mx-auto mb-6"
              data-aos="fade-right"
              data-aos-delay={getDelay(100)}
            />
            <h2
              className="text-4xl font-bold heading-luxury mb-4"
              data-aos="fade-up"
              data-aos-delay={getDelay(125)}
            >
              Visit Our <span className="text-gradient-luxury">Office</span>
            </h2>
            <p
              className="text-muted-foreground"
              data-aos="fade-up"
              data-aos-delay={getDelay(150)}
            >
              Come see us at our main headquarters in Chennai. We'd love to meet
              you in person and discuss how we can help your business thrive.
            </p>
          </div>

          <div
            className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border"
            data-aos="fade-up"
            data-aos-delay={getDelay(200)}
          >
            <div
              className="aspect-video w-full lg:h-[400px]"
              data-aos="zoom-in"
              data-aos-delay={getDelay(250)}
            >
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
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                CumulusClad Technologies
              </h3>
              <p className="text-muted-foreground mb-2">
                No. 39B, 2nd Floor, Kongunadu Trust, 1st Street, Chakrapani
                Colony,
              </p>
              <p className="text-muted-foreground">
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
