import React from "react";
import {
  Instagram,
  Facebook,
  Mail,
  Heart,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[var(--primary)] text-[var(--footertext)] pt-20 pb-8 relative overflow-hidden">
      {/* Simple Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 bg-[var(--primary)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-[var(--primary)]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-[var(--primary)]/8 rounded-full blur-2xl"></div>
      </div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--primary)] via-[var(--primary)]/80 to-[var(--primary)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
       

        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* 1. Office Address */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white mb-4">
              Office Address
            </h4>
            <address className="not-italic text-[var(--footertext)] text-sm leading-relaxed space-y-1">
              <p>Survey No. 646, Plot No. 3, 4, 5,</p>
              <p>Ahmedabad Palanpur Highway,</p>
              <p>Village-Majadar, Ta-vadgam,</p>
              <p>Dist-Banaskantha, Gujarat-385210, India</p>
            </address>
            
           
          </div>
 {/* 3. Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white mb-4">
              Contact Info
            </h4>
            <div className="space-y-3">
              <a 
                href="tel:+919510270600"
                className="flex items-center gap-3 text-[var(--footertext)] hover:text-white transition-colors duration-300 text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>+91 95102 70600</span>
              </a>
              
              <a 
                href="mailto:info@forolly.com"
                className="flex items-center gap-3 text-[var(--footertext)] hover:text-white transition-colors duration-300 text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>info@forolly.com</span>
              </a>
               {/* Map Link */}
            <a 
              href="https://www.google.com/maps/place/Forolly+Food+Products/@24.0528541,72.3919888,740m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395cf3a590d21f47:0x9840fbef2ef6f97c!8m2!3d24.0528492!4d72.3945637!16s%2Fg%2F11lrgz913h?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[var(--footertext)] hover:text-white transition-colors duration-300 text-sm"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm">View on Map</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            </div>
          </div>
          {/* 2. Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Products", href: "/products" },
                { name: "Contact Us", href: "/contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-[var(--footertext)] hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

         

          {/* 4. Social Media & Rating */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white mb-4">
              Follow Us
            </h4>
            
            {/* Social Icons */}
            <div className="flex gap-3 mb-4">
              {[
                { icon: Instagram, href: "#", color: "hover:text-pink-500" },
                { icon: Facebook, href: "#", color: "hover:text-blue-600" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className={`p-2 bg-white/10 rounded-lg text-white ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Rating Stars */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <span className="text-xs text-[var(--footertext)]">5+ Years</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            
            {/* Copyright */}
            <p className="text-[var(--footertext)] text-sm ">
              © {new Date().getFullYear()} Forolly Food | All rights reserved.
            </p>

            {/* <div className="flex items-center gap-2">
              <span className="text-xs text-[var(--footertext)]">Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span className="text-xs text-[var(--footertext)]">in React</span>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
