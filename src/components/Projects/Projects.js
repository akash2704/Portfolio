import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ResumeProcessor from "../../Assets/Projects/ResumeProcessor.png";
import Twitter from "../../Assets/Projects/TwitterClone.png";
import Blog from "../../Assets/Projects/blog.png";
import Stock from "../../Assets/Projects/stock.png";
import webAnalytics from "../../Assets/Projects/WebsiteTextAnalysis.png";
import NewsSummarizer from "../../Assets/Projects/NewsSummerizer.png";
import startup from "../../Assets/Projects/linkedin.png";
import linkedin from "../../Assets/Projects/startup.png";
import SAAS from "../../Assets/Projects/SAAS.png";
import aiHelper from "../../Assets/Projects/aiHelper.png";
import expenseTracker from "../../Assets/Projects/expenseTracker.png"
import NutriTracker from "../../Assets/Projects/nutriTracker.png"

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
              imgPath={NutriTracker}
              isBlog={false}
              title="Nutrition Tracker SaaS"
              description="Developed a scalable nutrition tracking SaaS platform using FastAPI and AWS Lambda with DynamoDB for efficient data handling. Implemented JWT authentication, meal logging, and personalized nutrition plans. Deployed with CI/CD pipelines via GitHub Actions, ensuring zero-downtime updates and robust API testing."
              ghLink="https://github.com/akash2704/NutriTracker"
              demoLink="https://nutri-tracker-rust.vercel.app/dashboard"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SAAS}
              isBlog={false}
              title="Ship Track"
              description="Built a serverless logistics management SaaS platform using FastAPI and AWS Lambda with DynamoDB buffer architecture for scalable data processing. Implemented JWT authentication, real-time shipment tracking, inventory management, and financial dashboards. Deployed with automated CI/CD pipeline using GitHub Actions, achieving zero-downtime deployments and comprehensive API testing coverage."
              ghLink="https://github.com/akash2704/ShipTrack"
              demoLink="https://lv6cxxamqd.execute-api.ap-south-1.amazonaws.com/docs"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiHelper}
              isBlog={false}
              title="AI Language Helper"
              description="Full-stack AI-powered language learning platform featuring real-time conversational practice with intelligent corrections and personalized feedback. Built with FastAPI backend and Next.js frontend, supporting multiple languages and proficiency levels. Containerized architecture with modern UI using React and Tailwind CSS for seamless, interactive learning experiences."
              ghLink="https://github.com/akash2704/AI-Language-Helper"
              demoLink="https://ai-language-helper.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expenseTracker}
              isBlog={false}
              title="Expense Tracker"
              description="Enterprise-grade expense management system with JWT authentication, budget tracking, and real-time balance monitoring across multiple accounts. FastAPI backend with PostgreSQL, Alembic migrations, and Docker containerization. Next.js frontend delivering intuitive user experience. Features comprehensive testing, production-ready deployment, and secure role-based access control."
              ghLink="https://github.com/akash2704/expense-tracker-frontend"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ResumeProcessor}
              isBlog={false}
              title="Resume Processor"
              description="Developed a backend application using Django to automate resume parsing and keyword extraction for recruitment purposes. Integrated Natural Language Processing (NLP) with libraries like spaCy to extract candidate skills, experience, and contact details. Implemented RESTful APIs to support seamless integration with HR systems."
              ghLink="https://github.com/akash2704/ResumeProcessor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Twitter}
              isBlog={false}
              title="Twitter Clone"
              description="Developed a feature-rich social media platform using Django, replicating key functionalities like user authentication, one-to-one and group chats, posts with likes, comments, and mentions using @. Integrated WebSocket with Django Channels for real-time messaging and updates, along with infinite scrolling and responsive design for mobile compatibility. Tech stack includes Django, Python, Bootstrap, AJAX, and WebSocket."
              ghLink="https://github.com/akash2704/twitter-clone-django"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blog}
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
              title="Stock Market Trading Simulator"
              description="Built a Python-based trading simulator to backtest a strategy using the Exponential Moving Average (EMA) and Relative Strength Index (RSI) on historical market data. The strategy includes dynamic buy/sell signals and risk management with stop-loss (5%) and profit-booking (10%) conditions. Simulated with an initial capital of $10,000, it provides insights into strategy performance without transaction fees."
              ghLink="https://github.com/akash2704/EMA-RSI-stratergy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webAnalytics}
              isBlog={false}
              title="Website Text Analysis"
              description="This project combines web scraping and text analysis to extract and evaluate web articles. It scrapes article titles and content from URLs provided in an Excel file using BeautifulSoup and requests. The extracted text is then analyzed for sentiment, readability, and word count, with results saved in an output Excel file."
              ghLink="https://github.com/akash2704/Web-Scraping-and-text-analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NewsSummarizer}
              isBlog={false}
              title="AI News Summarizer"
              description="Built a full-stack AI-powered news summarizer using Streamlit for the frontend and Flask for the backend. The application fetches and summarizes news articles using NLP models, making it easier to consume large amounts of information quickly. Deployed using Docker on Azure for the backend and Hugging Face Spaces for the frontend."
              ghLink="https://github.com/akash2704/News-Summary"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linkedin}
              isBlog={false}
              title="LinkedIn Company Data Scraper"
              description="Developed a Python-based web scraper to extract detailed company information from LinkedIn, including data from the About and People sections. Uses Selenium for dynamic web navigation and BeautifulSoup for HTML parsing. Handles pagination and 'Show More' buttons, storing data securely in CSV format."
              ghLink="https://github.com/akash2704/Linkdin-scrapper"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={startup}
              isBlog={false}
              title="Startup Weekly Funding Scraper"
              description="This Python script scrapes startup funding data for March 2025 from Startup Weekly using Selenium and BeautifulSoup. Extracts structured table data and saves it in a CSV file. Handles dynamic content loading, pagination, and stores data efficiently using Pandas."
              ghLink="https://github.com/akash2704/Funding-Data-scrapper"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;