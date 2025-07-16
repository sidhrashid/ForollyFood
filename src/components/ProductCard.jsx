import React from "react";

const ProductCard = ({ title, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover-item overflow-hidden cursor-pointer group">
      <div className="p-4">
        <div className="h-36 flex items-center justify-center overflow-hidden bg-orange-50 rounded-xl">
          <img
            src={image}
            alt={title}
            className="max-h-full max-w-[140px] object-contain"
          />
        </div>
        <div className="mt-4 border-t border-gray-200 group-hover:border-gray-300 transition" />
        <h3 className="text-center sm:text-md text-sm  font-semibold mt-2 text-gray-800 group-hover:text-amber-700 transition">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ProductCard;
