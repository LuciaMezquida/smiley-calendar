import React from "react";
import Header from "../Header/Header";
import "./Landing.scss";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <section className="landing">
      <Header />
      <h1 className="landing__title">Smiley calendar</h1>
      <p className="landing__text">How was your day?</p>
      <Link to="/year" className="link landing__link" title="Let's start!">
        Start
      </Link>
    </section>
  );
};
export default React.memo(Landing);
