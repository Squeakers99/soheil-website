import React from 'react'
import profilePicture from "../../../Assets/Portrait Picture.jpg"
import {Col, Container, Row} from "react-bootstrap"

function HomeExtended() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="avatar">
            <img
              src={profilePicture}
              alt="Profile Pic"
              className="img-fluid"
              style={{
                borderRadius: "50%",
                maxHeight: "45%",
              }}
            />
          </Col>
          <Col md={4} className="home-about-content">
            <h1 className="about-heading">
              JUST A BIT <b className="red">ABOUT ME</b>
            </h1>
            <p className="about-paragraph">
              Hello! My name is Soheil Rajabali. I am a grade 12 student currently enrolled in the STEM Program at <a style={{textDecoration: "none"}} className="blue" href="https://stau.ycdsb.ca/">St Augustine CHS</a>

              <br/>

              I am an aspiring Engineer. I have a passion for technology and innovation and I am always looking for ways to improve my skills and knowledge in the field.

              <br/>

              My fields of interest include Robotics, Automation, and Artificial Intelligence.

              <br/>

              I have experience in Java, C++, and C#. I am fluent in Python and have programmed AI models using it.
          </p>
        </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HomeExtended