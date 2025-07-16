import React from "react";
import Container from "../../../components/Container";
import ProductCard from "../../../components/ProductCard";

const popularProducts = [
  {
    title: "Classic Dark",
    image: "/src/assets/images/LoveAngle t.png",
  },

  {
    title: "Classic Dark",
    image: "/src/assets/images/LoveAngle t.png",
  },

  {
    title: "Classic Dark",
    image: "/src/assets/images/LoveAngle t.png",
  },

  {
    title: "Classic Dark",
    image: "/src/assets/images/LoveAngle t.png",
  },

  {
    title: "Classic Dark",
    image: "/src/assets/images/LoveAngle t.png",
  },
];

const PopularProducts = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 text-gray-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-orange-300/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-gradient-to-tr from-pink-200/30 to-red-300/30 rounded-full blur-3xl"></div>

      <Container>
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            Popular Products
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Our best-selling chocolates loved by everyone!
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {popularProducts.map((product, idx) => (
            <ProductCard
              key={idx}
              title={product.title}
              image={product.image}
            />
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <button className="group relative px-10 py-3 text-base font-semibold text-white bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              View Full Menu
              <div className="w-2 h-2 bg-white rounded-full group-hover:translate-x-1 transition-transform duration-300"></div>
            </span>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default PopularProducts;
