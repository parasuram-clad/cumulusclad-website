import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import {
  Home,
  Briefcase,
  FolderOpen,
  Users,
  Phone,
  Cloud,
  Palette,
  Cpu,
  Shield,
  Zap,
} from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open - IMPROVED VERSION
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Store the current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll position when closing menu
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "unset";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Services", href: "/services", icon: Briefcase },
    // { name: "Work", href: "/work", icon: FolderOpen },
    { name: "About", href: "/about", icon: Users },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  const serviceIcons = {
    ai: Cpu,
    "digital-experience": Palette,
    cloud: Cloud,
    "digital-transformation": Zap,
    iot: Cpu,
    cybersecurity: Shield,
  };

  const isActive = (href: string) => location.pathname === href;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Get relevant icon based on current page
  const getCurrentPageIcon = () => {
    if (location.pathname.startsWith("/services/")) {
      const serviceId = location.pathname.split("/")[2];
      const IconComponent = serviceIcons[serviceId] || Briefcase;
      return <IconComponent className="w-5 h-5" />;
    }

    const currentNav = navigation.find((item) => isActive(item.href));
    return currentNav ? (
      <currentNav.icon className="w-5 h-5" />
    ) : (
      <Home className="w-5 h-5" />
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 w-full">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group flex-shrink-0"
          >
            <img
              src={logo}
              alt="CumulusClad Technologies"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105 max-w-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 flex-shrink-0">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link text-sm font-medium uppercase whitespace-nowrap ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={toggleMobileMenu}
              className="relative w-10 h-10 flex items-center justify-center text-foreground hover:text-primary transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <span
                className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-0"
                    : "-translate-y-2"
                }`}
              />
              <span
                className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "-rotate-45 translate-y-0"
                    : "translate-y-2"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
        >
          {/* Animated Backdrop */}
          <div
            className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${
              isMobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
          />

          {/* Animated Menu Panel - IMPROVED SLIDING */}
          <div
            className={`absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl transform transition-all duration-500 ease-out overflow-y-auto ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              maxHeight: "100vh",
              overscrollBehavior: "contain",
            }}
          >
            {/* Header Section with Close Button Only */}
            <div className="p-4 flex items-center justify-end sticky top-0 bg-white z-10 border-b border-gray-200">
              {/* Current Page Indicator */}

              {/* Close Button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-primary transition-colors duration-300"
                aria-label="Close menu"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Items with Icons */}
            <nav className="flex flex-col p-4 space-y-3">
              {navigation.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`group relative p-2 rounded-xl transition-all duration-500 transform flex items-center space-x-4 ${
                      isActive(item.href)
                        ? "bg-gradient-to-r from-primary/20 to-primary/10 border-l-4 border-primary shadow-md"
                        : "hover:bg-gray-50 border-l-4 border-transparent"
                    }`}
                    style={{
                      transitionDelay: isMobileMenuOpen
                        ? `${index * 60}ms`
                        : "0ms",
                      transform: isMobileMenuOpen
                        ? "translateX(0) scale(1)"
                        : "translateX(30px) scale(0.95)",
                      opacity: isMobileMenuOpen ? 1 : 0,
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {/* Icon */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isActive(item.href)
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-600 group-hover:bg-primary group-hover:text-white"
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <span
                        className={`text-lg font-semibold transition-colors duration-300 block ${
                          isActive(item.href)
                            ? "text-primary"
                            : "text-gray-900 group-hover:text-primary"
                        }`}
                      >
                        {item.name}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </nav>

            {/* Footer Section */}
            <div className="sticky bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-white">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Ready to transform your business?
                </p>
                <Link
                  to="/contact"
                  className="btn-luxury group transition-all duration-300 ease-out capitalize  px-6 py-3  font-semibold text-sm hover:shadow-lg  w-full max-w-xs"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  We’re Always Open
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
