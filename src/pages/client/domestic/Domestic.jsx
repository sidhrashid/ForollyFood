import React, { useEffect, useState, useRef } from "react";
import Container from "../../../components/Container";
import IndiaMap from "../../../assets/images/india.svg?react";

const Domestic = () => {
  const [markers, setMarkers] = useState([]);
  const [hoveredState, setHoveredState] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const mapRef = useRef(null);

  const targetStates = [
    { id: "IN-JK", name: "Jammu & Kashmir" },
    { id: "IN-UT", name: "Uttarakhand" },
    { id: "IN-PB", name: "Punjab" },
    { id: "IN-DL", name: "Delhi" },
    { id: "IN-UP", name: "Uttar Pradesh" },
    { id: "IN-RJ", name: "Rajasthan" },
    { id: "IN-GJ", name: "Gujarat" },
    { id: "IN-MH", name: "Maharashtra" },
    { id: "IN-KA", name: "Karnataka" },
    { id: "IN-TN", name: "Tamil Nadu" },
    { id: "IN-WB", name: "West Bengal" },
    { id: "IN-BR", name: "Bihar" },
    { id: "IN-AS", name: "Assam" },
  ];

  const allIndianStates = {
    "IN-AP": "Andhra Pradesh",
    "IN-AR": "Arunachal Pradesh",
    "IN-AS": "Assam",
    "IN-BR": "Bihar",
    "IN-CT": "Chhattisgarh",
    "IN-GA": "Goa",
    "IN-GJ": "Gujarat",
    "IN-HR": "Haryana",
    "IN-HP": "Himachal Pradesh",
    "IN-JH": "Jharkhand",
    "IN-KA": "Karnataka",
    "IN-KL": "Kerala",
    "IN-MP": "Madhya Pradesh",
    "IN-MH": "Maharashtra",
    "IN-MN": "Manipur",
    "IN-ML": "Meghalaya",
    "IN-MZ": "Mizoram",
    "IN-NL": "Nagaland",
    "IN-OR": "Odisha",
    "IN-PB": "Punjab",
    "IN-RJ": "Rajasthan",
    "IN-SK": "Sikkim",
    "IN-TN": "Tamil Nadu",
    "IN-TG": "Telangana",
    "IN-TR": "Tripura",
    "IN-UT": "Uttarakhand",
    "IN-UP": "Uttar Pradesh",
    "IN-WB": "West Bengal",
    "IN-AN": "Andaman and Nicobar Islands",
    "IN-CH": "Chandigarh",
    "IN-DN": "Dadra and Nagar Haveli",
    "IN-DD": "Daman and Diu",
    "IN-DL": "Delhi",
    "IN-JK": "Jammu and Kashmir",
    "IN-LA": "Ladakh",
    "IN-LD": "Lakshadweep",
    "IN-PY": "Puducherry",
  };

  // Fixed handleCountryHover function
  const handleCountryHover = (marker, e) => {
    setHoveredState({
      id: marker.id,
      name: marker.name,
      isTarget: true,
    });

    const rect = mapRef.current.getBoundingClientRect();
    setTooltipPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top - 40,
    });
  };

  useEffect(() => {
    const calculateMarkerPositions = () => {
      const svgElement = mapRef.current?.querySelector("svg");
      if (!svgElement) return;

      const computedMarkers = [];

      targetStates.forEach(({ id, name }) => {
        const statePath = svgElement.querySelector(`path[id="${id}"]`);

        if (statePath) {
          try {
            const bbox = statePath.getBBox();
            const centerX = bbox.x + bbox.width / 2;
            const centerY = bbox.y + bbox.height / 2;

            computedMarkers.push({
              id,
              name,
              x: centerX,
              y: centerY,
            });
          } catch (e) {
            console.warn(`Could not get bbox for ${id}`, e);
          }
        }
      });

      setMarkers(computedMarkers);
    };

    const addStateHoverListeners = () => {
      if (!mapRef.current) return;
      const svg = mapRef.current.querySelector("svg");
      if (!svg) return;

      Object.keys(allIndianStates).forEach((stateId) => {
        const path = svg.querySelector(`path[id="${stateId}"]`);
        if (path) {
          path.addEventListener("mouseenter", (e) => {
            const stateName = allIndianStates[stateId];
            const isTarget = targetStates.some((ts) => ts.id === stateId);

            if (isTarget) {
              setHoveredState({
                id: stateId,
                name: stateName,
                isTarget: true,
              });

              const rect = mapRef.current.getBoundingClientRect();
              setTooltipPosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top - 40,
              });
            }
          });

          path.addEventListener("mouseleave", () => {
            setHoveredState(null);
          });

          path.addEventListener("mousemove", (e) => {
            const isTarget = targetStates.some((ts) => ts.id === stateId);
            if (isTarget) {
              const rect = mapRef.current.getBoundingClientRect();
              setTooltipPosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top - 40,
              });
            }
          });
        }
      });
    };

    const timer = setTimeout(() => {
      calculateMarkerPositions();
      addStateHoverListeners();
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    const rect = mapRef.current.getBoundingClientRect();
    setTooltipPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top - 40,
    });
  };

  return (
    <div className="relative bg-[var(--secondary)]">
      {/* Header */}
      <div className="relative z-10 pt-16 sm:pt-20 md:pt-23 pb-6 md:pb-8 bg-gradient-to-b from-[#ff99b3]/70 to-white/70">
        <Container>
          <div className="text-center px-4 py-10">
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--primary)] mb-3 md:mb-4 leading-tight">
              India Distribution Network
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[var(--dark)]/70 max-w-2xl mx-auto">
              Spreading sweetness across 13 key states of India
            </p>
          </div>
        </Container>
      </div>

      {/* Map Section - Perfect Center Alignment */}
      <div className="relative z-10 py-6 md:py-8">
        <Container>
          <div className="bg-white/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/30 mb-6 md:mb-8">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[var(--primary)] mb-3 md:mb-4">
                Our Distribution States
              </h2>
              <p className="text-[var(--dark)]/70 text-sm sm:text-base md:text-lg px-4">
                Interactive India map showing our presence across key regions
              </p>
            </div>

            {/* PERFECT CENTERED MAP CONTAINER */}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "400px",
              }}
            >
              <div
                ref={mapRef}
                className="relative"
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  margin: "0 auto",
                  position: "relative",
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setHoveredState(null)}
              >
                <IndiaMap
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    margin: "0 auto",
                  }}
                />

                {/* SVG Markers - MOBILE OPTIMIZED */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 1009.6727 665.96301"
                  preserveAspectRatio="xMidYMid meet"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    zIndex: 10,
                  }}
                >
                  {markers.map((marker, index) => (
                    <g key={`marker-${marker.id}-${index}`}>
                      <g transform={`translate(${marker.x}, ${marker.y})`}>
                        {/* MOBILE-VISIBLE MARKER */}
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                          fill="#dc2626"
                          stroke="white"
                          strokeWidth="1"
                          transform="translate(-12, -22) scale(1.5)"
                          style={{
                            pointerEvents: "auto",
                            cursor: "pointer",
                            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))",
                          }}
                          onMouseEnter={(e) => handleCountryHover(marker, e)}
                          onMouseMove={handleMouseMove}
                          onMouseLeave={() => setHoveredState(null)}
                        />

                        {/* PULSING ANIMATION CIRCLE */}
                        {/* <circle
                          cx="0"
                          cy="-8"
                          r="6"
                          fill="none"
                          stroke="#dc2626"
                          strokeWidth="2"
                          opacity="0.7"
                          style={{ pointerEvents: 'none' }}
                        >
                          <animate
                            attributeName="r"
                            values="6;12;6"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="opacity"
                            values="0.7;0;0.7"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle> */}
                      </g>
                    </g>
                  ))}
                </svg>

                {/* ENHANCED CSS STYLES */}
                <style>{`
                  /* Perfect center alignment */
                  .relative > svg:first-child {
                    width: 100% !important;
                    height: auto !important;
                    display: block !important;
                    margin: 0 auto !important;
                  }
                  
                  /* Base state styles */
                  .relative path[id] {
                    fill: #00A3E0;
                    stroke: #ffffff;
                    stroke-width: 1.5px;
                    transition: all 0.3s ease;
                    cursor: pointer;
                  }
                  
                  /* Highlighted states */
                  ${targetStates
                    .map(
                      (state) =>
                        `.relative path[id="${state.id}"] { 
                          fill: var(--primary) !important; 
                          filter: drop-shadow(0 2px 4px rgba(244, 51, 77, 0.3));
                        }`
                    )
                    .join("\n")}
                    
                  /* Hover effects */
                  .relative path[id]:hover {
                    fill: rgb(20, 120, 156) !important;
                    filter: drop-shadow(0 4px 8px rgba(0, 163, 224, 0.5));
                    stroke-width: 2px;
                    transform: scale(1.05);
                    transform-origin: center;
                  }
                    
                  ${targetStates
                    .map(
                      (state) =>
                        `.relative path[id="${state.id}"]:hover { 
                          fill: #c41e3a !important;
                          filter: drop-shadow(0 6px 12px rgba(244, 51, 77, 0.7));
                          stroke: #ffffff;
                          stroke-width: 2.5px;
                          transform: scale(1.1);
                          transform-origin: center;
                        }`
                    )
                    .join("\n")}
                  
                  /* MOBILE OPTIMIZATION - MARKERS VISIBLE */
                  @media (max-width: 768px) {
                    .relative path[id] {
                      stroke-width: 1px;
                    }
                    
                    .relative path[id]:hover {
                      stroke-width: 1.5px;
                      transform: scale(1.02);
                    }
                    
                    /* Mobile marker scaling - FIXED */
                    .relative svg g g {
                      transform-origin: center center !important;
                    }
                    
                    .relative svg g path {
                      transform: translate(-12px, -22px) scale(1.2) !important;
                    }
                    
                    ${targetStates
                      .map(
                        (state) =>
                          `.relative path[id="${state.id}"]:hover { 
                            stroke-width: 2px;
                            transform: scale(1.05);
                          }`
                      )
                      .join("\n")}
                  }
                  
                  @media (max-width: 480px) {
                    /* Smaller mobile devices - markers still visible */
                    .relative svg g path {
                      transform: translate(-12px, -22px) scale(1) !important;
                    }
                  }
                `}</style>

                {/* Enhanced Tooltip */}
                {hoveredState && (
                  <div
                    className="absolute bg-gradient-to-r from-white to-gray-50 backdrop-blur-sm text-[var(--primary)] px-4 py-3 rounded-xl shadow-xl border-2 border-[var(--primary)]/30 pointer-events-none z-50 transition-all duration-200"
                    style={{
                      left: Math.min(
                        tooltipPosition.x,
                        (mapRef.current?.offsetWidth || 0) - 150
                      ),
                      top: tooltipPosition.y,
                      transform: "translateX(-50%)",
                    }}
                  >
                    <div className="text-sm font-bold whitespace-nowrap flex items-center gap-2">
                      <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse"></div>
                      {hoveredState.name}
                    </div>
                  </div>
                )}
              </div>

              {/* desktop */}
              <div className="hidden sm:block mt-8 md:mt-10">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[var(--primary)] mb-4 md:mb-6 text-center">
                  Our Distribution Network
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-3 md:gap-4">
                  {targetStates.map((state) => (
                    <div
                      key={state.id}
                      className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-[var(--primary)]/20 hover:bg-[var(--primary)]/10 transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-105"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[var(--primary)] rounded-full flex-shrink-0 animate-pulse"></div>
                        <span className="text-sm font-medium text-[var(--dark)] leading-tight">
                          {state.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile */}
              <div className="block sm:hidden ">
                {targetStates.map((state) => (
                  <div key={state.id}>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-[var(--primary)]  flex-shrink-0 animate-pulse"></div>
                      <span className="text-[9px] font-medium text-[var(--dark)] leading-tight">
                        {state.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* States Grid */}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Domestic;
