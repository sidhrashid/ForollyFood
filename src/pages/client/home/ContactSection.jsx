import React from "react";
import Container from "../../../components/Container";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="py-20 bg-[#fff5e0] text-gray-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Form Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <form className="space-y-5">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-0"
                />{" "}
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white font-semibold py-3 rounded-full hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Submit Now <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Right: Contact Info (Transparent) */}
          <div className="p-2 md:p-4">
            <p className="text-sm text-amber-600 uppercase font-medium mb-2">
              Contact Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
              Empowering Chocolate <br />
              Lovers Everywhere
            </h2>
            <p className="text-gray-700 mb-8">
              Ready to treat yourself or your customers with the finest
              handcrafted chocolates? Reach out to us and we’ll sweeten your
              day!
            </p>

            <div className="space-y-5 text-base">
              <div className="flex items-start gap-4">
                <Phone className="text-amber-600 w-5 h-5 mt-1" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-amber-600 w-5 h-5 mt-1" />
                <span>+91 9001234567</span>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-amber-600 w-5 h-5 mt-1" />
                <span>hello@chocoheaven.com</span>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-amber-600 w-5 h-5 mt-1" />
                <span>
                  Choco Heaven Pvt. Ltd.
                  <br />
                  Sweet Street, Chocolate City, Delhi - 110011
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
