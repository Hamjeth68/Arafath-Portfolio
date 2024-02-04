import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://hamjeth68.github.io/Json-server/api/db.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data.Projects);
      })
      .catch(error => console.log('Error fetching data: ', error));
  }, []);

  const selectProjectImage = (projectName) => {
    switch (projectName) {
      // Add your project names and corresponding image imports here
      case 'Leaf Project': return leaf;
      case 'Emotion Project': return emotion;
      case 'Code Editor': return editor;
      case 'Chatify': return chatify;
      case 'Suicide Prevention': return suicide;
      case 'Bits of Code': return bitsOfCode;
      default: return bitsOfCode;
    }
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={selectProjectImage(project.Name)}
                isBlog={false}
                title={project.Name}
                technologies={project.Technologies} // Ensure this matches the key in your JSON
                role={project.Role} // Ensure this matches the key in your JSON
                description={project.Description} // Assuming you want to include the description
                ghLink={project.ghLink} // Assuming there's a GitHub link in your JSON
                demoLink={project.demoLink} // Assuming there's a demo link in your JSON
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
