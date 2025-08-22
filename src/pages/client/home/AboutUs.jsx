import React from "react";
import Container from "../../../components/Container";
import { CalendarDays, History, Star } from "lucide-react";
import { NavLink } from "react-router-dom";
import about_us from "../../../assets/images/About Us.png";

const AboutUsSection = () => {
  return (
    <section className="py-10 relative overflow-hidden bg-[var(--secondary)]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Simple Image Section */}
          <div className="relative w-full">
            {/* Simple Glow Effect */}
            <div className="absolute -inset-4 blur-2xl rounded-3xl"></div>

            {/* Clean Glass Container */}
            <div className="relative rounded-3xl shadow-lg hover:shadow-orange-300/40 transition-all duration-300">
              <img
                src={about_us}
                loading="lazy"
                width="500"
                height="500"
                alt="About Forolly - Premium Confectionery"
                className="w-full h-auto max-h-[500px] object-contain rounded-2xl "
              />

              {/* Simple Badges */}
              {/* <div className="flex items-center justify-center absolute top-4 right-4 bg-[var(--primary)]  text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                <CalendarDays className="w-3 h-3 inline mr-2" />
                Since 2020
              </div> */}

              <div
                className=" flex items-center justify-center absolute bottom-4 left-4 bg-[var(--primary)]
              text-white
                px-4 py-2 rounded-full text-sm font-bold shadow-lg "
              >
                <CalendarDays className="w-3 h-3 inline mr-2" />
                Since 2020
              </div>
            </div>
          </div>

          {/* Simple Content Section */}
          <div className="space-y-4 text-center lg:text-left">
            {/* Simple Title */}
            <div className="relative">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                <span className="bg-[var(--primary)]  bg-clip-text text-transparent">
                  About Forolly
                </span>
              </h2>
            </div>

            {/* Simple Description */}
            <div className="space-y-6">
              <p className="text-base text-gray-600 leading-relaxed text-justify  overflow-hidden hyphens-auto">
                <span
                  className=" text-[var(--primary)] font-semibold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Forolly {}
                </span>
                was established in November 2020 with a vision to revolutionize
                India's confectionery market. From our humble beginnings, we've
                dedicated ourselves to creating exceptional treats that bring
                joy to millions of families across the nation.
              </p>

              <p className="text-base text-gray-600 leading-relaxed text-justify  overflow-hidden hyphens-auto">
                Our journey started with a passion for excellence and an
                unwavering commitment to quality. With our team of dedicated
                professionals and the trust of our loyal customers, we continue
                to grow and innovate every single day, one sweet moment at a
                time.
              </p>
            </div>

            {/* Simple Stats */}
            <div className="flex flex-wrap items-center gap-8 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-xl font-bold text-[var(--primary)] ">
                  2020
                </div>
                <div className="text-sm text-gray-500">Established</div>
              </div>

              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-xl font-bold text-[var(--primary)] ">
                  50+
                </div>
                <div className="text-sm text-gray-500">Products</div>
              </div>
            </div>

            {/* Simple CTA Button */}
            <div className="flex justify-center lg:justify-start py-7">
              <NavLink to="/about">
                <button className="relative px-8 py-3 sm:px-10 sm:py-4 font-black text-base sm:text-lg rounded-2xl group overflow-hidden bg-white text-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 z-10 border border-gray-200">
                  {/* Text */}
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Discover Our Journey
                  </span>

                  {/* Background Animation */}
                  <div className="absolute inset-0 w-0 bg-[var(--primary)] rounded-2xl group-hover:w-full transition-all duration-300 shadow-xl -z-10"></div>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsSection;
