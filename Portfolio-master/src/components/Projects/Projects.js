import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import myImg4 from "../../Assets/galeri/mc11.jpg";
import myImg18 from "../../Assets/galeri/ms12.jpg";
import myImg7 from "../../Assets/galeri/oretha.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Story <strong className="purple">Arif </strong>
        </h1>
        <p style={{ color: "white" }}>
          all about story arif at man 1 kuasing.
        </p>
        <p style={{ color: "white" }}>
          sorry masih belum selesai yaa.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myImg4}
              isBlog={false}
              title="Classico"
              description="wali kelasnya ummi."
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myImg18}
              isBlog={false}
              title="Scientific"
              description="best pokoknya keren"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myImg7}
              isBlog={false}
              title="oretha"
              description="kelas yang keren part2."
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>

        <h1 className="project-heading">
          Arif <strong className="purple">With </strong> friend
        </h1>
        <p style={{ color: "white" }}>
          gak tau mau bikin kayak gimana.
        </p>

      </Container>
    </Container>
  );
}

export default Projects;
