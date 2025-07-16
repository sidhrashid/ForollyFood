import React from "react";
import Container from "../../../components/Container";
import { CheckCircle, Leaf, Heart, Truck } from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="w-8 h-8 text-amber-600" />,
    title: "Premium Ingredients",
    desc: "We use only the finest cocoa and natural flavors in every bite.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-green-600" />,
    title: "100% Natural",
    desc: "No preservatives or artificial flavors — just pure goodness.",
  },
  {
    icon: <Heart className="w-8 h-8 text-pink-500" />,
    title: "Handcrafted with Love",
    desc: "Every chocolate is handmade by passionate chocolatiers.",
  },
  {
    icon: <Truck className="w-8 h-8 text-orange-500" />,
    title: "Fast Delivery",
    desc: "We ensure quick and safe delivery to your doorstep.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50 text-gray-800 overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="text-center mb-14 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-rose-500 bg-clip-text text-transparent mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Discover what makes our chocolate brand stand out from the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-md hover:shadow-xl transition-all hover:scale-105 duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-center text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
