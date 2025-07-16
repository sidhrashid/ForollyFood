import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { slide } from "../../../data/slide";
import Container from "../../../components/Container";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [slidesData, setSlidesData] = useState([]);

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
        img: mainImage ? `src/assets/images/${mainImage.url}` : "", // ✅ image path
        url: item.url || "/products",
        bg: item.bg || "bg-white",
      };
    });

  setSlidesData(filtered);
}, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [slidesData]);

  if (!slidesData.length) return null;

  return (
    <section className="pt-16 bg-[#f9f9f9] relative overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slidesData.map((slide) => (
          <div
            key={slide.id}
            className={`${slide.bg} w-screen flex items-center`}
          >
            <Container>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                {/* Left Side - Text */}
                <div className="flex flex-col justify-center items-center md:items-center text-center md:text-left space-y-6">
                  {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary)] text-white text-xs rounded-full tracking-wide">
                    #Exclusive Offer
                  </div> */}

                 <div className="items-center">
                   <h1 className="heading-1 max-w-[340px] mx-auto md:mx-0 text-center">
                    {slide.title}
                  </h1>
                 </div>

                  <p className="paragraph max-w-[400px] text-center mx-auto md:mx-0">
                    Discover unbeatable deals & handpicked products just for
                    you.
                  </p>

                  <NavLink to={slide.url}>
                    <button className=" cursor-pointer px-6 py-3 bg-[var(--primary)] text-white rounded-md hover:bg-[#a11a23] transition">
                  Explore More
                    </button>
                  </NavLink>
                </div>

                {/* Right Side - Image */}
                <div className="flex justify-center md:justify-end items-center relative">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full max-w-[450px] md:max-w-[500px] h-auto object-contain"
                  />

                  <div className="absolute bottom-4 right-4 bg-white shadow-md px-4 py-2 rounded-md text-xs text-gray-700 font-medium hidden md:block">
                    ✨ Trusted by 10K+ Happy Customers
                  </div>
                </div>
              </div>
            </Container>
          </div>
        ))}
      </div>

      {/* Dots */}
      {/* <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex gap-3 z-10">
        {slidesData.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              current === index
                ? "bg-[var(--primary)] scale-125"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div> */}
    </section>
  );
};

export default Slider;
