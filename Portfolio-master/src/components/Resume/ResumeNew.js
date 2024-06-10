import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { AiOutlineWhatsApp } from "react-icons/ai";
import nglLogo from "../../Assets/logongl.png";


function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
               <strong className="purple"> </strong> 
      </h1>
      <h2></h2>
         <h1>Contact Me</h1>
         <h2>sarannya dong</h2>
         <h3>maafkan konsep nya masih abal-abal</h3>

         <li className="social-icons">
              <a
                href="https://wa.me/yourphonenumber"
                style={{ color: "white", fontSize:50}}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineWhatsApp />
              </a>
            </li>
            <li className="social-icons">
            <a
              href="https://ngl.link/yourngllink"
              style={{ display: "inline-block", marginTop: 10 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={nglLogo} alt="NGL Logo" style={{ width: 50, height: 50 }} />
            </a>
          </li>
      </Container>
    </div>
  );
}

export default ResumeNew;