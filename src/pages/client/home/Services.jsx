import React from "react";
import {
  Wrench,
  Recycle,
  Leaf,
  BarChart3,
  Lightbulb,
  Battery,
  ArrowRight,
} from "lucide-react";
import RevealWrapper from "../../../components/RevealWrapper"; // 👈 wrapper
// import Seo from "../../../components/Seo";
import { NavLink } from "react-router-dom";

const Services = () => {
  const services = [
    { id: "01", title: "PowerSun Assistance", icon: Wrench },
    { id: "02", title: "SolarEdge Services", icon: Recycle },
    { id: "03", title: "BrightSun Support", icon: Leaf },
    { id: "04", title: "Sun Gust Energy", icon: BarChart3 },
    { id: "05", title: "WindVista Solutions", icon: Lightbulb },
    { id: "06", title: "SolarCrest Services", icon: Battery },
  ];

  const bgColor = "bg-[#F8F7F0]";
  const iconBg = "bg-white";
const textColor = "text-[var(--primary)]";

  return (
    <>
      {/* <Seo
        title="Services - Himsun Solar Energy"
        description="Know more about our services in solar energy by Himsun Solar Energy."
        keywords="solar energy, about us, Himsun Solar Energy"
        canonical="https://solar-sidhrashids-projects.vercel.app/services"
      /> */}
      <div className="md:py-20 pt-10 md:px-12 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <RevealWrapper
            direction="up"
            delay={0.1}
            viewport={{ once: false, amount: 0.3 }}
            triggerOnLoad={true}
            className="text-center mb-16"
          >
            <div className="font-secondary inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-[var(--primary)] rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-2"></span>
              OUR SERVICES
            </div>
            <h1 className="sm:text-[48px] text-[25px] sm:text-xl font-semibold text-gray-900 leading-tight">
              Unlock The Potential Of The{" "}
              <br/>
              <span className="">Sun With Solar Energy!</span>
            </h1>
          </RevealWrapper>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;

              return (
                <RevealWrapper
                  key={service.id}
                  direction="up"
                  delay={0.1 * index}
                  triggerOnLoad={true}
                >
                  <div
                    className={`${bgColor} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group`}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`${iconBg} w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className={`w-8 h-8 ${textColor}`} />
                      </div>
                      <span
                        className={`text-2xl font-bold ${textColor} opacity-60`}
                      >
                        {service.id}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {service.title}
                    </h3>

                    <NavLink to="/services">
                      <div className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300">
                        <span className="text-sm font-medium mr-2">
                          Read More
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </NavLink>
                  </div>
                </RevealWrapper>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;


