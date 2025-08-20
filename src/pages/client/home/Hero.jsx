import React, { useEffect, useState } from "react";
import Container from "../../../components/Container";

// Apni poster images yahan daal lo
const POSTER_IMAGES = [
  { url: "/images/website banners.png", title: "Poster 1" },
  { url: "/images/website banners2.png", title: "Poster 2" },
  { url: "/images/website banners.png", title: "Poster 3" },
  // Apni sari images yahan add karo
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === POSTER_IMAGES.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {POSTER_IMAGES.map((poster, idx) => (
          <section
            key={idx}
            className="pt-23 sm:pt-0 w-screen  relative overflow-hidden bg-gradient-to-br from-gray-200 via-white to-gray-200 flex items-center justify-center"
          >
            {/* Sidha Poster Image */}
            <img
              src={poster.url}
              alt={poster.title}
              className=" w-full h-full object-contain"
              loading="lazy"
            />
          </section>
        ))}
      </div>
    </div>
  );
};

export default Slider;
