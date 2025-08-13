import React, { useState } from "react";
import {
  MapPin,
  Phone,
  MailCheck,
  CheckCircle,
  AlertCircle,
  Send,
  Loader2,
  Sparkles,
  Gift,
  Heart,
  Coffee,
} from "lucide-react";
import Container from "../../../components/Container";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    userType: "",
    queryType: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (submitError) setSubmitError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f8375ad6-815b-4263-8e0c-621a66b84bde",
          name: formData.name,
          email: formData.email,
          phone: formData.mobile,
          subject: `${formData.queryType} - Contact from ${formData.userType}`,
          message: `
User Type: ${formData.userType}
Query Type: ${formData.queryType}
Phone: ${formData.mobile}

Message:
${formData.message}
          `,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          userType: "",
          queryType: "",
          message: "",
        });

        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[var(--secondary)] relative overflow-hidden py-4 px-4">
      <div className="absolute inset-0 pointer-events-none overflow-hidden ">
        <div
          className="absolute inset-0 opacity-20 "
          style={{
            backgroundImage: `
            radial-gradient(circle at 20% 20%, var(--primary) 1px, transparent 1px),
            radial-gradient(circle at 80% 80%, var(--primary) 0.8px, transparent 0.8px)
          `,
            backgroundSize: "50px 50px, 35px 35px",
            backgroundPosition: "0 0, 25px 25px",
          }}
        ></div>
        <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--primary)]/3 rounded-full blur-2xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-tl from-[var(--primary)]/15 to-transparent rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/4 right-1/4 text-[var(--primary)]/8 text-4xl transform rotate-12"></div>
        <div className="absolute bottom-1/4 left-1/4 text-[var(--primary)]/8 text-3xl transform -rotate-12"></div>
        <div
          className="absolute top-20 right-32 w-3 h-3 border-2 border-[var(--primary)]/15 rotate-45 animate-spin"
          style={{ animationDuration: "8s" }}
        ></div>
      </div>

      <Container>
        <div className="text-center mb-8">
          <h1
            className="text-2xl sm:text-3xl font-bold text-[var(--primary)] mb-1 flex items-center justify-center gap-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Contact Forolly
          </h1>
        </div>

        {/* ✅ Modified grid layout below */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start lg:items-stretch">
          {/* LEFT - Contact Form */}
          <div className="bg-white/20 backdrop-blur-lg rounded-xl p-5 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/8 via-transparent to-[var(--primary)]/3 rounded-xl"></div>
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent"></div>
            <div
              className="absolute top-2 right-2 w-4 h-4 border border-[var(--primary)]/20 rounded-full animate-spin"
              style={{ animationDuration: "12s" }}
            ></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 bg-[var(--primary)]/10 rounded-full animate-pulse"></div>

            <div className="relative z-10">
              <div className="text-center mb-4">
                <div className="flex justify-center mb-2">
                  <div className="p-2 bg-gradient-to-br from-[var(--primary)]/15 to-[var(--primary)]/8 rounded-full border border-[var(--primary)]/20 group-hover:scale-110 transition-transform duration-300"></div>
                </div>
                <h2
                  className="text-xl font-bold text-[var(--primary)] mb-1 flex items-center justify-center gap-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Sweet Message Box
                </h2>
                <p className="text-[var(--dark)]/70 text-xs">
                  Share your thoughts with us!
                </p>
              </div>

              {isSubmitted && (
                <div className="mb-3 p-2.5 bg-gradient-to-r from-green-100/90 to-green-50/90 border border-green-300 rounded-lg backdrop-blur-sm animate-bounce">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 animate-pulse" />
                    <div>
                      <p className="text-green-800 font-semibold text-xs">
                        Message sent successfully!
                      </p>
                      <p className="text-green-700 text-xs">
                        We'll get back to you soon!
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitError && (
                <div className="mb-3 p-2.5 bg-gradient-to-r from-red-100/90 to-red-50/90 border border-red-300 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    <div>
                      <p className="text-red-800 font-semibold text-xs">
                        Oops! Something went wrong
                      </p>
                      <p className="text-red-700 text-xs">{submitError}</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Sweet Name *"
                    className="w-full px-3 py-2 rounded-lg border border-[var(--primary)]/20 bg-white/15 backdrop-blur-sm text-[var(--dark)] placeholder:text-[var(--dark)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] transition-all duration-300 hover:bg-white/25 text-sm"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address *"
                    className="w-full px-3 py-2 rounded-lg border border-[var(--primary)]/20 bg-white/15 backdrop-blur-sm text-[var(--dark)] placeholder:text-[var(--dark)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] transition-all duration-300 hover:bg-white/25 text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <select
                    name="queryType"
                    required
                    value={formData.queryType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-lg border border-[var(--primary)]/20 bg-white/15 backdrop-blur-sm text-[var(--dark)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] transition-all duration-300 hover:bg-white/25 appearance-none cursor-pointer text-sm"
                  >
                    <option value="">Query Type *</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="wholesale-order">Wholesale Order</option>
                    <option value="dealership">Dealership</option>
                    <option value="custom-order">Custom Order</option>
                    <option value="customer-support">Customer Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                  <select
                    name="userType"
                    required
                    value={formData.userType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-lg border border-[var(--primary)]/20 bg-white/15 backdrop-blur-sm text-[var(--dark)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] transition-all duration-300 hover:bg-white/25 appearance-none cursor-pointer text-sm"
                  >
                    <option value="">You are a *</option>
                    <option value="customer">Sweet Customer</option>
                    <option value="dealer">Dealer Partner</option>
                    <option value="distributor">Distributor</option>
                    <option value="retailer">Retailer</option>
                    <option value="investor">Investor</option>
                    <option value="supplier">Supplier</option>
                  </select>
                </div>

                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="Mobile Number (Optional)"
                  className="w-full px-3 py-2 rounded-lg border border-[var(--primary)]/20 bg-white/15 backdrop-blur-sm text-[var(--dark)] placeholder:text-[var(--dark)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] transition-all duration-300 hover:bg-white/25 text-sm"
                />

                <textarea
                  name="message"
                  required
                  rows="2"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Sweet Message *"
                  className="w-full px-3 py-2 rounded-lg border border-[var(--primary)]/20 bg-white/15 backdrop-blur-sm text-[var(--dark)] placeholder:text-[var(--dark)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 focus:border-[var(--primary)] transition-all duration-300 resize-none hover:bg-white/25 text-sm"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[var(--primary)] via-[var(--primary)]/90 to-[var(--primary)] text-white py-2.5 px-4 rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden text-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Sweet Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT - Contact Info */}
          <div className="space-y-5 flex flex-col gap-10 justify-start">
            <div>
              <h2
                className="text-2xl font-bold text-[var(--primary)] mb-5 flex items-center gap-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Get in Touch
              </h2>
              <p className="text-[var(--dark)] leading-relaxed mb-3 text-sm sm:max-w-[30rem]">
                We'd love to hear from you! Whether you have questions about our
                premium confectionery products, need customer support, or want
                to explore sweet business partnerships, our team is here to
                help.
              </p>
            </div>

            <div>
              <div className="space-y-3 text-[var(--dark)]/80 text-sm">
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[var(--primary)]" />
                  <span className="font-medium">Call us:</span>
                  <a
                    href="tel:+919510270600"
                    className="text-[var(--primary)] hover:underline font-semibold"
                  >
                    +91 95102 70600
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <MailCheck className="w-5 h-5 text-[var(--primary)]" />
                  <span className="font-medium">Email us:</span>
                  <a
                    href="mailto:support@forollyfood.com"
                    className="text-[var(--primary)] hover:underline font-semibold"
                  >
                    support@forollyfood.com
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--dark)] mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[var(--primary)]" />
                Our Location
              </h3>
              <div className="text-[var(--dark)]/80 leading-relaxed text-sm">
                <a
                  href="https://www.google.com/maps/place/Forolly+Food+Products/@24.0528492,72.3945637,740m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395cf3a590d21f47:0x9840fbef2ef6f97c!8m2!3d24.0528492!4d72.3945637!16s%2Fg%2F11lrgz913h?entry=ttu&g_ep=EgoyMDI1MDcyNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 font-medium leading-snug "
                >
                  <span>
                    Forolly Food
                    <br />
                    <p>Survey No. 646, Plot No. 3, 4, 5,</p>
                    <p> Village-Majadar, Ta-vadgam,</p>
                    <p> Dist-Banaskantha, Gujarat-385210,India</p>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactForm;
