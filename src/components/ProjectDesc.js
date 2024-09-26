import React from "react";
import { Row, Col } from "react-bootstrap";

function ProjectDescription({projectContainer, projectIdeaDescriptionStyle, projectIdeaDescription, projectPhotoContainer, projectPhoto}) {
  return (
    <Row className={`${projectContainer}`}>
      <Col className={`${projectIdeaDescriptionStyle}`}>
        <p>
            {projectIdeaDescription}
        </p>
      </Col>
      <Col className={`${projectPhotoContainer}`}>
        <p>
        <img src={projectPhoto} alt="Project photo" />
        </p>
      </Col>
    </Row>
  );
}

export default ProjectDescription;

