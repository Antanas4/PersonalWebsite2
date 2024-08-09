import React from "react";

function Asterisk() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Define the gradient */}
      <defs>
        <linearGradient id="halfBlackHalfWhite" x1="0" y1="0" x2="1" y2="1">
          <stop offset="50%" stopColor="black" />
          <stop offset="50%" stopColor="white" />
        </linearGradient>
      </defs>
      
      {/* Line with gradient */}
      <line
        x1="20"
        y1="20"
        x2="80"
        y2="80"
        stroke="url(#halfBlackHalfWhite)"
        strokeWidth="12"
      />
    </svg>
  );
}

export default Asterisk;
