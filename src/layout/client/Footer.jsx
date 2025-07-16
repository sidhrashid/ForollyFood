import React from "react";
import {
  Instagram,
  Twitter,
  Facebook,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#fff5e0] to-[#f9e0d9] text-gray-800 pt-16 pb-8 relative overflow-hidden">
      {/* Gradient Top Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b01b24] via-orange-400 to-[#b01b24]" />

      {/* Background Blobs */}
      <div className="absolute -top-20 left-10 w-60 h-60 bg-[var(--primary)]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[var(--primary)]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">ChocoHeaven</h3>
            <p className="text-sm text-gray-700">
              Handcrafted chocolates made with love and tradition. Taste the magic in every bite!
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[var(--primary)] transition">Home</a></li>
              <li><a href="#" className="hover:text-[var(--primary)] transition">About Us</a></li>
              <li><a href="#" className="hover:text-[var(--primary)] transition">Products</a></li>
              <li><a href="#" className="hover:text-[var(--primary)] transition">Contact</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[var(--primary)] transition">FAQ</a></li>
              <li><a href="#" className="hover:text-[var(--primary)] transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[var(--primary)] transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[var(--primary)] transition">Shipping & Returns</a></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-4 text-[var(--primary)] text-xl">
              <a href="#" className="hover:text-[#1DA1F2] transition"><Twitter size={20} /></a>
              <a href="#" className="hover:text-[#E1306C] transition"><Instagram size={20} /></a>
              <a href="#" className="hover:text-[#1877F2] transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-[#EA4335] transition"><Mail size={20} /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} ChocoHeaven. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
