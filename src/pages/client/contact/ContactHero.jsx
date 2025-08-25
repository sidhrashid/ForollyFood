import React, { useState } from "react";
import { CheckCircle, AlertCircle, Send, Loader2 } from "lucide-react";
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

        setTimeout(() => setIsSubmitted(false), 3000);
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
    <div className="bg-[var(--primary)] relative overflow-hidden  flex items-center justify-center py-12 px-4">
      {/* Background Hand Images */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left Hand Image */}
        <div
          className="absolute left-0 bottom-0 sm:w-[320px] lg:w-[300px] h-[300px] bg-cover bg-no-repeat bg-center opacity-90"
          style={{
            backgroundImage: "url('/images/hand-left-bottom.webp')",
            backgroundSize: "contain",
          }}
        ></div>

        {/* Right Hand Image */}
        <div
          className="absolute right-0 top-20 sm:w-[320px]  lg:w-[300px] h-[250px] bg-cover bg-no-repeat bg-center opacity-90"
          style={{
            backgroundImage: "url('/images/hand-right-top.webp')",
            backgroundSize: "contain",
          }}
        ></div>
      </div>

      <Container>
        <div className="max-w-2xl mx-auto relative z-10">
          {/* Header Section */}
          {/* <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-black text-red-600 mb-2 leading-tight">
              Hum tak asani
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 italic mb-8 font-serif">
              se pahunche
            </h2>
            <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed font-medium">
              Let's join hands in giving the best quality and incredible taste to snack lovers. 
              Connect with us now to become the dealer of Gujarat's reputed brand.
            </p>
          </div> */}

          {/* Success/Error Messages */}
          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-green-800 font-semibold">
                    Message sent successfully!
                  </p>
                  <p className="text-green-700 text-sm">
                    We'll get back to you soon!
                  </p>
                </div>
              </div>
            </div>
          )}

          {submitError && (
            <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <div>
                  <p className="text-red-800 font-semibold">
                    Oops! Something went wrong
                  </p>
                  <p className="text-red-700 text-sm">{submitError}</p>
                </div>
              </div>
            </div>
          )}

          {/* Simple Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Sweet Name *"
                className="w-full px-4 py-3  bg-white text-gray-800 placeholder:text-gray-500 focus:outline-none transition-all duration-300 shadow-sm"
              />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address *"
                className="w-full px-4 py-3  bg-white text-gray-800 placeholder:text-gray-500 focus:outline-none transition-all duration-300 shadow-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select
                name="queryType"
                required
                value={formData.queryType}
                onChange={handleInputChange}
                className="w-full px-4 py-3  bg-white text-gray-800 focus:outline-none transition-all duration-300 appearance-none cursor-pointer shadow-sm"
              >
                <option value="">Query Type *</option>
                <option value="product-inquiry">Product Inquiry</option>
                <option value="wholesale-order">Wholesale Order</option>
                <option value="dealership">Dealership</option>
                <option value="custom-order">Custom Order</option>
                <option value="customer-support">Customer Support</option>
                <option value="partnership">Partnership</option>
                <option value="feedback">Feedback</option>
                <option value="other">White Label</option>
                <option value="other">Other</option>
              </select>
              <select
                name="userType"
                required
                value={formData.userType}
                onChange={handleInputChange}
                className="w-full px-4 py-3  bg-white text-gray-800 focus:outline-none transition-all duration-300 appearance-none cursor-pointer shadow-sm"
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
              className="w-full px-4 py-3  bg-white text-gray-800 placeholder:text-gray-500 focus:outline-none transition-all duration-300 shadow-sm"
            />

            <textarea
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Sweet Message *"
              className="w-full px-4 py-3 bg-white text-gray-800 placeholder:text-gray-500 focus:outline-none transition-all duration-300 resize-none shadow-sm"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-[var(--primary)] py-4 px-6 rounded-md font-bold text-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed "
              // style={{ borderRadius: "0px 0px 10px 10px" }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit
                </>
              )}
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default ContactForm;
