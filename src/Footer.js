import React from "react";
import "./styles.css";
import { ReactComponent as Github } from "./images/github.svg";
import { ReactComponent as Linkedin } from "./images/linkedin.svg";
import { ReactComponent as Twitter } from "./images/twitter.svg";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="icons">
        <a href="https://github.com/preetiroshan">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/preetiroshan/">
          <Linkedin />
        </a>

        <a href="https://www.twitter.com/preetiroshan/">
          <Twitter />
        </a>
      </div>
      <small>We are not storing your data</small>
    </footer>
  );
}
