import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../../pages/client/home/index";
import Layout from "../../components/Layout";

const HomeRoute = () => {
  const location = useLocation();
  return (
    <div>
      <Routes location={location} key={location.key}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default HomeRoute;
