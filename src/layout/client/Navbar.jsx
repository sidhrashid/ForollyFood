import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.webp"; // ✅ replace with your logo

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* ✅ Logo */}
          <NavLink to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </NavLink>

          {/* ✅ Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium ">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive
                      ? "text-[var(--primary)]"
                      : "text-gray-800 hover:text-[var(--primary)]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* ✅ Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex flex-col text-right leading-tight">
              <span className="text-xs text-gray-500">Need Help?</span>
              <a
                href="tel:9978690559"
                className="text-[var(--primary)] font-semibold text-[15px]"
              >
                (+91) 997 869 0559
              </a>
            </div>

            {/* ✅ Inverted Button */}
            <NavLink
              to="/contact"
              className="px-4 py-2 rounded-full bg-[var(--primary)] text-white border border-[var(--primary)] hover:bg-transparent hover:text-[var(--primary)] transition text-sm font-medium"
            >
              Contact Us
            </NavLink>
          </div>

          {/* ✅ Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[var(--primary)]"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* ✅ Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 p-6 space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-lg font-medium text-[var(--dark)] hover:text-[var(--primary)]"
            >
              {item.name}
            </NavLink>
          ))}

          <div className="pt-4 border-t">
            <p className="text-sm text-gray-500">Need Help?</p>
            <a
              href="tel:9978690559"
              className="text-[var(--primary)] font-semibold text-lg"
            >
              (+91) 997 869 0559
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
