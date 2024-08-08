import React from "react";

function Header(props) {
  return (
    <div className={`header ${props.className}`}>
      <h1>
        <span className="header-star">*</span>
        <span className="header-text">{props.headerTitle}</span>
      </h1>
    </div>
  );
}

export default Header;