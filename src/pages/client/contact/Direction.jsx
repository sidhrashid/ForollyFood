import React from "react";
import Container from "../../../components/Container";

const Direction = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)]">
            Our Location
          </h2>
          <p className="text-gray-500 mt-2">
            Visit us at our office or find us easily on the map.
          </p>
        </div>

        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="location-map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6442.334309198574!2d72.394564!3d24.052849!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cf3a590d21f47%3A0x9840fbef2ef6f97c!2sForolly%20Food%20Products!5e1!3m2!1sen!2sin!4v1753860129810!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </Container>
    </section>
  );
};

export default Direction;
