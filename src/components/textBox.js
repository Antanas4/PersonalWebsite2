import React from "react";

function TextBox(props) {
  return (
    <div className={`text-content ${props.className}`}>
      {props.text}
    </div>
  );
}

export default TextBox;
