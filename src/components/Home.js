import React from "react";
import Logo from "./Logo";
import styles from "./Home.module.css";

function Home (){
  return (
    <div className={styles.home}>
      <div className={styles.headerContent}>
        <h1>ANTANAS</h1>
        <h1>BUTELIAUSKAS</h1>
        <h2>
          {"{ "}
          <span>junior software developer</span>
          {" }"}
        </h2>
      </div>
    </div>
  );
};

export default Home;