import React from "react";
import Container from "../../../components/Container"; // adjust path if needed

const AboutUsSection = () => {
  return (
    <section className="bg-[var(--secondary)] py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative w-full">
            <div className="absolute -inset-4 bg-[var(--primary)]/20 blur-2xl rounded-3xl z-0"></div>
            <img
              src="/src/assets/images/aboutus.png" // 🔁 Replace with your image
              alt="About us"
              className="relative z-10 w-full h-auto max-h-[500px] object-cover rounded-xl shadow-xl"
            />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h2 className="heading-1 text-[var(--primary)]">About Us</h2>
            <p className="paragraph text-[var(--dark)]">
              Forolly was established in Nov 2020. From the snapshot of its creation, the organization put the majority of its undertakings to lead the best portrayal of the brand Forolly on the Indian market. After the essential exercises to promote the forolly mark in different States, the group focused on building a methodology for perhaps the broadest circulation of its items.
            </p>
            <p className="paragraph-sm">
              Our journey started with a passion for excellence and a commitment to bring
              something better to the market. With a team of dedicated professionals and a loyal
              customer base, we continue to grow every day.
            </p>
            <button className="px-6 py-3 bg-[var(--primary)] text-white rounded-full hover:bg-[var(--dark)] transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsSection;
