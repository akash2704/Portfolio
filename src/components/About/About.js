import React, { Suspense, lazy } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

// Lazy load Github component as it's heavy
const Github = lazy(() => import("./Github"));

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img 
              src={laptopImg} 
              alt="about" 
              className="img-fluid" 
              loading="lazy"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px', color: '#fff' }}>Loading GitHub Stats...</div>}>
          <Github />
        </Suspense>
      </Container>
    </Container>
  );
}

export default About;
