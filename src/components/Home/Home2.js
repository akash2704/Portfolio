import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WHY <span className="purple">CHOOSE ME</span> FOR YOUR NEXT PROJECT?
            </h1>
            <p className="home-about-body">
              🚀 <strong>Full-Stack Developer</strong> with <strong>3+ years</strong> of experience building scalable, 
              production-ready applications that drive business growth.
              <br />
              <br />
              💼 <strong>Proven Track Record:</strong> Successfully delivered <strong>15+ enterprise projects</strong> 
              including SaaS platforms, AI-powered applications, and data analytics solutions.
              <br />
              <br />
              🛠️ <strong>Technical Expertise:</strong> Master of
              <i>
                <b className="purple"> Python, JavaScript, React, FastAPI, Django</b>
              </i>
              with hands-on experience in
              <i>
                <b className="purple"> AWS, Docker, Kubernetes, and CI/CD pipelines.</b>
              </i>
              <br />
              <br />
              🎯 <strong>Specialized in:</strong>
              <i>
                <b className="purple"> AI/ML Integration, Serverless Architecture, </b>
                and <b className="purple">High-Performance Backend Systems</b>
              </i>
              that handle millions of requests efficiently.
              <br />
              <br />
              ⚡ <strong>What You Get:</strong> Clean, maintainable code • Zero-downtime deployments • 
              Comprehensive testing • Real-time monitoring • Complete documentation
              <br />
              <br />
              🏆 <strong>Ready to deliver results?</strong> Let's build something amazing together with
              <i>
                <b className="purple"> cutting-edge technologies</b>
              </i>
              and industry best practices.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>LET'S BUILD SOMETHING GREAT TOGETHER</h1>
            <p>
              Ready to <span className="purple">collaborate</span> on your next big idea?
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/akash2704"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/akash-kallai-979a081ba/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/akashkallai_2704/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
