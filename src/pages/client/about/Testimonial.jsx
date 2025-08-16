import React from "react";
import { Quote, Star, ExternalLink } from "lucide-react";
import { NavLink } from "react-router-dom";
import one from "../../../assets/images/arbaj_png.png";
import two from "../../../assets/images/nandoliya.png";
import google from "../../../assets/images/google.png";
import Container from "../../../components/Container";

const testimonials = [
  {
    name: "Arbaj Kureshi",
    time: "10 months ago",
    image: one,
    rating: 5,
    review:
      "Forolly chocolates are sooo delicious and pure. It's a must try. Packing, quality and taste are mind-blowing.",
  },
  {
    name: "Akbarali Nandoliya",
    time: "a year ago",
    image: two,
    rating: 5,
    review:
      "Amazing visit experience. All products are hygienically produced. Unit is clean  employees wear gloves, caps, and aprons.",
  },
  {
    name: "Ahmad Padarwala",
    time: "a year ago",
    rating: 5,
    review:
      "Forolly chocolates are a true masterpiece. The flavors are divine. Each piece is a work of art.",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-[var(--secondary)] px-4 text-gray-800 relative overflow-hidden flex items-center">
     <Container>
       {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-16 left-16 w-32 h-32 bg-[var(--primary)]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[var(--primary)]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[var(--primary)]/6 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 py-8 w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary)] mb-4">
            What Our Clients Say
          </h2>

          <div className="w-24 h-1 bg-[var(--primary)] rounded-full mx-auto mb-4"></div>

          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Hear directly from our happy Forolly fans
          </p>
        </div>

        {/* ✅ Mobile Horizontal Scroll */}
        <div className="block md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4 pb-4">
          <div className="flex gap-4 w-max snap-x snap-mandatory scroll-smooth">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="snap-start flex-shrink-0 w-[280px] bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/50 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 flex flex-col"
              >
                <div className="flex items-start justify-between mb-3 min-h-[48px]">
                  <div className="flex items-center gap-3">
                    {t.image ? (
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-[var(--primary)]/20"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-[var(--primary)]/20 text-[var(--primary)] flex items-center justify-center font-bold text-base ring-2 ring-[var(--primary)]/20">
                        {t.name[0]}
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-[var(--dark)] text-sm truncate">
                        {t.name}
                      </p>
                      <p className="text-xs text-gray-500">{t.time}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-1 mb-3 h-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <div className="relative mb-4 flex-1 flex flex-col justify-between">
                  <div className="flex-1">
                    <Quote className="absolute -top-1 -left-1 text-[var(--primary)]/20 w-5 h-5" />
                    <p className="text-gray-700 text-sm leading-relaxed pl-4 italic">
                      "{t.review}"
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 mt-auto">
                  <span className="text-xs text-[var(--primary)] uppercase tracking-wider font-medium">
                    Google Review
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Desktop / Tablet Grid Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8 items-start">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white/90 min-h-[250px] backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/50 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3 min-h-[48px]">
                <div className="flex items-center gap-3">
                  {t.image ? (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-[var(--primary)]/20"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[var(--primary)]/20 text-[var(--primary)] flex items-center justify-center font-bold text-base ring-2 ring-[var(--primary)]/20">
                      {t.name[0]}
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-[var(--dark)] text-sm truncate">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-500">{t.time}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-1 mb-3 h-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <div className="relative mb-4 flex-1 flex flex-col justify-between">
                <div className="flex-1">
                  <Quote className="absolute -top-1 -left-1 text-[var(--primary)]/20 w-5 h-5" />
                  <p className="text-gray-700 text-sm leading-relaxed pl-4 italic">
                    "{t.review}"
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 mt-auto">
                <span className="text-xs text-[var(--primary)] uppercase tracking-wider font-medium">
                  Google Review
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Review CTA */}
        <div className="text-center">
          <NavLink
            to="https://www.google.com/search?q=forolly#lrd=0x395cf3a590d21f47:0x9840fbef2ef6f97c,1"
            target="_blank"
            className="inline-block group"
          >
            <div className="cursor-pointer inline-flex items-center gap-4 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <img src={google} alt="Google" className="sm:w-16 w-10" />
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-2">
                  <span className="sm:text-xl text-xs font-bold text-[var(--dark)]">
                    4.8
                  </span>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}

                    {/* Half-filled Star */}
                    <div className="relative w-4 h-4">
                      <Star className="w-4 h-4 text-gray-300" />
                      <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-gray-600 text-sm">27 Google Reviews</span>
              </div>
              <ExternalLink className=" hidden sm:block w-4 h-4 text-gray-400 group-hover:text-[var(--primary)] transition-colors duration-300" />
            </div>
          </NavLink>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
     </Container>
    </section>
  );
};

export default Testimonials;
