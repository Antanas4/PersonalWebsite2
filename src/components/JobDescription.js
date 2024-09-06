import React from "react";
import { Row, Col } from "react-bootstrap";

function JobDescription({ dateRange, jobTitle, company, description, detailsStyle, descriptionStyle, jobContainer}) {
  return (
    <Row className={`${jobContainer}`}>
      <Col className={`${detailsStyle}`}>
        <span>{dateRange}</span>
        <br />
        <span>{jobTitle}</span>
        <br />
        <span>{company}</span>
      </Col>
      <Col className={`${descriptionStyle}`}>
        <p>
          {description}
        </p>
      </Col>
    </Row>
  );
}

export default JobDescription;
