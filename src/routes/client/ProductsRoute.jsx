import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../../components/Layout";
import Product from "../../pages/client/products/index";
import ProductDetail from "../../pages/client/products/ProductsDetailPage";

const ServiceRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </div>
  );
};

export default ServiceRoutes;
