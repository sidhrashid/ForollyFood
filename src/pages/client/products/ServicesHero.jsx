import { PhoneCall, Wrench, ShieldCheck, ScanLine } from "lucide-react";
import { NavLink } from "react-router-dom";
import RevealWrapper from "../../../components/RevealWrapper";

const services = [
  {
    icon: <PhoneCall className="w-8 h-8 text-[var(--primary)]" />,
    title: "Solar Panel Installation",
    desc: "Professional solar panel installation tailored for homes and businesses with maximum efficiency and safety.",
  },
  {
    icon: <Wrench className="w-8 h-8 text-[var(--primary)]" />,
    title: "Maintenance & Repair",
    desc: "Regular maintenance and emergency repair services to ensure long-term performance and safety.",
  },
  {
    icon: <ScanLine className="w-8 h-8 text-[var(--primary)]" />,
    title: "Energy Audit & Consulting",
    desc: "Detailed analysis of your energy usage and recommendations for optimizing your solar setup.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[var(--primary)]" />,
    title: "Safety & Compliance",
    desc: "Ensuring all installations meet industry safety standards and local government regulations.",
  },
];
const whatsappLink =
  "https://wa.me/919978690559?text=Hello%2C%0A%0AI%E2%80%99m%20interested%20in%20installing%20a%20solar%20power%20system%20for%20my%20home%2Fbusiness.%20Could%20you%20please%20provide%20me%20with%20more%20details%20about%20your%20products%2C%20pricing%2C%20and%20installation%20process%3F%0A%0ALooking%20forward%20to%20your%20response.%0A%0AThank%20you%21";

const ServicesHero = () => {
  return (
    <section className="bg-gray-50 md:py-24 md:pt-24 pt-28 md:px-12 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <RevealWrapper
        triggerOnLoad={true}
        className="text-center mb-12 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600">
          We offer a full range of solar energy solutions — from installation to
          ongoing support.
        </p>
      </RevealWrapper>

      {/* Services Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <RevealWrapper
            key={index}
            direction="up"
            delay={index * 0.1}
            triggerOnLoad={true}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600">{service.desc}</p>
          </RevealWrapper>
        ))}
      </div>

      {/* Help Box */}
      <div className="bg-[var(--primary)] text-white mt-16 p-6 md:p-10 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-1">
            Need Help Choosing a Service?
          </h3>
          <p className="text-sm md:text-base">
            Talk to our solar experts and find the perfect solution for your
            needs.
          </p>
        </div>
        <NavLink
          to={whatsappLink}
            target="_blank"

          className="flex items-center gap-2 bg-white text-[var(--primary)] font-medium px-5 py-2 rounded-full hover:bg-gray-100 transition"
        >
          <PhoneCall className="w-5 h-5" />
          Contact Us
        </NavLink>
      </div>
    </section>
  );
};

export default ServicesHero;
