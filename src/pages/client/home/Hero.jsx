import React, { useEffect, useState } from "react";
import Container from "../../../components/Container";

const POSTER_IMAGES = [
  { url: "/images/website banners.png", title: "Poster 1" },
  { url: "/images/website banners.png", title: "Poster 2" },
  { url: "/images/website banners.png", title: "Poster 3" },
  // Apni sari images yahan add karo
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === POSTER_IMAGES.length - 1 ? 0 : prev + 1));
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
            className="pt-0 w-screen h-[calc(100vh-4rem)] min-h-[500px] max-h-[900px] relative overflow-hidden bg-gradient-to-br from-gray-200 via-white to-gray-200 flex items-center justify-center"
            style={{
              height: "calc(100vh - 4rem)",
              minHeight: "500px",
              maxHeight: "900px",
              paddingTop: 0,
            }}
          >
            {/* Poster Image - FULL SIZE */}
            <img
              src={poster.url}
              alt={poster.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            {/* Optional: Dark overlay on top of image, remove if not needed */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
            <Container>
              {/* <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <h2 className="mt-6 text-3xl md:text-5xl font-bold text-white drop-shadow-lg bg-black/60 px-6 py-2 rounded-lg">
                  {poster.title}
                </h2>
              </div> */}
            </Container>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Slider;
