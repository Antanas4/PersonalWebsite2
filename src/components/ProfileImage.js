import React from "react";
import profileImg from '../assets/photo/profilebw.png'

function ProfileImage(props) {
  return (
    <div className={props.className}>
      <img src={profileImg} alt="Profile image" />
    </div>
  );
}

export default ProfileImage;
