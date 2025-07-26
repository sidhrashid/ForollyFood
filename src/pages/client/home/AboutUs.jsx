import React from "react";
import Container from "../../../components/Container";

const AboutUsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Simple Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-orange-400/15 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-yellow-500/10 rounded-full blur-xl"></div>
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Simple Image Section */}
          <div className="relative w-full">
            {/* Simple Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-red-400/20 to-orange-400/20 blur-2xl rounded-3xl"></div>
            
            {/* Clean Glass Container */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-orange-200/50 shadow-xl hover:shadow-orange-300/40 transition-all duration-300">
              <img
                src="/src/assets/images/aboutus.png"
                alt="About Forolly - Premium Confectionery"
                className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg"
              />
              
              {/* Simple Badges */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                🍬 Since 2020
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white text-red-600 px-4 py-2 rounded-full text-sm font-bold shadow-lg border border-red-200">
                ⭐ Trusted Brand
              </div>
            </div>
          </div>

          {/* Simple Content Section */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Simple Brand Badge */}
            {/* <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-500 text-white text-sm font-semibold rounded-full shadow-lg">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              Our Story & Legacy
            </div> */}

            {/* Simple Title */}
            <div className="relative">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                <span className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  About Forolly
                </span>
              </h2>
              {/* Simple Underline */}
              {/* <div className="absolute -bottom-4 left-0 lg:left-0 flex gap-2 justify-center lg:justify-start w-full lg:w-auto">
                <div className="w-8 h-2 bg-red-400 rounded-full"></div>
                <div className="w-6 h-2 bg-orange-400 rounded-full"></div>
                <div className="w-4 h-2 bg-yellow-400 rounded-full"></div>
              </div> */}
            </div>

            {/* Simple Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-red-600">Forolly</span> was established in November 2020 with a vision to revolutionize India's confectionery market. From our humble beginnings, we've dedicated ourselves to creating exceptional treats that bring joy to millions of families across the nation.
              </p>
              
              <p className="text-base text-gray-600 leading-relaxed">
                Our journey started with a passion for excellence and an unwavering commitment to quality. With our team of dedicated professionals and the trust of our loyal customers, we continue to grow and innovate every single day, one sweet moment at a time.
              </p>
            </div>

            {/* Simple Stats */}
            <div className="flex flex-wrap items-center gap-8 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">2020</div>
                <div className="text-sm text-gray-500">Established</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">1M+</div>
                <div className="text-sm text-gray-500">Happy Customers</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">50+</div>
                <div className="text-sm text-gray-500">Products</div>
              </div>
            </div>

            {/* Simple CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:from-red-600 hover:to-orange-600 transition-all duration-300">
                <span className="flex items-center gap-2">
                  🎯 Discover Our Journey
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsSection;
