import React from "react";
import Header from "./Header";
import TextBox from "./textBox";
import ProfileImage from "./ProfileImage";
import styles from "./Profile.module.css";
import Asterisk from "./AsteriskSymbol";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Profile() {
  return (
    <div id="profile" className={styles.profile}>
      <Header
        className={styles.header}
        headerTitle="PROFILE"
        headerText={styles.headerText}
      />
      <div className={styles.profileContainer}>
        <Row>
          <Col>
            <TextBox
              className={styles.profileText}
              text="As a Junior Software Developer with experience at VLK and Baltic Amadeus, 
          I specialize in crafting and maintaining software solutions. My hands-on experience with 
          web applications and passion for problem-solving drive my continuous growth in the field."
            />
          </Col>
          <Col>
            <ProfileImage
              className={styles.profileImageContainer}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Profile;
