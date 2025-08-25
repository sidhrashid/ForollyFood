import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Phone,
  ArrowRight,
  Mail,
  ChevronDown,
  Download,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/forolly.png";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
  { name: "Brochure", href: "#", isDownload: true }, // ✅ Mark as download item
  {
    name: "Market Overview",
    href: "/export",
    dropdown: ["Export", "Domestic"],
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        setMobileDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle dropdown function (for click)
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Toggle mobile dropdown
  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  // Handle mouse enter (for hover)
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  // Handle mouse leave (for hover)
  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  // ✅ Enhanced download function for multiple brochures
  const downloadBrochure = () => {
    // Primary brochure download
    const link = document.createElement("a");
    link.href = "/files/Forolly%20new%20catalogue.pdf";
    link.download = "Forolly_new_catalogue.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Optional: Show success message
    setTimeout(() => {
      console.log("Brochure download started!");
    }, 100);
  };

  return (
    <>
      {/* Updated Navbar with Mobile-First White Background */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || window.innerWidth < 768
            ? "bg-white shadow-lg"
            : "bg-transparent md:bg-transparent bg-white "
        }`}
        style={{
          backgroundColor: window.innerWidth < 768 ? "white" : undefined,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/">
            <img
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              src={logo}
              alt="Logo"
              className="h-15 w-auto object-contain"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-md font-bold">
            {navItems.map((item) => {
              // ✅ Handle download items
              if (item.isDownload) {
                return (
                  <button
                    key={item.name}
                    onClick={downloadBrochure}
                    className={`flex items-center gap-1 transition-colors cursor-pointer ${
                      isScrolled
                        ? "text-gray-800 hover:text-[var(--brand)]"
                        : "text-white hover:text-[var(--brand)]"
                    }`}
                  >
                    {/* <Download className="w-4 h-4" /> */}
                    {item.name}
                  </button>
                );
              }

              // Handle dropdown items
              if (item.dropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={toggleDropdown}
                      className={`flex items-center gap-1 transition-colors cursor-pointer ${
                        isScrolled
                          ? "text-gray-800 hover:text-[var(--brand)]"
                          : "text-white hover:text-[var(--brand)]"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                      <div
                        className="absolute left-0 mt-2 w-48 bg-white shadow-xl rounded-lg border border-gray-100 py-2 z-[60] animate-fadeInDown"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.dropdown.map((dropItem) => (
                          <NavLink
                            key={dropItem}
                            to={`/${dropItem.toLowerCase()}`}
                            className="flex items-center px-4 py-3 text-gray-700 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] transition-colors duration-200 font-medium"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            {dropItem}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Handle regular nav items
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) => {
                    if (isActive) {
                      return "text-[var(--brand)] transition-colors";
                    }
                    if (isScrolled) {
                      return "text-gray-800 hover:text-[var(--brand)] transition-colors";
                    }
                    return "text-white hover:text-[var(--brand)] transition-colors";
                  }}
                >
                  {item.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Side - Desktop Only */}
          <div className="hidden h-full md:flex items-center gap-4">
            <NavLink
              to="/contact"
              className={({ isActive }) => {
                const baseClass =
                  "relative overflow-hidden transition-all duration-300 px-4 py-2 rounded-full border-2 text-md font-bold group";

                if (isActive) {
                  return `${baseClass} text-white border-[var(--brand)] bg-[var(--brand)]`;
                }
                if (isScrolled) {
                  return `${baseClass} text-gray-800 border-gray-800 hover:text-white hover:border-[var(--brand)]`;
                }
                return `${baseClass} text-white border-white hover:text-white hover:border-[var(--brand)]`;
              }}
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute left-0 top-0 h-full w-0 bg-[var(--brand)] transition-all duration-300 group-hover:w-full z-0"></span>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative p-2 text-[var(--primary)] hover:bg-[var(--primary)]/10 rounded-lg transition-all duration-300 group z-[60]"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                } text-[var(--primary)]`}
              />
              <X
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
                } text-[var(--primary)]`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Enhanced Mobile Menu Overlay with Background Blur */}
      <div
        className={`md:hidden fixed inset-0 z-[55] transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Enhanced Backdrop with Blur Effect */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-all duration-500 ${
            isMenuOpen ? "backdrop-blur-md" : "backdrop-blur-none"
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Menu Panel with Higher Z-Index */}
        <div
          className={`absolute top-0 right-0 w-80 max-w-[90vw] h-full bg-white shadow-2xl transform transition-all duration-500 ease-out z-[60] ${
            isMenuOpen ? "translate-x-0 scale-100" : "translate-x-full scale-95"
          }`}
        >
          {/* Mobile Menu Header */}
          <div className="p-6 border-b border-gray-100 bg-[var(--primary)]/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={logo}
                  alt="Forolly Logo"
                  className="h-8 w-auto object-contain"
                />
                <div>
                  <span className="text-lg font-bold text-[var(--primary)]">
                    Forolly
                  </span>
                  <div className="text-xs text-gray-500">Confectionery</div>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-[var(--primary)] hover:bg-[var(--primary)]/10 rounded-lg transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <div className="px-6 space-y-0 overflow-y-auto max-h-[calc(100vh-200px)]">
            {navItems.map((item, index) => {
              // ✅ Handle download items in mobile
              if (item.isDownload) {
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      downloadBrochure();
                      setIsMenuOpen(false);
                    }}
                    className="group flex items-center justify-between w-full p-4 rounded-xl transition-all duration-300 text-gray-700 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-medium">{item.name}</span>
                      {/* <Download className="w-5 h-5 text-[var(--primary)]" /> */}
                    </div>
                    <Download className="w-5 h-5 text-[var(--primary)]" />
                  </button>
                );
              }

              // Handle dropdown items in mobile
              if (item.dropdown) {
                return (
                  <div key={item.name} className="space-y-1">
                    {/* Dropdown trigger with ChevronDown icon */}
                    <button
                      onClick={toggleMobileDropdown}
                      className="group flex items-center justify-between w-full p-4 rounded-xl transition-all duration-300 text-gray-700 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]"
                    >
                      <span className="text-lg font-medium">{item.name}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-all duration-300 ${
                          mobileDropdownOpen
                            ? "rotate-180 text-[var(--primary)]"
                            : "rotate-0 text-gray-400 group-hover:text-[var(--primary)]"
                        }`}
                      />
                    </button>

                    {/* Dropdown menu items with smooth animation */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        mobileDropdownOpen
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-4 space-y-0">
                        {item.dropdown.map((dropItem) => (
                          <NavLink
                            key={dropItem}
                            to={`/${dropItem.toLowerCase()}`}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setMobileDropdownOpen(false);
                            }}
                            className={({ isActive }) =>
                              `group flex items-center justify-between w-full p-3 pl-6 rounded-xl transition-all duration-300 ${
                                isActive
                                  ? "bg-[var(--primary)] text-white shadow-lg"
                                  : "text-gray-600 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]"
                              }`
                            }
                          >
                            {({ isActive }) => (
                              <>
                                <span className="text-base font-medium">
                                  {dropItem}
                                </span>
                                <ArrowRight
                                  className={`w-4 h-4 transition-all duration-300 ${
                                    isActive
                                      ? "text-white translate-x-1"
                                      : "text-gray-400 group-hover:text-[var(--primary)] group-hover:translate-x-1"
                                  }`}
                                />
                              </>
                            )}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // Handle regular nav items in mobile
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `group flex items-center justify-between w-full p-4 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-[var(--primary)] text-white shadow-lg"
                        : "text-gray-700 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="text-lg font-medium">{item.name}</span>
                      <ArrowRight
                        className={`w-5 h-5 transition-all duration-300 ${
                          isActive
                            ? "text-white translate-x-1"
                            : "text-gray-400 group-hover:text-[var(--primary)] group-hover:translate-x-1"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>

          {/* Mobile Contact Section with Download */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-2 pt-0 border-t border-gray-100 bg-gray-50/50">
            <div className="space-y-3">
              <div>
                <div className="text-sm text-gray-500 mb-2">Need Help?</div>
                <a
                  href="tel:919510270600"
                  className="flex items-center space-x-3 p-3 bg-[var(--primary)]/10 rounded-xl text-[var(--primary)] font-semibold hover:bg-[var(--primary)]/20 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-lg">+91 95102 70600</span>
                </a>
                <a
                  href="mailto:support@forollyfood.com"
                  className="flex items-center space-x-3 p-3 font-semibold"
                >
                  <Mail className="w-5 h-5 text-[var(--primary)]" />
                  <span className="text-lg text-[var(--primary)]">
                    support@forollyfood.com
                  </span>
                </a>
              </div>

              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center space-x-2 w-full p-4 bg-[var(--primary)] text-white font-semibold rounded-xl hover:bg-[var(--primary)]/90 transition-all duration-300 shadow-lg"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Body Scroll Lock and Background Blur for Main Content */}
      {isMenuOpen && (
        <>
          <style jsx>{`
            body {
              overflow: hidden;
            }
          `}</style>
          <div className="fixed inset-0 z-[45] pointer-events-none">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
          </div>
        </>
      )}

      {/* Add CSS for fade animation */}
      <style jsx>{`
        .animate-fadeInDown {
          animation: fadeInDown 0.3s ease-out;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
