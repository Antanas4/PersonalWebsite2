import React from "react";

function Header(props) {
  return (
    <div className={props.className}>
      <h1>
        {/* <span className="header-star">*</span> */}
        <span className={props.headerText}>{props.headerTitle}</span>
      </h1>
    </div>
  );
}

export default Header;