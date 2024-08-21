import React from "react";
import Header from "./Header";
import TextBox from "./textBox";
import styles from "./Profile.module.css";
import Asterisk from "./AsteriskSymbol";

function Profile() {
  return (
    <div id="profile" className={styles.profile}>
      <Header headerTitle="PROFILE" />
      <Asterisk
        className={styles.asterisk}
        topHalfClassName={styles.topHalf}
        bottomHalfClassName={styles.bottomHalf}
      />
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
}

export default Profile;
