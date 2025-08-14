// import React from "react";
// // import post1 from "../../../assets/images/instagram/post1.jpg";
// // import post2 from "../../../assets/images/instagram/post2.jpg";
// // import post3 from "../../../assets/images/instagram/post3.jpg";
// // import post4 from "../../../assets/images/instagram/post4.jpg";
// // import post5 from "../../../assets/images/instagram/post5.jpg";
// // import post6 from "../../../assets/images/instagram/post6.jpg";

// const SimpleInstagramGrid = () => {
//   // Sirf photos aur links
//   const posts = [
//     {
//       src: post1,
//       link: "https://instagram.com/p/example1",
//     },
//     {
//       src: post2,
//       link: "https://instagram.com/p/example2",
//     },
//     {
//       src: post3,
//       link: "https://instagram.com/p/example3",
//     },
//     {
//       src: post4,
//       link: "https://instagram.com/p/example4",
//     },
//     {
//       src: post5,
//       link: "https://instagram.com/p/example5",
//     },
//     {
//       src: post6,
//       link: "https://instagram.com/p/example6",
//     },
//   ];

//   return (
//     <section className="py-16">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Instagram Posts
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
//           {posts.map((post, index) => (
//             <div
//               key={index}
//               className="aspect-square cursor-pointer hover:opacity-80 transition-opacity duration-300"
//               onClick={() => window.open(post.link, "_blank")}
//             >
//               <img
//                 src={post.src} // Changed from post.image to post.src
//                 alt={`Instagram Post ${index + 1}`}
//                 className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SimpleInstagramGrid;
