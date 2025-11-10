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
            a passionate <span className="purple">Fresh Graduate & Aspiring Full-Stack Developer</span> 
            from <span className="purple">Vapi, Gujarat, India.</span>
            <br />
            <br />
            🚀 <strong>What I Do:</strong> I'm a recent graduate eager to transform ideas into 
            functional applications using modern technologies. My journey includes 
            <span className="purple"> 1 year of freelance experience</span> building web applications, 
            APIs, and exploring AI/ML integration in real-world projects.
            <br />
            <br />
            🎓 <strong>Education:</strong> B.Tech CSE with specialization in AI & ML from 
            <span className="purple"> SRM Kattankulathur</span> - where I built a strong foundation 
            in computer science and developed my passion for technology.
            <br />
            <br />
            💡 <strong>Goal:</strong> To kickstart my career in software development and contribute 
            to innovative projects while continuously learning and growing in the tech industry.
            <br />
            <br />
            When I'm not coding or learning new technologies, you'll find me:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies and frameworks
            </li>
            <li className="about-activity">
              <ImPointRight /> Building personal projects and experimenting
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading tech blogs and staying updated
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and discovering new cultures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Every line of code is a step towards turning ideas into reality. Ready to learn, grow, and make an impact!"
          </p>
          <footer className="blockquote-footer">Akash Ajay Kallai</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
