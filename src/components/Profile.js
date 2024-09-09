import React from "react";
import Header from "./Header";
import ProfileImage from "./ProfileImage";
import styles from "./Profile.module.css";

function Profile() {
  return (
    <div id="profile" className={styles.profile}>
      <Header
        className={styles.header}
        headerTitle="profile"
        headerText={styles.headerText}
      />
      <div className={styles.profileContainer}>
        <div className={styles.profileText}>
          As a Junior Software Developer with experience at VLK and Baltic
          Amadeus, I specialize in crafting and maintaining software solutions.
          My hands-on experience with web applications and passion for
          problem-solving drive my continuous growth in the field.
        </div>
        <div className={styles.profileImageContainer}>
          <ProfileImage />
        </div>
      </div>
    </div>
  );
}

export default Profile;
