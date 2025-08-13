import React, { useEffect, useState } from "react";
import Container from "../../../components/Container";
import { NavLink } from "react-router-dom";
import { slide } from "../../../data/slide";

const PopularProducts = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  // Filter & get first 6 products
  useEffect(() => {
    const filtered = slide.filter((item) => item.status === 1).slice(0, 8); // Get first 6 products

    const products = filtered.map((item) => {
      const mainImage = item.images?.find((img) => img.type === "main");
      return {
        id: item.prod_id,
        title: item.title,
        image: mainImage ? `/images/${mainImage.url}` : "",
      };
    });

    setPopularProducts(products);
  }, []);

  return (
    <section className="py-10 bg-[var(--secondary)] text-gray-800 relative overflow-hidden">
      {/* <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-orange-300/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-gradient-to-tr from-pink-200/30 to-red-300/30 rounded-full blur-3xl"></div> */}

      <Container>
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold bg-[var(--primary)] bg-clip-text text-transparent mb-4">
            Popular Products
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Our best-selling chocolates loved by everyone!
          </p>
        </div>

        <div className="  grid grid-cols-2 sm:grid-cols-4 gap-2">
          {popularProducts.map((product) => {
            const slug = product.title
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^a-z0-9-]/g, "");
            return (
              <NavLink to={`/products/${slug}`} key={product.id}>
                <div
                  key={product.id}
                  className="group h-[300px] w-[160px] sm:w-[290px] bg-white border border-gray-100 cursor-pointer relative overflow-hidden"
                >
                  {/* Bottom overlay like Product cards */}
                  <div
                    className="absolute bottom-0 left-0 w-full h-[60%] bg-[var(--primary)] opacity-0 group-hover:opacity-100 z-[1] transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out"
                    style={{ borderRadius: "50% 50% 0 0 / 30px 30px 0 0" }}
                  ></div>

                  <div className="h-[250px] flex items-center justify-center p-4 relative z-10 overflow-visible">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-h-full max-w-full object-contain relative z-10 transition-all duration-400 group-hover:scale-110 group-hover:rotate-0"
                    />
                  </div>

                  <div className="flex items-center justify-center p-4 border-t border-gray-100 group-hover:border-white/30 transition-colors duration-500 relative z-10">
                    <h3
                      className="text-sm font-semibold text-gray-800 group-hover:text-white text-center leading-tight overflow-hidden line-clamp-2 transition-colors duration-500 z-50 truncate"
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

        <div className="text-center mt-12">
          <NavLink to="/products">
            <button className="group relative px-10 py-3 text-base font-semibold text-white bg-[var(--primary)] rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
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

export default PopularProducts;
