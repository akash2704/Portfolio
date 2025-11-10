import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Akash Ajay Kallai</span>, 
            a passionate <span className="purple">Full-Stack Developer & AI/ML Engineer</span> 
            from <span className="purple">Vapi, Gujarat, India.</span>
            <br />
            <br />
            🚀 <strong>What I Do:</strong> I transform complex business challenges into elegant, 
            scalable solutions using cutting-edge technologies. My expertise spans from 
            <span className="purple"> serverless architectures to AI-powered applications</span>, 
            with a proven track record in healthcare, e-commerce, and SaaS platforms.
            <br />
            <br />
            🎓 <strong>Education:</strong> B.Tech CSE with specialization in AI & ML from 
            <span className="purple"> SRM Kattankulathur</span> - where I built the foundation 
            for my technical excellence.
            <br />
            <br />
            💡 <strong>Mission:</strong> To deliver production-ready solutions that drive 
            business growth and create meaningful user experiences.
            <br />
            <br />
            When I'm not architecting the next big solution, you'll find me:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies and frameworks
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to open-source projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Mentoring aspiring developers
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and discovering new cultures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code is poetry written in logic. Every line should tell a story of innovation and impact!"
          </p>
          <footer className="blockquote-footer">Akash Ajay Kallai</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
