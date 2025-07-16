import React, { useEffect, useState } from "react";
import Container from "../../../components/Container";
import { slide } from "../../../data/slide";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filtered = slide
      .filter((item) => item.status === 1)
      .map((item) => {
        // Find the main image
        const mainImage = item.images?.find((img) => img.type === "main");

        return {
          id: item.prod_id,
          title: item.title,
          image: mainImage ? `src/assets/images/${mainImage.url}` : "", // ✅ corrected path
        };
      });
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);
    setProducts(selected);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 text-gray-900 overflow-hidden">
      <Container>
        {/* Heading */}
        <div className="text-center mb-14 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            Our Products
          </h2>
        </div>

        {/* Product Cards */}
        <div className="flex flex-wrap gap-6 justify-center">
          {products.map((product, idx) => (
            <div
              key={product.id || idx}
              className="min-w-[165px] max-w-[220px] bg-white rounded-xl overflow-hidden transition hover:shadow-md group"
            >
              <div className="h-36 flex items-center justify-center p-2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-[160px] object-contain"
                />
              </div>

              <div className="border-t border-gray-200 group-hover:border-gray-300 transition-colors" />

              <h3 className="sm:text-base text-sm font-semibold text-gray-800 p-2 text-center">
                {product.title}
              </h3>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 relative z-10">
          <NavLink to="products">
            <button className="group relative px-10 py-3 text-base font-semibold text-white bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                View All Products
                <div className="w-2 h-2 bg-white rounded-full group-hover:translate-x-1 transition-transform duration-300"></div>
              </span>
            </button>
          </NavLink>
        </div>
      </Container>
    </section>
  );
};

export default Products;
