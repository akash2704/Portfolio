import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Akash Ajay Kallai </span>
            from <span className="purple"> Vapi,Gujarat, India.</span>
            <br />
            I am an AI/ML Software Developer with strong expertise in full-stack
            development and data science. I specialize in end-to-end project delivery, particularly in the healthcare and e-commerce domains, where I have a proven track record of success.
            <br />
            I have completed B.Tech CSE with specialization in AI and ML SRM
            Kattankulthur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Driven to innovate and create solutions that leave a lasting impact!"{" "}
          </p>
          <footer className="blockquote-footer">Akash Ajay Kallai</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
