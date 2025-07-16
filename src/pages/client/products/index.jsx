import React from "react";
import ProductsPage from "./ProductsPage";
import ContactSection from "../home/ContactSection"
// import ProductDetail from "./ProductsDetailPage";
const index = () => {
  return (
    <div>
      <ProductsPage />
      <ContactSection />
      {/* <ProductDetail /> */}
    </div>
  );
};

export default index;
