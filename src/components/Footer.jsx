import React from "react";
import gmail from "../images/gmail.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import whatsapp from "../images/whatsapp.png";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer-socialmedia">
        <a className="socialmedia" href="https://github.com/Hyago-nsa">
          <img className="footer-icon" src={github} />
        </a>
        <a className="socialmedia" href="https://wa.me/5522992269294">
          <img className="footer-icon" src={whatsapp} />
        </a>
        <a
          className="socialmedia"
          href="https://www.linkedin.com/in/hyago-eurico-421654207/"
        >
          <img className="footer-icon" src={linkedin} />
        </a>

        <a className="socialmedia" href="mailto:hyago.eurico.nsa@gmail.com">
          <img className="footer-icon" src={gmail} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
