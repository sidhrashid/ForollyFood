import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "../../../components/Container";
import { slide } from "../../../data/slide";

const ProductsPage = () => {
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
          image: mainImage ? `src/assets/images/${mainImage.url}` : "",
        };
      });

    setProducts(filtered);
  }, []);

  // Convert title to URL-friendly format
  const createUrlTitle = (title) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };

  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 text-gray-800">
      <Container>
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-[var(--primary)] mb-4">
            All Our Products
          </h1>
          <p className="text-gray-600 sm:text-md max-w-xl mx-auto">
            Explore our full collection of handmade chocolates crafted with
            love.
          </p>
        </div>

        {/* Product Flex Container - Centered */}
        <div className="flex flex-wrap justify-center gap-8">
          {products.map((product) => {
            const urlTitle = createUrlTitle(product.title);

            return (
              <NavLink
                key={product.id}
                to={`/products/${urlTitle}`}
                className="block"
              >
                <div className="group w-[160px] sm:w-[190px] h-[230px] bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden hover:-translate-y-1">
                  {/* Full Box Background - Bottom to Top Effect */}
                  <div className="absolute inset-0 bg-[var(--primary)] opacity-0 group-hover:opacity-100 z-[1] transform translate-y-full group-hover:translate-y-0 transition-transform duration-600 ease-out rounded-2xl"></div>

                  {/* Image Container */}
                  <div className="h-[180px] flex items-center justify-center p-4 relative z-10 overflow-visible">
                    {/* Product Image */}
                    <img
                      src={product.image}
                      alt={product.title}
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

                  {/* Navigation Indicator */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ProductsPage;
