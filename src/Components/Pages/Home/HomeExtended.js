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
                maxHeight: "45%"
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
              <br/>

              I am an aspiring <b className="blue">Engineer</b>. I have a passion for <i><b className="blue">technology and innovation</b></i> and I am always looking for ways to improve my skills and knowledge in the field.

              <br/>
              <br/>

              My fields of interest include <i><b className="blue">Robotics, Automation, and Artificial Intelligence</b></i>.

              <br/>
              <br/>

              I have experience in <i><b className="blue">Java, C++, C#, HTML, CSS, JavaScript, and Dart</b></i>. I am fluent in <i><b className="blue">Python</b></i> and have programmed <i><b className="blue">Artificial Intelligence models</b></i> using it.
          </p>
        </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HomeExtended