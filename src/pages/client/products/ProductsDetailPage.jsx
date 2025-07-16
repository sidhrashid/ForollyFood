// import React from "react";
// import { ShoppingCart, Star, Info, Mail } from "lucide-react";
// // import productImage from "../../../assets/images/BADAM SHAK 1.png"; // Sample product image

// const ProductDetail = () => {
//   const product = {
//     name: "Butter Toffee",
//     tagline: "Melt-in-mouth sweetness with a creamy burst",
//     description:
//       "Our Butter Toffee is a delightful fusion of smooth buttery richness and soft chewy texture. Made with premium ingredients, it brings back nostalgic flavors of childhood in every bite.",
//     features: ["Rich Buttery Flavor", "Melts Smoothly", "No Artificial Preservatives"],
//     sizes: ["10 pcs pouch", "50 pcs jar", "Bulk pack"],
//     image: productImage,
//     rating: 4.7,
//     reviewsCount: 128,
//   };

//   return (
//     <section className="bg-[#fff5e0] min-h-screen py-14 px-6 text-gray-800">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
//         {/* Product Image */}
//         <div className="flex justify-center items-center">
//           <img
//             src={""}
//             alt={product.name}
//             className="w-full max-w-sm rounded-xl shadow-lg"
//           />
//         </div>

//         {/* Product Info */}
//         <div className="flex flex-col justify-center gap-4">
//           <h1 className="text-4xl font-bold text-[var(--primary)]">
//             {product.name}
//           </h1>
//           <p className="text-lg text-red-600 font-medium">{product.tagline}</p>

//           {/* Rating */}
//           <div className="flex items-center gap-2">
//             <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
//             <span className="text-sm">
//               {product.rating} ({product.reviewsCount} reviews)
//             </span>
//           </div>

//           {/* Description */}
//           <p className="text-gray-700 leading-relaxed">{product.description}</p>

//           {/* Features */}
//           <div>
//             <h3 className="font-semibold text-lg mt-4 mb-2">Highlights</h3>
//             <ul className="list-disc pl-5 text-sm text-gray-600">
//               {product.features.map((f, i) => (
//                 <li key={i}>{f}</li>
//               ))}
//             </ul>
//           </div>

//           {/* Sizes */}
//           <div>
//             <h3 className="font-semibold text-lg mt-4 mb-2">Available Sizes</h3>
//             <div className="flex gap-3 flex-wrap">
//               {product.sizes.map((s, i) => (
//                 <span
//                   key={i}
//                   className="bg-white border px-4 py-1 rounded-full text-sm shadow"
//                 >
//                   {s}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* CTA Buttons */}
//           <div className="flex gap-4 mt-6 flex-wrap">
//             <button className="flex items-center gap-2 bg-[var(--primary)] text-white px-5 py-2 rounded-full hover:scale-105 transition">
//               <ShoppingCart className="w-4 h-4" />
//               Enquire Now
//             </button>
//             <button className="flex items-center gap-2 border border-[var(--primary)] text-[var(--primary)] px-5 py-2 rounded-full hover:bg-[var(--primary)] hover:text-white transition">
//               <Mail className="w-4 h-4" />
//               View Catalogue
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Related Products */}
//       <div className="mt-20 max-w-6xl mx-auto px-4">
//         <h2 className="text-2xl font-bold text-[var(--primary)] mb-6">
//           Related Products
//         </h2>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {/* You can map this dynamically later */}
//           {[1, 2, 3].map((_, i) => (
//             <div
//               key={i}
//               className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
//             >
//               <img
//                 src={productImage}
//                 alt="Related Product"
//                 className="w-full h-40 object-contain mb-3"
//               />
//               <p className="font-semibold text-gray-700 text-sm mb-1">
//                 Butter Toffee
//               </p>
//               <button className="text-sm text-[var(--primary)] hover:underline">
//                 View Details
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductDetail;
