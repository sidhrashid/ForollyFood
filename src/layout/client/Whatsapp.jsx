import React from "react";

const Whatsapp = () => {
const whatsappLink = "https://wa.me/919510270600";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="whatsapp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-colors duration-300"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
    </a>
  );
};

export default Whatsapp;
