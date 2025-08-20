import React from "react";
import {
  Heart,
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

const ContactSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background with Texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)] via-white to-[var(--secondary)]/50"></div>

      <section className="relative z-10 text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header with Animation */}
          <div className="mb-8">
            <h2
              className="text-3xl sm:text-4xl font-bold text-[var(--primary)] mb-3 flex items-center justify-center gap-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Want to reach out to us?
            </h2>
          </div>

          {/* Interactive Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Quick Call Card */}
            <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all duration-300 hover:shadow-xl hover:scale-105 relative overflow-hidden">
              <div className="absolute top-2 right-2 w-4 h-4 bg-[var(--primary)]/10 rounded-full animate-pulse"></div>
              <Phone className="w-8 h-8 text-[var(--primary)] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-[var(--dark)] mb-2">Quick Call</h3>
              <p className="text-sm text-[var(--dark)]/70 mb-3">
                Talk to our sweet experts directly
              </p>
              <a
                href="tel:+919510270600"
                className="text-[var(--primary)] hover:underline font-semibold text-sm flex items-center justify-center gap-1 group-hover:gap-2 transition-all duration-300"
              >
                Call Now{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Email Card */}
            <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all duration-300 hover:shadow-xl hover:scale-105 relative overflow-hidden">
              <div
                className="absolute bottom-2 left-2 w-3 h-3 bg-[var(--primary)]/10 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <Mail className="w-8 h-8 text-[var(--primary)] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-[var(--dark)] mb-2">Sweet Email</h3>
              <p className="text-sm text-[var(--dark)]/70 mb-3">
                Drop us a line anytime
              </p>
              <a
                href="mailto:support@forollyfood.com"
                className="text-[var(--primary)] hover:underline font-semibold text-sm flex items-center justify-center gap-1 group-hover:gap-2 transition-all duration-300"
              >
                Email Us{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Message Card */}
            <div className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all duration-300 hover:shadow-xl hover:scale-105 relative overflow-hidden">
              <div
                className="absolute top-4 left-4 w-2 h-2 bg-[var(--primary)]/10 rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
              <MessageCircle className="w-8 h-8 text-[var(--primary)] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-[var(--dark)] mb-2">Message Box</h3>
              <p className="text-sm text-[var(--dark)]/70 mb-3">
                Send us your sweet thoughts
              </p>
              <a
                href="sms:+919510270600?body=Hi%20Forolly%2C%20I%20have%20a%20query%20regarding%20your%20products."
                className="text-[var(--primary)] hover:underline font-semibold text-sm flex items-center justify-center gap-1 group-hover:gap-2 transition-all duration-300"
              >
                Message{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Main CTA Button */}
          <div className="relative">
            <a
              href="/contact"
              className="relative inline-flex items-center gap-3 bg-gradient-to-r from-[var(--primary)] via-[var(--primary)]/90 to-[var(--primary)] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
            >
              <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Inquire Now</span>
              <div className="flex items-center gap-1">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </a>
          </div>

          {/* Bottom Sweet Note */}
          <div className="mt-8 p-4 bg-gradient-to-r from-[var(--primary)]/5 via-[var(--primary)]/10 to-[var(--primary)]/5 rounded-xl border border-[var(--primary)]/20">
            <p className="text-sm text-[var(--dark)]/80 flex items-center justify-center gap-2">
              <span className="text-lg"></span>
              <span className="font-medium">Quick Response Guaranteed</span>
              <span className="text-lg"></span>
              <span>We reply within 24 hours with sweetness!</span>
              <span className="text-lg"></span>
            </p>
          </div>
        </div>
      </section>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes sweetPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }

        @keyframes sweetFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-8px) rotate(2deg);
          }
          50% {
            transform: translateY(-4px) rotate(-1deg);
          }
          75% {
            transform: translateY(-10px) rotate(1deg);
          }
        }

        .animate-sweet-pulse {
          animation: sweetPulse 2s ease-in-out infinite;
        }

        .animate-sweet-float {
          animation: sweetFloat 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ContactSection;
