import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiNotion,
  SiJira,
  SiConfluence,
  SiFigma,
} from "react-icons/si";

function Toolstack() {
  const ToolIcon = ({ icon, name }) => (
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
      <ToolIcon icon={<SiVisualstudiocode />} name="VS Code" />
      <ToolIcon icon={<SiPostman />} name="Postman" />
      <ToolIcon icon={<SiSlack />} name="Slack" />
      <ToolIcon icon={<SiVercel />} name="Vercel" />
      <ToolIcon icon={<SiNotion />} name="Notion" />
      <ToolIcon icon={<SiJira />} name="Jira" />
      <ToolIcon icon={<SiConfluence />} name="Confluence" />
      <ToolIcon icon={<SiFigma />} name="Figma" />
    </Row>
  );
}

export default Toolstack;
