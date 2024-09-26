import React from "react";
import styles from "../css/Home.module.css";
import { Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div id="home" className={styles.home}>
      <div className={styles.nameCol}>
        <h1>antanas buteliauskas</h1>
      </div>
      <div className={styles.dot}></div>
      <div className={styles.positionCol}>
        <h1>software developer</h1>
      </div>
    </div>
  );
}

export default Home;
