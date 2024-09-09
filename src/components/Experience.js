import React from "react";
import Header from "./Header";
import styles from "./Experience.module.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import JobDescription from "./JobDescription";

function Experience() {
  return (
    <div id="experience" className={styles.experience}>
      <Header
        className={styles.header}
        headerTitle="experience"
        headerText={styles.headerText}
      />
      <Container className={`${styles.experienceContainer}`}>
        <div>
          <JobDescription
            dateRange="2024/04 - Present"
            jobTitle="Software Developer"
            company="Valstybinė Ligonių Kasa"
            description="I’m currently contributing to the development and maintenance of software solutions, while also assisting in debugging and troubleshooting issues to ensure smooth operation of internal applications."
            detailsStyle={styles.details}
            descriptionStyle={styles.description}
            jobContainer={styles.jobVlk}
          />
          <JobDescription
            dateRange="2023/03 - 2023/05"
            jobTitle="Progress Developer Intern"
            company="Baltic Amadeus"
            description="While involved in the successful development of a web application, I
        gained valuable experience working with databases, collaborating with
        other team members and gained knowledge about the entire software
        development life cycle."
            detailsStyle={styles.details}
            descriptionStyle={styles.description}
            jobContainer={styles.jobBa}
          />
        </div>
      </Container>
    </div>
  );
}

export default Experience;
