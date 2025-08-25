import React, { useEffect, useState } from "react";
import logo from "../../../assets/images/logo.webp"; 
import poster1 from '../../../assets/images/websiteBanners.png';
import poster2 from '../../../assets/images/website banners2.png';
import poster3 from '../../../assets/images/BANNER6.png';
import poster4 from '../../../assets/images/BANNER4.png';
import poster5 from '../../../assets/images/BANNER5.png';
import poster6 from '../../../assets/images/BANNER3.png';

// import poster1 from '../../../assets/images/websiteBanners.png';
// import poster1 from '../../../assets/images/websiteBanners.png';
// import poster1 from '../../../assets/images/websiteBanners.png';
// import poster1 from '../../../assets/images/websiteBanners.png';
// import poster1 from '../../../assets/images/websiteBanners.png';
// import poster1 from '../../../assets/images/websiteBanners.png';
// Desktop poster images
const POSTER_IMAGES = [
  { src: poster1, title: "Poster 1" },
  { src: poster2, title: "Poster 2" },
  { src: poster3, title: "Poster 3" },
  { src: poster4, title: "Poster 4" },
  { src: poster5, title: "Poster 5" },
  { src: poster6, title: "Poster 6" },
];

// Mobile-specific poster images  
// const MOBILE_POSTER_IMAGES = [
//   { src: "../../../assets/images/BANNER1M.png", title: "Mobile Poster 1" },
//   { src: "../../../assets/images/BANNER6M.png", title: "Mobile Poster 6" },
//   { src: "../../../assets/images/BANNER2M.png", title: "Mobile Poster 2" },
//   { src: "../../../assets/images/BANNER4M.png", title: "Mobile Poster 4" },
//   { src: "../../../assets/images/BANNER5M.png", title: "Mobile Poster 5" },
//   { src: "../../../assets/images/BANNER3M.png", title: "Mobile Poster 3" },
// ];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 500ms skeleton timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Get appropriate images based on device
  const currentImages = isMobile ? MOBILE_POSTER_IMAGES : POSTER_IMAGES;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!showSkeleton) {
        setCurrent((prev) =>
          prev === currentImages.length - 1 ? 0 : prev + 1
        );
      }
    }, 4500);
    return () => clearInterval(interval);
  }, [currentImages.length, showSkeleton]);

  // Enhanced Skeleton Component with Welcome Message & Logo
  const SkeletonLoader = () => (
    <div className="w-full h-full bg-gradient-to-br from-[var(--primary)] via-pink-400 to-red-400 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-10 left-10 w-32 h-32 bg-white/30 rounded-full animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-24 h-24 bg-white/20 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/25 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="text-center space-y-6 z-10">
        {/* Logo with Glow Effect */}
        <div className="relative">
          <img
            src={logo}
            alt="Forolly Logo"
            className="h-18 w-auto object-contain"
            style={{
              filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 40px rgba(255, 182, 193, 0.6))",
              animation: "logoGlow 2s ease-in-out infinite alternate",
            }}
          />
          {/* Pulsing Ring Around Logo */}
          <div className="absolute inset-0 w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full border-4 border-white/40 animate-ping"></div>
        </div>

        {/* Welcome Message */}
        {/* <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white drop-shadow-2xl tracking-wide">
            Welcome to
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-yellow-200 drop-shadow-2xl tracking-wider animate-pulse">
            Forolly Food
          </h2>
          <p className="text-lg sm:text-xl text-white/90 font-semibold drop-shadow-lg mt-4">
            India's Most Loved Toffee Brand
          </p>
        </div> */}

        {/* Loading Animation */}
        <div className="flex justify-center space-x-2 mt-8">
          <div
            className="w-3 h-3 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-3 h-3 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-3 h-3 bg-white rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>
      </div>

      {/* CSS Styles for Glow Animation */}
      <style jsx>{`
        @keyframes logoGlow {
          0% {
            filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.8))
              drop-shadow(0 0 40px rgba(255, 182, 193, 0.6));
            transform: scale(1);
          }
          100% {
            filter: drop-shadow(0 0 30px rgba(255, 255, 255, 1))
              drop-shadow(0 0 60px rgba(255, 182, 193, 0.9));
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );

  // Show skeleton for 500ms - Full Screen
  if (showSkeleton) {
    return (
      <div className="relative overflow-hidden">
        <section className="w-screen h-screen relative overflow-hidden flex items-center justify-center">
          <SkeletonLoader />
        </section>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {currentImages.map((poster, idx) => (
          <section
            key={idx}
            className="pt-16 sm:pt-0 w-screen h-full relative overflow-hidden flex items-center justify-center"
          >
            {/* Full Screen Poster Image */}
            <img
              src={poster.src}
              alt={poster.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </section>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {currentImages.map((_, dotIdx) => (
          <button
            key={dotIdx}
            className={`
              w-2 h-2 rounded-full transition-all duration-300 cursor-pointer
              ${
                current === dotIdx
                  ? "bg-white shadow-lg scale-110"
                  : "bg-white/60 hover:bg-white/80 hover:scale-105"
              }
            `}
            onClick={() => setCurrent(dotIdx)}
            aria-label={`Go to slide ${dotIdx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
