import React from "react";
import styles from "./Home.module.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function Home() {
  return (
    <div id="home" className={styles.home}>
        <Row>
          <Col className={styles.nameCol}>
            <h1>antanas</h1>
            <h1>buteliauskas</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.dot}></div>
          </Col>
        </Row>
        <Row>
          <Col className={styles.positionCol}>
            <h1>software</h1>
            <h1>developer</h1>
          </Col>
        </Row>

    </div>
  );
}

export default Home;
