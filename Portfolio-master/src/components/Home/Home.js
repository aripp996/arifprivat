import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import React, { useEffect } from "react";

function Home() {

  useEffect(() => {
    const isAlertShown = localStorage.getItem("isAlertShown");
    const isSessionAlertShown = sessionStorage.getItem("isSessionAlertShown");
  
    if (!isAlertShown || !isSessionAlertShown) {
      alert("Website ini disarankan untuk dilihat dari laptop/PC!");
      localStorage.setItem("isAlertShown", "true");
      sessionStorage.setItem("isSessionAlertShown", "true");
    }
  }, []);

  return (
    <section>s
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Haloo!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Arif Rizki Kurniadi</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
