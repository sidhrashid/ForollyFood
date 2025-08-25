import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Container from "../../../components/Container";
import { slide } from "../../../data/slide";
import { ChevronDown, ChevronUp } from "lucide-react";

const ProductsPage = () => {
  const [expandedCategories, setExpandedCategories] = useState({});
  const categoryRefs = useRef({});

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
    4: {
      name: "Handle Box",
      description: "Mystery boxes filled with sweet surprises",
      color: "bg-[var(--primary)]",
    },
  };

  // Group products by category directly without useEffect
  const categorizedProducts = slide
    .filter((item) => item.status === 1)
    .reduce((acc, item) => {
      const category = item.category;
      if (!acc[category]) acc[category] = [];
      const mainImage = item.images?.find((img) => img.type === "main");
      acc[category].push({
        id: item.prod_id,
        title: item.title,
        image: mainImage ? `/images/${mainImage.url}` : "",
        category: category,
      });
      return acc;
    }, {});

  // Initialize expanded state (once)
  React.useMemo(() => {
    const initialExpanded = {};
    Object.keys(categorizedProducts).forEach((cat) => {
      initialExpanded[cat] = false;
    });
    setExpandedCategories(initialExpanded);
  }, []); // this will run only once

  const createUrlTitle = (title) =>
    title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  const toggleCategory = (categoryId) => {
    const currentScrollY = window.scrollY;
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
    setTimeout(() => window.scrollTo(0, currentScrollY), 0);
  };

  const getAdditionalProducts = (products) => products.slice(4);

  return (
    <div
      className="relative bg-[var(--secondary)] overflow-hidden"
      style={{ scrollBehavior: "auto" }}
    >
      {/* Header */}
      <div className="relative z-10 pt-24 pb-4 bg-gradient-to-b from-[#ff99b3]/70 to-white/70">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-5xl font-bold text-[var(--primary)]">
            All Our Products
          </h1>
          <div className="w-24 h-1 bg-[var(--primary)] rounded-full mx-auto"></div>
        </div>
      </div>

      {/* Categories */}
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
                {/* Category Title */}
                <div className="flex items-center justify-between mb-8 px-4 min-h-[60px]">
                  <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-bold text-black">
                      {config.name}
                    </h2>
                  </div>
                </div>

                {/* Product Grid */}
                <div className="flex flex-wrap justify-evenly gap-2 mb-8">
                  {[
                    ...initialProducts,
                    ...(isExpanded ? additionalProducts : []),
                  ].map((product, index) => {
                    const urlTitle = createUrlTitle(product.title);
                    return (
                      <NavLink
                        key={product.id}
                        to={`/products/${urlTitle}`}
                        className="block"
                      >
                        <div className="group w-[160px] sm:w-[250px] h-[250px] bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden hover:-translate-y-0 ">
                          <div
                            className={`absolute bottom-0 left-0 w-full h-[60%] ${config.color} opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out`}
                            style={{
                              borderRadius: "50% 50% 0 0 / 30px 30px 0 0",
                            }}
                          ></div>
                          <div className="h-[200px] flex items-center justify-center p-4 relative z-10">
                            <img
                              src={product.image}
                              alt={product.title}
                              className="max-h-full max-w-full object-contain transition-all duration-300 group-hover:scale-110"
                            />
                          </div>
                          <div className="flex items-center justify-center p-4 border-t border-gray-100 group-hover:border-white/30 relative z-10">
                            <h3
                              className="text-sm font-semibold text-gray-800 group-hover:text-white text-center truncate"
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

                {/* Show More Button */}
                {hasMore && (
                  <div className="text-center">
                    <button
                      onClick={() => toggleCategory(categoryId)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-full hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all"
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
    </div>
  );
};

export default ProductsPage;
