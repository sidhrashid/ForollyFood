import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "../../components/Layout";
import Product from "../../pages/client/products/index";
import ProductDetail from "../../pages/client/products/ProductsDetailPage";

const ServiceRoutes = () => {
  const location = useLocation();
  return (
    <div>
      <Routes location={location} key={location.key}>
        <Route element={<Layout />}>
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </div>
  );
};

export default ServiceRoutes;
