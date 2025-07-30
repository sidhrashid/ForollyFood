// // Update your routes to use title instead of ID
// // In ProductCard.js
// import { NavLink } from "react-router-dom";

// const ProductCard = ({ title, image, id }) => {
//   // Convert title to URL-friendly format
//   const urlTitle = title
//     .toLowerCase()
//     .replace(/\s+/g, "-")
//     .replace(/[^a-z0-9-]/g, "");

//   return (
//     <NavLink to={`/products/${urlTitle}`}>
//       <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 cursor-pointer">
//         <div className="max-h-50 flex items-center justify-center p-6">
//           <img src={image} alt={title} className="max-h-full object-contain" />
//         </div>
//         <div className="border-t border-gray-200" />
//         <h3 className="text-sm font-semibold text-center text-gray-800 p-3 truncate">
//           {title}
//         </h3>
//       </div>
//     </NavLink>
//   );
// };

// export default ProductCard;
