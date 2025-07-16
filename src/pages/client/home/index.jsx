import React from "react";

import Hero from "./Hero";
// import Brand from "./Brand";
import AboutUs from "./AboutUs";
import Products from "./Product";
// import Services from "./Services";
import PopularProducts from "./PopularProducts";
import ContactUs from "./ContactSection";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "../about/Testimonial";
// import ProductDetail from "../products/ProductsDetailPage";

const index = () => {
  return (
    <div>
        <Hero />
        {/* <ProductDetail /> */}
        <AboutUs />
        <Products />
        <WhyChooseUs />
        <PopularProducts />
        <ContactUs />
        <Testimonials />

    </div>
  );
};

export default index;
