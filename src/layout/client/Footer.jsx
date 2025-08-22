import React from "react";
import {
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ExternalLink,
  Star,
  Sparkles,
  Download, // Add this icon import
} from "lucide-react";
import logo from "../../assets/images/logo.webp";
import { NavLink } from "react-router-dom";

const Footer = () => {
  // Fixed PDF download function
  const downloadBrochure = () => {
    const link = document.createElement("a");
    // Encode spaces as %20 in URL
    link.href = "/files/Forolly%20new%20catalogue.pdf";
    // Clean filename without spaces for download
    link.download = "Forolly_new_catalogue.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#d72121] via-[#d72121]/70 to-[#d72121]/60">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/20 via-transparent to-[var(--primary)]/20"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-[var(--primary)]/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-blue-500/8 to-[var(--primary)]/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Brand */}
            <div className="space-y-">
              <NavLink to="/" className="inline-flex items-center gap-4 group">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-xl blur group-hover:blur-md transition-all duration-300"></div>
                  <img
                    src={logo}
                    alt="Forolly Logo"
                    width={48}
                    height={48}
                    className="relative w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white ">Forolly</h2>
                  <p className="text-xs text-white/60 ">
                    Premium Confectionery
                  </p>
                </div>
              </NavLink>
              <p className="text-white/70 text-sm leading-relaxed">
                India's premium confectionery brand, spreading joy through
                chocolates and toffees since 2020.
                <span className="text-[var(--primary)]/80 font-medium">
                  {" "}
                  Bringing sweetness to every moment.
                </span>
              </p>
            </div>

            {/* Location */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Our Location</h3>
              <address className="not-italic text-white/70 text-sm leading-relaxed space-y-1">
                <p className="font-semibold text-white text-base pt-3 ">
                  Forolly Food Products
                </p>
                <p>Survey No. 646, Plot No. 3, 4, 5</p>
                <p>Ahmedabad Palanpur Highway</p>
                <p>Village-Majadar, Ta-vadgam</p>
                <p>Dist-Banaskantha, Gujarat-385210</p>
              </address>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Quick Links</h3>
              <ul className="space-y-">
                {[
                  { name: "Home", href: "/" },
                  { name: "About ", href: "/about" },
                  { name: "Products", href: "/products" },
                  { name: "Export", href: "/export" },
                  { name: "Contact ", href: "/contact" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="flex items-center gap-3 p-1 rounded-lg text-white/70 hover:text-white border border-transparent transition-all duration-300 group"
                    >
                      <span className="flex-1 group-hover:translate-x-2 transition-transform duration-300">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}

                {/* Fixed Brochure Download Link */}
                <li>
                  <button
                    onClick={downloadBrochure}
                    className="flex items-center gap-3 p-1 rounded-lg text-white/70 hover:text-white border border-transparent transition-all duration-300 group w-full text-left"
                  >
                    <span className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                      Brochure
                      <Download className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Get in Touch</h3>
              <div className="space-y-4">
                <a
                  href="tel:+919510270600"
                  className="flex items-center gap-4 text-white transition-all duration-300 group"
                >
                  <Phone className="w-5 h-5" />
                  <div>
                    <p className="text-xs text-white/60">Call us</p>
                    <p className="font-medium">+91 95102 70600</p>
                  </div>
                </a>
                <a
                  href="mailto:support@forollyfood.com"
                  className="flex items-center gap-4 text-white transition-all duration-300 group"
                >
                  <Mail className="w-5 h-5" />
                  <div>
                    <p className="text-xs text-white/60">Email us</p>
                    <p className="font-medium">support@forollyfood.com</p>
                  </div>
                </a>
              </div>
              <div>
                <p className="text-sm text-white/70 font-medium mb-2">
                  Follow our journey:
                </p>
                <div className="flex gap-4">
                  {[
                    {
                      icon: Instagram,
                      href: "https://www.instagram.com/forollyfoodproducts?igsh=aW42bGZpd3lqZ2Ez",
                      color: "from-pink-500 to-purple-500",
                    },
                    {
                      icon: Facebook,
                      href: "https://www.facebook.com/profile.php?id=61562556606227&mibextid=ZbWKwL",
                      color: "from-blue-700 to-blue-600",
                    },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative p-3 bg-white/20   rounded-xl text-white hover:scale-110 hover:${social.color}/50 hover:border-white/40 transition-all duration-300 group overflow-hidden`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      ></div>
                      <social.icon className="relative z-10 w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Forolly Food Products. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              {/* <div className="flex items-center gap-1 text-white/40">
            <span>Made with</span>
            <span className="text-red-400 animate-pulse">❤️</span>
            <span>in India</span>
          </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
