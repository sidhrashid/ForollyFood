import React from "react";
import Container from "../../../components/Container";
import { NavLink } from "react-router-dom";

const popularProducts = [
  {
    title: "Fruityza Chewy Toffee",
    image: "/src/assets/images/FRUITYZA CHEWY TOFFEE t.png",
  },
  {
    title: "Fruityza Fun Toffee",
    image: "/src/assets/images/FRUITYZA FUN t.png",
  },
  {
    title: "Melon Masti",
    image: "/src/assets/images/MELON MASTI t.png",
  },
  {
    title: "Yogurt 20 ",
    image: "/src/assets/images/YOGURT 20 t.png",
  },
  {
    title: "Indian Coconut",
    image: "/src/assets/images/COCONUT t.png",
  },
  {
    title: "Forever Fruta",
    image: "/src/assets/images/FOREVER FRUTA t.png",
  },
];

const PopularProducts = () => {
  return (
    <section className="py-10 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 text-gray-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-orange-300/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-gradient-to-tr from-pink-200/30 to-red-300/30 rounded-full blur-3xl"></div>

      <Container>
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold bg-[var(--primary)] bg-clip-text text-transparent mb-4">
            Popular Products
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Our best-selling chocolates loved by everyone!
          </p>
        </div>

        {/* Product Grid with Half Box Hover Effect */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {popularProducts.map((product, idx) => (
            <div
              key={idx}
              className="group w-[160px] sm:w-[170px] h-[230px]  bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Image Container - No background effect here */}
              <div className="h-[180px] flex items-center justify-center p-4 relative overflow-visible">
                {/* Shadow Element */}
                {/* <div
                  className="product-shadow absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-0 w-[65%] h-[15px] opacity-0 group-hover:opacity-100 group-hover:translate-y-3 transition-all duration-400 z-0"
                  style={{
                    background: "radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.08) 40%, rgba(0,0,0,0.03) 70%, transparent 100%)",
                  }}
                ></div> */}

                {/* Product Image - Only moves right, not up */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain relative z-10 transition-all duration-400 group-hover:scale-110 "
                />
              </div>

              {/* Title Section - Half Box with Bottom-to-Top Effect */}
              <div className="flex items-center justify-center p-4 border-t border-gray-100 group-hover:border-white/30 transition-colors duration-500 relative z-10">
                {/* Half Box Background - Only in title area */}
                <div className="absolute inset-0 bg-[var(--primary)] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>

                <h3
                  className="text-sm font-semibold text-gray-800 group-hover:text-white text-center leading-tight overflow-hidden line-clamp-2 transition-colors duration-500 z-50 truncate"
                  title={product.title}
                >
                  {product.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
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
