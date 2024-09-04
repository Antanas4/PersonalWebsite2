import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div id="home" className={styles.home}>
      <div className={styles.leftText}>
        <h1>antanas</h1>
        <h1>buteliauskas</h1>
      </div>
      <div className={styles.dot}></div>
      <div className={styles.rightText}>
        <h1>software developer</h1>
      </div>

    </div>
  );
}

export default Home;
