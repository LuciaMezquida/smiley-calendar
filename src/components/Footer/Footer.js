import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/" className="link link-color" title="Back to landing">
        <small className="footer-text">&copy; Lucía Mezquida</small>
      </Link>
      <div className="footer__media">
        <a
          href="//github.com/LuciaMezquida"
          target="_blank"
          title="Github"
          className="footer__media--github"
          rel="noreferrer"
        >
          <i className="fab fa-github-alt"></i>
        </a>
        <a
          href="//www.linkedin.com/in/luciamezquidajuan/"
          target="_blank"
          title="Linkedin"
          className="footer__media--linkedin"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="//twitter.com/LuciCodes"
          target="_blank"
          title="Twitter"
          className="footer__media--twitter"
          rel="noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </footer>
  );
};
export default React.memo(Footer);
