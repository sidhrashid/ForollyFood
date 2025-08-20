import React from "react";
import ReactCountryFlag from "react-country-flag";

const countries = [
  { code: "ZA", name: "South Africa (Johannesburg)" },
  { code: "YE", name: "Yemen" },
  { code: "AE", name: "UAE (Dubai)" },
  { code: "GH", name: "Ghana" },
  { code: "AO", name: "Angola" },
  { code: "MZ", name: "Mozambique" },
  { code: "MG", name: "Madagascar" },
  { code: "CD", name: "Congo" },
  { code: "CM", name: "Cameroon" },
];

const CountryFlag = () => { 
  // Component name match karo
  return (
    <div className="py-8 bg-white relative z-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-[var(--primary)]">Export Destinations</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5  gap-4 items-stretch">
          {countries.map((country, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded-lg p-3 shadow-sm bg-gray-200 hover:shadow-md transition-shadow h-15"
            >
              <ReactCountryFlag
                countryCode={country.code}
                svg
                style={{
                  width: "24px",
                  height: "18px",
                  borderRadius: "2px",
                }}
                title={country.name}
              />
              <span className="font-medium text-gray-800 text-sm">{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryFlag; 