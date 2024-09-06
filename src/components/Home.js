import React from "react";
import styles from "./Home.module.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function Home() {
  return (
    <div id="home" className={styles.home}>
      <Row>
        <Col className={styles.nameContainer}>
          <h1>antanas</h1>
          <h1>buteliauskas</h1>
        </Col>
      </Row>
      <div className={styles.dot}></div>
      <Row>
        <Col className={styles.positionContainer}>
          <h1>junior</h1>
          <h1>software developer</h1>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
