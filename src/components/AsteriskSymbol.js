import React from "react";

function Asterisk(props) {
  return (
    <div className={props.className}>
      <svg
        id="asterisk"
        data-name="asterisk"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1080 1080"
      >
        <polygon
          className={props.bottomHalfClassName}
          points="450.94 540 27.56 699.19 149.49 902.42 501.75 611.13 420.46 1065 671.11 1065 589.81 611.13 938.69 902.42 1060.62 699.19 640.62 540 450.94 540"
        />
        <polygon
          className={props.topHalfClassName}
          points="640.62 540 1074.17 370.64 942.07 174.19 593.2 462.1 671.11 15 420.46 15 498.36 462.1 149.49 174.19 17.39 370.64 450.94 540 450.94 540 640.62 540 640.62 540"
        />
      </svg>
    </div>
  );
}

export default Asterisk;
