import React from "react";
import Container from "../../../components/Container";
import { slide } from "../../../data/slide";
import { NavLink } from "react-router-dom";

const Products = () => {
  // Directly filter + shuffle once (no useEffect)
  const products = React.useMemo(() => {
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

    return [...filtered].sort(() => 0.5 - Math.random()).slice(0, 8);
  }, []);

  return (
    <section className="relative py-10 bg-white text-gray-900 overflow-hidden">
    
  

      <Container>
        {/* Section Title */}
        <div className="text-center mb-14 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold bg-[var(--primary)] bg-clip-text text-transparent mb-4">
            Our Products
          </h2>
        </div>

        {/* Product Grid */}
        <div className="relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 px-4 sm:-mx-4">
            {products.map((product, idx) => {
              const slug = product.title
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^a-z0-9-]/g, "");

              return (
                <NavLink to={`/products/${slug}`} key={product.id || idx} className="block">
                  <div className="group h-[300px] w-[160px] sm:w-[290px] bg-white border border-gray-100 cursor-pointer relative overflow-hidden">
                    {/* Hover Background */}
                    <div
                      className="absolute bottom-0 left-0 w-full h-[60%] bg-[var(--primary)] opacity-0 group-hover:opacity-100 z-[1] transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out"
                      style={{ borderRadius: "50% 50% 0 0 / 30px 30px 0 0" }}
                    ></div>

                    {/* Image */}
                    <div className="h-[250px] flex items-center justify-center p-4 relative z-10">
                      <img
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                        fetchpriority="low"
                        width={200}
                        height={200}
                        className="max-h-full max-w-full object-contain transition-all duration-400 group-hover:scale-115"
                      />
                    </div>

                    {/* Title */}
                    <div className="flex items-center justify-center p-4 border-t border-gray-100 group-hover:border-white/30 transition-colors duration-500 relative z-10">
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
        </div>

        {/* View All Button */}
        <div className="text-center pt-10 relative z-10">
          <NavLink to="/products">
            <button className="group relative px-10 py-4 text-base font-semibold text-white bg-[var(--primary)] rounded-full shadow-lg hover:scale-105 transition-all duration-300 border border-[var(--primary)] hover:bg-transparent hover:text-[var(--primary)]">
              <span className="relative z-10 flex items-center justify-center gap-3">
                View All Products
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </NavLink>
        </div>
      </Container>
    </section>
  );
};

export default Products;
