import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: "AI Solutions", href: "/services/ai" },
      { name: "Digital Experience", href: "/services/digital-experience" },
      { name: "Cloud Solutions", href: "/services/cloud" },
      {
        name: "Digital Transformations",
        href: "/services/digital-transformation",
      },
      { name: "IoT Solutions", href: "/services/iot" },
      { name: "Cyber Security", href: "/services/cybersecurity" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Our Work", href: "/work" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    Resources: [
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  };

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Instagram", href: "#", icon: Instagram },
  ];

  return (
    <footer className="bg-luxury-black border-border">
      {/* Accent Divider */}
      <div className="h-1 bg-gradient-luxury" />

      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
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

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-lg font-semibold">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {currentYear} CumulusClad Technologies. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
