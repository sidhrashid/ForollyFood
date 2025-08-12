import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "../../../components/Container";
import { slide } from "../../../data/slide";
import { Home, ChevronRight } from "lucide-react";

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
          image: mainImage ? `/images/${mainImage.url}` : "",
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
    <div className="relative bg-[var(--secondary)] overflow-hidden">
      {/* Simple Background Pattern - Same as About */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-[var(--primary)]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-[var(--primary)]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-[var(--primary)]/6 rounded-full blur-2xl"></div>
      </div>

      {/* Header Section - Same Structure as About */}
      <div className="relative z-10 pt-24 pb-16 bg-gradient-to-b from-[#ff99b3]/70 to-white/70">
        {/* Breadcrumb Navigation */}
        {/* <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav className="flex items-center space-x-2 text-sm">
            <a 
              href="/" 
              className="flex items-center gap-1 text-gray-600 hover:text-[var(--primary)] transition-colors duration-300 group"
            >
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              Home
            </a>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-[var(--primary)] font-medium">Products</span>
          </nav>
        </div> */}

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--primary)]  leading-tight">
            All Our Products
          </h1>
          <div className="w-24 h-1 bg-[var(--primary)] rounded-full mx-auto "></div>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-5 text-gray-800">
        <Container>
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
    </div>
  );
};

export default ProductsPage;
