import React from 'react'
import Typewriter from './Typewriter'
import {Col, Container, Row} from "react-bootstrap"
import homeImg from "../../../Assets/Home Image.png"

function Home() {
  return (
    <section>
      <Container fluid className="home-main-section" id="home">
        <Container className="home-content">
          <Row>
            <Col className="home-header">
              <h1 className="heading">
                Hi There!
              </h1>
              <h1 className="heading-name">
                My Name is <b className="name">Soheil Rajabali</b>
              </h1>
              <h1 className="heading-typewriter">
                I am a...
              </h1>
              <div style={{padding: 50, textAlign: "left"}}>
                <Typewriter/>
              </div>
            </Col>
            <Col md={5} style={{paddingBottom: 20}}>
              <img
                src={homeImg}
                alt="home pic"
                className="img-fluid"
                style={{maxHeight: "450px"}}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  )
}

export default Home