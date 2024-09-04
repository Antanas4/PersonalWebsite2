import React from "react";
import Logo from "./Logo";
import styles from "./Home.module.css";

function Home() {
  return (
    <div id="home" className={styles.home}>
      <div className={styles.leftText}>
        <h1>antanas</h1>
        <h1>buteliauskas</h1>
      </div>
      <div className={styles.rightText}></div>
    </div>
  );
}

export default Home;
