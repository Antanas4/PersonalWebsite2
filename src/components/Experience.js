import React from "react";

export const Experience = () => {
  return (
    <div id="experience">
      <div className="experience-content">
        <div className="header">
          <h1>*EXPERIENCE</h1>
        </div>
        <div className="job">
          <h2>Software Developer | Part-Time</h2>
          <h3>Valstybinė Ligonių Kasa</h3>
          <p>2024/04 - Present</p>
          <p>Vilnius, Lithuania</p>
          <ul>
            <li>
              Contributing to the development and maintenance of software
              solutions.
            </li>
            <li>
              Assisting in debugging and troubleshooting issues to ensure smooth
              operation of software applications.
            </li>
          </ul>
        </div>
        <div className="job">
          <h2>Progress Developer | Internship</h2>
          <h3>Baltic Amadeus</h3>
          <p>2023/03 – 2023/05</p>
          <p>Vilnius, Lithuania</p>
          <ul>
            <li>
              Contributed to the successful development of a web application,
              utilizing Progress OpenEdge for back-end and JavaScript, HTML, CSS
              for front-end.
            </li>
            <li>Gained experience in designing and managing databases.</li>
            <li>Utilized GitLab for version control and collaboration.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
