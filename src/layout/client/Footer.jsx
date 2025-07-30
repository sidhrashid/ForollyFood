import React from "react";
import {
  Instagram,
  Twitter,
  Facebook,
  Mail,
  Heart,
  ArrowRight,
  MapPin,
  Send,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[var(--primary)] text-[var(--footertext)] pt-20 pb-8 relative overflow-hidden">
      {/* Enhanced Background Texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[var(--primary)]/8 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[var(--primary)]/12 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-3xl"></div>

        <div className="absolute top-16 right-1/4 w-32 h-32 bg-[var(--primary)]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-[var(--primary)]/8 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 left-16 w-20 h-20 bg-[var(--primary)]/6 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/2 right-16 w-28 h-28 bg-[var(--primary)]/9 rounded-full blur-2xl"></div>

        <div className="absolute top-20 left-1/3 w-4 h-4 bg-[var(--primary)]/15 rotate-45 rounded-sm"></div>
        <div className="absolute bottom-40 right-1/3 w-3 h-8 bg-[var(--primary)]/10 rounded-full"></div>
        <div className="absolute top-2/3 left-20 w-6 h-6 bg-[var(--primary)]/12 rounded-full"></div>
      </div>

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--primary)] via-[var(--primary)]/80 to-[var(--primary)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content - 4 Columns with Proper Alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 items-start">
          {/* 1. Forolly Brand Section - Proper Top Alignment */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-[var(--secondary)] mb-4 flex items-center gap-2">
                Forolly
              </h3>
              <p className="text-[var(--footertext)] leading-relaxed text-sm">
                "Forolly's mission is to bring joyful candy memories to youth
                while celebrating God and His purpose for our lives. We aim to
                delight every customer so they share their experience with
                others."
              </p>
            </div>
          </div>

          {/* 2. Office Address - Proper Top Alignment */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-[var(--footertext)] mb-6 relative">
              Office Address
              <div className="absolute -bottom-2 left-0 w-35 h-1 bg-[var(--secondary)] rounded-full"></div>
            </h4>

            {/* Address Content - Properly Aligned */}
            <div className="text-[var(--footertext)] leading-relaxed text-sm space-y-1">
              <p>Survey No. 646, Plot No. 3, 4, 5,</p>
              <p>Ahmedabad palanpur Highway,</p>
              <p>Village-Majadar, Ta-vadgam,</p>
              <p>Dist-Banaskantha, Gujarat-385210, India.</p>
            </div>
          </div>

          {/* 3. Quick Links - Proper Top Alignment */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-[var(--footertext)] mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-27 h-1 bg-[var(--secondary)] rounded-full"></div>
            </h4>
            <ul className="space-y-1">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Products", href: "/products" },
                { name: "Contact Us", href: "/contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-[var(--footertext)] hover:text-[var(--secondary)] transition-all duration-300 pt-0 py-2 rounded-lg text-sm"
                  >
                    <span className="group-hover:translate-x-3 transition-transform duration-500">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Us - Proper Top Alignment */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-[var(--footertext)] mb-6 relative">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-27 h-1 bg-[var(--secondary)] rounded-full"></div>
            </h4>

            {/* Email Subscription - Properly Aligned */}
            <div className="space-y-4">
              {/* Social Media Icons - Properly Spaced */}
              <div className="pt-4">
                <p className="text-sm text-[var(--footertext)] mb-3">Follow us on:</p>
                <div className="flex gap-3">
                  {[
                    {
                      icon: Instagram,
                      href: "#",
                      color: "hover:text-pink-500",
                    },
                    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      className={`group p-2 bg-white/60 backdrop-blur-sm rounded-lg border border-white/50 text-[var(--primary)] ${social.color} hover:shadow-lg transition-all duration-300 hover:scale-110`}
                    >
                      <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Centered */}
        <div className="border-t border-white/30 pt-8">
          <div className="flex justify-center items-center">
            <div className="text-center">
              <p className="text-[var(--footertext)] text-sm">
                © {new Date().getFullYear()} Forolly Food | All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
