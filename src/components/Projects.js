import React from "react";
import Header from "./Header";
import styles from "../css/Projects.module.css";
import ProjectDescription from "./ProjectDesc.js";

function Projects() {
  return (
    <div id="projects" className={styles.projects}>
      <Header
        className={styles.header}
        headerTitle="projects"
        headerText={styles.headerText}
      />
      <div className={styles.projectContainer}>
        <ProjectDescription
          projectContainer={styles.project}
          projectIdeaDescriptionStyle={styles.projectIdeaStyle}
          projectIdeaDescription="Text Text Text Text Text Text Text Text"
          projectPhotoContainer={styles.projectPhotoContainer}
          projectPhoto="Project Photo"
        />
      </div>
    </div>
  );
}

export default Projects;

