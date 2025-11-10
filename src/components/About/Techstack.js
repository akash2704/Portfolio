import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiPython, DiGit, DiRust, DiReact, DiNodejs } from "react-icons/di";
import { SiDjango, SiFlask, SiFastapi, SiTensorflow, SiPytorch } from "react-icons/si";
import {
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiDocker,
  SiKubernetes,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJupyter,
  SiApacheairflow,
  SiJenkins,
  SiGithubactions,
  SiTerraform,
  SiAnsible,
  SiPrometheus,
  SiGrafana,
  SiElasticsearch,
} from "react-icons/si";
import { FaAws, FaChartBar, FaChartLine, FaPython } from "react-icons/fa";

function Techstack() {
  const TechIcon = ({ icon, name }) => (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip>{name}</Tooltip>}
    >
      <Col xs={4} md={2} className="tech-icons">
        {icon}
      </Col>
    </OverlayTrigger>
  );

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming Languages */}
      <TechIcon icon={<CgCPlusPlus />} name="C++" />
      <TechIcon icon={<DiJavascript1 />} name="JavaScript" />
      <TechIcon icon={<DiRust />} name="Rust" />
      <TechIcon icon={<DiPython />} name="Python" />

      {/* Frameworks */}
      <TechIcon icon={<SiDjango />} name="Django" />
      <TechIcon icon={<SiFlask />} name="Flask" />
      <TechIcon icon={<SiFastapi />} name="FastAPI" />
      <TechIcon icon={<DiNodejs />} name="Node.js" />
      <TechIcon icon={<DiReact />} name="React" />

      {/* Databases */}
      <TechIcon icon={<SiPostgresql />} name="PostgreSQL" />
      <TechIcon icon={<SiMongodb />} name="MongoDB" />
      <TechIcon icon={<SiRedis />} name="Redis" />
      <TechIcon icon={<SiMysql />} name="MySQL" />

      {/* DevOps & Cloud */}
      <TechIcon icon={<DiGit />} name="Git" />
      <TechIcon icon={<SiDocker />} name="Docker" />
      <TechIcon icon={<SiKubernetes />} name="Kubernetes" />
      <TechIcon icon={<FaAws />} name="AWS" />
      <TechIcon icon={<SiJenkins />} name="Jenkins" />
      <TechIcon icon={<SiGithubactions />} name="GitHub Actions" />
      <TechIcon icon={<SiTerraform />} name="Terraform" />
      <TechIcon icon={<SiAnsible />} name="Ansible" />
      <TechIcon icon={<SiPrometheus />} name="Prometheus" />
      <TechIcon icon={<SiGrafana />} name="Grafana" />
      <TechIcon icon={<SiElasticsearch />} name="Elasticsearch" />

      {/* AI/ML & Data Analysis */}
      <TechIcon icon={<SiTensorflow />} name="TensorFlow" />
      <TechIcon icon={<SiPytorch />} name="PyTorch" />
      <TechIcon icon={<SiPandas />} name="Pandas" />
      <TechIcon icon={<SiNumpy />} name="NumPy" />
      <TechIcon icon={<SiScikitlearn />} name="Scikit-learn" />
      <TechIcon icon={<FaPython />} name="Matplotlib" />
      <TechIcon icon={<FaChartBar />} name="Seaborn" />
      <TechIcon icon={<SiJupyter />} name="Jupyter" />
      <TechIcon icon={<SiApacheairflow />} name="Apache Airflow" />
      <TechIcon icon={<FaChartBar />} name="Data Visualization" />
      <TechIcon icon={<FaChartLine />} name="Analytics" />
    </Row>
  );
}

export default Techstack;
