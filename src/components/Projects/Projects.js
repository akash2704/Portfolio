import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Stock from "../../Assets/Projects/stock.jpg";
import web_text from "../../Assets/Projects/web_text.jpg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Resume Processor"
              description="Developed a backend application using Django to automate resume parsing and keyword extraction for recruitment purposes. Integrated Natural Language Processing (NLP) with libraries like spaCy to extract candidate skills, experience, and contact details. Implemented RESTful APIs to support seamless integration with HR systems."
              ghLink="https://github.com/akash2704/ResumeProcessor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Twitter clone"
              description="Developed a feature-rich social media platform using Django, replicating key functionalities like user authentication, one-to-one and group chats, posts with likes, comments, and mentions using @. Integrated WebSocket with Django Channels for real-time messaging and updates, along with infinite scrolling and responsive design for mobile compatibility. Tech stack includes Django, Python, Bootstrap, AJAX, and WebSocket."
              ghLink="https://github.com/akash2704/twitter-clone-django"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Blog Analytics"
              description="This project is a Node.js Express API for analyzing and searching blogs. It provides two main endpoints: /api/blog-stats for retrieving statistics about the blogs and /api/blog-search for searching blogs. The API fetches data from an external source and performs various analytics operations using Lodash. Additionally, it implements a caching mechanism to store and reuse analytics and search results for improved performance."
              ghLink="https://github.com/akash2704/Blog-Analytics-with-with-Express-and-Lodash"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Stock}
              isBlog={false}
              title="Stock Market Tradeing Simulator"
              description="Built a Python-based trading simulator to backtest a strategy using the Exponential Moving Average (EMA) and Relative Strength Index (RSI) on historical market data. The strategy includes dynamic buy/sell signals and risk management with stop-loss (5%) and profit-booking (10%) conditions. Simulated with an initial capital of $10,000, it provides insights into strategy performance without transaction fees."
              ghLink="https://github.com/akash2704/EMA-RSI-stratergy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web_text}
              isBlog={false}
              title="Website Text Analysis"
              description="This project combines web scraping and text analysis to extract and evaluate web articles. It scrapes article titles and content from URLs provided in an Excel file using BeautifulSoup and requests. The extracted text is then analyzed for sentiment, readability, and word count, with results saved in an output Excel file."
              ghLink="https://github.com/akash2704/Web-Scraping-and-text-analysis"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
