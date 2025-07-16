import React from "react";

const AboutUs = () => {
  return (
    <div className="relative bg-[#fff5e0] overflow-hidden">

      {/* Top Wave Pattern */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            d="M0.00,49.98 C149.99,150.00 349.99,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
            style={{ stroke: "none", fill: "#fff" }}
          ></path>
        </svg>
      </div>

      {/* Main About Content */}
      <section className="relative z-10 py-24 px-4 text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[var(--primary)] mb-4">
            About Us
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Welcome to <strong>Forolly</strong> — your ultimate destination for pure, handcrafted chocolates and toffees. 
            At Forolly, we believe in spreading happiness through every bite. Our team blends traditional recipes with modern techniques, 
            ensuring that every product is a masterpiece of flavor and quality.
          </p>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            We maintain strict hygiene, source the finest ingredients, and continuously innovate to surprise your taste buds. 
            Whether you're gifting, celebrating, or simply indulging — Forolly is the perfect companion.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
