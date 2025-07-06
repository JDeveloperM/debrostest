import React, { useEffect } from "react";

const HexagonBanner = ({ height = "33.5vh" }) => {
  useEffect(() => {
    // Cursor tracking for hexagon animation with trailing effect
    const cursor = document.querySelector('#hexagon-cursor');
    const hexagons = document.querySelectorAll('.hexagon-banner .hexagon');
    let hoveredHexagons = new Set();
    
    const onMouseChangePosition = (event) => {
      if (cursor) {
        cursor.style.left = event.clientX + 'px';
        cursor.style.top = event.clientY + 'px';
      }
    };

    // Add trailing effect to hexagons
    const addTrailingEffect = () => {
      hexagons.forEach((hexagon, index) => {
        hexagon.addEventListener('mouseenter', () => {
          hexagon.classList.add('hexagon-trail');
          hoveredHexagons.add(hexagon);
          
          // Remove the trail effect after a delay
          setTimeout(() => {
            hexagon.classList.remove('hexagon-trail');
            hoveredHexagons.delete(hexagon);
          }, 1500 + Math.random() * 500); // Random delay between 1.5-2s
        });
      });
    };

    document.addEventListener('mousemove', onMouseChangePosition);
    
    // Initialize trailing effect after a short delay to ensure hexagons are rendered
    setTimeout(addTrailingEffect, 100);

    return () => {
      document.removeEventListener('mousemove', onMouseChangePosition);
    };
  }, []);

  return (
    <div
      className="hexagon-banner"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: height,
        overflow: "hidden",
        backgroundColor: "transparent",
        zIndex: 1,
      }}
    >
      {/* Hexagon Background */}
      <div className="hexagon-background">
        <div id="hexagon-cursor"></div>
        {Array.from({ length: 20 }, (_, rowIndex) => (
          <div key={rowIndex} className="hexagon-row">
            {Array.from({ length: 30 }, (_, hexIndex) => (
              <div key={hexIndex} className="hexagon"></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HexagonBanner;
