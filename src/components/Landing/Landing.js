import React from "react";
import "./Landing.scss";
const Landing = () => {
  return (
    <section className="landing">
      <h1 className="landing__title">Smiley calendar</h1>
      <p className="landing__text">How was your day?</p>
      <a href="/" className="landing__link">
        Start
      </a>
    </section>
  );
};
export default React.memo(Landing);
