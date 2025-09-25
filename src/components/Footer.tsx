import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: "AI Solutions", href: "/services/ai-solutions" },
      { name: "Digital Experience", href: "/services/digital-experience" },
      { name: "Cloud Solutions", href: "/services/cloud-solutions" },
      {
        name: "Digital Transformation",
        href: "/services/digital-transformation",
      },
      { name: "IoT Solutions", href: "/services/iot-solutions" },
      { name: "Cyber Security", href: "/services/cybersecurity" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Our Work", href: "/work" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    "Follow Us": [
      {
        name: "LinkedIn",
        href: "https://linkedin.com/company/cumulusclad",
        icon: Linkedin,
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/cumulusclad/",
        icon: Instagram,
      },
      {
        name: "Website",
        href: "https://cumulusclad.com",
        icon: Globe,
      },
    ],
  };

  const supportLinks = [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <footer className="bg-luxury-black border-border">
      {/* Accent Divider */}
      <div className="h-1 bg-gradient-luxury" />

      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="CumulusClad Technologies"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Transforming ideas into cutting-edge technology solutions. We're
              your trusted partner in digital innovation.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:info@cumulusclad.com"
                className="flex items-center space-x-3 text-sm group"
              >
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors duration-300 underline-offset-4 hover:underline">
                  info@cumulusclad.com
                </span>
              </a>
              <a
                href="tel:+91446688777"
                className="flex items-center space-x-3 text-sm group"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors duration-300 underline-offset-4 hover:underline">
                  +91 446688777
                </span>
              </a>
              <a
                href="https://maps.app.goo.gl/Jevnhvux4z9Nbf9W8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm group"
              >
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors duration-300 underline-offset-4 hover:underline">
                  Chennai - 600 016, Tamil Nadu, India
                </span>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold ">Services</h3>
            <ul className="space-y-3">
              {footerLinks.Services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold ">Company</h3>
            <ul className="space-y-3">
              {footerLinks.Company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm "
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us with Icons */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold ">Follow Us</h3>
            <ul className="space-y-4">
              {footerLinks["Follow Us"].map((link) => {
                const IconComponent = link.icon;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm group"
                    >
                      <IconComponent className="h-5 w-5 text-primary" />
                      <span className="group-hover:underline underline-offset-4">
                        {link.name}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Section with Support Links */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center  space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground ">
              © {currentYear} CumulusClad Technologies. All rights reserved.
            </p>

            {/* Support Links */}
            <div className="flex items-center space-x-6">
              {supportLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline underline-offset-4"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
