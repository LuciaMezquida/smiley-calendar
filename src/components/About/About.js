import "./About.scss";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <h2 className="about__title">What's the purpose of this app?</h2>
      <p className="about__text1">Practice! Practice! Practice!</p>
      <p className="about__text">
        It is a calendar in which each day you write down how the day has gone
        by choosing a smiley. Also, you can leave a comment about the day. The
        idea is to be able to see a period of time in context so that the bad
        days cannot against the good ones.
      </p>
      <p className="about__text">
        From the landing, you can access the main panel where you can see all
        the added smileys depending on how the day went. There is also the
        possibility to filter only the good days or the bad days. By clicking on
        one of the smileys, more detailed information will appear, such as the
        date and a comment about it.
      </p>
      <p className="about__text">
        From the add button (+) we access the form to add a new day. If the day
        has been happy, the option to add a comment is activated. It's okay if
        you forget to add one day. It can be added later since when it is added
        to the main panel it does so chronologically.
      </p>
      <p className="about__text">
        In the footer, you can find a list of links to my main social and
        contact networks and the possibility of returning to the landing by
        clicking on the copyright.
      </p>
      <Link to="/" className="link about__btn" title="Back to landing">
        Back
      </Link>
    </section>
  );
};

export default About;
