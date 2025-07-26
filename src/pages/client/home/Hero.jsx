import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { slide } from "../../../data/slide";
import Container from "../../../components/Container";

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
          img: mainImage ? `src/assets/images/${mainImage.url}` : "",
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
      <div className="pt-16 h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-red-500 border-t-transparent"></div>
      </div>
    );
  }

  if (!slidesData.length) return null;

  return (
    <>
      <section className="pt-16 relative overflow-hidden bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Candy Pattern */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/15 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute top-1/3 right-20 w-24 h-24 bg-yellow-300/25 rounded-full blur-lg animate-bounce-gentle"></div>
          <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-red-400/20 rounded-full blur-2xl animate-pulse-soft"></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 bg-orange-300/20 rounded-full blur-md animate-float-reverse"></div>

          {/* Food Swirl Pattern */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 border-4 border-white/30 rounded-full animate-spin-ultra-slow"></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 border-2 border-yellow-200/50 rounded-full animate-reverse-spin-slow"></div>
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
              className="w-screen pb-14 pt-10 flex items-center relative"
            >
              {/* Smooth Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/15 via-transparent to-red-900/10"></div>

              <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative z-10">
                  {/* Left Side - Content */}
                  <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-8 animate-slide-in-left">
                    {/* Enhanced Brand Badge */}
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-md text-red-600 text-sm font-semibold rounded-full shadow-2xl border border-white/40 hover:scale-105 hover:bg-white transition-all duration-500 hover:shadow-red-200/50">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse-gentle"></div>
                      Premium Quality by Forolly
                    </div>

                    {/* Animated Title */}
                    <div className="relative">
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-[600px] mx-auto lg:mx-0 drop-shadow-2xl animate-text-shimmer">
                        <span className="bg-gradient-to-r from-yellow-100 via-white to-orange-100 bg-clip-text text-transparent">
                          {slide.title}
                        </span>
                      </h1>
                      {/* Animated Decorative Underline */}
                      {/* <div className="absolute -bottom-4 left-0 flex gap-2">
                        <div className="w-8 h-2 bg-yellow-400 rounded-full animate-expand-1"></div>
                        <div className="w-6 h-2 bg-orange-400 rounded-full animate-expand-2"></div>
                        <div className="w-4 h-2 bg-red-400 rounded-full animate-expand-3"></div>
                      </div> */}
                    </div>

                    {/* Enhanced Description */}
                    <p className="text-xl text-white/95 max-w-[500px] leading-relaxed mx-auto lg:mx-0 drop-shadow-lg animate-fade-in-up">
                      Experience the authentic taste of India's finest
                      confectionery. From traditional toffees to modern treats,
                      every bite tells a story of quality and love.
                    </p>

                    {/* Animated Stats */}
                    <div className="flex items-center gap-8 text-center lg:text-left animate-stats-slide">
                      <div className="space-y-1 hover:scale-110 transition-transform duration-300">
                        <div className="text-2xl font-bold text-white drop-shadow-lg">
                          100%
                        </div>
                        <div className="text-sm text-white/80">Natural</div>
                      </div>
                      <div className="w-px h-12 bg-white/40"></div>
                      <div className="space-y-1 hover:scale-110 transition-transform duration-300">
                        <div className="text-2xl font-bold text-white drop-shadow-lg">
                          50+
                        </div>
                        <div className="text-sm text-white/80">Flavors</div>
                      </div>
                      <div className="w-px h-12 bg-white/40"></div>
                      <div className="space-y-1 hover:scale-110 transition-transform duration-300">
                        <div className="text-2xl font-bold text-white drop-shadow-lg">
                          25+
                        </div>
                        <div className="text-sm text-white/80">Years</div>
                      </div>
                    </div>

                    {/* Enhanced CTA Button */}
                    <NavLink to={slide.url} className="group">
                      <button className="relative px-8 py-4 bg-white text-red-600 font-bold rounded-full shadow-2xl hover:shadow-red-300/40 transition-all duration-500 hover:scale-110 active:scale-95 overflow-hidden border border-white/50 hover:border-yellow-300 animate-button-glow">
                        <span className="relative z-10 flex items-center gap-2">
                          🍬 Taste the Magic
                          <svg
                            className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500"
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
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </button>
                    </NavLink>
                  </div>

                  {/* Right Side - Enhanced Glass Product Container */}
                  <div className="flex justify-center lg:justify-end items-center relative animate-slide-in-right">
                    <div className="relative group">
                      {/* Multi-layer Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/40 to-red-400/40 rounded-3xl blur-3xl group-hover:blur-4xl transition-all duration-700 animate-pulse-gentle"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-300/30 to-yellow-300/30 rounded-3xl blur-2xl group-hover:scale-110 transition-all duration-700"></div>

                      {/* Glass Morphism Container */}
                      <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/30 shadow-2xl hover:shadow-orange-500/30 transition-all duration-700 hover:scale-105 hover:bg-white/15 hover:border-white/40 group-hover:backdrop-blur-3xl">
                        {/* Inner Glass Layer */}
                        <div className="absolute inset-2 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20"></div>
                        
                        <img
                          src={slide.img}
                          alt={slide.title}
                          className="w-full max-w-[400px] lg:max-w-[500px] h-auto object-contain relative z-10 drop-shadow-2xl group-hover:drop-shadow-3xl transition-all duration-500 group-hover:scale-105"
                        />

                        {/* Enhanced Quality Badges */}
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-float-badge backdrop-blur-sm border border-white/20">
                          ⭐ Premium
                        </div>

                        <div className="absolute bottom-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-float-badge-reverse backdrop-blur-sm border border-white/20">
                          🎯 Fresh Daily
                        </div>

                        {/* Enhanced Decorative Elements */}
                        <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-400/80 rounded-full animate-ping-slow shadow-lg"></div>
                        <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-red-400/80 rounded-full animate-ping-slow delay-1000 shadow-lg"></div>
                        <div className="absolute top-1/2 -right-3 w-3 h-3 bg-orange-400/70 rounded-full animate-pulse-gentle delay-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          ))}
        </div>

        {/* Enhanced Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-xl border border-white/30 text-white p-3 rounded-full hover:bg-white/30 hover:border-white/50 transition-all duration-500 hover:scale-125 z-20 group shadow-xl hover:shadow-white/20"
        >
          <svg
            className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-xl border border-white/30 text-white p-3 rounded-full hover:bg-white/30 hover:border-white/50 transition-all duration-500 hover:scale-125 z-20 group shadow-xl hover:shadow-white/20"
        >
          <svg
            className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Enhanced Dots with Glass Effect */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-8 flex gap-4 z-20">
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-500 hover:scale-125 ${
                current === index
                  ? "w-12 h-3 bg-gradient-to-r from-red-400 to-orange-400 rounded-full shadow-xl border border-white/30 backdrop-blur-sm"
                  : "w-3 h-3 bg-white/40 backdrop-blur-sm rounded-full hover:bg-white/60 shadow-lg border border-white/20"
              }`}
            >
              {current === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/50 to-red-300/50 rounded-full animate-pulse-gentle backdrop-blur-sm"></div>
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-white/20 backdrop-blur-sm">
          <div
            className="h-full bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 transition-all duration-4500 ease-linear shadow-lg animate-progress-glow"
            style={{ width: `${((current + 1) / slidesData.length) * 100}%` }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default Slider;
