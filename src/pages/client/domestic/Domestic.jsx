import React, { useEffect, useState, useRef } from "react";
import Container from "../../../components/Container";
import IndiaMap from "../../../assets/images/india.svg?react";

const Domestic = () => {
  const [markers, setMarkers] = useState([]);
  const [hoveredState, setHoveredState] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const mapRef = useRef(null);

  const targetStates = [
    { id: "IN-JK", displayName: "Jammu & Kashmir" },
    { id: "IN-UT", displayName: "Uttarakhand" },
    { id: "IN-PB", displayName: "Punjab" },
    { id: "IN-DL", displayName: "Delhi" },
    { id: "IN-UP", displayName: "Uttar Pradesh" },
    { id: "IN-RJ", displayName: "Rajasthan" },
    { id: "IN-GJ", displayName: "Gujarat" },
    { id: "IN-MH", displayName: "Maharashtra" },
    { id: "IN-KA", displayName: "Karnataka" },
    { id: "IN-TN", displayName: "Tamil Nadu" },
    { id: "IN-WB", displayName: "West Bengal" },
    { id: "IN-BR", displayName: "Bihar" },
    { id: "IN-AS", displayName: "Assam" }
  ];

  const allIndianStates = {
    "IN-AP": "Andhra Pradesh", "IN-AR": "Arunachal Pradesh", "IN-AS": "Assam",
    "IN-BR": "Bihar", "IN-CT": "Chhattisgarh", "IN-GA": "Goa", "IN-GJ": "Gujarat",
    "IN-HR": "Haryana", "IN-HP": "Himachal Pradesh", "IN-JH": "Jharkhand",
    "IN-KA": "Karnataka", "IN-KL": "Kerala", "IN-MP": "Madhya Pradesh",
    "IN-MH": "Maharashtra", "IN-MN": "Manipur", "IN-ML": "Meghalaya",
    "IN-MZ": "Mizoram", "IN-NL": "Nagaland", "IN-OR": "Odisha", "IN-PB": "Punjab",
    "IN-RJ": "Rajasthan", "IN-SK": "Sikkim", "IN-TN": "Tamil Nadu",
    "IN-TG": "Telangana", "IN-TR": "Tripura", "IN-UT": "Uttarakhand",
    "IN-UP": "Uttar Pradesh", "IN-WB": "West Bengal", "IN-AN": "Andaman and Nicobar Islands",
    "IN-CH": "Chandigarh", "IN-DN": "Dadra and Nagar Haveli", "IN-DD": "Daman and Diu",
    "IN-DL": "Delhi", "IN-JK": "Jammu and Kashmir", "IN-LA": "Ladakh",
    "IN-LD": "Lakshadweep", "IN-PY": "Puducherry"
  };

  useEffect(() => {
    // ✅ COMMENTED: Marker calculation logic
    // const calculateMarkerPositions = () => {
    //   const computedMarkers = [];
    //   targetStates.forEach(({ id, displayName }) => {
    //     const coords = stateCoordinates[id];
    //     if (coords) {
    //       computedMarkers.push({
    //         id,
    //         displayName,
    //         x: coords.x,
    //         y: coords.y
    //       });
    //     }
    //   });
    //   setMarkers(computedMarkers);
    // };
    // calculateMarkerPositions();

    // ✅ ACTIVE: Only hover listeners for all states
    const addStateHoverListeners = () => {
      if (!mapRef.current) return;
      const svg = mapRef.current.querySelector('svg');
      if (!svg) return;

      Object.keys(allIndianStates).forEach(stateId => {
        const path = svg.querySelector(`path[id="${stateId}"]`);
        if (path) {
          path.addEventListener('mouseenter', (e) => {
            const stateName = allIndianStates[stateId];
            const isTarget = targetStates.some(ts => ts.id === stateId);
            
            // ✅ Show name only for highlighted states
            if (isTarget) {
              setHoveredState({ 
                id: stateId, 
                displayName: stateName,
                isTarget: true
              });
              
              const rect = mapRef.current.getBoundingClientRect();
              setTooltipPosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top - 40
              });
            }
          });

          path.addEventListener('mouseleave', () => {
            setHoveredState(null);
          });

          path.addEventListener('mousemove', (e) => {
            const isTarget = targetStates.some(ts => ts.id === stateId);
            if (isTarget) {
              const rect = mapRef.current.getBoundingClientRect();
              setTooltipPosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top - 40
              });
            }
          });
        }
      });
    };

    const timer = setTimeout(addStateHoverListeners, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    const rect = mapRef.current.getBoundingClientRect();
    setTooltipPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top - 40
    });
  };

  const handleStateHover = (stateData, event) => {
    setHoveredState(stateData);
    handleMouseMove(event);
  };

  return (
    <div className="relative bg-[var(--secondary)]">
      <div className="relative z-10 pt-23 pb-8 bg-gradient-to-b from-[#ff99b3]/70 to-white/70">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--primary)] mb-4">
              India Distribution Network
            </h1>
            <p className="text-lg md:text-xl text-[var(--dark)]/70 max-w-2xl mx-auto">
              Spreading sweetness across 13 key states of India
            </p>
          </div>
        </Container>
      </div>

      <div className="relative z-10 py-8">
        <Container>
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/30 mb-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-4">
                Our Distribution States
              </h2>
              <p className="text-[var(--dark)]/70 text-base md:text-lg">
                Interactive India map showing our presence across key regions
              </p>
            </div>

            <div className="w-full flex justify-center">
              <div 
                ref={mapRef} 
                className="relative indiamap-scope"
                style={{ 
                  width: 'min(90vw, 600px)',
                  height: 'auto',
                  maxWidth: '600px'
                }}
                // onMouseLeave={() => setHoveredState(null)}
              >
                <IndiaMap 
                  className="w-full h-auto display-block"
                  style={{ 
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />

                {/* ✅ ACTIVE: Hover colors for all states */}
                <style>{`
                  .indiamap-scope {
                    margin: 0 auto !important;
                    display: block !important;
                  }
                  
                  .indiamap-scope svg {
                    width: 100% !important;
                    height: auto !important;
                    max-width: 100% !important;
                    display: block !important;
                  }
                  
                  .indiamap-scope path[id] {
                    fill: #00A3E0;
                    stroke: #ffffff;
                    stroke-width: 1.5px;
                    transition: all 0.3s ease;
                    cursor: pointer;
                  }
                  
                  /* Highlighted states primary color */
                  ${targetStates
                    .map(
                      (state) =>
                        `.indiamap-scope path[id="${state.id}"] { 
                          fill: var(--primary) !important; 
                        }`
                    )
                    .join("\n")}
                    
                  /* ALL states hover color change */
                  .indiamap-scope path[id]:hover {
                    fill: rgb(20, 120, 156) !important;
                    // transform: scale(1.02);
                    filter: drop-shadow(0 0 5px rgba(0, 163, 224, 0.5));
                  }
                    
                  /* Highlighted states special hover */
                  ${targetStates
                    .map(
                      (state) =>
                        `.indiamap-scope path[id="${state.id}"]:hover { 
                          fill: #c41e3a !important;
                          filter: drop-shadow(0 0 10px rgba(244, 51, 77, 0.7));
                          stroke: #ffffff;
                          stroke-width: 2px;
                        //   transform: scale(1.02);
                        }`
                    )
                    .join("\n")}
                `}</style>

                {/* ✅ COMMENTED: All marker rendering logic */}
                {/*
                <div className="absolute inset-0 w-full h-full">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 611.85999 695.70178"
                    preserveAspectRatio="xMidYMid meet"
                    style={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      pointerEvents: 'none'
                    }}
                  >
                    {markers.map((marker, index) => (
                      <circle
                        key={index}
                        cx={marker.x}
                        cy={marker.y}
                        r="12"
                        fill="red"
                        stroke="white"
                        strokeWidth="3"
                        style={{ 
                          cursor: "pointer",
                          pointerEvents: 'auto'
                        }}
                        onMouseEnter={(e) => handleStateHover(marker, e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => setHoveredState(null)}
                      />
                    ))}
                  </svg>
                </div>
                */}

                {/* ✅ ACTIVE: Tooltip only for highlighted states */}
                {hoveredState && (
                  <div
                    className="absolute bg-white/95 backdrop-blur-sm text-[var(--primary)] px-4 py-2 rounded-lg shadow-lg border border-[var(--primary)]/30 pointer-events-none z-50 transition-all duration-200"
                    style={{
                      left: tooltipPosition.x,
                      top: tooltipPosition.y,
                      transform: 'translateX(-50%)',
                    }}
                  >
                    <div className="text-sm font-bold">{hoveredState.displayName}</div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-[var(--primary)] mb-4 text-center">
                Our Distribution Network
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {targetStates.map((state) => (
                  <div
                    key={state.id}
                    className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-[var(--primary)]/20 hover:bg-[var(--primary)]/10 transition-all duration-300 cursor-pointer"
                    // onMouseEnter={(e) => handleStateHover(state, e)}
                    onMouseLeave={() => setHoveredState(null)}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[var(--primary)] rounded-full"></div>
                      <span className="text-sm font-medium text-[var(--dark)]">
                        {state.displayName}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Domestic;
