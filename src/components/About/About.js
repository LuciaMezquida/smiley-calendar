import "./About.scss";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <h2 className="about__title">What's the proposal of this app?</h2>
      <p className="about__text">
        Se trata de un calendario en el que cada día vas apuntado qué tal ha ido
        el día eligiendo un smiley. La idea es poder ver un periodo de tiempo en
        contexto para que los días malos no puedan a los buenos.
      </p>
      <Link to="/" className="link about__btn" title="Back to landing">
        Back
      </Link>
    </section>
  );
};

export default About;
