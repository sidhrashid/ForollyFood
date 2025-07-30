import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { slide } from "../../../data/slide";
import Container from "../../../components/Container";
import { Calendar, Clock, Star, Zap } from "lucide-react";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [slidesData, setSlidesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const filtered = slide
      .filter((item) => item.slider === 1)
      .map((item) => {
        const mainImage = item.images?.find(
          (img) => img.type === "main" && img.order === 1
        );

        return {
          id: item.prod_id,
          title: item.title,
          img: mainImage ? `/images/${mainImage.url}` : "",
          url: item.url || "/products",
          bg:
            item.bg ||
            "bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50",
        };
      });

    setSlidesData(filtered);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (slidesData.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [slidesData]);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  if (isLoading) {
    return (
      <div className="pt-16 h-[80vh] flex items-center justify-center bg-[var(--secondary)]">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-[var(--primary)] border-t-transparent"></div>
      </div>
    );
  }

  if (!slidesData.length) return null;

  return (
    <>
      <section className="pt-16 scrollable-section  relative overflow-hidden bg-[var(--primary)] py-5">
        {/* Enhanced Background Pattern - Themed */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Themed Pattern Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/15 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute top-1/3 right-20 w-24 h-24 bg-white/20 rounded-full blur-lg animate-bounce-gentle"></div>
          <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse-soft"></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 bg-white/15 rounded-full blur-md animate-float-reverse"></div>

          {/* Brand Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 border-4 border-white/20 rounded-full animate-spin-ultra-slow"></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 border-2 border-white/15 rounded-full animate-reverse-spin-slow"></div>
          </div>
        </div>

        {/* Slide Container */}
        <div
          className="w-max h-full flex transition-all ease-out duration-1000"
          style={{ transform: `translateX(-${current * 100}vw)` }}
        >
          {slidesData.map((slide, index) => (
            <div
              key={slide.id}
              className="w-screen h-full flex items-center relative"
            >
              {/* Themed Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/15 via-transparent to-black/5"></div>

              <Container>
                {/* Mobile First Layout - Image Top, Text Bottom */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 h-full py-4 lg:py-8 relative z-10">
                  {/* Image Section - Order 1 on Mobile, Order 2 on Desktop */}
                  <div className="flex justify-center lg:justify-end items-center relative animate-slide-in-right order-1 lg:order-2">
                    <div className="relative group">
                      {/* Multi-layer Glow Effect - Themed */}
                      <div className="absolute inset-0 bg-white/20 rounded-3xl blur-3xl group-hover:blur-4xl transition-all duration-700 animate-pulse-gentle"></div>
                      <div className="absolute inset-0 bg-white/15 rounded-3xl blur-2xl group-hover:scale-110 transition-all duration-700"></div>

                      {/* Glass Morphism Container - Mobile Responsive */}
                      <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-8 sm:p-4 lg:p-6 border border-white/30 shadow-2xl hover:shadow-white/20 transition-all duration-700 hover:scale-105 hover:bg-white/15 hover:border-white/40 group-hover:backdrop-blur-3xl">
                        {/* Inner Glass Layer */}
                        <div className="absolute inset-1 sm:inset-2 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20"></div>

                        <img
                          src={slide.img}
                          alt={slide.title}
                          className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px] h-auto object-contain relative z-10 drop-shadow-2xl group-hover:drop-shadow-3xl transition-all duration-500 group-hover:scale-105"
                        />

                        {/* Enhanced Quality Badges - Mobile Responsive */}
                        <div className="absolute top-2 right-2 lg:top-4 lg:right-4 bg-white text-[var(--primary)] px-2 py-1 lg:px-3 lg:py-1 rounded-full text-xs font-bold shadow-lg animate-float-badge backdrop-blur-sm border border-white/20 flex items-center justify-center">
                          <Star className="w-3 h-3 inline mr-1" />
                          Premium
                        </div>

                        <div className="absolute bottom-2 left-2 lg:bottom-4 lg:left-4 bg-white text-[var(--primary)] px-2 py-1 lg:px-3 lg:py-1 rounded-full text-xs font-bold shadow-lg animate-float-badge-reverse backdrop-blur-sm border border-white/20 flex items-center justify-center">
                          <Zap className="w-3 h-3 inline mr-1" />
                          Fresh Daily
                        </div>

                        {/* Enhanced Decorative Elements */}
                        <div className="absolute -top-1 -left-1 lg:-top-2 lg:-left-2 w-3 h-3 lg:w-5 lg:h-5 bg-white/60 rounded-full animate-ping-slow shadow-lg"></div>
                        <div className="absolute -bottom-1 -right-1 lg:-bottom-2 lg:-right-2 w-2 h-2 lg:w-3 lg:h-3 bg-white/60 rounded-full animate-ping-slow delay-1000 shadow-lg"></div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section - Order 2 on Mobile, Order 1 on Desktop */}
                  <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-4 lg:space-y-6 animate-slide-in-left order-2 lg:order-1">
                    {/* Enhanced Brand Badge - Mobile Responsive */}
                    <div className="inline-flex items-center gap-2 lg:gap-3 px-4 py-2 lg:px-6 lg:py-3 bg-white/95 backdrop-blur-md text-[var(--primary)] text-xs lg:text-sm font-semibold rounded-full shadow-2xl border border-white/40 hover:scale-105 hover:bg-white transition-all duration-500">
                      <div className="w-2 h-2 lg:w-3 lg:h-3 bg-[var(--primary)] rounded-full animate-pulse-gentle"></div>
                      Premium Quality by Forolly
                    </div>

                    {/* Animated Title - Mobile Responsive */}
                    <div className="relative text-center">
                      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-[300px] sm:max-w-[400px] lg:max-w-[600px] mx-auto lg:mx-0 drop-shadow-2xl animate-text-shimmer text-center">
                        <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent truncate ">
                          {slide.title}
                        </span>
                      </h1>
                    </div>

                    {/* Enhanced Description - Mobile Responsive */}
                    <p className="text-sm sm:text-base lg:text-lg text-white/95 max-w-[350px] sm:max-w-[370px] lg:max-w-[450px] leading-relaxed mx-auto lg:mx-0 drop-shadow-lg animate-fade-in-up   ">
                      Experience the authentic taste of India's finest
                      confectionery. From traditional toffees to modern treats,
                      every bite tells a story of quality and love.
                    </p>

                    {/* Animated Stats - Mobile Responsive */}
                    <div className="flex items-center gap-4 lg:gap-6 text-center lg:text-left animate-stats-slide">
                      <div className="space-y-1 hover:scale-110 transition-transform duration-300">
                        <div className="text-lg lg:text-xl font-bold text-white drop-shadow-lg">
                          100%
                        </div>
                        <div className="text-xs text-white/80">Natural</div>
                      </div>
                      <div className="w-px h-8 lg:h-10 bg-white/40"></div>
                      <div className="space-y-1 hover:scale-110 transition-transform duration-300">
                        <div className="text-lg lg:text-xl font-bold text-white drop-shadow-lg">
                          50+
                        </div>
                        <div className="text-xs text-white/80">Flavors</div>
                      </div>
                      <div className="w-px h-8 lg:h-10 bg-white/40"></div>
                      <div className="space-y-1 hover:scale-110 transition-transform duration-300">
                        <div className="text-lg lg:text-xl font-bold text-white drop-shadow-lg">
                          5+
                        </div>
                        <div className="text-xs text-white/80">Years</div>
                      </div>
                    </div>

                    {/* Enhanced CTA Button - Mobile Responsive */}
                    <NavLink to={slide.url} className="group">
                      <button className="relative px-6 py-3 lg:px-8 lg:py-3 bg-white text-[var(--primary)] font-bold rounded-full shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-110 active:scale-95 overflow-hidden border border-white/50 animate-button-glow text-sm lg:text-base">
                        <span className="relative z-10 flex items-center gap-2">
                          Taste the Magic
                          <svg
                            className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-2 transition-transform duration-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </span>
                        <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </button>
                    </NavLink>
                  </div>
                </div>
              </Container>
            </div>
          ))}
        </div>

        {/* Enhanced Progress Bar - Themed */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-white/20 backdrop-blur-sm">
          <div
            className="h-full bg-white/80 transition-all duration-4500 ease-linear shadow-lg animate-progress-glow"
            style={{ width: `${((current + 1) / slidesData.length) * 100}%` }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default Slider;
