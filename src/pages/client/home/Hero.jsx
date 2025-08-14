import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { slide } from "../../../data/slide";
import Container from "../../../components/Container";
import { Star, Zap, ArrowRight, Sparkles } from "lucide-react";
import { tr } from "framer-motion/client";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [slidesData, setSlidesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Advanced banner-style backgrounds with SVG patterns
  const getBannerStyle = (index) => {
    const styles = [
      {
        bg: "from-purple-300 via-purple-400 to-indigo-200",
        accent: "purple",
        pattern: "diagonal-waves",
      },
      {
        bg: "from-red-400 via-orange-500 to-yellow-500",
        accent: "orange",
        pattern: "hexagon-grid",
      },
      {
        bg: "from-red-500 via-red-400 to-green-400",
        accent: "rose",
        pattern: "circuit-lines",
      },
      {
        bg: "from-[#d67f85] via-rose-400 to-pink-300",
        accent: "pink",
        pattern: "organic-curves",
      },
      {
        bg: "from-yellow-400 via-amber-400 to-orange-300",
        accent: "yellow",
        pattern: "geometric-mesh",
      },
      {
bg: "from-[#0078b6] via-[#00b8e6] to-[#38d0ff]",
        accent: "blue",
        pattern: "liquid-waves",
      },
      {
        bg: "from-green-500 via-yellow-400 to-red-500",
        accent: "green",
        pattern: "neural-network",
      },
      {
        bg: "from-red-600 via-amber-300 to-green-700",
        accent: "emerald",
        pattern: "crystalline",
      },
    ];
    return styles[index] || styles[0];
  };

  // Skeleton Loader Component
  const SkeletonLoader = () => {
    return (
      <div className="relative overflow-hidden">
        <section
          className="pt-16 w-screen relative overflow-hidden bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100"
          style={{
            height: "calc(100vh - 4rem)",
            minHeight: "600px",
            maxHeight: "900px",
          }}
        >
          {/* Skeleton Background Pattern */}
          <div className="absolute inset-0 pointer-events-none">
            <svg
              className="absolute inset-0 w-full h-full opacity-30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="skeleton-pattern"
                  patternUnits="userSpaceOnUse"
                  width="40"
                  height="40"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="1"
                    fill="rgba(156,163,175,0.3)"
                    className="animate-pulse"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#skeleton-pattern)" />
            </svg>

            {/* Floating skeleton elements */}
            <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gray-300 rounded-full animate-pulse blur-sm"></div>
            <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-gray-400 rotate-45 animate-pulse"></div>
          </div>

          {/* Main Content Skeleton */}
          <div className="relative z-10 h-full flex items-center py-8 sm:py-12 lg:py-16">
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
                {/* Left Content Skeleton */}
                <div className="lg:col-span-7 order-2 lg:order-1 space-y-4 sm:space-y-8 text-center lg:text-left">
                  {/* Badge Skeleton */}
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-300 rounded-full animate-pulse">
                    <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                    <div className="w-32 h-4 bg-gray-400 rounded"></div>
                  </div>

                  {/* Title Skeleton */}
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div className="h-8 sm:h-12 bg-gray-300 rounded animate-pulse w-3/4 mx-auto lg:mx-0"></div>
                      <div className="h-6 sm:h-8 bg-gray-300 rounded animate-pulse w-1/2 mx-auto lg:mx-0"></div>
                    </div>
                    <div className="h-6 bg-gray-300 rounded animate-pulse w-2/3 mx-auto lg:mx-0"></div>

                    {/* Underline skeleton */}
                    <div className="w-24 h-1 bg-gray-300 rounded-full mx-auto lg:mx-0 animate-pulse"></div>
                  </div>

                  {/* Stats Skeleton */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-sm mx-auto lg:mx-0">
                    {[1, 2, 3].map((_, idx) => (
                      <div
                        key={idx}
                        className="text-center p-3 bg-gray-200 rounded-lg animate-pulse"
                      >
                        <div className="h-6 bg-gray-300 rounded mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto"></div>
                      </div>
                    ))}
                  </div>

                  {/* Button Skeleton */}
                  <div className="pt-2">
                    <div className="inline-flex items-center gap-3 px-10 py-4 bg-gray-300 rounded-full animate-pulse">
                      <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                      <div className="w-24 h-4 bg-gray-400 rounded"></div>
                      <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Right Image Skeleton */}
                <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center items-center">
                  <div className="relative">
                    {/* Image placeholder */}
                    <div className="w-[280px] sm:w-[320px] lg:w-[380px] xl:w-[420px] h-[280px] sm:h-[320px] lg:h-[380px] xl:h-[420px] bg-gray-300 rounded-2xl animate-pulse flex items-center justify-center">
                      {/* Simple product icon */}
                      <div className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center">
                        <div className="w-10 h-10 bg-gray-500 rounded"></div>
                      </div>
                    </div>

                    {/* Floating badges skeleton */}
                    <div className="absolute -top-4 -right-4 bg-gray-300 px-4 py-2 rounded-full animate-pulse">
                      <div className="w-16 h-4 bg-gray-400 rounded"></div>
                    </div>

                    <div className="absolute -bottom-4 -left-4 bg-gray-300 px-4 py-2 rounded-full animate-pulse">
                      <div className="w-12 h-4 bg-gray-400 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </section>
      </div>
    );
  };

  // Advanced SVG Pattern Generator
  
  // const renderAdvancedPattern = (patternType, accent) => {
  //   const svgPatterns = {
  //     "diagonal-waves": (
  //       <div className="absolute inset-0">
  //         <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
  //           <defs>
  //             <pattern id="diagonal-waves" patternUnits="userSpaceOnUse" width="60" height="60" patternTransform="rotate(45)">
  //               <path d="M0,30 Q15,10 30,30 T60,30" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none"/>
  //               <path d="M0,45 Q15,25 30,45 T60,45" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none"/>
  //             </pattern>
  //             <pattern id="stripe-overlay" patternUnits="userSpaceOnUse" width="8" height="8">
  //               <rect width="4" height="8" fill="rgba(255,255,255,0.02)"/>
  //             </pattern>
  //           </defs>
  //           <rect width="100%" height="100%" fill="url(#diagonal-waves)"/>
  //           <rect width="100%" height="100%" fill="url(#stripe-overlay)"/>
  //         </svg>
  //         {/* Animated floating elements */}
  //         <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-bounce blur-sm"></div>
  //         <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-white/15 rotate-45 animate-pulse"></div>
  //       </div>
  //     ),

  //     "hexagon-grid": (
  //       <div className="absolute inset-0">
  //         <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
  //           <defs>
  //             <pattern id="hexagon" patternUnits="userSpaceOnUse" width="50" height="43.4">
  //               <polygon points="25,2 45,14 45,36 25,48 5,36 5,14"
  //                        stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="rgba(255,255,255,0.02)"/>
  //             </pattern>
  //             <linearGradient id="stripe-grad" x1="0%" y1="0%" x2="100%" y2="100%">
  //               <stop offset="0%" stopColor="rgba(255,255,255,0.05)"/>
  //               <stop offset="50%" stopColor="transparent"/>
  //               <stop offset="100%" stopColor="rgba(255,255,255,0.05)"/>
  //             </linearGradient>
  //           </defs>
  //           <rect width="100%" height="100%" fill="url(#hexagon)"/>
  //           <rect width="100%" height="100%" fill="url(#stripe-grad)"/>
  //         </svg>
  //       </div>
  //     ),

  //     "circuit-lines": (
  //       <div className="absolute inset-0">
  //         <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
  //           <defs>
  //             <pattern id="circuit" patternUnits="userSpaceOnUse" width="40" height="40">
  //               <path d="M0,20 L10,20 L15,15 L25,15 L30,20 L40,20"
  //                     stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none"/>
  //               <path d="M20,0 L20,10 L15,15 L15,25 L20,30 L20,40"
  //                     stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none"/>
  //               <circle cx="15" cy="15" r="2" fill="rgba(255,255,255,0.15)"/>
  //               <circle cx="25" cy="25" r="1.5" fill="rgba(255,255,255,0.1)"/>
  //             </pattern>
  //             <pattern id="data-flow" patternUnits="userSpaceOnUse" width="100" height="4">
  //               <rect width="20" height="4" fill="rgba(255,255,255,0.1)" className="animate-pulse"/>
  //             </pattern>
  //           </defs>
  //           <rect width="100%" height="100%" fill="url(#circuit)"/>
  //           <rect width="100%" height="100%" fill="url(#data-flow)"/>
  //         </svg>
  //       </div>
  //     ),

  //     "organic-curves": (
  //       <div className="absolute inset-0">
  //         <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
  //           <defs>
  //             <pattern id="organic" patternUnits="userSpaceOnUse" width="80" height="60">
  //               <path d="M0,30 Q20,10 40,30 Q60,50 80,30"
  //                     stroke="rgba(255,255,255,0.12)" strokeWidth="2" fill="none"/>
  //               <path d="M-20,45 Q0,25 20,45 Q40,65 60,45 Q80,25 100,45"
  //                     stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none"/>
  //             </pattern>
  //             <radialGradient id="glow" cx="50%" cy="50%" r="50%">
  //               <stop offset="0%" stopColor="rgba(255,255,255,0.1)"/>
  //               <stop offset="100%" stopColor="transparent"/>
  //             </radialGradient>
  //           </defs>
  //           <rect width="100%" height="100%" fill="url(#organic)"/>
  //           <circle cx="20%" cy="30%" r="60" fill="url(#glow)" className="animate-pulse"/>
  //           <circle cx="80%" cy="70%" r="40" fill="url(#glow)" className="animate-pulse" style={{animationDelay: '1s'}}/>
  //         </svg>
  //       </div>
  //     ),

  //     "geometric-mesh": (
  //       <div className="absolute inset-0">
  //         <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
  //           <defs>
  //             <pattern id="mesh" patternUnits="userSpaceOnUse" width="32" height="32">
  //               <path d="M0,16 L32,16 M16,0 L16,32" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
  //               <path d="M0,8 L32,8 M0,24 L32,24 M8,0 L8,32 M24,0 L24,32"
  //                     stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
  //               <circle cx="16" cy="16" r="1" fill="rgba(255,255,255,0.1)"/>
  //             </pattern>
  //             <pattern id="diagonal-stripes" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
  //               <rect width="5" height="10" fill="rgba(255,255,255,0.02)"/>
  //             </pattern>
  //           </defs>
  //           <rect width="100%" height="100%" fill="url(#mesh)"/>
  //           <rect width="100%" height="100%" fill="url(#diagonal-stripes)"/>
  //         </svg>
  //       </div>
  //     ),

  //     "liquid-waves": (
  //       <div className="absolute inset-0">
  //         <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
  //           <defs>
  //             <pattern id="liquid" patternUnits="userSpaceOnUse" width="100" height="50">
  //               <path d="M0,25 Q25,5 50,25 T100,25 L100,50 L0,50 Z"
  //                     fill="rgba(255,255,255,0.05)" className="animate-pulse"/>
  //               <path d="M0,35 Q25,15 50,35 T100,35"
  //                     stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none"/>
  //             </pattern>
  //             <pattern id="bubbles" patternUnits="userSpaceOnUse" width="60" height="60">
  //               <circle cx="15" cy="15" r="3" fill="rgba(255,255,255,0.1)" className="animate-ping"/>
  //               <circle cx="45" cy="35" r="2" fill="rgba(255,255,255,0.08)" className="animate-ping" style={{animationDelay: '0.5s'}}/>
  //             </pattern>
  //           </defs>
  //           <rect width="100%" height="100%" fill="url(#liquid)"/>
  //           <rect width="100%" height="100%" fill="url(#bubbles)"/>
  //         </svg>
  //       </div>
  //     ),

  //     "neural-network": (
  //       <div className="absolute inset-0">
  //         <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
  //           <defs>
  //             <pattern id="network" patternUnits="userSpaceOnUse" width="80" height="80">
  //               <circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.15)"/>
  //               <circle cx="60" cy="20" r="2" fill="rgba(255,255,255,0.12)"/>
  //               <circle cx="40" cy="60" r="2" fill="rgba(255,255,255,0.1)"/>
  //               <line x1="20" y1="20" x2="60" y2="20" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
  //               <line x1="20" y1="20" x2="40" y2="60" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
  //               <line x1="60" y1="20" x2="40" y2="60" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
  //             </pattern>
  //           </defs>
  //           <rect width="100%" height="100%" fill="url(#network)"/>
  //         </svg>
  //         <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-white/20 rounded-full animate-ping"></div>
  //         <div className="absolute bottom-1/2 right-1/3 w-1 h-1 bg-white/15 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
  //       </div>
  //     ),

  //     "crystalline": (
  //       <div className="absolute inset-0">
  //         <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
  //           <defs>
  //             <pattern id="crystal" patternUnits="userSpaceOnUse" width="60" height="60">
  //               <polygon points="30,5 45,20 30,35 15,20"
  //                        stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="rgba(255,255,255,0.02)"/>
  //               <polygon points="30,25 50,25 40,45 20,45"
  //                        stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="rgba(255,255,255,0.01)"/>
  //             </pattern>
  //             <pattern id="crystal-lines" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(30)">
  //               <line x1="0" y1="10" x2="20" y2="10" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
  //             </pattern>
  //           </defs>
  //           <rect width="100%" height="100%" fill="url(#crystal)"/>
  //           <rect width="100%" height="100%" fill="url(#crystal-lines)"/>
  //         </svg>
  //         <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-white/10 rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
  //       </div>
  //     )
  //   };

  //   return svgPatterns[patternType] || svgPatterns["diagonal-waves"];
  // };

  useEffect(() => {
    const filtered = slide
      .filter((item) => item.slider === 1)
      .slice(0, 8)
      .map((item, index) => {
        const mainImage = item.images?.find(
          (img) => img.type === "main" && img.order === 1
        );

        return {
          id: item.prod_id,
          title: item.title,
          img: mainImage ? `/images/${mainImage.url}` : "",
          url: item.url || "/products",
          style: getBannerStyle(index),
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

  // Show skeleton loader while loading
  if (isLoading) {
    return <SkeletonLoader />;
  }

  if (!slidesData.length) return null;

  return (
    <div className="relative overflow-hidden">
      {/* Slide Container */}
      <div
        className="w-max h-full flex transition-all ease-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slidesData.map((slide, index) => (
          <section
            key={slide.id}
            className={`pt-16 w-screen relative overflow-hidden bg-gradient-to-br ${slide.style.bg}`}
            // style={{
            //   height: "calc(100vh - 4rem)",
            //   minHeight: "600px",
            //   maxHeight: "900px",
            // }}
          >
            {/* Advanced SVG Pattern Overlay */}
            
            {/* {renderAdvancedPattern(slide.style.pattern, slide.style.accent)} */}

            {/* Main Content Area */}
            <div className="relative z-10 h-full flex items-center py-8 sm:py-12 lg:py-16">
              <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
                  {/* Left Content Section */}
                  <div className="lg:col-span-7 order-2 lg:order-1 space-y-4 sm:space-y-8 text-center lg:text-left">
                    {/* Enhanced Badge with SVG Border */}
                    <div className="relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 ">
                      <svg
                        className="absolute inset-0 w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <linearGradient
                            id="badge-grad"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop
                              offset="0%"
                              stopColor="rgba(255,255,255,0.2)"
                            />
                            <stop
                              offset="50%"
                              stopColor="rgba(255,255,255,0.1)"
                            />
                            <stop
                              offset="100%"
                              stopColor="rgba(255,255,255,0.2)"
                            />
                          </linearGradient>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          rx="20"
                          fill="url(#badge-grad)"
                          stroke="rgba(255,255,255,0.3)"
                          strokeWidth="1"
                        />
                      </svg>
                      <Sparkles className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 text-white animate-pulse" />
                      <span className="relative z-10 text-white font-bold text-sm sm:text-base">
                        Premium Quality by Forolly
                      </span>
                    </div>

                    {/* Enhanced Title with Texture */}
                    <div className="space-y-3 sm:space-y-4 relative">
                      <h1 className="text-2xl sm:text-5xl font-black text-white leading-tight relative">
                        <span className="relative  z-10 drop-shadow-2xl">
                          {slide.title}
                        </span>
                        {/* Title Background Texture */}
                        <svg
                          className="absolute inset-0 w-full h-full opacity-10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <pattern
                              id="title-texture"
                              patternUnits="userSpaceOnUse"
                              width="20"
                              height="20"
                            >
                              <circle
                                cx="10"
                                cy="10"
                                r="1"
                                fill="white"
                                opacity="0.3"
                              />
                            </pattern>
                          </defs>
                          <rect
                            width="100%"
                            height="100%"
                            fill="url(#title-texture)"
                          />
                        </svg>
                      </h1>

                      <p className="text-sm sm:text-xl  text-white/90 font-medium">
                        India's Most Loved Toffee Brand
                      </p>

                      {/* Animated underline */}
                      <div className="relative w-20 sm:w-24 h-1 mx-auto lg:mx-0 overflow-hidden rounded-full bg-white/20">
                        <div className="absolute inset-0 bg-white/60 rounded-full animate-pulse"></div>
                        <div
                          className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-pulse"
                          style={{ animationDelay: "0.5s" }}
                        ></div>
                      </div>
                    </div>

                    {/* Enhanced Stats with SVG frames */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-sm mx-auto lg:mx-0">
                      {[
                        { value: "100%", label: "Natural" },
                        { value: "50+", label: "Flavors" },
                        { value: "5+", label: "Years" },
                      ].map((stat, idx) => (
                        <div
                          key={idx}
                          className="relative text-center p-3 group hover:scale-105 transition-transform duration-300"
                        >
                          <svg
                            className="absolute inset-0 w-full h-full"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <defs>
                              <linearGradient
                                id={`stat-grad-${idx}`}
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="rgba(255,255,255,0.15)"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="rgba(255,255,255,0.05)"
                                />
                              </linearGradient>
                            </defs>
                            <rect
                              width="100%"
                              height="100%"
                              rx="8"
                              fill={`url(#stat-grad-${idx})`}
                              stroke="rgba(255,255,255,0.2)"
                              strokeWidth="1"
                              className="group-hover:stroke-white/40 transition-colors duration-300"
                            />
                          </svg>
                          <div className="relative z-10">
                            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                              {stat.value}
                            </div>
                            <div className="text-xs sm:text-sm text-white/80">
                              {stat.label}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Enhanced CTA Button with SVG animation */}
                    <div className="pt-2">
                      <NavLink to={slide.url}>
                        <button
                          className="relative px-8 py-3 sm:px-10 sm:py-4 font-black text-base sm:text-lg rounded-2xl group overflow-hidden bg-gray-200 text-gray-800 transition-all duration-300 z-10"
                        
                        >
                             <svg
                        className="absolute inset-0 w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <linearGradient
                            id="badge-grad"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop
                              offset="0%"
                              stopColor="rgba(255,255,255,0.2)"
                            />
                            <stop
                              offset="50%"
                              stopColor="rgba(255,255,255,0.1)"
                            />
                            <stop
                              offset="100%"
                              stopColor="rgba(255,255,255,0.2)"
                            />
                          </linearGradient>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          rx="20"
                          fill="url(#badge-grad)"
                          stroke="rgba(255,255,255,0.3)"
                          strokeWidth="1"
                        />
                      </svg>
                          {/* Text Content */}
                          <span className="relative z-10 text-[var(--primary)] group-hover:text-gray-200 transition-colors duration-300">
                            Explore More
                          </span>

                          {/* Background Animation Layer */}
                          <span
                            className="absolute top-0 left-0 h-full w-0 bg-[var(--primary)] rounded-2xl transition-all duration-300 group-hover:w-full -z-10"
                            style={{
                              boxShadow: "4px 8px 19px -3px rgba(0,0,0,0.27)",
                              WebkitBoxShadow:
                                "4px 8px 19px -3px rgba(0,0,0,0.27)",
                            }}
                          ></span>
                        </button>
                      </NavLink>
                    </div>
                  </div>

                  {/* Right Image Section with Advanced Frame */}
                  <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center items-center">
                    <div className="relative group">
                      {/* Advanced SVG Frame */}
                      {/* <svg
                        className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)]"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <radialGradient
                            id="frame-glow"
                            cx="50%"
                            cy="50%"
                            r="50%"
                          >
                            <stop
                              offset="0%"
                              stopColor="rgba(255,255,255,0.2)"
                            />
                            <stop offset="100%" stopColor="transparent" />
                          </radialGradient>
                          <pattern
                            id="frame-pattern"
                            patternUnits="userSpaceOnUse"
                            width="20"
                            height="20"
                          >
                            <circle
                              cx="10"
                              cy="10"
                              r="1"
                              fill="rgba(255,255,255,0.1)"
                            />
                          </pattern>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          rx="20"
                          fill="url(#frame-glow)"
                          stroke="rgba(255,255,255,0.2)"
                          strokeWidth="2"
                        />
                        <rect
                          width="100%"
                          height="100%"
                          rx="20"
                          fill="url(#frame-pattern)"
                        />
                      </svg> */}

                      <img
                        src={slide.img}
                        alt={slide.title}
                        loading="lazy"
                        width="400"
                        height="400"
                        className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] xl:max-w-[420px] h-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Enhanced Floating Badges with SVG */}
                      <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-xl border border-white/30 ">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
                        Premium
                      </div>

                      <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-xl border border-white/30 ">
                        <Zap className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
                        Fresh
                      </div>

                      {/* Advanced Glow Effects */}
                      <div className="absolute inset-0 bg-white/5 rounded-3xl blur-2xl group-hover:bg-white/10 transition-all duration-500 -z-10 animate-pulse"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/2 via-white/5 to-white/2 rounded-3xl blur-xl group-hover:scale-110 transition-all duration-700 -z-20"></div>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Slider;
