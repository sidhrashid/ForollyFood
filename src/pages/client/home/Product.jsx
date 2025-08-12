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
          image: mainImage ? `/images/${mainImage.url}` : "",
        };
      });

    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 8);
    setProducts(selected);
  }, []);

  return (
    <section className="relative py-10 bg-white text-gray-900 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-16 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-24 right-24 w-40 h-40 bg-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-400/5 rounded-full blur-3xl"></div>
      </div>

      <Container>
        {/* Section Title */}
        <div className="text-center mb-14 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold bg-[var(--primary)] bg-clip-text text-transparent mb-4">
            Our Products
          </h2>
          {/* <p className="text-gray-600 mx-auto max-w-[350px] sm:max-w-[370px] lg:max-w-[450px]">
            Discover our handpicked selection of premium confectionery treats,
            crafted with love and the finest ingredients.
          </p> */}
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative z-10">
          {/* Product Cards with Responsive Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 px-4 -mx-4">
            {products.map((product, idx) => {
              const slug = product.title
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^a-z0-9-]/g, "");
              return (
                <NavLink to={`/products/${slug}`} key={product.id || idx} className="block">
                  <div
                    className="group h-[300px] w-[160px] sm:w-[290px] bg-white border border-gray-100 cursor-pointer relative overflow-hidden "
                  >
                    {/* Full Box Background - Bottom to Top Effect */}
                    <div
                      className="absolute bottom-0 left-0 w-full h-[60%] bg-[var(--primary)] opacity-0 group-hover:opacity-100 z-[1] transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out"
                      style={{
                        borderRadius: "50% 50% 0 0 / 30px 30px 0 0",
                      }}
                    ></div>

                    {/* Image Container */}
                    <div className="h-[250px] flex items-center justify-center p-4 relative z-10 overflow-visible">
                      {/* Product Image */}
                      <img
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                        width={200}
                        height={200}
                        className="max-h-full max-w-full object-contain relative z-10 transition-all duration-400 group-hover:scale-110 group-hover:rotate-6"
                      />
                    </div>

                    {/* Title Section */}
                    <div className="flex items-center justify-center p-4 border-t border-gray-100 group-hover:border-white/30 transition-colors duration-500 relative z-10">
                      <h3
                        className="text-sm font-semibold text-gray-800 group-hover:text-white text-center leading-tight overflow-hidden text-ellipsis line-clamp-2 transition-colors duration-500 truncate"
                        title={product.title}
                      >
                        {product.title}
                      </h3>
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center  pt-10 relative z-10">
          <NavLink to="/products">
            <button className="group relative px-10 py-4 text-base font-semibold text-white bg-[var(--primary)] rounded-full shadow-lg hover:shadow-xl hover transform hover:scale-105 transition-all duration-300 overflow-hidden border border-[var(--primary)] hover:bg-transparent hover:text-[var(--primary)]">
              <span className="relative z-10 flex items-center justify-center gap-3">
                View All Products
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
            </button>
          </NavLink>
        </div>
      </Container>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Products;
