import "./About.scss";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <Link to="/" className="link">
        Back
      </Link>
    </section>
  );
};

export default About;
