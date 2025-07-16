import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/client/home/index";
import Layout from "../../components/Layout";

const HomeRoute = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default HomeRoute;
