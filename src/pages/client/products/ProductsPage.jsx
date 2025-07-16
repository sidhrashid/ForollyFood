import React, { useEffect, useState } from "react";
import Container from "../../../components/Container";
import ProductCard from "../../../components/ProductCard";
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
          image: mainImage ? `src/assets/images/${mainImage.url}` : "", // ✅ corrected path
        };
      });

    setProducts(filtered);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 text-gray-800">
      <Container>
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            All Our Products
          </h1>
          <p className="text-gray-600 sm:text-md max-w-xl mx-auto">
            Explore our full collection of handmade chocolates crafted with love.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductsPage;
