import React from "react";
import Header from "./Header";
import TextBox from "./textBox";
import styles from "./Profile.module.css"; // Import CSS module

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <Header headerTitle="PROFILE" />
      <div className={styles.profiletextsection}>
        <TextBox
          className={styles.textLeft}
          text="Passionate about coding and innovation,
          I'm on a journey to transform ideas into
          impactful digital solutions."
        />
        <TextBox
          className={styles.textRight}
          text="Ready to tackle challenges and <br></br>
          contribute to your next big project"
        />
      </div>
    </div>
  );
};
