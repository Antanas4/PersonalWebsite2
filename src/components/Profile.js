import React from "react";

export const Profile = () => {
  return (
    <div id="profile">
      <div className="header">
        <h1>
          <span className="star">*</span>
          <span className="profile-text">PROFILE</span>
        </h1>
      </div>
      <div className="profile-text-section">
        <div className="text-left">
          Passionate about coding and innovation,<br></br>
          I'm on a journey to transform ideas into <br></br>
          impactful digital solutions.
        </div>
        <div className="text-right">
          Ready to tackle challenges and <br></br>
          contribute to your next big project.
        </div>
      </div>
    </div>
  );
};
