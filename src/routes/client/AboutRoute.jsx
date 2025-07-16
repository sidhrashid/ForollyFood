import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../../pages/client/about/index";
import Layout from "../../components/Layout";

const AboutRoute = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AboutRoute;
