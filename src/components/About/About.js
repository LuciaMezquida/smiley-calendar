import "./About.scss";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <h2 className="about__title">What's the proposal of this app?</h2>
      <p className="about__text1">Practice! Practice! Practice!</p>
      <p className="about__text">
        It is a calendar in which each day you write down how the day has gone
        by choosing a smiley. Also, you can leave a comment about the day. The
        idea is to be able to see a period of time in context so that the bad
        days cannot against the good ones.
      </p>
      <Link to="/" className="link about__btn" title="Back to landing">
        Back
      </Link>
    </section>
  );
};

export default About;
