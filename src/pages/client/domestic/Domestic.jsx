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
      {/* Header */}
      <div className="relative z-10 pt-16 sm:pt-20 md:pt-23 pb-6 md:pb-8 bg-gradient-to-b from-[#ff99b3]/70 to-white/70">
        <Container>
          <div className="text-center px-4 py-10">
            <h1 className="text-2xl sm:text-3xl  font-bold text-[var(--primary)] mb-3 md:mb-4 leading-tight">
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

            {/* ✅ PERFECT CENTER ALIGNMENT */}
            <div className="w-full sm:pl-80 pl-15">
              <div 
                ref={mapRef} 
                className="relative indiamap-scope "
                style={{ 
                  width: '100%',
                  maxWidth: '800px', // Maximum width constraint
                  height: 'auto',
                }}
              >
                <IndiaMap 
                  className="w-full h-full"
                 
                />

                {/* CSS Styles */}
                <style>{`
                  /* Perfect centering and responsiveness */
                  .indiamap-scope {
                    margin: 0 auto !important;
                    display: block !important;
                    text-align: center !important;
                  }
                  
                  .indiamap-scope svg {
                    width: 100% !important;
                    height: auto !important;
                    max-width: 100% !important;
                    display: block !important;
                    margin: 0 auto !important;
                  }
                  
                  /* Base state styles */
                  .indiamap-scope path[id] {
                    fill: #00A3E0;
                    stroke: #ffffff;
                    stroke-width: 1.5px;
                    transition: all 0.3s ease;
                    cursor: pointer;
                  }
                  
                  /* Mobile optimizations */
                  @media (max-width: 640px) {
                    .indiamap-scope path[id] {
                      stroke-width: 1px;
                    }
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
                    
                  /* All states hover color change */
                  .indiamap-scope path[id]:hover {
                    fill: rgb(20, 120, 156) !important;
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
                        }`
                    )
                    .join("\n")}
                  
                  /* Mobile hover effects */
                  @media (max-width: 640px) {
                    .indiamap-scope path[id]:hover {
                      filter: drop-shadow(0 0 3px rgba(0, 163, 224, 0.4));
                    }
                    
                    ${targetStates
                      .map(
                        (state) =>
                          `.indiamap-scope path[id="${state.id}"]:hover { 
                            filter: drop-shadow(0 0 5px rgba(244, 51, 77, 0.6));
                            stroke-width: 1.5px;
                          }`
                      )
                      .join("\n")}
                  }
                `}</style>

                {/* Responsive Tooltip */}
                {hoveredState && (
                  <div
                    className="absolute bg-white/95 backdrop-blur-sm text-[var(--primary)] px-3 md:px-4 py-2 rounded-lg shadow-lg border border-[var(--primary)]/30 pointer-events-none z-50 transition-all duration-200"
                    style={{
                      left: Math.min(tooltipPosition.x, (mapRef.current?.offsetWidth || 0) - 150),
                      top: tooltipPosition.y,
                      transform: 'translateX(-50%)',
                    }}
                  >
                    <div className="text-sm font-bold whitespace-nowrap">{hoveredState.displayName}</div>
                  </div>
                )}
              </div>
            </div>

            {/* States Grid */}
            <div className="mt-8 md:mt-10">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[var(--primary)] mb-4 md:mb-6 text-center">
                Our Distribution Network
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {targetStates.map((state) => (
                  <div
                    key={state.id}
                    className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-[var(--primary)]/20 hover:bg-[var(--primary)]/10 transition-all duration-300 cursor-pointer"
                    onMouseLeave={() => setHoveredState(null)}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[var(--primary)] rounded-full flex-shrink-0"></div>
                      <span className="text-sm font-medium text-[var(--dark)] leading-tight">
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
