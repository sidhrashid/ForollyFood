import React from "react";

const Direction = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Location
          </h2>
          <p className="text-gray-500 mt-2">
            Visit us at our office or find us easily on the map.
          </p>
        </div>

        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="location-map"
            src="https://www.google.com/maps?q=24.054806,72.391361&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Direction;
