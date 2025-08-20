import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "../../pages/client/about/index";
import Layout from "../../components/Layout";

const AboutRoute = () => {
  const location = useLocation();
  return (
    <div>
      <Routes location={location} key={location.key}>
        <Route element={<Layout />}>
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AboutRoute;
