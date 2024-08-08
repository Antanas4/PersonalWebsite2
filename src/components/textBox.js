import React from "react";

function TextBox(props) {
  return (
    <div
      className={`${props.className}`}
      dangerouslySetInnerHTML={{ __html: props.text }}
    ></div>
  );
}

export default TextBox;
