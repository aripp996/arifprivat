import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Haloo, Nama Aku <span className="purple">Arif Rizki Kurniadi </span>
            dengan panggilan <span className="purple"> Arif.</span>
            <br />
            usia aku 18 tahun. aku suka ayam bakar, suka musik, suka itu aja.
            intinya aku arif udah terimakasih.
            <br />
            deskripsikan diri aku dongg😔
            <br />
            <br />
            Hal yang aku suka selain mi goreng
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Scroll Tiktok
            </li>
            <li className="about-activity">
              <ImPointRight /> Bikin web kayak gini (boong)
            </li>
            <li className="about-activity">
              <ImPointRight /> Nulis apapun (boong part2)
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "About to die?"{" "}
          </p>
          <footer className="blockquote-footer">arif2k24</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
