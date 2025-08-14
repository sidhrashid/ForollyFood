import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Container from "../../../components/Container";
import { slide } from "../../../data/slide";
import { ChevronDown, ChevronUp } from "lucide-react";

const ProductsPage = () => {
  const [categorizedProducts, setCategorizedProducts] = useState({});
  const [expandedCategories, setExpandedCategories] = useState({});

  // Ref to maintain scroll position
  const categoryRefs = useRef({});

  // Category configuration - Updated colors to match theme
  const categoryConfig = {
    1: {
      name: "Chewy Toffee",
      description: "Delicious chewy toffees with amazing flavors",
      color: "bg-[var(--primary)]",
    },
    2: {
      name: "Candy Toffee",
      description: "Sweet and crunchy candy toffees",
      color: "bg-[var(--primary)]",
    },
    3: {
      name: "Surprise Box",
      description: "Mystery boxes filled with sweet surprises",
      color: "bg-[var(--primary)]",
    },
  };

  useEffect(() => {
    // Group products by category
    const grouped = slide
      .filter((item) => item.status === 1)
      .reduce((acc, item) => {
        const category = item.category;
        if (!acc[category]) {
          acc[category] = [];
        }

        // Find the main image
        const mainImage = item.images?.find((img) => img.type === "main");

        acc[category].push({
          id: item.prod_id,
          title: item.title,
          image: mainImage ? `/images/${mainImage.url}` : "",
          category: category,
        });

        return acc;
      }, {});

    setCategorizedProducts(grouped);

    // Initialize expanded state - show first 4 products for each category
    const initialExpanded = {};
    Object.keys(grouped).forEach((categoryId) => {
      initialExpanded[categoryId] = false;
    });
    setExpandedCategories(initialExpanded);
  }, []);

  // Convert title to URL-friendly format
  const createUrlTitle = (title) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };

  // Toggle category expansion with scroll position maintenance
  const toggleCategory = (categoryId) => {
    // Get current scroll position
    const currentScrollY = window.scrollY;

    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));

    // Maintain scroll position after state update
    setTimeout(() => {
      window.scrollTo(0, currentScrollY);
    }, 0);
  };

  // Get additional products (for smooth animation)
  const getAdditionalProducts = (products) => {
    return products.slice(4);
  };

  return (
    <div
      className="relative bg-[var(--secondary)] overflow-hidden"
      style={{ scrollBehavior: "auto" }}
    >
      {" "}
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-[var(--primary)]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-[var(--primary)]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-[var(--primary)]/6 rounded-full blur-2xl"></div>
      </div>
      {/* Header Section */}
      <div className="relative z-10 pt-24 pb-4 bg-gradient-to-b from-[#ff99b3]/70 to-white/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-5xl font-bold text-[var(--primary)] leading-tight">
            All Our Products
          </h1>
          <div className="w-24 h-1 bg-[var(--primary)] rounded-full mx-auto"></div>
        </div>
      </div>
      {/* Categories Section */}
      <section className="py-8 text-gray-800">
        <Container>
          {Object.entries(categorizedProducts).map(([categoryId, products]) => {
            const config = categoryConfig[categoryId];
            const initialProducts = products.slice(0, 4);
            const additionalProducts = getAdditionalProducts(products);
            const hasMore = products.length > 4;
            const isExpanded = expandedCategories[categoryId];

            return (
              <div
                key={categoryId}
                className="mb-16 last:mb-8"
                ref={(el) => (categoryRefs.current[categoryId] = el)}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between mb-8 px-4 min-h-[60px]">
                  {/* Left Side - Category Info */}
                  <div className="flex items-center sm:px-12 gap-4">
                    <h2 className="text-2xl font-bold text-black">
                      {config.name}
                    </h2>
                  </div>
                </div>

                {/* Products Container - Combined Grid */}
                <div className="flex flex-wrap justify-center gap-8 mb-8">
                  {/* Initial Products (Always Visible) */}
                  {initialProducts.map((product) => {
                    const urlTitle = createUrlTitle(product.title);

                    return (
                      <NavLink
                        key={product.id}
                        to={`/products/${urlTitle}`}
                        className="block"
                      >
                        <div className="group w-[160px] sm:w-[250px] h-[250px] bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden hover:-translate-y-1">
                          {/* Full Box Background - Bottom to Top Effect */}
                          <div
                            className={`absolute bottom-0 left-0 w-full h-[60%] ${config.color} opacity-0 group-hover:opacity-100 z-[1] transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out`}
                            style={{
                              borderRadius: "50% 50% 0 0 / 30px 30px 0 0",
                            }}
                          ></div>

                          {/* Image Container */}
                          <div className="h-[200px] flex items-center justify-center p-4 relative z-10 overflow-visible">
                            <img
                              src={product.image}
                              alt={product.title}
                              className="max-h-full max-w-full object-contain relative z-10 transition-all duration-400 group-hover:scale-110 group-hover:rotate-0"
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
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    );
                  })}

                  {/* Additional Products (Natural Expansion) */}
                  {hasMore &&
                    isExpanded &&
                    additionalProducts.map((product, index) => {
                      const urlTitle = createUrlTitle(product.title);

                      return (
                        <NavLink
                          key={product.id}
                          to={`/products/${urlTitle}`}
                          className="block"
                          style={{
                            animationDelay: `${index * 100}ms`,
                          }}
                        >
                          <div
                            className={`group w-[160px] sm:w-[250px] h-[250px] bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden hover:-translate-y-1 animate-fadeInUp`}
                          >
                            {/* Same product card structure as above */}
                            <div
                              className={`absolute bottom-0 left-0 w-full h-[60%] ${config.color} opacity-0 group-hover:opacity-100 z-[1] transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out`}
                              style={{
                                borderRadius: "50% 50% 0 0 / 30px 30px 0 0",
                              }}
                            ></div>

                            <div className="h-[200px] flex items-center justify-center p-4 relative z-10 overflow-visible">
                              <img
                                src={product.image}
                                alt={product.title}
                                className="max-h-full max-w-full object-contain relative z-10 transition-all duration-400 group-hover:scale-110 group-hover:rotate-0"
                              />
                            </div>

                            <div className="flex items-center justify-center p-4 border-t border-gray-100 group-hover:border-white/30 transition-colors duration-500 relative z-10">
                              <h3
                                className="text-sm font-semibold text-gray-800 group-hover:text-white text-center leading-tight overflow-hidden text-ellipsis line-clamp-2 transition-colors duration-500 truncate"
                                title={product.title}
                              >
                                {product.title}
                              </h3>
                            </div>

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
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </NavLink>
                      );
                    })}
                </div>

                {/* Show More/Less Button - Always at Bottom */}
                {hasMore && (
                  <div className="text-center">
                    <button
                      onClick={() => toggleCategory(categoryId)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 font-medium rounded-full hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-300"
                    >
                      {isExpanded ? (
                        <>
                          <span>Show Less</span>
                          <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          <span>Show More</span>
                          <span className="text-sm text-gray-500">
                            ({additionalProducts.length})
                          </span>
                          <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </Container>
      </section>
      {/* Add Custom Animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ProductsPage;
