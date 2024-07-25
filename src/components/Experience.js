import React from "react";

export const Experience = () => {
  return (
    <div id="experience">
      <div className="experience-content">
        <div className="header">
          <h1>*EXPERIENCE</h1>
        </div>
        <ul className="timeline">
          <li className="timeline-event">
            <label className="timeline-event-icon current"></label>
            <div className="timeline-event-copy">
              <p className="timeline-event-thumbnail">2024 - Present</p>
              <h3>Valstybinė Ligonių Kasa</h3>
              <h4>Software Developer</h4>
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
              <p className="timeline-event-thumbnail">2024 - Present</p>
              <h3>Valstybinė Ligonių Kasa</h3>
              <h4>Software Developer</h4>
              <p>
                I’m currently contributing to the development and maintenance of
                software solutions, while also assisting in debugging and
                troubleshooting issues to ensure smooth operation of internal
                applications.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
