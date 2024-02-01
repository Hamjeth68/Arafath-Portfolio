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
    // Fetch the project data from the URL
    fetch('https://hamjeth68.github.io/Json-server/api/db.json')
      .then(response => response.json())
      .then(data => {
        // Assuming the data structure matches what your component expects
        // Update the state with the fetched projects
        setProjects(data.Projects); // Adjust this if the actual path within the data differs
      })
      .catch(error => console.log('Error fetching data: ', error));
  }, []);

   // Function to select an image based on the project name or other criteria
   const selectProjectImage = (projectName) => {
    // Example logic to select an image
    switch (projectName) {
      // Match project name to an image, add more cases as needed
      default: return bitsOfCode; // Default image if no match is found
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
                description={project.Description}
                link={project.References && project.References[0]} // Using the first reference as the link, adjust as necessary
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
