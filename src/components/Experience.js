import React from "react";

export const Experience = () => {
  return (
    <div id="experience">
      <div className="header">
        <h1>
          <span className="star">*</span>
          <span className="experience-text">EXPERIENCE</span>
        </h1>
      </div>
      <ul className="timeline">
        <li className="timeline-event">
          <label className="timeline-event-icon current"></label>
          <div className="timeline-event-copy">
            <p className="timeline-event-thumbnail">2024/04 - Present</p>
            <h3>Software Developer | VLK</h3>
            <p>
              I’m currently contributing to the development and maintenance of
              software solutions, while also assisting in debugging and
              troubleshooting issues to ensure smooth operation of internal
              applications.
            </p>
          </div>
        </li>
        <li className="timeline-event">
          <label className="timeline-event-icon"></label>
          <div className="timeline-event-copy">
            <p className="timeline-event-thumbnail">2023/03 - 2023/05</p>
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
