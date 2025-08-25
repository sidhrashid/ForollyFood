import React from "react";
import post1 from "../../../assets/images/paan.png";
import post2 from "../../../assets/images/2.webp";
import post3 from "../../../assets/images/mango.png";
import post4 from "../../../assets/images/post4.webp";
import post5 from "../../../assets/images/post5.webp";
import post6 from "../../../assets/images/black.png";
import Container from "../../../components/Container";
import { Instagram } from "lucide-react";

// Custom Play Icon (SVG)
const PlayIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
    className={className}
  >
    <path
      d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 
      40.7 60.1 72.4 41.3l352-208c31.4-18.5 
      31.5-64.1 0-82.6z"
    ></path>
  </svg>
);

const SimpleInstagramGrid = () => {
  const posts = [
    {
      src: post1,
      link: "https://www.instagram.com/reel/DH-GvVXCB7b/",
      type: "video",
    },
    {
      src: post2,
      link: "https://www.instagram.com/p/DHVGro3taPQ/?img_index=2",
      type: "image",
    },
    {
      src: post3,
      link: "https://www.instagram.com/reel/DHdF91Uzoyl/",
      type: "video",
    },
    {
      src: post4,
      link: "https://www.instagram.com/p/DF5Whs6tlQk/?igsh=MTZpang2N2c5cjZwNw%3D%3D",
      type: "image",
    },
    {
      src: post6,
      link: "https://www.instagram.com/reel/DGkbffJtRRO/",
      type: "video",
    },
    {
      src: post5,
      link: "https://www.instagram.com/p/DGPlxDxNfk0/",
      type: "image",
    },
  ];

  return (
    <section className="bg-white ">
      <Container>
        <h2 className="sm:text-5xl text-3xl font-bold text-center mb-6 text-[var(--primary)] py-5">Sweet Moments</h2>

        <div className="grid grid-cols-3   gap-1">
          {posts.map((post, index) => (
            <div
              key={index}
              className="relative aspect-square cursor-pointer hover:opacity-90 transition-opacity duration-300"
              onClick={() => window.open(post.link, "_blank")}
            >
              <img
                src={post.src}
                alt={`Instagram Post ${index + 1}`}
                className="w-full h-full object-cover  hover:shadow-lg transition-shadow duration-300"
              />

              {/* Custom Play Icon for Video */}
              {post.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayIcon className="w-14 h-14 text-white opacity-90 drop-shadow-lg" />
                </div>
              )}

              {/* Instagram Icon for Images */}
              {/* {post.type === "image" && (
                <div className="absolute bottom-3 right-3 bg-white/80 rounded-full p-2 shadow-md">
                  <Instagram className="w-5 h-5 text-pink-600" />
                </div>
              )} */}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SimpleInstagramGrid;
