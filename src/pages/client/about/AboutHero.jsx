import React from "react";
import {
  Star,
  Award,
  Users,
  Globe,
  Smile,
  PackageOpen,
  Calendar,
  ThumbsUp,
} from "lucide-react";

const AboutUs = () => {
  return (
    <div className="relative bg-[var(--secondary)] overflow-hidden">
      {/* Simple Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-[var(--primary)]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-[var(--primary)]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-[var(--primary)]/6 rounded-full blur-2xl"></div>
      </div>

      {/* Header Section */}
      <div
        className="relative z-10 pt-24 pb-16 bg-gradient-to-b from-[#ff99b3]/70 to-white/70
"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--dark)] mb-6 leading-tight">
            About Forolly
          </h1>
          <div className="w-24 h-1 bg-[var(--primary)] rounded-full mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to Forolly, your ultimate destination for pure, handcrafted
            chocolates and toffees. At Forolly, we believe in spreading joy
            through every bite.
          </p>
        </div>
      </div>

      {/* Main Story Section */}
      <div className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Story Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark)] mb-8">
                Our Sweet Journey
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our team blends traditional recipes with modern techniques,
                  ensuring every product is a masterpiece of flavor and quality.
                  We maintain strict hygiene standards, source the finest
                  ingredients, and continuously innovate to surprise your taste
                  buds.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Whether you're gifting, celebrating, or simply indulging in the
                  Forolly is the perfect companion for sweet moments. Since
                  2020, we've been dedicated to bringing happiness to families
                  across India.
                </p>
              </div>
              {/* Mission Quote */}
              <div className="bg-white/80 border-l-4 border-[var(--primary)] p-6 rounded-r-lg shadow-lg">
                <blockquote className="text-[var(--primary)] italic text-lg leading-relaxed">
                  "Forolly's mission is to bring joyful candy memories to youth
                  while celebrating life's sweet moments. We aim to delight
                  every customer so they share their experience with others."
                </blockquote>
              </div>
            </div>
            {/* Values Panel */}
            <div className="bg-white/90 rounded-2xl p-8 shadow-xl border border-white/60">
              <div className="text-center mb-8">
                <Award className="w-12 h-12 text-[var(--primary)] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[var(--dark)]">
                  Our Core Values
                </h3>
              </div>
              <div className="space-y-6">
                {[
                  {
                    icon: <Star className="w-6 h-6 text-yellow-500" />,
                    title: "Premium Quality",
                    desc: "Excellence in every creation",
                  },
                  {
                    icon: <Globe className="w-6 h-6 text-green-500" />,
                    title: "Natural Ingredients",
                    desc: "Purity in every ingredient",
                  },
                  {
                    icon: <Smile className="w-6 h-6 text-blue-500" />,
                    title: "Customer First",
                    desc: "Your satisfaction is our priority",
                  },
                  {
                    icon: <Award className="w-6 h-6 text-purple-500" />,
                    title: "Trusted Excellence",
                    desc: "Honoring time-tested traditions",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 hover:bg-[var(--primary)]/5 rounded-lg transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--dark)] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 py-16 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--dark)] mb-4">
              Our Achievements
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to quality and customer
              satisfaction
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: "1M+",
                label: "Happy Customers",
                icon: (
                  <Users className="w-7 h-7 text-[var(--primary)] mx-auto mb-2" />
                ),
              },
              {
                number: "50+",
                label: "Product Varieties",
                icon: (
                  <PackageOpen className="w-7 h-7 text-[var(--primary)] mx-auto mb-2" />
                ),
              },
              {
                number: "100%",
                label: "Natural Ingredients",
                icon: (
                  <Globe className="w-7 h-7 text-[var(--primary)] mx-auto mb-2" />
                ),
              },
              {
                number: "5+",
                label: "Years of Excellence",
                icon: (
                  <Calendar className="w-7 h-7 text-[var(--primary)] mx-auto mb-2" />
                ),
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border border-white/60 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
                  {stat.icon}
                  <div className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/90 rounded-2xl p-8 md:p-12 shadow-xl border border-white/60">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--dark)] mb-6">
              Ready to Experience the Magic?
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Join millions of happy customers who have made Forolly their go to
              choice for premium confectionery. Taste the difference that
              quality and love can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary)] text-white font-semibold rounded-xl hover:bg-[var(--primary)]/90 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <PackageOpen className="w-5 h-5" />
                Explore Products
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--primary)] font-semibold rounded-xl border-2 border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 shadow-lg"
              >
                <ThumbsUp className="w-5 h-5" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
