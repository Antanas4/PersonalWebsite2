import React from "react";
import Header from "./Header";
import TextBox from "./textBox";
import styles from "./Profile.module.css"; // Import CSS module
import Asterisk from "./AsteriskSymbol";

export const Profile = () => {
  return (
    <div id="profile"className={styles.profile}>
      <Header headerTitle="PROFILE" />
      <Asterisk className={styles.asterisk} />
      <div className={styles.profileTextSection}>
        <TextBox
          className={styles.textLeft}
          text="Passionate about coding and innovation,<br>
          I'm on a journey to transform ideas into <br>
          impactful digital solutions."
        />
        <TextBox
          className={styles.textRight}
          text="Ready to tackle challenges and <br>
          contribute to your next big project."
        />
      </div>
    </div>
  );
};
