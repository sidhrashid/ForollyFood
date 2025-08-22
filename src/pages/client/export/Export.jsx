import React, { useEffect, useState, useRef } from "react";
import Container from "../../../components/Container";
import WorldMap from "../../../assets/images/world.svg?react";
import CountryFlag from "./CountryFlag";

const Export = () => {
  const [markers, setMarkers] = useState([]);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const mapRef = useRef(null);

  const exportCountries = [
    { country: "za", name: "South Africa (Johannesburg)" },
    { country: "ye", name: "Yemen" },
    { country: "ae", name: "UAE (Dubai)" },
    { country: "gh", name: "Ghana" },
    { country: "ao", name: "Angola" },
    { country: "mz", name: "Mozambique" },
    { country: "mg", name: "Madagascar" },
    { country: "cd", name: "Congo (DRC)" },
    { country: "cm", name: "Cameroon" },
  ];

  useEffect(() => {
    const calculateMarkerPositions = () => {
      const svgElement = mapRef.current?.querySelector('svg');
      if (!svgElement) return;

      const computedMarkers = [];

      exportCountries.forEach(({ country, name }) => {
        const countryPath = svgElement.querySelector(`path[data-country="${country.toUpperCase()}"]`);
        
        if (countryPath) {
          try {
            const bbox = countryPath.getBBox();
            const centerX = bbox.x + bbox.width / 2;
            const centerY = bbox.y + bbox.height / 2;
            
            computedMarkers.push({
              country,
              name,
              x: centerX,
              y: centerY
            });
          } catch (e) {
            console.warn(`Could not get bbox for ${country}`, e);
          }
        }
      });

      setMarkers(computedMarkers);
    };

    // Wait for SVG to load
    const timer = setTimeout(calculateMarkerPositions, 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle mouse move for tooltip positioning
  const handleMouseMove = (e) => {
    const rect = mapRef.current.getBoundingClientRect();
    setTooltipPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top - 40
    });
  };

  // Handle country hover
  const handleCountryHover = (countryData, event) => {
    setHoveredCountry(countryData);
    handleMouseMove(event);
  };

  return (
    <div className="relative bg-[var(--secondary)]">
      {/* Header Section */}
      <div className="relative z-10 pt-23 pb-8 bg-gradient-to-b from-[#ff99b3]/70 to-white/70">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--primary)] mb-4">
              Global Export Network
            </h1>
            <p className="text-lg md:text-xl text-[var(--dark)]/70 max-w-2xl mx-auto">
              Spreading sweetness across Africa, Middle East & beyond
            </p>
          </div>
        </Container>
      </div>

      {/* Map Section */}
      <div className="relative z-10 py-8">
        <Container>
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/30 mb-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-4">
                Our Export Destinations
              </h2>
              <p className="text-[var(--dark)]/70 text-base md:text-lg">
                Interactive world map showing our global presence
              </p>
            </div>

            <div 
              ref={mapRef} 
              className="w-full sm:h-[900px] relative worldmap-scope"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setHoveredCountry(null)}
            >
              <WorldMap className="w-full h-full" />

              {/* Original Country Styling - Same as Before */}
             <style>{`
                .worldmap-scope path[id] {
                  fill: #00A3E0;
                  transition: fill 0.3s ease;
                }
                
                /* India primary color (no pin needed) */
                .worldmap-scope path[id][data-country="IN"] {
                  fill: var(--primary);
                }
                
                /* Export countries primary color */
                ${exportCountries
                  .map(
                    (c) =>
                      `.worldmap-scope path[id][data-country="${c.country.toUpperCase()}"] { fill: var(--primary); }`
                  )
                  .join("\n")}
                  
                .worldmap-scope path[id]:hover {
                  fill: rgb(20, 120, 156);
                }
              `}</style>

              {/* Markers Overlay */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1009.6727 665.96301"
                preserveAspectRatio="xMidYMid meet"
                style={{ pointerEvents: 'none' }}
              >
                {/* Dynamic Markers */}
                {markers.map((marker, index) => (
                  <g key={index}>
                    <g transform={`translate(${marker.x}, ${marker.y})`}>
                      {/* Original Red Marker */}
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                        fill="red"
                        stroke="white"
                        strokeWidth="1"
                        transform="translate(-7, -19) scale(0.9)" 
                        style={{ 
                          pointerEvents: 'auto',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => handleCountryHover(marker, e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => setHoveredCountry(null)}
                      />
                    </g>
                  </g>
                ))}
              </svg>

              {/* Hover Tooltip */}
              {hoveredCountry && (
                <div
                  className="absolute bg-white/95 backdrop-blur-sm text-[var(--primary)] px-4 py-2 rounded-lg shadow-lg border border-[var(--primary)]/30 pointer-events-none z-50 transition-all duration-200"
                  style={{
                    left: tooltipPosition.x,
                    top: tooltipPosition.y,
                    transform: 'translateX(-50%)',
                  }}
                >
                  <div className="text-sm font-bold"> {hoveredCountry.name}</div>
                  {/* <div className="text-xs text-[var(--dark)]">Export Destination</div> */}
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
      <CountryFlag />
    </div>
  );
};

export default Export;
