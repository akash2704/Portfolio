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
              🚀 <strong>Fresh Graduate & Aspiring Developer</strong> with <strong>1 year</strong> of hands-on 
              freelance experience building real-world applications.
              <br />
              <br />
              💼 <strong>Project Portfolio:</strong> Successfully completed <strong>10+ personal and freelance projects</strong> 
              including SaaS platforms, AI-powered applications, and web development solutions.
              <br />
              <br />
              🛠️ <strong>Technical Skills:</strong> Proficient in
              <i>
                <b className="purple"> Python, JavaScript, React, FastAPI, Django</b>
              </i>
              with practical experience in
              <i>
                <b className="purple"> AWS, Docker, Git, and modern development workflows.</b>
              </i>
              <br />
              <br />
              🎯 <strong>Specialized in:</strong>
              <i>
                <b className="purple"> Full-Stack Development, AI/ML Integration, </b>
                and <b className="purple">RESTful API Development</b>
              </i>
              with a passion for clean, efficient code.
              <br />
              <br />
              ⚡ <strong>What I Bring:</strong> Fresh perspective • Quick learner • Modern tech stack • 
              Strong problem-solving skills • Eager to contribute and grow
              <br />
              <br />
              🏆 <strong>Ready to start my career?</strong> Let's build something amazing together with
              <i>
                <b className="purple"> enthusiasm, dedication,</b>
              </i>
              and cutting-edge technologies.
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
            <h1>LET'S CONNECT AND GROW TOGETHER</h1>
            <p>
              Ready to <span className="purple">start my journey</span> in tech?
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
