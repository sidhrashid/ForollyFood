import React from "react";
import Container from "../../../components/Container";

const QuerySection = () => {
  return (
    <section
      className="relative py-20 text-gray-800 bg-gradient-to-b from-[#ff99b3]/70 to-white/70"
      // style={{
      //   backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='80' height='80'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' opacity='.5'%3E%3C/path%3E%3Cpath d='M15 15h50l-5 5H20v40l-5 5V15zm0 50h50V15L80 0v80H0l15-15zm32.07-32.07l3.54-3.54A15 15 0 0 1 29.4 50.6l3.53-3.53a10 10 0 1 0 14.14-14.14zM32.93 47.07a10 10 0 1 1 14.14-14.14L32.93 47.07z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`
      // }}
    >
      <Container>
        <div className=" text-center flex items-center flex-col justify-center max-w-3xl mx-auto sm:px-4 px-1 py-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Have any <span className="text-[var(--primary)]">Queries?</span> <br className="hidden md:block" />
            <span className="text-amber-700">Let us know.</span>
          </h2>

          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-red-500 rounded-full" />
          </div>

          <p className="text-lg text-gray-700 leading-relaxed font-medium max-w-[350px] sm:max-w-[550px]  ">
            We will clear it for you at the best. We value your feedback and are
            always ready to answer your inquiry. Please reach out via the given
            contact details or submit your message to us directly.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default QuerySection;
