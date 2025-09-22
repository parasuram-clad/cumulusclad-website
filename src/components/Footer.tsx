import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react';
import cumulusLogo from '@/assets/cumulusclad-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI Solutions', href: '/services/ai-solutions' },
      { name: 'Digital Experience', href: '/services/digital-experience' },
      { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
      { name: 'Digital Transformation', href: '/services/digital-transformation' },
      { name: 'IoT Solutions', href: '/services/iot-solutions' },
      { name: 'Cyber Security', href: '/services/cyber-security' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Work', href: '/work' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
      { name: 'Privacy Policy', href: '/privacy' },
    ],
    industries: [
      { name: 'Education', href: '/industries/education' },
      { name: 'Finance', href: '/industries/finance' },
      { name: 'Healthcare', href: '/industries/healthcare' },
      { name: 'Retail', href: '/industries/retail' },
      { name: 'Manufacturing', href: '/industries/manufacturing' },
      { name: 'Technology', href: '/industries/technology' },
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/cumulusclad', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/cumulusclad', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/cumulusclad', label: 'GitHub' },
    { icon: Facebook, href: 'https://facebook.com/cumulusclad', label: 'Facebook' },
  ];

  return (
    <footer className="bg-white border-t border-medium-gray/30">
      {/* Red accent line */}
      <div className="h-1 bg-gradient-to-r from-luxury-red via-luxury-red-light to-luxury-red" />
      
      <div className="container-luxury">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block">
              <img 
                src={cumulusLogo} 
                alt="CumulusClad Technologies" 
                className="h-16 w-auto"
              />
            </Link>
            
            <p className="text-dark-gray leading-relaxed max-w-md">
              Transforming businesses through innovative technology solutions. 
              From AI-powered automation to cloud infrastructure, we're your 
              trusted partner in digital transformation.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-dark-gray">
                <Mail className="h-5 w-5 text-luxury-red" />
                <a href="mailto:hello@cumulusclad.com" className="hover:text-luxury-red transition-colors duration-medium">
                  hello@cumulusclad.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3 text-dark-gray">
                <Phone className="h-5 w-5 text-luxury-red" />
                <a href="tel:+1-555-123-4567" className="hover:text-luxury-red transition-colors duration-medium">
                  +1 (555) 123-4567
                </a>
              </div>
              
              <div className="flex items-center space-x-3 text-dark-gray">
                <MapPin className="h-5 w-5 text-luxury-red" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-charcoal font-space-grotesk">
              Services
            </h3>
            <nav className="space-y-3">
              {footerLinks.services.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-dark-gray hover:text-luxury-red transition-colors duration-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-charcoal font-space-grotesk">
              Company
            </h3>
            <nav className="space-y-3">
              {footerLinks.company.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-dark-gray hover:text-luxury-red transition-colors duration-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Industries */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-charcoal font-space-grotesk">
              Industries
            </h3>
            <nav className="space-y-3">
              {footerLinks.industries.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-dark-gray hover:text-luxury-red transition-colors duration-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-medium-gray/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <p className="text-dark-gray text-sm">
              © {currentYear} CumulusClad Technologies. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-soft-gray rounded-lg flex items-center justify-center text-dark-gray hover:bg-luxury-red hover:text-white transition-all duration-medium hover-lift"
                  aria-label={social.label}
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