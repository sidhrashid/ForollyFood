// import adani from "../../../assets/images/adani.png";
// import waaree from "../../../assets/images/waareesolar.png";
// import pahalsolar from "../../../assets/images/pahalsolar.png";

// const Brand = () => {
//   const images = [
//     { src: pahalsolar, alt: "pahalsolar" },
//     { src: waaree, alt: "waaree" },
//     { src: adani, alt: "adani" },

//     { src: pahalsolar, alt: "pahalsolar" },
//     { src: waaree, alt: "waaree" },
//     { src: adani, alt: "adani" },

//     { src: pahalsolar, alt: "pahalsolar" },
//     { src: waaree, alt: "waaree" },
//     { src: adani, alt: "adani" },
//   ];

//   return (
//     <section className="relative w-screen  bg-white border-y border-gray-200">
//       <div className="relative max-w-7xl mx-auto overflow-hidden py-6">
//         {/* 🔁 Keyframes for scrolling */}
//         <style>
//           {`
//           @keyframes infinite-scroll {
//             0% { transform: translateX(0%); }
//             100% { transform: translateX(-50%); }
//           }
//         `}
//         </style>

//         {/* 🔲 White fade overlays (left & right) */}
//         <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
//         <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

//         {/* 🔄 Infinite scrolling track */}
//         <div className="flex flex-nowrap w-max animate-[infinite-scroll_25s_linear_infinite] ">
//           {[...Array(2)].map((_, loopIndex) => (
//             <ul
//               key={loopIndex}
//               className="flex items-center justify-center [&>li]:mx-6 [&>img]:max-w-none"
//               aria-hidden={loopIndex === 1 ? "true" : undefined}
//             >
//               {images.map((image, index) => {
//                 const isAdani = image.alt === "adani";

//                 return (
//                   <li
//                     key={index}
//                     className="flex items-center justify-center h-20 w-36 bg-white"
//                   >
//                     <img
//                       src={image.src}
//                       alt={image.alt}
//                       className={`w-auto object-contain block mx-auto ${
//                         isAdani ? "h-14 scale-110" : "h-16"
//                       }`}
//                       style={isAdani ? { marginBottom: "9px" } : {}}
//                     />
//                   </li>
//                 );
//               })}
//             </ul>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Brand;

import React from 'react'

const Brand = () => {
  return (
    <div className=' bg-gray-300'>Brand</div>
  )
}

export default Brand