import React from "react";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Products from "./Product";
import PopularProducts from "./PopularProducts";
import ContactUs from "./ContactSection";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "../about/Testimonial";

const index = () => {
  return (
    <div>
        <Hero />
        <AboutUs />
        <Products />
        <WhyChooseUs />
        <PopularProducts />
        <Testimonials />
        <ContactUs />

    </div>
  );
};

export default index;
