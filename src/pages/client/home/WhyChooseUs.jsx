import React, { useRef, useState, useEffect } from "react";
import Container from "../../../components/Container";
import { Star, Leaf, Heart, Award, Shield } from "lucide-react";

const features = [
  {
    icon: (
      <Star className="w-6 h-6 text-yellow-500 group-hover:text-white transition-colors duration-500" />
    ),
    title: "Premium Quality",
    desc: "We use only the finest ingredients sourced from trusted suppliers for authentic taste.",
  },
  {
    icon: (
      <Leaf className="w-6 h-6 text-green-500 group-hover:text-white transition-colors duration-500" />
    ),
    title: "100% Natural",
    desc: "No artificial colors or preservatives just pure, natural confectionery goodness.",
  },
  {
    icon: (
      <Shield className="w-6 h-6 text-purple-500 group-hover:text-white transition-colors duration-500" />
    ),
    title: "Quality Assured",
    desc: "Strict quality control and hygiene standards in every step of production.",
  },
  {
    icon: (
      <Award className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors duration-500" />
    ),
    title: "Trusted Excellence",
    desc: "Since 2020, we've been serving millions of happy customers with our commitment to quality.",
  },
];

const WhyChooseUs = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const cardWidth = 280;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const cardWidth = 280;
        const newIndex = Math.round(scrollLeft / cardWidth);
        setActiveIndex(Math.min(newIndex, features.length - 1));
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
      return () => scrollElement.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="relative py-10  bg-[var(--secondary)] text-gray-800 overflow-hidden flex items-center">
     

      <Container>
        <div className="flex flex-col h-full justify-center">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12 relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold text-[var(--primary)] mb-4">
              Why Choose Forolly
            </h2>
            <div className="w-14 h-1 bg-[var(--primary)] rounded-full mx-auto mb-4" />
            <p className="text-gray-600 max-w-md mx-auto text-sm sm:text-base px-4">
              Discover what makes Forolly India's most trusted confectionery
              brand
            </p>
          </div>

          {/* Desktop and Tablet layout */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative z-10">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md border border-white/60 hover:shadow-xl hover:border-[var(--primary)]/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl z-0" />
                <div className="relative z-10 flex flex-col h-full text-center">
                  <div className="mb-4 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mx-auto group-hover:bg-white/20 transition-all duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[var(--dark)] mb-2 group-hover:text-white transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-white/95 transition-all duration-300 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile layout */}
          <div className="block md:hidden relative z-10 w-full">
            {/* Mobile Horizontal Scrollable Cards */}
            <div className="overflow-x-auto scrollbar-hide px-4 pb-2">
              <div
                ref={scrollRef}
                className="flex gap-4 snap-x snap-mandatory scroll-smooth w-max"
              >
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="group snap-start flex-shrink-0 w-[260px] bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-md border border-white/60 hover:shadow-lg transition-all duration-300 cursor-pointer relative"
                  >
                    <div className="absolute inset-0 bg-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl z-0" />
                    <div className="relative z-10 flex flex-col h-full text-center">
                      <div className="mb-2 group-hover:scale-105 transition-transform duration-300">
                        <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center mx-auto group-hover:bg-white/20 transition-all duration-300">
                          {feature.icon}
                        </div>
                      </div>
                      <h3 className="text-sm font-bold text-[var(--dark)] mb-2 group-hover:text-white transition-all duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed group-hover:text-white/95 transition-all duration-300 flex-grow line-clamp-3">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hide scrollbar style */}
            <style jsx>{`
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
