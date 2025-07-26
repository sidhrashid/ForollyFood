import React, { useEffect, useState } from "react";
import Container from "../../../components/Container";
import { slide } from "../../../data/slide";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  // Filter & shuffle products
  useEffect(() => {
    const filtered = slide
      .filter((item) => item.status === 1)
      .map((item) => {
        const mainImage = item.images?.find((img) => img.type === "main");
        return {
          id: item.prod_id,
          title: item.title,
          image: mainImage ? `src/assets/images/${mainImage.url}` : "",
        };
      });

    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);
    setProducts(selected);
  }, []);

  // Handle Hover
  const handleMouseEnter = (e) => {
    const image = e.currentTarget.querySelector(".product-image");
    const shadow = e.currentTarget.querySelector(".product-shadow");

    if (image) {
      image.classList.add("translate-y-[-12px]");
    }
    if (shadow) {
      shadow.classList.remove("opacity-0", "translate-y-0");
      shadow.classList.add("opacity-100", "translate-y-[10px]");
    }
  };

  const handleMouseLeave = (e) => {
    const image = e.currentTarget.querySelector(".product-image");
    const shadow = e.currentTarget.querySelector(".product-shadow");

    if (image) {
      image.classList.remove("translate-y-[-12px]");
    }
    if (shadow) {
      shadow.classList.add("opacity-0", "translate-y-0");
      shadow.classList.remove("opacity-100", "translate-y-[10px]");
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-900 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-16 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-24 right-24 w-40 h-40 bg-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-400/5 rounded-full blur-3xl"></div>
      </div>

      <Container>
        {/* Section Title */}
        <div className="text-center mb-14 relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-500 text-white text-sm font-semibold rounded-full shadow-lg mb-6">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            Featured Collection
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Our Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium confectionery treats,
            crafted with love and the finest ingredients.
          </p>
        </div>

        {/* Product Cards */}
        <div className="flex flex-wrap gap-8 justify-center relative z-10">
          {products.map((product, idx) => (
            <div
              key={product.id || idx}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative w-[200px] h-[280px] bg-white rounded-2xl overflow-hidden border border-gray-200 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer"
            >
              {/* Image Container */}
              <div className="h-[180px] flex items-center justify-center p-4 relative">
                {/* Pencil-style shadow */}
                <div
                  className="product-shadow absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-0 w-[60%] h-[12px] opacity-0 transition-all duration-500 rounded-full z-0"
                  style={{
                    background:
                      "radial-gradient(ellipse, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.015) 70%, transparent 100%)",
                  }}
                ></div>

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image max-h-full max-w-full object-contain transition-all duration-500 z-10 relative"
                />
              </div>

              {/* Product Title */}
              <div className="text-sm font-semibold text-gray-700 px-4 py-3 text-center border-t border-gray-100 h-[64px] flex items-center justify-center truncate">
                {product.title}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 relative z-10">
          <NavLink to="products">
            <button className="group relative px-10 py-4 text-base font-semibold text-white bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden border border-blue-200/50">
              <span className="relative z-10 flex items-center justify-center gap-3">
                🍬 View All Products
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </NavLink>
        </div>
      </Container>
    </section>
  );
};

export default Products;
