import React from "react";
import { Quote, Star } from "lucide-react";
import { NavLink } from "react-router-dom";
import one from "../../../assets/images/arbaj_png.png";
import two from "../../../assets/images/nandoliya.png";
import google from "../../../assets/images/google.png"
// Ahmad intentionally has no image to test fallback

const testimonials = [
  {
    name: "Arbaj Kureshi",
    time: "10 months ago",
    image: one,
    rating: 5,
    review:
      "Forolly chocolates are sooo delicious and pure. It's a must try. Packing, quality and taste are mind-blowing. My personal favourite is Indian coconut toffy.",
  },
  {
    name: "Akbarali Nandoliya",
    time: "a year ago",
    image: two,
    rating: 5,
    review:
      "Amazing visit experience. All products are hygienically produced. Unit is clean — employees wear gloves, caps, and aprons. Must visit once!",
  },
  {
    name: "Ahmad Padarwala",
    time: "a year ago",
    rating: 5,
    review:
      "Forolly chocolates are a true masterpiece. The flavors are divine. Each piece is a work of art. I can't stop eating them!",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-[#fff5e0] py-24 px-4 text-gray-800">
      {/* Heading */}
      <div className="text-center mb-14 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-3">
          What Our Clients Say
        </h2>
        <div className="flex justify-center items-center gap-2 mb-2">
          <img src={google} alt="Google" className="w-15" />
          <span className="text-sm text-gray-700">
            <strong>4.6</strong> out of 5 • 25 Google Reviews
          </span>
        </div>
        <p className="text-gray-600">
          Hear directly from our happy Forolly fans
        </p>
      </div>

      {/* Testimonials */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-6 flex flex-col shadow hover:shadow-lg transition-all min-h-[350px]"
          >
            <Quote className="text-amber-500 w-6 h-6 mb-3" />
            <p className="text-gray-700 text-base leading-relaxed mb-5">
              “{t.review}”
            </p>

            {/* Footer */}
            <div className="mt-auto flex items-center gap-3">
              {t.image ? (
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-amber-200 text-amber-700 flex items-center justify-center font-bold text-lg">
                  {t.name[0]}
                </div>
              )}

              <div>
                <p className="font-semibold text-gray-800">{t.name}</p>
                <p className="text-sm text-gray-500">{t.time}</p>

                <div className="flex gap-0.5 mt-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Google Review Button */}
      <div className="text-center mt-14">
        <NavLink
          to="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0zClKr7I0NM4wYLRSNagwtjRNTjNONLU0SDEyTDMxtzKosLQwMUhLSk0zSk0zS7M0T_ZiT8svys_JqQQAMIASfQ&q=forolly&rlz=1C1PNBB_enIN1022IN1022&oq=for&gs_lcrp=EgZjaHJvbWUqEggBEC4YJxivARjHARiABBiKBTIGCAAQRRg8MhIIARAuGCcYrwEYxwEYgAQYigUyBggCEEUYOzIGCAMQRRg5MgcIBBAAGIAEMg0IBRAAGIMBGLEDGIAEMgYIBhBFGDwyBggHEEUYPNIBCDI2MzlqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x395cf3a590d21f47:0x9840fbef2ef6f97c,1,,,,"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-amber-500 to-red-500 text-white px-6 py-3 rounded-full text-sm font-medium shadow hover:scale-105 transition"
        >
          See All Google Reviews
        </NavLink>
      </div>
    </section>
  );
};

export default Testimonials;
