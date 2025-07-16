import React from "react";

const Whatsapp = () => {
const whatsappLink = "https://wa.me/8401810800?text=Hello%2C%0A%0AI%E2%80%99m%20interested%20in%20installing%20a%20solar%20power%20system%20for%20my%20home%2Fbusiness.%20Could%20you%20please%20provide%20me%20with%20more%20details%20about%20your%20products%2C%20pricing%2C%20and%20installation%20process%3F%0A%0ALooking%20forward%20to%20your%20response.%0A%0AThank%20you%21";

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
