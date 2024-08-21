import React from "react";
import Header from "./Header";
import styles from "./Experience.module.css";

function Experience (){
  return (
    <div id="experience" className={styles.experience}>
      <Header className={styles.header} headerTitle = "EXPERIENCE"/>
      <ul className={styles.timeline}>
        <li className={styles.timelineEvent}>
          <label className={styles.timelineEventIconCurrent}></label>
          <div className={styles.timelineEventCopy}>
            <p className={styles.timelineEventThumbnail}>2024/04 - Present</p>
            <h3>Software Developer | VLK</h3>
            <p>
              I’m currently contributing to the development and maintenance of
              software solutions, while also assisting in debugging and
              troubleshooting issues to ensure smooth operation of internal
              applications.
            </p>
          </div>
        </li>
        <li className={styles.timelineEvent}>
          <label className={styles.timelineEventIcon}></label>
          <div className={styles.timelineEventCopy}>
            <p className={styles.timelineEventThumbnail}>2023/03 - 2023/05</p>
            <h3>Progress Developer Intern | Baltic Amadeus</h3>
            <p>
              While involved in the successful development of a web application,
              I gained valuable experience working with databases, collaborating
              with other team members and gained knowledge about the entire
              software development life cycle.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Experience;