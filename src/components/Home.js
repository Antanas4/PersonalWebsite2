import React from "react";
// import backgroundImage from "./../assets/photo/photos/Untitled-1-01.jpg";
// import backgroundImage from "./../assets/photo/photos/Untitled-1-02.jpg";
import backgroundImage from "./../assets/photo/photos/Untitled-1-03.jpg";

export const SectionHome = () => {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  return (
    <div className="home" style={sectionStyle}>
      <div className="header-content">
        <h1>Hi, my name is</h1>
        <h2>Antanas Buteliauskas</h2>
        <h3>I'm a junior software developer</h3>
      </div>
    </div>
  );
};
