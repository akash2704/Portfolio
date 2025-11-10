import React, { Suspense, lazy } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";

// Lazy load Home2 component
const Home2 = lazy(() => import("./Home2"));

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Akash Ajay Kallai</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="Full-Stack Developer and AI Engineer"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
                loading="eager"
                fetchpriority="high"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Suspense fallback={
        <div style={{ 
          textAlign: 'center', 
          padding: '100px 0', 
          color: '#fff',
          backgroundColor: '#0d1117'
        }}>
          <div>Loading...</div>
        </div>
      }>
        <Home2 />
      </Suspense>
    </section>
  );
}

export default Home;
